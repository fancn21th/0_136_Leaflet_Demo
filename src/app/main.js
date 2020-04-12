var map = L.map("mapid").setView([30.5928, 114.3055], 13);
var accessToken =
  "pk.eyJ1IjoiZmFuY24yMXRoIiwiYSI6ImNrOHJhZXh6cDBja3AzZW80enBmZmw5cG8ifQ.nXK16O-pBFoD12BcyS9uzQ";
// tile layer
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: accessToken,
  }
).addTo(map);
