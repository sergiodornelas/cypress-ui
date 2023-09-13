
// Cypress.Commands.add('login', (email, password) => { ... })


//Comandos customizados para realização de login.
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

//Comando customizado para cadastro de endereço.
Cypress.Commands.add('endereco', (nome, sobrenome, instituicao, pais, endereco, cidade, estado, cep) => {
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
    cy.get(':nth-child(2) > .button').click()
})

//Comando customizado para adicionar um produto no carrinho.
Cypress.Commands.add('carrinhoProdutos', (produto,tamanho, cor, quantidade) => { 
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.product-block').eq(produto).click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', quantidade)
 })

 //Comando customizado para remover um produto do carrinho.
 Cypress.Commands.add('removerProduto', () => { 
    cy.get('[class="mini-cart-items"]').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
    cy.get(':nth-child(1) > .product-quantity > .quantity > .minus').click()
 })