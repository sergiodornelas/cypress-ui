/// <reference types="Cypress">

const login = require('../fixtures/perfil.json')

beforeEach(() => {
  cy.visit('minha-conta/');
  cy.login(login.email, login.senha, {delay:0})
});

describe('Funcionalidade: Carrinho', () => {

  let quantidade = 4;

  it('Cenário 1: Adicionando 4 produtos no carrinho', () => {
    cy.carrinhoProdutos(0, 'XS', 'Blue', quantidade, quantidade, {delay:0})
  })
})