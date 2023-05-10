import { ContentContainer, Link } from '@navikt/ds-react'
import React, { useEffect, useState } from 'react'

function NotFound(): JSX.Element | boolean {
    const [lokalRoot, setLokalRoot] = useState<boolean>(false)

    useEffect(() => {
        if (window.location.pathname === '/') {
            setLokalRoot(true)
        }
    }, [])

    if (lokalRoot) {
        return (
            <>
                <Link href={'/syk/info/snart-slutt-pa-sykepengene'}>
                    Snart slutt på sykepengene
                </Link>
                <br />
                <Link href={'/syk/info/aktivitetsplikt'}>Aktivitetsplikt</Link>
            </>
        )
    }
    return (
        <ContentContainer>
            <div>Fant ikke siden</div>
        </ContentContainer>
    )
}

export default NotFound
