import { useQuery } from "react-query"

import { SykepengerMaxDateResponse } from "../types/sykepengerMaxDateResponse"
import Fetch from "../utils/fetch"

export default function UseMaxDate() {
    return useQuery<SykepengerMaxDateResponse, Error>("SykepengerMaxDate", () =>
        Fetch.authenticatedGet(
            "/syk/info/api/esyfovarsel/fetchMaxDate",
            async (data) => {
                return data as SykepengerMaxDateResponse
            }
        )
    )
}
