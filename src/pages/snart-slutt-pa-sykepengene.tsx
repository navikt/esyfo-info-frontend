import React from 'react'
import { beskyttetSideUtenProps } from '../auth/beskyttetSide'
import { SnartSluttPaaSykepengeneContent } from '../components/snart-slutt/SnartSluttPaaSykepengeneContent'

const SnartSluttPaSykepengene = () => {
    return <SnartSluttPaaSykepengeneContent />
}

export const getServerSideProps = beskyttetSideUtenProps

export default SnartSluttPaSykepengene
