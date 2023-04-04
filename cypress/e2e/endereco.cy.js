/// <reference types="Cypress">

const perfil = require('../fixtures/perfil.json')

beforeEach(() => {
  cy.visit('minha-conta/')
  cy.login(perfil.email, perfil.senha)
});


describe('Funcionalidade: Endereço', () => {
  it('Cenário: Adicionando informações ao endereço', () => {
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(2) > .title > .edit').click()
    cy.get('#shipping_first_name').clear().type('junior')
    cy.get('#shipping_last_name').clear().type('dornelas')
    cy.get('#shipping_company').clear().type('ebac')
    cy.get('#select2-shipping_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
    cy.get('#shipping_address_1').clear().type("Avenida norte")
    cy.get('#shipping_city').clear().type("Recife")
    cy.get('#select2-shipping_state-container').click().type('Pernambuco').get('[class="select2-results__options"]').click()
    cy.get('#shipping_postcode').clear().type(52051000)
    cy.get('.button').click()
    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

  })
})