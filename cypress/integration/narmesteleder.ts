
describe('Tester narmesteledere', () => {

    it('Har narmesteleder og kan avkrefte den', () => {
        cy.visit('http://localhost:8080/syk/sykefravaer?testperson=langtidssykmeldt')

        cy.get('.arbeidssituasjon-panel .situasjon__panel')
            .should('contain', 'Ansatt i Sykmeldingsperioder AS')
            .should('contain', 'Din nærmeste leder er Albus Dumbledore')
            .should('contain', 'Arbeidsgiveren din betaler lønn også etter de 16 første dagene.')
            .contains('Meld fra om endring')
            .click()

        cy.get('.modal')
            .should('contain', 'Endre nærmeste leder')
            .contains('Ja, jeg er sikker')
            .click()

        cy.get('.arbeidssituasjon-panel .situasjon__panel')
            .should('contain', 'Ansatt i Sykmeldingsperioder AS')
            .should('not.contain', 'Din nærmeste leder')
    })
})
