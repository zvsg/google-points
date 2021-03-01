context('Inputs', () => {
  beforeEach(() => {
    cy.server()
    cy.route(
      'https://maps.googleapis.com/maps/api/geocode/json?&address=Kyiv*',
      'fixture:kyivResponse.json'
    ).as('getKyivGeo')
    cy.route(
      'https://maps.googleapis.com/maps/api/geocode/json?&address=Moscow*',
      'fixture:moscowResponse.json'
    ).as('getMoscowGeo')
    cy.visit('http://localhost:3000')

    // wait for init google maps (better to use 'cypress-wait-until')
    cy.wait(1000)
  })

  it('should calculate distance by setting markers', function () {
    cy.get('#pointA').type('Kyiv')
    cy.get('#pointB').type('Moscow')

    cy.get('#submit-button').click()

    cy.wait('@getKyivGeo')
    cy.wait('@getMoscowGeo')

    cy.get('#pointA').should('have.value', 'Kyiv, Ukraine, 02000')
    cy.get('#pointB').should('have.value', 'Moscow, Russia')
  })

  it('should clean markers after submit', function () {
    cy.window().then((win) => {
      cy.addMarkers(win)
    })

    cy.get('#pointA').type('Kyiv')
    cy.get('#pointB').type('Moscow')

    cy.get('#submit-button').click()

    cy.window().its('googleMapsInstance.markers').should('deep.eq', [])
  })
})
