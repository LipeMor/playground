describe('Iframe', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/iframe', 'IFrame')
    })

    it('Deve preencher o nome em uma pagina que tem Iframe', () => {

        cy.get('[data-cy="iframe-inputs"]')
            .its('0.contentDocument.body') // Acessa o corpo do iframe
            .should('not.be.empty') // Garante que o conteúdo foi carregado
            .then(cy.wrap)
            .find('#fullname')
            .type('Filipe Moreira dos Santos')

    })

    
    it('Deve preencher o nome em uma pagina que tem Iframe - COM BODY', () => {

        cy.get('[data-cy="iframe-inputs"]')
        .its('0.contentDocument.body') // Acessa o body do iframe
        .should('not.be.empty') // Verifica que está carregado
            .then(($body) => {
                const body = $body

                cy.wrap(body)                
                    .find('#fullname')
                    .type('Filipe')

            })

    });

    /*
    it.only('Deve preencher o nome em uma pagina que tem Iframe - NÃO FUNCIONOU', () => {

        cy.get('[data-cy="iframe-inputs"]')
        .its('0.contentDocument.body') // Acessa o body do iframe
        .should('not.be.empty') // Verifica que está carregado
            .then(($iframe) => {
                const body = $iframe

                cy.wrap(body)                
                    .find('#fullname')
                    .type('Filipe')

            })

    });
    */
    

    it('Deve preencher o email em uma pagina que tem Iframe', () => {

        cy.get('[data-cy="iframe-inputs"]')
            .its('0.contentDocument.body') // Acessa o corpo do iframe
            .should('not.be.empty') // Garante que o conteúdo foi carregado
            .then(cy.wrap)
            .find('#email')
            .type('correio.filipe@gmail.com')

    })

})