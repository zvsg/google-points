context('Markers', () => {
  it('should calculate distance by setting markers', function () {
    cy.visit('http://localhost:3000')

    cy.wait(2000)

    cy.window().then(win => {
      win.google.maps.event.trigger(win.googleMapsInstance.map, 'click', {
        latLng: new win.google.maps.LatLng(59.39334125547376, 43.34863281250001)
      });
      win.google.maps.event.trigger(win.googleMapsInstance.map, 'click', {
        latLng: new win.google.maps.LatLng(58.94289121437855, 32.97753906250001)
      });
    })

    // cy.get('#google-map').click(50, 100, { force: true })
  })
})
