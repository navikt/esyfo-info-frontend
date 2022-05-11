import { Persona } from './persona'
import { sendtSykmelding } from './sykmeldinger'

export const underOppfolging: Persona = {
    sykmeldinger: [],
    narmesteledere: [],
    arbeidsrettetOppfolging: { underOppfolging: true },
}

export const defaultPersona: Persona = {
    sykmeldinger: [
        sendtSykmelding,
        {
            id: 'APEN',
            sykmeldingStatus: {
                statusEvent: 'BEKREFTET',
                sporsmalOgSvarListe: [
                    {
                        shortName: 'FORSIKRING',
                        svar: { svarType: 'JA_NEI', svar: 'JA' },
                    },
                    {
                        shortName: 'FRAVAER',
                        svar: { svarType: 'JA_NEI', svar: 'NEI' },
                    },
                    {
                        shortName: 'ARBEIDSSITUASJON',
                        svar: {
                            svarType: 'ARBEIDSSITUASJON',
                            svar: 'FRILANSER',
                        },
                    },
                ],
            },
            behandlingsutfall: { status: 'OK' },
            sykmeldingsperioder: [{ fom: '2021-03-15', tom: '2021-03-19' }],
            syketilfelleStartDato: '2021-03-01',
        },
        {
            id: 'AVVIST',
            sykmeldingStatus: { statusEvent: 'APEN' },
            behandlingsutfall: { status: 'INVALID' },
            sykmeldingsperioder: [{ fom: '2021-03-19', tom: '2021-03-19' }],
            syketilfelleStartDato: '2021-03-01',
        },
    ],
    narmesteledere: [
        {
            navn: 'Albus Dumbledore',
            orgnummer: '972674818',
            arbeidsgiverForskutterer: true,
            aktivFom: '2021-03-19',
        },
    ],
    arbeidsrettetOppfolging: { underOppfolging: false },
}
