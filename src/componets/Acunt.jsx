import React from 'react'
import Home from './home'
import Profil from './Profil'
import SarcheTwiter from './SarcheTwiter'

function Acunt() {
    return (
        <>
            <div className='flex'>
                <Home />
                <Profil />
                <SarcheTwiter />
            </div>
        </>
    )
}

export default Acunt