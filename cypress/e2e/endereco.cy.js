/// <reference types="Cypress">

const perfil = require('../fixtures/perfil.json')

beforeEach(() => {
  cy.visit('minha-conta/')
  cy.login(perfil.email, perfil.senha)
});


describe('Funcionalidade: Endereço', () => {

  it('Cenário 1: Adicionando informações ao endereço', () => {
    cy.endereco('sergio', 'dornelas', 'ebac', 'Brasil', 'avenida norte', 'Recife', 'Pernambuco', 52051002, {delay:0})
    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
  })

})


