// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('addMarkers', (window) => {
  window.google.maps.event.trigger(window.googleMapsInstance.map, 'click', {
    // Kyiv
    latLng: new window.google.maps.LatLng(
      50.424189168308274,
      30.574605587621743
    )
  })
  window.google.maps.event.trigger(window.googleMapsInstance.map, 'click', {
    // Moscow
    latLng: new window.google.maps.LatLng(55.734772504312936, 37.64980090012175)
  })
})
