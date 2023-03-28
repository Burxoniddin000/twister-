import React from 'react'
import vecto14 from '../img/settings.png'
import '../scss/trends.scss'

function Trends() {
    return (
        <>
            <div className='trends__div'>
                <div className='flex justify-between'>
                    <h1 className='for '>Trends for you</h1>
                    <img src={vecto14} alt="vecto14" />
                </div>
                <div className='flex justify-between mt-5'>
                    <div>
                        <p className='trends__taxt mb-1'>Trending in Germany</p>
                        <h2 className='trends__revol mb-1'>Revolution</h2>
                        <p className='trends__taxt mb-1'>50.4K Tweets</p>
                    </div>
                    <h1 className='font-black  cursor-pointer'>...</h1>
                </div>
                <div className='flex justify-between mb-4'>
                    <div>
                        <p className='trends__taxt mb-1'>Trending in Germany</p>
                        <h2 className='trends__revol mb-1'>Revolution</h2>
                        <p className='trends__taxt mb-1'>50.4K Tweets</p>
                    </div>
                    <h1 className='font-black  cursor-pointer'>...</h1>
                </div>
                <div className='flex justify-between mb-4'>
                    <div>
                        <p className='trends__taxt mb-1'>Trending in Germany</p>
                        <h2 className='trends__revol mb-1'>Revolution</h2>
                        <p className='trends__taxt mb-1'>50.4K Tweets</p>
                    </div>
                    <h1 className='font-black  cursor-pointer'>...</h1>
                </div>
                <div>
                    <h2 className='trends__show'>Show more</h2>
                </div>
            </div>
        </>
    )
}

export default Trends