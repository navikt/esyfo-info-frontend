import { Heading } from "@navikt/ds-react"
import React, { ReactNode } from "react"

interface Props {
    headerText: string
    children: ReactNode
}

export const Page = ({ headerText, children }: Props) => {
    return (
        <>
            <div className="flex flex-col bg-header-color p-8 items-center">
                <Heading size="xlarge" level="1">
                    {headerText}
                </Heading>
            </div>
            <div className="flex flex-col items-center p-8">
                <div className="flex flex-col max-w-4xl gap-8">{children}</div>
            </div>
        </>
    )
}
