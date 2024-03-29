import { AmplitudeClient } from "amplitude-js"

import { amplitudeEnabled } from "../../utils/environment"

interface AmplitudeInstance {
    logEvent: (eventName: string, data?: Record<string, string>) => void
}

let amplitudeInstance: AmplitudeInstance | undefined

const getLogEventFunction = (): AmplitudeInstance => {
    if (window && amplitudeEnabled()) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const amplitudeJs = require("amplitude-js")
        const amplitudeInstance: AmplitudeClient =
            amplitudeJs.default.getInstance()
        amplitudeInstance.init("default", "", {
            apiEndpoint: "amplitude.nav.no/collect-auto",
            saveEvents: false,
            includeUtm: true,
            includeReferrer: true,
            platform: window.location.toString(),
            batchEvents: false,
        })
        return amplitudeInstance
    } else {
        return {
            logEvent: (eventName: string, data?: Record<string, string>) => {
                // eslint-disable-next-line no-console
                console.log(
                    `Logger ${eventName} - Event properties: ${JSON.stringify(
                        data
                    )}!`
                )
            },
        }
    }
}

const combineEventData = (eventData?: Record<string, string>) => {
    return {
        team: "eSyfo",
        app: "esyfo-info-frontend",
        ...eventData,
    }
}

export const logEvent = (
    eventName: string,
    eventProperties: Record<string, string>
) => {
    if (window) {
        if (amplitudeInstance) {
            amplitudeInstance.logEvent(eventName, eventProperties)
        } else {
            amplitudeInstance = getLogEventFunction()
            amplitudeInstance.logEvent(
                eventName,
                combineEventData(eventProperties)
            )
        }
    }
}
