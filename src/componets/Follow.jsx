import React from 'react'
import Ellips from '../img/Ellips.png'
import Ellips2 from '../img/Ellipse2.png'
import '../scss/follow.scss'

function Follow() {
    return (
        <>
            <div className='ml-[28px] mt-5 follow__div'>
                <h2 className='folow__taxt mb-6'>You might like</h2>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                    <img src={Ellips} alt="Ellips" />
                    <div>
                        <h2 className='fllow__mush'>Mushtariy</h2>
                        <p className='follow__name'>@Mushtar565266</p>
                    </div>
                    </div>
                    <button className='follow__btn'>Follow</button>
                </div>
                <div className='flex justify-between mt-6'>
                    <div className='flex gap-2'>
                    <img src={Ellips2} alt="Ellips" />
                    <div>
                        <h2 className='fllow__mush'>Shuhratbek</h2>
                        <p className='follow__name'>@mrshukhrat</p>
                    </div>
                    </div>
                    <button className='follow__btn'>Follow</button>
                </div>
                <div>
                    <h2 className='follow__show'>Show more</h2>
                </div>
            </div>
        </>
    )
}

export default Follow