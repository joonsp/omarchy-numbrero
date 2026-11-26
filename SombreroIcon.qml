import QtQuick
import QtQuick.Shapes
import qs.Commons
import qs.Commons as Commons

// Monochrome sombrero + equals silhouette matching Omarchy's top-bar icon style.
Shape {
  id: root

  property real iconSize: Style.font.icon
  property color color: Commons.Color.foreground

  width: iconSize
  height: iconSize
  implicitWidth: 24
  implicitHeight: 24
  preferredRendererType: Shape.CurveRenderer
  fillMode: Shape.PreserveAspectFit
  horizontalAlignment: Shape.AlignHCenter
  verticalAlignment: Shape.AlignVCenter

  ShapePath {
    strokeWidth: 0
    strokeColor: "transparent"
    fillColor: root.color
    fillRule: ShapePath.OddEvenFill

    PathSvg {
      path: "M 8 11.5 C 8 5.8, 9.8 3.2, 12 3.2 C 14.2 3.2, 16 5.8, 16 11.5 Z " +
            "M 8.2 9.4 Q 12 10.6 15.8 9.4 L 15.9 10.7 Q 12 11.9 8.1 10.7 Z " +
            "M 1.5 11.2 C 3.8 14.5, 7.6 15.6, 12 15.6 C 16.4 15.6, 20.2 14.5, 22.5 11.2 C 22.8 10.6, 22.0 9.9, 21.3 10.4 C 18.8 12.1, 15.6 12.9, 12 12.9 C 8.4 12.9, 5.2 12.1, 2.7 10.4 C 2.0 9.9, 1.2 10.6, 1.5 11.2 Z " +
            "M 7.5 17.6 H 16.5 A 0.9 0.9 0 0 1 17.4 18.5 A 0.9 0.9 0 0 1 16.5 19.4 H 7.5 A 0.9 0.9 0 0 1 6.6 18.5 A 0.9 0.9 0 0 1 7.5 17.6 Z " +
            "M 7.5 20.6 H 16.5 A 0.9 0.9 0 0 1 17.4 21.5 A 0.9 0.9 0 0 1 16.5 22.4 H 7.5 A 0.9 0.9 0 0 1 6.6 21.5 A 0.9 0.9 0 0 1 7.5 20.6 Z"
    }
  }
}
