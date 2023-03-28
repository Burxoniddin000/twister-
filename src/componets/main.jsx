import React, { useRef, useState } from 'react'
import vecto7 from '../img/Vector7.png'
import vecto8 from '../img/Vector8.png'
import vecto9 from '../img/Vector9.png'
import vecto10 from '../img/Vector10.png'
import vecto11 from '../img/Vector11.png'
import Frame from '../img/Frame.png'
import '../scss/main.scss'
import ellipse from '../img/Ellipse.png'
import Ellipse6 from '../img/Ellipse6.png'
import Ellipse7 from '../img/Ellipse7.png'
import Ellipse8 from '../img/Ellipse8.png'
import image from '../img/image.png'
import Like from './like'

function Main() {
    const input = useRef()
    const [title, setTitle] = useState('');
    const [massia, setmassia] = useState([
        {
            img: Ellipse6,
            name: 'Designsta',
            acunt: '@inner · 25m',
            taxt: "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",

        },
        {
            img: Ellipse7,
            name: 'cloutexhibition',
            acunt: '@RajLahoti · 22m',
            taxt: "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",

        },
        {
            img: Ellipse8,
            name: 'CreativePhoto',
            acunt: '@cloutexhibition · 1h',
            taxt: "Обетда..... Кечиринглар",
            img2: image
        }
    ])

   
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newComment = {
            img: ellipse,
            name: 'Bobur',
            acunt: '@bobur_mavlonov',
            taxt: title
        }
        setmassia([newComment, ...massia])
        input.current.value = ''
    }
    return (
        <>
            <div className='contaioner w-[909px]'>
                <div className='flex justify-between main__div'>
                    <h1 className='taxt'>Home</h1>
                    <img src={vecto7} alt="vecto" />
                </div>
                <div className='main__div relative'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className='flex gap-2 ml-7 mt-1'>
                                <img src={ellipse} alt="ellipse" />
                                <input
                                ref={input}
                                    onChange={(evt) => setTitle(evt.target.value)}
                                    type="text" placeholder='What’s happening ' className='outline-none w-[100%] pl-1 main__input' />
                            </div>
                            <div className='flex gap-6 ml-24 mt-14 cursor-pointer mb-14'>
                                <img src={vecto8} alt="vecto8" />
                                <img src={vecto9} alt="vecto8" />
                                <img src={vecto10} alt="vecto8" />
                                <img src={vecto11} alt="vecto8" />
                                <img src={Frame} alt="vecto8" />
                            </div>
                        </div>
                        <div>
                            <button className='main__btn' type='submit'>Tweet</button>
                        </div>
                    </form>
                </div>
                {massia.map((prom, i) => (
                    <div className='mt-7' key={i}>
                        <div className='flex justify-between px-5'>
                            <div className='flex gap-2'>
                                <img className='w-[60px] h-[60px]' src={prom.img} alt="Ellipse6" />
                                <div>
                                    <h3 className='Designsta'>{prom.name} <span className='inner'>{prom.acunt}</span></h3>
                                    <p className='item'>{prom.taxt}</p>
                                </div>
                            </div>
                            <h1 className='font-black  cursor-pointer'>...</h1>
                        </div>
                        <div className='w-[600px] mt-3 mx-auto'>
                            <img src={prom.img2 ? prom.img2 : ' '} alt="img" />
                        </div>
                        <Like />
                    </div>
                ))}

            </div>
        </>
    )
}

export default Main