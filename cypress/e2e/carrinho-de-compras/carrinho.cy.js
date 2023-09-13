/// <reference types="Cypress">
const carrinho = require('../../fixtures/carrinho.json')
const login = require('../../fixtures/perfil.json')

beforeEach(() => {
  cy.visit('minha-conta/');
  cy.login(login.email, login.senha)
});

describe('Funcionalidade: Carrinho', () => {

  let quantidade = 4;

  it('Cenário 1: Adicionando 4 produtos no carrinho', () => {
    cy.carrinhoProdutos(carrinho.produto, carrinho.tamanho, carrinho.cor, carrinho.quantidade)
    cy.get('.woocommerce-message').should('contain', carrinho.quantidade)
  })
})