import { hvordanVurdererText } from "../../src/components/aktivitetskrav/InfoTexts"

describe("Tester aktivitetskrav", () => {
    const medArbeidsgiverText = hvordanVurdererText(true)
    const utenArbeidsgiverText = hvordanVurdererText(false)

    it("Aktivitetskrav info side", () => {
        cy.visit("http://localhost:8080/syk/info/aktivitetsplikt")
        cy.contains(medArbeidsgiverText)

        cy.contains("Jeg har ikke arbeidsgiver").click()
        cy.contains(medArbeidsgiverText).should("not.exist")
        cy.contains(utenArbeidsgiverText)

        cy.contains("Jeg har arbeidsgiver").click()
        cy.contains(medArbeidsgiverText)
        cy.contains(utenArbeidsgiverText).should("not.exist")
    })
})

export {}
