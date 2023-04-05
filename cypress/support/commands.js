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

//COMANDO CUSTOMIZADO PARA REALIZAR LOGIN



//COMANDOS CUSTOMIZADOS PARA VALIDAR LOGIN
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

Cypress.Commands.add('endereco', (nome, sobrenome, instituicao, pais, endereco, cidade, estado, cep ) => {
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(2) > .title > .edit').click()
    cy.get('#shipping_first_name').clear().type(nome)
    cy.get('#shipping_last_name').clear().type(sobrenome)
    cy.get('#shipping_company').clear().type(instituicao)
    cy.get('#select2-shipping_country-container').click().type(pais).get('[aria-selected="true"]').click()
    cy.get('#shipping_address_1').clear().type(endereco)
    cy.get('#shipping_city').clear().type(cidade)
    cy.get('#select2-shipping_state-container').click().type(estado).get('[class="select2-results__options"]').click()
    cy.get('#shipping_postcode').clear().type(cep)
    cy.get('.button').click()
})

