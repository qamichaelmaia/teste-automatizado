/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Michael','Maia','EBAC','Brasil','Av Rio Branco','450','Jacobina','Bahia','44700000','71999348625','alunomichael@ebac.com')
        //Confirmação
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });
});