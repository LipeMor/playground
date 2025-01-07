describe('Input Fields', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
    })

    it('deve preencher o campo texto', () => {
        cy.goTo('/input-fields', 'Input Fields')

        cy.get('input[placeholder="John Doe"]')
            .type('Filipe Moreira dos Santos')

        cy.get('input[name="email"]')
            .type('filipe.santos@gmail.com')

        cy.get('input[name="number"]')
            .type('2024')

        cy.get('input[name="date"]')
            .type('2024-12-01')
    })

})