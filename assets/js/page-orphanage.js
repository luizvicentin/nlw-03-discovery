const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-23.0282693,-46.9815833], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: '/assets/img/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [175, 2]
})

// create marker
L
.marker([-23.0282693,-46.9815833], { icon })
.addTo(map)

/* image galley */

function selectImage(event) {
    const button = event.currentTarget

    //remove class .active
    const buttons = document.querySelectorAll('.images button')
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove('.active')
    }

    //select the img clicked 
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img') 
    // actualize the img container
    imageContainer.src = image.src

    //add class .active again
    button.classList.add('.active')
}
