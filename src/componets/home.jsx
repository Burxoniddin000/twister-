import React from 'react'
import '../scss/home.scss'
import twitter from '../img/twitter.svg'
import home from '../img/home.png'
import vecto from '../img/Vecto.svg'
import vecto2 from '../img/Vector2.png'
import vecto4 from '../img/Vector4.png'
import vecto5 from '../img/Vector5.png'
import vecto6 from '../img/Vector6.png'
import lists from '../img/lists.png'
import more from '../img/more.png'
import ellipse from '../img/Ellipse.png'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className='ml-14 mt-[30px] div mb-32'>
                <div>
                    <img src={twitter} alt="twitter" />
                </div>
                <ul className='mt-[56px]'>
                    <li className='flex gap-[27.7px] items-center'>
                        <img src={home} alt="home" />
                        <h2 className='home'>Home</h2>
                    </li>
                    <li className='flex gap-[27.7px] items-center mt-[36px]'>
                        <img src={vecto} alt="home" />
                        <h2 className='item'>Explore</h2>
                    </li>
                    <li className='flex gap-[27.7px] items-center mt-[36px]'>
                        <img src={vecto2} alt="home" />
                        <h2 className='item'>Notifications</h2>
                    </li>
                    <li className='flex gap-[27.7px] items-center mt-[36px]'>
                        <img src={vecto4} alt="home" />
                        <h2 className='item'>Messages</h2>
                    </li>
                    <li className='flex gap-[27.7px] items-center mt-[36px]'>
                        <img src={vecto5} alt="home" />
                        <h2 className='item'>Bookmarks</h2>
                    </li>
                    <li className='flex gap-[27.7px] items-center mt-[36px]'>
                        <img src={lists} alt="home" />
                        <h2 className='item'>Lists</h2>
                    </li>
                    <li className='flex gap-[27.7px] items-center mt-[36px]'>
                        <img src={vecto6} alt="home" />
                        <h2 className='item'>

                            <Link to={'/Acunt'}>
                                Profile
                            </Link>
                        </h2>
                    </li>
                    <li className='flex gap-[27.7px] items-center mt-[36px]'>
                        <img src={more} alt="home" />
                        <h2 className='item'>More</h2>
                    </li>
                </ul>
                <div>
                    <Link to={'/Login'}>
                    <button className='btn'>Tweet</button>
                    </Link>
                </div>
                <div className='flex gap-3 mt-[263px] cursor-pointer'>
                    <Link to={'/Acunt'}>
                    <img src={ellipse} alt="ellipse" />
                    </Link>
                    <div className='cursor-pointer'>
                        <h5 className='nmae'>Bobur</h5>
                        <p className='home__taxt'>@bobur_mavlonov</p>
                    </div>
                    <h1 className='font-black  cursor-pointer'>...</h1>
                </div>
            </div>
        </>
    )
}
export default Home
