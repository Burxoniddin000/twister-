import React from 'react'
import '../sarche.scss'
import vecto12 from '../img/Vector12.png'
import Trends from './Trends'
import Follow from './Follow'

function Sarche() {
    return (
        <>
            <div className='mr-2'>
                <div className='sarche__input'>
                    <img src={vecto12} alt="vecto12" />
                    <input className='sarche__tiwiter' type="text" placeholder='Search Twitter' />
                </div>
                <Trends />
                <Follow />

                <p className='w-[373px] ml-[28px] mt-7 saerche__taxt'>
                    <div className='flex gap-4'>
                        <span className='saerche__taxt'>Terms of Service</span>
                        <span className='saerche__taxt'> Privacy Policy </span>
                        <span className='saerche__taxt'> Cookie Policy </span>
                    </div>
                    <div className='flex gap-4 mt-[10px]'>
                        <span className='saerche__taxt'>Imprint</span>
                        <span className='saerche__taxt'> Ads Info   More ···</span>
                        <span className='saerche__taxt'>  © 2021 Twitter, Inc.</span>
                    </div>
                </p>
            </div>
        </>
    )
}

export default Sarche