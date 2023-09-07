/// <reference types ="Cypress"/>

const perfil = require('../fixtures/perfil.json')

beforeEach(() => {
  cy.visit('minha-conta/')
  cy.login(perfil.email, perfil.senha)
});


describe('Funcionalidade: Carrinho de compras', () => {
  it('Cenário: Removendo produtos do carrinho', () => {
    cy.get('[class="mini-cart-items"]').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
    cy.get(':nth-child(1) > .product-quantity > .quantity > .minus').click()
    cy.get(':nth-child(1) > .product-quantity > .quantity > .minus').should('be.visible')
  })
})