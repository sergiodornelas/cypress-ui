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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (email, senha) => { 
    cy.get('#username').type(email)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()

 })

 Cypress.Commands.add('loginEsenhaVazios', () => { 
    cy.get('.woocommerce-form > .button').click()
 })

 Cypress.Commands.add('loginCorretoEsenhaVazia', (email) => { 
    cy.get('#username').type(email)
    cy.get('.woocommerce-form > .button').click()
 })

 Cypress.Commands.add('loginVazioEsenhaCorreta', (senha) => { 
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
 })