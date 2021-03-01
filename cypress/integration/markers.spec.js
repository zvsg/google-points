context('Markers', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    // wait for init google maps (better to use 'cypress-wait-until')
    cy.wait(1000)
  })

  it('should calculate distance by setting markers', function () {
    cy.window().then((win) => {
      cy.addMarkers(win)
    })

    cy.get('#geometric-distance').should('have.text', '755 km')
  })

  it('should clear inputs value after adding marker', function () {
    cy.get('#pointA').type('123')
    cy.get('#pointB').type('123')

    cy.window().then((win) => {
      cy.addMarkers(win)
    })

    cy.get('#pointA').should('not.have.value')
    cy.get('#pointB').should('not.have.value')
  })
})
