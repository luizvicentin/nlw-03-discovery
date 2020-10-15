//create map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: './img/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker 

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

// upload photos
function addPhotoField() {
    // take the photo container #images
    const container = document.querySelector('#images')
    // duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // make a clone of last image added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // if the field is empty, do not add a new container
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return 
    }
    // clean before add the image
    input.value = ""
    // add the clone to the image container
    container.appendChild(newFieldContainer) 
}

function deleteField (event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelector('new-upload')

    if (fieldsContainer.length < 2) {
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove()
}

// yes or not 
function toggleSelect(event) {
    // get out the class
    document.querySelectorAll('button-select button')
    .forEach( button => button.classList.remove('active'))
    // put the class on the clicked button
    const button = event.currentTarget
    button.classList.add('active')
    // actualize 
    const input = document.querySelector('[name="open_on_weekends"]')
    // verify if yes or not
    input.value = button.dataset.value
}