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

// hoc for generating function that do the topleft bottomleft cord conversion
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

// markers data
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

var video = [
  '<video width="300" controls>',
  '<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">',
  '<source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">',
  "Your browser does not support HTML5 video.",
  "</video>",
].join("");

// 标记

var customIcon = L.icon({
  iconUrl: "assets/image/liftover.png",
  // shadowUrl: "leaf-shadow.png",
  iconSize: [38, 56], // size of the icon
  // shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 60], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62], // the same for the shadow
});

var marker = L.marker(xyOffset([0, 0]), {
  icon: customIcon,
})
  .addTo(map)
  // .bindPopup(video)
  .bindTooltip("我是一个设备", {
    permanent: true,
    direction: "bottom",
  });
var index = 0;

// 实时
// setInterval(() => {
//   var arr = data[index].split(",");
//   var x = arr[2];
//   var y = arr[3];
//   marker.setLatLng(xyOffset([x, y]));
//   if (index < data.length - 1) index++;
//   else index = 0;
// }, 1000);

// 轨迹
// polyline
var latlngs = data.map((item) => {
  var arr = item.split(",");
  var x = arr[2];
  var y = arr[3];
  return xyOffset([x, y]);
});
var polyline = L.polyline(latlngs, { color: "red" }).addTo(map);

// markers
// data.forEach((item) => {
//   var arr = item.split(",");
//   var x = arr[2];
//   var y = arr[3];
//   L.marker(xyOffset([x, y])).addTo(map);
// });

// 调试层
// L.GridLayer.DebugCoords = L.GridLayer.extend({
//   createTile: function (coords, done) {
//     var tile = document.createElement("div");
//     tile.innerHTML = [coords.x, coords.y, coords.z].join(", ");
//     tile.style.outline = "1px dotted blue";

//     setTimeout(function () {
//       done(null, tile); // Syntax is 'done(error, tile)'
//     }, 500 + Math.random() * 1500);

//     return tile;
//   },
// });

// L.gridLayer.debugCoords = function (opts) {
//   return new L.GridLayer.DebugCoords(opts);
// };

// map.addLayer(L.gridLayer.debugCoords());

// 性能测试
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }

/*
  浦东
  宽109.7米 宽的偏移是 18.9  => 1097 - 189
  高147.3米 高的偏移是 6.4   => 1473 - 64
*/

// var bigArray = new Array(10000).fill(0);
// var maxX = 1097 - 189;
// var maxY = 1473 - 64;

// bigArray = bigArray.map(() => {
//   var x = getRandomInt(1, maxX) / 10;
//   var y = getRandomInt(1, maxY) / 10;
//   return [x, y];
// });

// console.log(bigArray);

// bigArray.forEach((item) => {
//   var x = item[0];
//   var y = item[1];
//   L.circle(xyOffset([x, y]), { radius: 0.1 }).addTo(map);
// });

// 刻度
L.control.scale().addTo(map);

// zoom level
// var ZoomViewer = L.Control.extend({
//   onAdd: function () {
//     var gauge = L.DomUtil.create("div");
//     gauge.className = "dc-map-zoom-level";
//     // gauge.style.width = "200px";
//     // gauge.style.background = "rgba(255,255,255,0.5)";
//     // gauge.style.textAlign = "left";
//     map.on("zoomstart zoom zoomend", function (ev) {
//       gauge.innerHTML = "Zoom Level: " + map.getZoom();
//     });
//     return gauge;
//   },
// });

// new ZoomViewer().addTo(map);

// panel

var info = L.control({ position: "bottomright" });

info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
  this.update();
  return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function () {
  var content = ["<button>回到中心</button>"];
  this._div.innerHTML = content.join("");
};

info.addTo(map);
