describe('Date Picker', () => {
    beforeEach(() => {
        cy.goHome()

        cy.doLogin()

        cy.goTo('/date-picker', 'Date Picker')
    })

    it('Deve adicionar minha data de aniversário', () => {
        cy.get('input[placeholder="Escolha uma data"][readonly]')
            .click()

        cy.get('select[aria-label="Month"]')
            .select('Outubro')

        cy.get('input[aria-label="Year"]')
            .type('1983')

        cy.get('span[aria-label="Outubro 7, 1983"]')
            .type('1983')
    })


})