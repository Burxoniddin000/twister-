import React from 'react'
import Arrow from '../img/Arrow.png'
import Rectangle7 from '../img/Rectangle7.png'
import Ellipse4 from '../img/Ellipse4.png'
import Vector19 from '../img/Group.png'
import Group3 from '../img/Group3.png'
import Ellipse from '../img/Ellipse.png'
import image8 from '../img/image8.png'
import '../profil.scss'
import Like from './like'
import { Link } from 'react-router-dom'

function Profil() {
    return (
        <>
            <div className='w-[909px] profil'>
                <div>
                    <div>
                        <div className='flex items-center gap-10 ml-8 mt-5 mb-4'>
                            <Link to={'/'}>
                                <img className='h-3' src={Arrow} alt="Arrow" />
                            </Link>
                            <div>
                                <h1 className='profil__item'>Bobur</h1>
                                <p className='profil__namber'>1,070 Tweets</p>
                            </div>
                        </div>
                        <div className='relative'>
                            <img src={Rectangle7} alt="Ellipse4" />
                            <img className='profil__img' src={Ellipse4} alt="Ellipse4" />
                            <button className='profil__btn'>Edit profile</button>
                        </div>
                    </div>
                    <div className='mt-24 ml-[25px]'>
                        <div>
                            <h1 className='profil__item'>Bobur</h1>
                            <p className='profil__namber'>@bobur_mavlonov</p>
                            <h3 className='profil__at'>UX&UI designer at <span className='text-blue-600'> @abutechuz</span></h3>
                        </div>
                    </div>
                    <ul className='ml-[25px] mt-[15px] flex justify-between pr-3'>
                        <li className='flex gap-2'>
                            <img className='w-[18px] h-[20px]' src={Vector19} alt="Vector19" />
                            <h4 className='profil__inner'>Mashag’daman</h4>
                        </li>
                        <li className='flex gap-2'>
                            <img className='w-[18px] h-[20px] ' src={Vector19} alt="Vector19" />
                            <h4 className='span'>
                                t.me/boburjon_mavlonov</h4>
                        </li>
                        <li className='flex gap-2'>
                            <img className='w-[18px] h-[20px]' src={Vector19} alt="Vector19" />
                            <h4 className='profil__inner'>Born November 24, 2000</h4>
                        </li>
                        <li className='flex gap-2'>
                            <img className='w-[18px] h-[20px]' src={Vector19} alt="Vector19" />
                            <h4 className='profil__inner'>Joined May 2020</h4>
                        </li>
                    </ul>
                    <div className='mt-[15px] flex gap-8 ml-[15px]'>
                        <h2 className='profil__follow'><span className='profil__folower'>67</span> Following</h2>
                        <h2 className='profil__follow'><span className='profil__folower'>47</span> Followers</h2>
                    </div>
                    <ul className='flex justify-between pl-5 pr-5 mt-8 profil__ul'>
                        <li className='profil__twiter'>Tweets</li>
                        <li className='profil__Media'>Tweets & replies</li>
                        <li className='profil__Media'>Media</li>
                        <li className='profil__Media'>Likes</li>
                    </ul>
                </div>
                <div className='ml-[25px]'>
                    <div className='flex gap-3 mt-4 items-center'>
                        <img className='w-3 h-4' src={Group3} alt="Group3" />
                        <h5>Pinned Tweet</h5>
                    </div>
                    <div>

                        <div className='flex items-center gap-3'>
                            <img className='h-14' src={Ellipse} alt="Ellipse" />
                            <div>
                                <div className='flex gap-2 items-center mt-4'>
                                    <h1 className='profil__item'>Bobur</h1>
                                    <p className='profil__namber'>@bobur_mavlonov · Apr 1</p>
                                </div>
                                <p className='profil__taxt'>4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim</p>
                            </div>
                        </div>
                        <Like />
                    </div>
                    <div>

                        <div className='flex items-center gap-3'>
                            <img className='h-14' src={Ellipse} alt="Ellipse" />
                            <div>
                                <div className='flex gap-2 items-center mt-4'>
                                    <h1 className='profil__item'>Bobur</h1>
                                    <p className='profil__namber'>@bobur_mavlonov · Apr 1</p>
                                </div>
                                <p className='profil__taxt'>Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz.
                                </p>
                                <p className='profil__taxt mt-3'>

                                    Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida.
                                </p>

                                <p className='profil__taxt mt-3'>

                                    Gap faqat biznes trenerlar haqida emas.</p>

                            </div>
                        </div>
                        <Like />
                    </div>
                    <div>

                        <div className='flex items-center gap-3'>
                            <img className='h-14' src={Ellipse} alt="Ellipse" />
                            <div>
                                <div className='flex gap-2 items-center mt-4'>
                                    <h1 className='profil__item'>Bobur</h1>
                                    <p className='profil__namber'>@bobur_mavlonov · Apr 1</p>
                                </div>
                                <p className='profil__taxt'>A bo'pti maskamasman</p>
                            </div>
                        </div>
                        <img className='mt-3 w-[600px] ' src={image8} alt="image8" />
                        <Like />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profil