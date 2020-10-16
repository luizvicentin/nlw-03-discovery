//create map
const map = L.map("mapid").setView([-23.0282693, -46.9815833], 14);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/img/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [175, 2],
});

function addMarker({id, name, lat, lng}) {
  //create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    MinHeight: 240,
  }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/img/arrow-white.svg" ></a>`);

  // create marker
  L
  .marker([lat, lng], { icon })
  .addTo(map)
  .bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id, 
        name: span.dataset.name, 
        lat: span.dataset.lat, 
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})