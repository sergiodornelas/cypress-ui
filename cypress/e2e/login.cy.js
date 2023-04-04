///<reference types="Cypress">
const perfil = require('../fixtures/perfil.json')
const { faker } = require('@faker-js/faker')

beforeEach(() => {
  cy.visit('minha-conta/')
});

describe('Funcionalidade: Login', () => {
  let emailFake = faker.internet.email()
  let senhaFake = faker.internet.password()

  it('cenário 1: login com e-mail e senha válidos', () => {
    cy.login(perfil.email, perfil.senha)
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, juniorebac')
  })


  it('cenário 2: login com e-mail inválido e senha válida', () => {
    cy.login(emailFake, perfil.senha)
    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

  });


  it('cenário 3: login com e-mail válido e senha inválida', () => {
    cy.login(perfil.email, senhaFake)
    cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail juniorebac@gmail.com está incorreta. Perdeu a senha?')
  });


  it('cenário 4: login com e-mail e senha vazios', () => {
    cy.loginEsenhaVazios()
    cy.get('.woocommerce-error > li').should('contain', 'Erro: Nome de usuário é obrigatório.')
  });


  it('cenário 5: login com e-mail válido e senha vazia', () => {
    cy.loginCorretoEsenhaVazia(perfil.email)
    cy.get('.woocommerce-error > li').should('contain', 'Erro: o campo da senha está vazio.')
  });


  it('cenário 6: login com e-mail vazio e senha válida', () => {
    cy.loginVazioEsenhaCorreta(perfil.senha)
    cy.get('.woocommerce-error > li').should('contain', 'Erro: Nome de usuário é obrigatório.')
  });



})