import { Persona } from './data/persona'
import { defaultPersona, heltFrisk } from './data/personas'

export interface StringFunctionMap {
    [index: string]: () => Persona
}

export const personas: StringFunctionMap = {
    default: () => defaultPersona,
    'helt-frisk': () => heltFrisk,
}
