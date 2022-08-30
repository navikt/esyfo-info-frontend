import { useQuery } from 'react-query'

import { ArbeidsrettetOppfolging } from '../types/arbeidsrettetOppfolging'
import Fetch from '../utils/fetch'

export default function UseArbeidsrettetOppfolging() {
    return useQuery<ArbeidsrettetOppfolging, Error>(
        'arbeidsrettetOppfolging',
        () =>
            Fetch.authenticatedGet(
                '/syk/info/api/veilarboppfolging/veilarboppfolging/api/v2/oppfolging',
                async (data) => {
                    return data as ArbeidsrettetOppfolging
                },
                { 'Nav-Consumer-Id': 'esyfo-info-frontend' }
            )
    )
}
