import React from 'react'
import { withWrap } from './hoc'
// import { Creator } from './pages'
import Creator from './pages/creator/Creator'

import '@assets/scss/App.scss'

const app = () => {
    return (
        <>
            <Creator />
        </>
    )
}

export default app
