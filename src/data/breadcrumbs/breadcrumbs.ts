import { dittNavUrl, dittSykefravaerUrl } from "../../utils/environment"

interface Breadcrumb {
    url: string
    title: string
}

const BaseCrumbs: Breadcrumb[] = [
    {
        url: dittNavUrl(),
        title: "Ditt NAV",
    },
    {
        url: dittSykefravaerUrl(),
        title: "Ditt sykefravær",
    },
]

const SnartSluttCrumbs: Breadcrumb[] = [
    ...BaseCrumbs,
    {
        url: "/snart-slutt-pa-sykepengene",
        title: "Snart slutt på sykepengene",
    },
]

const AktivitetspliktCrumbs: Breadcrumb[] = [
    ...BaseCrumbs,
    {
        url: "/aktivitetsplikt",
        title: "Påminnelse om aktivitet",
    },
]

export const getBreadcrumbPaths = (pathname: string) => {
    if (pathname.includes("snart-slutt-pa-sykepengene")) {
        return SnartSluttCrumbs
    } else if (pathname.includes("aktivitetsplikt")) {
        return AktivitetspliktCrumbs
    } else {
        return BaseCrumbs
    }
}
