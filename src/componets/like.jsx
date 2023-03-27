import React, { useState } from 'react'
import vecto15 from '../img/Vector15.png'
import vecto16 from '../img/Vector16.png'
import vecto17 from '../img/Vector17.png'
import vecto18 from '../img/Vector18.png'
import Frame2 from '../img/Frame2.png'


function Like() {
    const [counter, setcounter] = useState(0)
    const [counter2, setcounter2] = useState(0)
    const [counter3, setcounter3] = useState(0)
    const [counter4, setcounter4] = useState(0)
    const [counter5, setcounter5] = useState(0)
    const submitHandler = () => {
        setcounter(counter + 1)
    }
    const submitHandler2 = () => {
        setcounter2(counter2 + 1)
    }
    const submitHandler3 = () => {
        setcounter3(counter3 + 1)
    }
    const submitHandler4 = () => {
        setcounter4(counter4 + 1)
    }
    const submitHandler5 = () => {
        setcounter5(counter5 + 1)
    }
    return (
        <>
            <ul className='flex gap-20 mt-7 justify-center border-b-2 pb-5'>
                <li className='flex gap-3 cursor-pointer'>
                    <img onClick={submitHandler} src={vecto15} alt="vecto" />
                    <p className='text-xs'>{counter}</p>
                </li>
                <li className='flex gap-3 cursor-pointer'>
                    <img onClick={submitHandler2} src={vecto16} alt="vecto" />
                    <p className='text-xs'>{counter2}</p>
                </li>
                <li className='flex gap-3 cursor-pointer'>
                    <img onClick={submitHandler3} src={vecto17} alt="vecto" />
                    <p className='text-xs'>{counter3}</p>
                </li>
                <li className='flex gap-3 cursor-pointer'>
                    <img onClick={submitHandler4}src={vecto18} alt="vecto" />
                    <p className='text-xs'>{counter4}</p>
                </li>
                <li className='flex gap-3 cursor-pointer'>
                    <img onClick={submitHandler5} src={Frame2} alt="vecto" />
                    <p className='text-xs'>{counter5}</p>
                </li>
            </ul>
        </>
    )
}

export default Like