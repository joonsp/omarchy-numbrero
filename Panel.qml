import QtQuick
import Quickshell
import Quickshell.Io
import qs.Commons
import qs.Commons as Commons
import qs.Ui

// Bar button + quick-calc popup powered by `numbrero eval --json`.
Panel {
  id: root
  moduleName: "io.github.joonsp.numbrero"
  ipcTarget: "io.github.joonsp.numbrero"
  manageIpc: false

  readonly property color foreground: bar ? bar.foreground : Commons.Color.foreground
  readonly property color dim: Qt.darker(foreground, 1.5)
  readonly property color accent: Commons.Color.accent
  readonly property string fontFamily: bar ? bar.fontFamily : Style.font.family

  property string scratchText: "apples = 3\noranges = 5\nfruits = apples + oranges"
  property var lineResults: []
  property bool binaryMissing: false
  property string copiedBanner: ""
  property string pendingExpr: ""
  property bool evalQueued: false

  Commons.Translations {
    id: strings
    directory: Qt.resolvedUrl("i18n")
  }

  function runEvaluation() {
    var bounded = scratchText.length > 8192 ? scratchText.slice(0, 8192) : scratchText
    if (evalProc.running) {
      evalQueued = true
      pendingExpr = bounded
      return
    }
    pendingExpr = bounded
    evalProc.command = ["numbrero", "eval", "-e", bounded, "--json"]
    evalProc.running = true
  }

  function openDesktopApp() {
    root.close()
    Quickshell.execDetached(["numbrero"])
  }

  function copyValue(valueText) {
    if (!valueText || valueText.length === 0)
      return
    Quickshell.execDetached(["wl-copy", String(valueText)])
    copiedBanner = strings.t("copied")
    copiedResetTimer.restart()
  }

  function parseEvalOutput(raw, exitCode) {
    if (!raw || raw.length === 0 || raw.length > 65536) {
      if (exitCode !== 0 && (!raw || raw.trim().length === 0))
        binaryMissing = true
      return
    }
    binaryMissing = false
    try {
      var parsed = JSON.parse(raw)
      if (!parsed || typeof parsed !== "object")
        return

      var nextLines = []
      if (Array.isArray(parsed.lines)) {
        var limit = Math.min(parsed.lines.length, 100)
        for (var i = 0; i < limit; i++) {
          var row = parsed.lines[i]
          if (!row || typeof row !== "object")
            continue
          nextLines.push({
            line: Number(row.line || (i + 1)),
            result: typeof row.result === "string" ? row.result.slice(0, 120) : "",
            error: typeof row.error === "string" ? row.error.slice(0, 120) : ""
          })
        }
      }

      lineResults = nextLines
    } catch (e) {
      // Ignore malformed partial output
    }
  }

  implicitWidth: button.implicitWidth
  implicitHeight: button.implicitHeight

  onOpenedChanged: {
    if (opened) {
      panel.ensureContent()
      runEvaluation()
      Qt.callLater(function() {
        if (panel.loadedContent && panel.loadedContent.scratchInput)
          panel.loadedContent.scratchInput.forceActiveFocus()
      })
    }
  }

  Timer {
    id: debounceTimer
    interval: 120
    repeat: false
    onTriggered: root.runEvaluation()
  }

  Timer {
    id: copiedResetTimer
    interval: 1600
    repeat: false
    onTriggered: root.copiedBanner = ""
  }

  Process {
    id: evalProc
    property string capturedOut: ""
    stdout: StdioCollector {
      waitForEnd: true
      onStreamFinished: evalProc.capturedOut = text
    }
    onExited: function(code) {
      root.parseEvalOutput(evalProc.capturedOut, code)
      evalProc.capturedOut = ""
      if (root.evalQueued) {
        root.evalQueued = false
        root.runEvaluation()
      }
    }
  }

  ShellIpc {
    target: "io.github.joonsp.numbrero"

    function open(): void { root.open() }
    function close(): void { root.close() }
    function show(): void { root.open() }
    function hide(): void { root.close() }
    function toggle(): void { root.toggle() }
  }

  BarIconButton {
    id: button
    anchors.fill: parent
    bar: root.bar
    tooltipText: strings.t("tooltip")
    iconComponent: Component {
      SombreroIcon {
        color: root.barForeground
        iconSize: Style.bar.iconSize
      }
    }
    onPressed: function(b) {
      if (b === Qt.RightButton)
        root.openDesktopApp()
      else
        root.toggle()
    }
  }

  KeyboardPanel {
    id: panel
    anchorItem: button
    owner: root
    bar: root.bar
    open: root.opened
    focusTarget: panel.loadedContent ? panel.loadedContent.scratchInput : panel.loadedContent
    contentWidth: panel.fittedContentWidth(Style.space(380))
    contentHeight: panel.fittedContentHeight(panel.loadedContentHeight)

    content: PanelKeyCatcher {
      id: keyCatcher
      property alias scratchInput: scratchInput
      anchors.fill: parent
      implicitHeight: col.implicitHeight
      onCloseRequested: root.close()
      onTabRequested: function(direction) { root.switchPanel(direction) }

      Column {
        id: col
        anchors.left: parent.left
        anchors.right: parent.right
        anchors.top: parent.top
        spacing: Style.space(10)

        // Header
        Item {
          width: parent.width
          implicitHeight: Math.max(titleRow.implicitHeight, openBtn.implicitHeight)

          Row {
            id: titleRow
            anchors.left: parent.left
            anchors.verticalCenter: parent.verticalCenter
            spacing: Style.space(8)

            SombreroIcon {
              color: root.foreground
              iconSize: Style.space(18)
              anchors.verticalCenter: parent.verticalCenter
            }

            Text {
              textFormat: Text.PlainText
              text: strings.t("title")
              font.family: root.fontFamily
              font.pixelSize: Style.font.subtitle
              font.weight: Font.DemiBold
              color: root.foreground
              anchors.verticalCenter: parent.verticalCenter
            }

            Text {
              textFormat: Text.PlainText
              text: root.copiedBanner
              opacity: root.copiedBanner.length > 0 ? 1 : 0
              font.family: root.fontFamily
              font.pixelSize: Style.font.caption
              color: root.accent
              anchors.verticalCenter: parent.verticalCenter
              Behavior on opacity {
                NumberAnimation { duration: Style.duration(180); easing.type: Easing.OutCubic }
              }
            }
          }

          Button {
            id: openBtn
            anchors.right: parent.right
            anchors.verticalCenter: parent.verticalCenter
            text: strings.t("openApp")
            onClicked: root.openDesktopApp()
          }
        }

        // Missing binary notice
        Text {
          visible: root.binaryMissing
          width: parent.width
          wrapMode: Text.Wrap
          textFormat: Text.PlainText
          text: strings.t("missingBinary")
          font.family: root.fontFamily
          font.pixelSize: Style.font.caption
          color: bar ? bar.urgent : "#F87171"
        }

        // Scratchpad input
        BorderSurface {
          width: parent.width
          implicitHeight: Math.max(Style.space(110), Math.min(Style.space(220), scratchInput.contentHeight + Style.space(16)))
          color: Qt.rgba(0, 0, 0, 0.25)
          radius: Style.cornerRadius
          borderSpec: Border.controlSpec("normal", root.foreground, root.accent)

          Flickable {
            anchors.fill: parent
            anchors.margins: Style.space(8)
            clip: true
            contentWidth: width
            contentHeight: scratchInput.contentHeight
            boundsBehavior: Flickable.StopAtBounds

            TextEdit {
              id: scratchInput
              width: parent.width
              height: Math.max(parent.height, contentHeight)
              wrapMode: TextEdit.Wrap
              selectByMouse: true
              text: root.scratchText
              color: root.foreground
              font.family: "monospace"
              font.pixelSize: Style.font.body
              onTextChanged: {
                if (root.scratchText !== text) {
                  root.scratchText = text
                  debounceTimer.restart()
                }
              }
              Keys.onEscapePressed: root.close()
            }
          }
        }

        // Live results list
        Column {
          width: parent.width
          spacing: Style.space(4)
          visible: root.lineResults.length > 0

          Repeater {
            model: root.lineResults

            Item {
              required property var modelData
              readonly property bool hasVal: modelData.result.length > 0 || modelData.error.length > 0
              visible: hasVal
              width: parent.width
              implicitHeight: hasVal ? Style.space(22) : 0

              Text {
                anchors.left: parent.left
                anchors.verticalCenter: parent.verticalCenter
                textFormat: Text.PlainText
                text: String(modelData.line) + ":"
                font.family: "monospace"
                font.pixelSize: Style.font.caption
                color: root.dim
              }

              Text {
                anchors.right: parent.right
                anchors.leftMargin: Style.space(28)
                anchors.verticalCenter: parent.verticalCenter
                horizontalAlignment: Text.AlignRight
                elide: Text.ElideRight
                textFormat: Text.PlainText
                text: modelData.error.length > 0 ? modelData.error : modelData.result
                font.family: "monospace"
                font.pixelSize: Style.font.body
                color: modelData.error.length > 0 ? "#F87171" : root.accent
              }

              MouseArea {
                anchors.fill: parent
                enabled: modelData.result.length > 0
                cursorShape: enabled ? Qt.PointingHandCursor : Qt.ArrowCursor
                onClicked: root.copyValue(modelData.result)
              }
            }
          }
        }
      }
    }
  }
}
