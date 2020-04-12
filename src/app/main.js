var accessToken =
  "pk.eyJ1IjoiZmFuY24yMXRoIiwiYSI6ImNrOHJhZXh6cDBja3AzZW80enBmZmw5cG8ifQ.nXK16O-pBFoD12BcyS9uzQ";
var map = L.map("map").setView([37.8, -96], 4);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=" +
    accessToken,
  {
    id: "mapbox/light-v9",
    attribution: "",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);

L.geoJson(statesData).addTo(map);
