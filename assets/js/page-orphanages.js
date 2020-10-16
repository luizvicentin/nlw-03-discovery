//create map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: '/img/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [175, 2]
})

//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    MinHeight: 240
}).setContent('Orf. Esperança <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/img/arrow-white.svg" ></a>') 

// create marker
L
.marker([-27.222633, -49.6455874], { icon })
.addTo(map)
.bindPopup(popup)
