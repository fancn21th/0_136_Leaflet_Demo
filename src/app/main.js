var map = L.map("mapid").setView([51.505, -0.09], 13);
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

var LeafIcon = L.Icon.extend({
  options: {
    shadowUrl: "assets/image/leaf-shadow.png",
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  },
});

var greenIcon = new LeafIcon({ iconUrl: "assets/image/leaf-green.png" }),
  redIcon = new LeafIcon({ iconUrl: "assets/image/leaf-red.png" }),
  orangeIcon = new LeafIcon({ iconUrl: "assets/image/leaf-orange.png" });

L.marker([51.5, -0.09], { icon: greenIcon })
  .addTo(map)
  .bindPopup("I am a green leaf.");
L.marker([51.495, -0.083], { icon: redIcon })
  .addTo(map)
  .bindPopup("I am a red leaf.");
L.marker([51.49, -0.1], { icon: orangeIcon })
  .addTo(map)
  .bindPopup("I am an orange leaf.");
