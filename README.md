# Leaflet-based Map

## 功能清单

- 基本功能

  - 非地理地图
  - 坐标转换
  - 自定义图标
  - 刻度
  - 放大缩小

- 交互功能

  - 区域背景
  - 自定义背景色
  - highlight (bringToFront)
  - 点击 zoom
  - 自定义 custom info
  - 自定义 legend

## API

- zoom
  - setView(center, zoom), which also sets the map center
  - flyTo(center, zoom), like setView but with a smooth animation
  - zoomIn() / zoomIn(delta), zooms in delta zoom levels, 1 by default
  - zoomOut() / zoomOut(delta), zooms out delta zoom levels, 1 by default
  - setZoomAround(fixedPoint, zoom), sets the zoom level while keeping a point fixed (what - scrollwheel zooming does)
  - fitBounds(bounds), automatically calculates the zoom to fit a rectangular area on the map
