export default class GoogleMapsAdapter {
  constructor(markersClickCallback) {
    this.map = new google.maps.Map(document.getElementById('google-map'), {
      center: { lat: 49, lng: 31 },
      zoom: 4,
      draggableCursor: 'default'
    })

    this.markers = []
    this.markersClickCallback = markersClickCallback

    this.addMapListeners()
  }

  addMapListeners() {
    this.map.addListener('click', (e) => {
      if (this.markers.length > 1) {
        this.deleteMarkers()
      }

      this.addMarker(e.latLng)

      if (this.markers.length > 1) {
        this.markersClickCallback({
          markerA: {
            lat: this.markers[0].getPosition().lat(),
            lng: this.markers[0].getPosition().lng()
          },
          markerB: {
            lat: this.markers[1].getPosition().lat(),
            lng: this.markers[1].getPosition().lng()
          }
        })
      }
    })
  }

  deleteMarkers() {
    this.setMapOnAll(null)
    this.markers = []
  }

  addMarker(location) {
    this.markers.push(
      new google.maps.Marker({
        position: location,
        map: this.map
      })
    )
  }

  setMapOnAll(map) {
    this.markers.forEach((item) => item.setMap(map))
  }
}
