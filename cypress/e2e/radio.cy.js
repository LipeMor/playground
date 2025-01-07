describe('Radio Buttons', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/radio', 'Radio Buttons')
    })

    it('Deve marcar o framework usado o curso Cypress Skills', () => {
        cy.contains('label', 'Cypress')
            .click()
    })

    it('Deve passar por todas as opções ', () => {

        const langs = ['Cypress', 'Playwright', 'Selenium Webdriver', 'Robot Framework', 'Jest']

        langs.forEach(lang => {
            cy.contains('label', `${lang}`)
                .click()
        })

    })
})