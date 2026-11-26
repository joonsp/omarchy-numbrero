import QtQuick
import Quickshell
import Quickshell.Io
import qs.Commons
import qs.Commons as Commons
import qs.Ui
import "FallbackEngine.js" as FallbackEngine

// Bar button + quick-calc popup powered by `numbrero eval --json` with a
// pure-JS fallback evaluator when the native binary is not installed.
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
  property var varChips: []
  property string lastError: ""
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
    if (binaryMissing) {
      applyEvalObject(FallbackEngine.evaluate(bounded))
      return
    }
    if (evalProc.running) {
      evalQueued = true
      pendingExpr = bounded
      return
    }
    pendingExpr = bounded
    evalProc.sawExited = false
    evalProc.command = ["numbrero", "eval", "-e", bounded, "--json"]
    evalProc.running = true
  }

  function openDesktopApp() {
    root.close()
    Quickshell.execDetached(["numbrero"])
  }

  function openRepoPage() {
    root.close()
    Quickshell.execDetached(["xdg-open", "https://github.com/joonsp/numbrero"])
  }

  function copyValue(valueText) {
    if (!valueText || valueText.length === 0)
      return
    Quickshell.execDetached(["wl-copy", String(valueText)])
    copiedBanner = strings.t("copied")
    copiedResetTimer.restart()
  }

  function applyEvalObject(parsed) {
    if (!parsed || typeof parsed !== "object")
      return

    var nextVars = []
    if (parsed.variables && typeof parsed.variables === "object") {
      var keys = Object.keys(parsed.variables)
      var vLimit = Math.min(keys.length, 24)
      for (var k = 0; k < vLimit; k++) {
        var name = String(keys[k]).slice(0, 48)
        var val = String(parsed.variables[keys[k]]).slice(0, 64)
        nextVars.push({ name: name, value: val })
      }
    }

    var errText = ""
    var lastExprResult = ""
    if (Array.isArray(parsed.lines)) {
      var limit = Math.min(parsed.lines.length, 100)
      for (var i = 0; i < limit; i++) {
        var row = parsed.lines[i]
        if (!row || typeof row !== "object")
          continue
        if (errText === "" && typeof row.error === "string" && row.error.length > 0)
          errText = "Line " + String(Number(row.line || (i + 1))) + ": " + row.error.slice(0, 120)
        if (row.kind === "expression" && typeof row.result === "string" && row.result.length > 0)
          lastExprResult = row.result.slice(0, 64)
        else if (row.kind === "assignment")
          lastExprResult = ""
      }
    }

    if (lastExprResult.length > 0)
      nextVars.push({ name: "=", value: lastExprResult })

    varChips = nextVars
    lastError = errText
  }

  function parseEvalOutput(raw, exitCode) {
    if (!raw || raw.length === 0 || raw.length > 65536) {
      if (exitCode !== 0 && (!raw || raw.trim().length === 0)) {
        binaryMissing = true
        applyEvalObject(FallbackEngine.evaluate(pendingExpr))
      }
      return
    }
    binaryMissing = false
    try {
      applyEvalObject(JSON.parse(raw))
    } catch (e) {
      // Ignore malformed partial output
    }
  }

  implicitWidth: button.implicitWidth
  implicitHeight: button.implicitHeight

  onOpenedChanged: {
    if (opened) {
      binaryMissing = false
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
    property bool sawExited: false
    stdout: StdioCollector {
      waitForEnd: true
      onStreamFinished: evalProc.capturedOut = text
    }
    onExited: function(code) {
      evalProc.sawExited = true
      root.parseEvalOutput(evalProc.capturedOut, code)
      evalProc.capturedOut = ""
      if (root.evalQueued) {
        root.evalQueued = false
        root.runEvaluation()
      }
    }
    onRunningChanged: {
      if (!running && !sawExited) {
        root.binaryMissing = true
        root.applyEvalObject(FallbackEngine.evaluate(root.pendingExpr))
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
      if (b === Qt.RightButton) {
        if (root.binaryMissing) root.openRepoPage()
        else root.openDesktopApp()
      } else {
        root.toggle()
      }
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
            text: root.binaryMissing ? strings.t("getApp") : strings.t("openApp")
            onClicked: {
              if (root.binaryMissing) root.openRepoPage()
              else root.openDesktopApp()
            }
          }
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

        // Variable & result chips
        Flow {
          width: parent.width
          spacing: Style.space(6)
          visible: root.varChips.length > 0

          Repeater {
            model: root.varChips

            BorderSurface {
              required property var modelData
              implicitWidth: chipText.implicitWidth + Style.space(12)
              implicitHeight: Style.space(22)
              color: Qt.rgba(1, 1, 1, 0.05)
              radius: Style.cornerRadius
              borderSpec: Border.controlSpec("normal", root.foreground, root.accent)

              Text {
                id: chipText
                anchors.centerIn: parent
                textFormat: Text.PlainText
                text: modelData.name === "=" ? ("= " + modelData.value) : (modelData.name + " = " + modelData.value)
                font.family: "monospace"
                font.pixelSize: Style.font.caption
                color: modelData.name === "=" ? root.accent : root.foreground
              }

              MouseArea {
                anchors.fill: parent
                cursorShape: Qt.PointingHandCursor
                onClicked: root.copyValue(modelData.value)
              }
            }
          }
        }

        Text {
          visible: root.lastError.length > 0
          width: parent.width
          wrapMode: Text.Wrap
          textFormat: Text.PlainText
          text: root.lastError
          font.family: "monospace"
          font.pixelSize: Style.font.caption
          color: bar ? bar.urgent : "#F87171"
        }

        Text {
          visible: root.binaryMissing
          width: parent.width
          wrapMode: Text.Wrap
          textFormat: Text.PlainText
          text: strings.t("standaloneHint")
          font.family: root.fontFamily
          font.pixelSize: Style.font.caption
          color: root.dim
        }
      }
    }
  }
}
