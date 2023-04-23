class EnderecoPage {

    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, enredeco, numero, cidade, estado, cep, telefone, email) {
        //elementos + ações
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        //nome e sobrenome
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        //instituição
        cy.get('#billing_company').clear().type(empresa)
        //país (interação de elemento) 
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        //Endereço
        cy.get('#billing_address_1').clear().type(enredeco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        //Estado + cep
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        //Telefone
        cy.get('#billing_phone').clear().type(telefone)
        //Email
        cy.get('#billing_email').clear().type(email)
        //Botão
        cy.get('.button').click() 
    }

    editarEnderecoEntrega() {
        //elementos + ações
    }

}

export default new EnderecoPage()