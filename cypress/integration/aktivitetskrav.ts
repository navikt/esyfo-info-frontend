describe('Tester aktivitetskrav', () => {
    it('Aktivitetskrav info side', () => {
        cy.visit('http://localhost:8080/syk/info/aktivitetsplikt')

        cy.get('.artikkel')
            .should(
                'contain',
                'Du har snart vært sykmeldt i åtte uker. NAV skal vurdere om du oppfyller aktivitetsplikten og om du fortsatt har rett til sykepenger.'
            )
            .should(
                'contain',
                'Det er viktig at du har god dialog med arbeidsgiveren din om hva som skal til for at du kan være noe i arbeid. Hvis dere ikke har hatt dialog, ta kontakt og be om en samtale.'
            )
    })
})

export {}
