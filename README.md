# Leaflet-based Map

## 功能清单

- 产品需求

  - 自定义缩放
  - 视频跟随
  - 全屏查看
  - 历史轨迹
  - 实时位置
  - 放大缩小
  - 刻度尺

- 开发功能

  - 非地理地图
  - 坐标转换
  - 自定义图标
  - Vector Layers
  - tileLayer

- 其他功能

  > https://leafletjs.com/examples/choropleth/

  - 区域背景
  - highlight (bringToFront)
  - zoomToFeature
  - Custom Info Control
  - Custom Legend Control

## API

- locate

  - locationfound event

- zoom
  - setView(center, zoom), which also sets the map center
  - flyTo(center, zoom), like setView but with a smooth animation
  - zoomIn() / zoomIn(delta), zooms in delta zoom levels, 1 by default
  - zoomOut() / zoomOut(delta), zooms out delta zoom levels, 1 by default
  - setZoomAround(fixedPoint, zoom), sets the zoom level while keeping a point fixed (what - scrollwheel zooming does)
  - fitBounds(bounds), automatically calculates the zoom to fit a rectangular area on the map
