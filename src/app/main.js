var map = L.map("map", {
  crs: L.CRS.Simple,
});

var bounds = [
  [0, 0],
  [1000, 1000],
];
var image = L.imageOverlay("assets/image/floor-pan.svg", bounds).addTo(map);
map.fitBounds(bounds);
