/// <reference types="Cypress">
const endereco = require('../../fixtures/endereco.json')
const perfil = require('../../fixtures/perfil.json')

beforeEach(() => {
  cy.visit('minha-conta/')
  cy.login(perfil.email, perfil.senha)
});


describe('Funcionalidade: Endereço', () => {

  it('Cenário 1: Adicionando informações ao endereço', () => {
    cy.endereco(endereco.nome, endereco.sobrenome, endereco.instituicao, endereco.pais, endereco.endereco, endereco.cidade, endereco.estado, endereco.cep)
    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
  })

})


