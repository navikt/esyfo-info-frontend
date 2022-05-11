describe('Tester snart-slutt', () => {
    it('Har ikke arbeidsrettet oppfolging', () => {
        cy.visit('http://localhost:8080/syk/info/snart-slutt-pa-sykepengene')

        cy.contains(
            'Det begynner å nærme seg datoen du ikke lenger kan få sykepenger. Tror du at du snart er tilbake i jobb, eller vil du trenge noe mer fra NAV? Her kan du se hvilke muligheter du har.'
        )
        cy.get('.snartslutt').should(
            'contain',
            'Ønsker du mer veiledning fra NAV?'
        )
    })
    it('Har arbeidsrettet oppfolging', () => {
        cy.visit(
            'http://localhost:8080/syk/info/snart-slutt-pa-sykepengene?testperson=under-oppfolging'
        )

        cy.contains(
            'Det begynner å nærme seg datoen du ikke lenger kan få sykepenger. Tror du at du snart er tilbake i jobb, eller vil du trenge noe mer fra NAV? Her kan du se hvilke muligheter du har.'
        )
        cy.get('.snartslutt').should(
            'not.contain',
            'Ønsker du mer veiledning fra NAV?'
        )
    })
})

export {}
