// <reference types ="Cypress"/>

const perfil = require('../fixtures/perfil.json')

beforeEach(() => {
  cy.visit('minha-conta/')
  cy.login(perfil.email, perfil.senha)
});


describe('Funcionalidade: Carrinho de compras', () => {
  it('Cenário: Removendo produtos do carrinho', () => {
   cy.removerProduto()
   cy.get('.woocommerce-message').should('contain', 'removido. Desfazer?')
  })
})