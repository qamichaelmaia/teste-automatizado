/// <reference types="cypress" />
const { faker } = require('@faker-js/faker'); /// Gerador de dados Faker

describe('Funcionalidade Pré cadastro', () => {


    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker, sobrenomeFaker) ///Variação de email compatível com o nome e sobrenome do usuário

        cy.get('#reg_email').type(emailFaker) /// Gerando Faker/email
        cy.get('#reg_password').type(faker.internet.password()) /// Gerando Faker/senha
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker) /// Gerando Faker/firstName
        cy.get('#account_last_name').type(sobrenomeFaker) /// Gerando Faker/lastName
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.') /// Confirmação de mensagem


    });
});