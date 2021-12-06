import { Brev, BrevType } from '../../types/brev'
import { tekst } from '../../utils/tekster'
import { Oppgave } from './oppgaveTyper'


export const skapBrevOppgaver = (brev: Brev[] | undefined, lenke: string): Oppgave[] => {
    const oppgaver: Oppgave[] = []
    if (!brev) return []
    const nyesteUlestBrev = !brev[0]?.lestDato ? brev[0] : null
    switch (nyesteUlestBrev?.brevType) {
        case BrevType.INNKALT: {
            oppgaver.push({
                tekst: tekst('oppgaver.brev.innkalling'),
                oppgavetype: 'advarsel',
                lenke: `${lenke}/moteinnkallelse`
            })
            return oppgaver
        }
        case BrevType.ENDRING: {
            oppgaver.push({
                tekst: tekst('oppgaver.brev.endring'),
                oppgavetype: 'advarsel',
                lenke: `${lenke}/moteinnkallelse`
            })
            return oppgaver
        }
        case BrevType.REFERAT: {
            oppgaver.push({
                tekst: tekst('oppgaver.brev.referat'),
                oppgavetype: 'info',
                lenke: `${lenke}/referat`
            })
            return oppgaver
        }
        case BrevType.AVLYST: {
            oppgaver.push({
                tekst: tekst('oppgaver.brev.avlysning'),
                oppgavetype: 'info',
                lenke: `${lenke}/moteinnkallelse`
            })
            return oppgaver
        }
        default: {
            return oppgaver
        }
    }
}

