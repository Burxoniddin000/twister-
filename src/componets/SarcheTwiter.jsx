import React from 'react'
import '../scss/sarche.scss'
import Rectangle from '../img/Rectangle.png'
import Rectangle2 from '../img/Rectangle2.png'
import Rectangle3 from '../img/Rectangle3.png'
import Rectangle4 from '../img/Rectangle4.png'
import Rectangle5 from '../img/Rectangle5.png'
import Rectangle6 from '../img/Rectangle6.png'
import vecto12 from '../img/Vector12.png'
import Trends from './Trends'
import Follow from './Follow'

function SarcheTwiter() {
    return (
        <>
            <div className='mr-2'>
                <div className='sarche__input'>
                    <img src={vecto12} alt="vecto12" />
                    <input className='sarche__tiwiter' type="text" placeholder='Search Twitter' />
                </div>
                <div className='flex flex-wrap w-[373px] ml-[28px] gap-[2px] mt-3'>
                    <img src={Rectangle} alt="Rectangle" />
                    <img src={Rectangle2} alt="Rectangle" />
                    <img src={Rectangle3} alt="Rectangle" />
                    <img src={Rectangle4} alt="Rectangle" />
                    <img src={Rectangle5} alt="Rectangle" />
                    <img src={Rectangle6} alt="Rectangle" />
                </div>
                <Follow />
                <Trends />
            </div>
        </>
    )
}

export default SarcheTwiter


