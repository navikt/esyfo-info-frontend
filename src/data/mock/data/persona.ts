import { ArbeidsrettetOppfolging } from '../../../types/arbeidsrettetOppfolging'
import { NarmesteLeder } from '../../../types/narmesteLeder'
import { SykepengerMaxDateResponse } from '../../../types/sykepengerMaxDateResponse'
import { Sykmelding } from '../../../types/sykmelding'

export interface Persona {
    sykmeldinger: Sykmelding[]
    narmesteledere: NarmesteLeder[]
    arbeidsrettetOppfolging: ArbeidsrettetOppfolging
    sykepengerMaxDate: SykepengerMaxDateResponse
}
