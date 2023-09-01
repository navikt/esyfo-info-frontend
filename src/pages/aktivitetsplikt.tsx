import { GetServerSideProps } from 'next'
import React from 'react'
import { AktivitetskravContent } from '../components/aktivitetskrav/AktivitetskravContent'

const Aktivitetsplikt = () => {
    return <AktivitetskravContent />
}
export const getServerSideProps: GetServerSideProps = async () => {
    // Disable static rendring
    return {
        props: {},
    }
}
export default Aktivitetsplikt
