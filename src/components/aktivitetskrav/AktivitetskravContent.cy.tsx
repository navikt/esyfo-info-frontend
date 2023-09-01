import React from 'react'
import { AktivitetskravContent } from './AktivitetskravContent'

describe('<AktivitetskravContent />', () => {
    it('Tester aktivitetskrav', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<AktivitetskravContent />)

        cy.contains(
            'Du har snart vært sykmeldt i åtte uker. NAV skal vurdere om du oppfyller aktivitetsplikten og om du fortsatt har rett til sykepenger.'
        )
        cy.contains(
            'Det er viktig at du har god dialog med arbeidsgiveren din om hva som skal til for at du kan være noe i arbeid. Hvis dere ikke har hatt dialog, ta kontakt og be om en samtale.'
        )
        cy.contains(
            'Er du selvstendig næringsdrivende eller frilanser, er det kanskje noen av arbeidsoppgavene dine du fortsatt kan utføre? Er du arbeidsledig og sykmeldt, er det viktig å planlegge hvilke aktiviteter eller tiltak du har behov for slik at du kan komme i jobb igjen.'
        ).should('not.exist')

        cy.contains('Jeg har ikke arbeidsgiver').click()

        cy.contains(
            'Det er viktig at du har god dialog med arbeidsgiveren din om hva som skal til for at du kan være noe i arbeid. Hvis dere ikke har hatt dialog, ta kontakt og be om en samtale.'
        ).should('not.exist')

        cy.contains(
            'Er du selvstendig næringsdrivende eller frilanser, er det kanskje noen av arbeidsoppgavene dine du fortsatt kan utføre? Er du arbeidsledig og sykmeldt, er det viktig å planlegge hvilke aktiviteter eller tiltak du har behov for slik at du kan komme i jobb igjen.'
        )

        cy.contains('Jeg har arbeidsgiver').click()

        cy.contains(
            'Du har snart vært sykmeldt i åtte uker. NAV skal vurdere om du oppfyller aktivitetsplikten og om du fortsatt har rett til sykepenger.'
        )
        cy.contains(
            'Det er viktig at du har god dialog med arbeidsgiveren din om hva som skal til for at du kan være noe i arbeid. Hvis dere ikke har hatt dialog, ta kontakt og be om en samtale.'
        )
        cy.contains(
            'Er du selvstendig næringsdrivende eller frilanser, er det kanskje noen av arbeidsoppgavene dine du fortsatt kan utføre? Er du arbeidsledig og sykmeldt, er det viktig å planlegge hvilke aktiviteter eller tiltak du har behov for slik at du kan komme i jobb igjen.'
        ).should('not.exist')
    })
})
