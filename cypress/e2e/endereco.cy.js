/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')
describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Michael', 'Maia', 'EBAC', 'Brasil', 'Av Rio Branco', '450', 'Jacobina', 'Bahia', '44700000', '71999348625', 'alunomichael@ebac.com')
        //Confirmação
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });


    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        )
        //Confirmação
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de envio com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoEntrega(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep
        )
        //Confirmação
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

});