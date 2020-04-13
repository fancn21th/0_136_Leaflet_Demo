var data = [
  "F,f111,78.5,39.7,0.0,0,1586527448,a88999,I",
  "F,f111,79.3,39.2,0.0,0,1586527449,a88999,I",
  "F,f111,79.0,39.9,0.0,0,1586527450,a88999,I",
  "F,f111,77.5,41.0,0.0,0,1586527451,a88999,I",
  "F,f111,76.6,41.7,0.0,0,1586527452,a88999,I",
  "F,f111,75.6,42.9,0.0,0,1586527453,a88999,I",
  "F,f111,75.5,44.4,0.0,0,1586527454,a88999,I",
  "F,f111,76.0,46.5,0.0,0,1586527455,a88999,I",
  "F,f111,76.1,49.0,0.0,0,1586527456,a88999,I",
  "F,f111,75.8,53.2,0.0,0,1586527458,a88999,I",
  "F,f111,75.5,55.0,0.0,0,1586527459,a88999,I",
  "F,f111,75.5,56.9,0.0,0,1586527460,a88999,I",
  "F,f111,75.3,58.0,0.0,0,1586527461,a88999,I",
  "F,f111,74.8,59.2,0.0,0,1586527462,a88999,I",
  "F,f111,74.0,60.0,0.0,0,1586527463,a88999,I",
  "F,f111,72.4,60.9,0.0,0,1586527464,a88999,I",
  "F,f111,70.1,61.7,0.0,0,1586527465,a88999,I",
  "F,f111,68.9,62.7,0.0,0,1586527466,a88999,I",
  "F,f111,68.4,63.5,0.0,0,1586527467,a88999,I",
  "F,f111,68.0,64.5,0.0,0,1586527468,a88999,I",
  "F,f111,68.0,65.4,0.0,0,1586527469,a88999,I",
  "F,f111,68.0,67.5,0.0,0,1586527471,a88999,I",
  "F,f111,69.5,74.4,0.0,0,1586527475,a88999,I",
  "F,f111,69.8,75.8,0.0,0,1586527476,a88999,I",
  "F,f111,69.9,77.0,0.0,0,1586527477,a88999,I",
  "F,f111,70.0,78.1,0.0,0,1586527478,a88999,I",
];

var map = L.map("map", {
  crs: L.CRS.Simple,
});

/*
  浦东
  宽109.7米 宽的偏移是 18.9
  高147.3米 高的偏移是 6.4
*/

var offsetX = 18.9;
var offsetY = 6.4;

var yx = L.latLng;

var xy = function (x, y) {
  if (L.Util.isArray(x)) {
    // When doing xy([x, y]);
    return yx(x[1], x[0]);
  }
  return yx(y, x); // When doing xy(x, y);
};

var genXyOffset = (offsetX, offsetY) => (xyArr) => {
  var offsetXyArr = [
    parseFloat(xyArr[0]) + offsetX,
    parseFloat(xyArr[1]) + offsetY,
  ];
  return xy(offsetXyArr);
};

var xyOffset = genXyOffset(offsetX, offsetY);

var bounds = [
  [0, 0],
  [147.3, 109.7],
];

var image = L.imageOverlay("assets/image/floor-plan.svg", bounds).addTo(map);
map.fitBounds(bounds);

L.marker(xyOffset([0, 0])).addTo(map);

data.forEach((item) => {
  var arr = item.split(",");
  var x = arr[2];
  var y = arr[3];
  L.marker(xyOffset([x, y])).addTo(map);
});
