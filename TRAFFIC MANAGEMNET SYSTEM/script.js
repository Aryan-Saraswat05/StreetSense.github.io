mapboxgl.accessToken =
    "pk.eyJ1IjoiYXJ5YW4tc2FyYXN3YXQiLCJhIjoiY2xsdGJwamd3MTk1ZDNlcHBkbW12ZWE0eSJ9.e44OkTtJGyc4vyv5BO_q2Q"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([80.237617, 13.067439])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 15
    })

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, "top-left")
}