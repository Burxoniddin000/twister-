import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import twitter from '../img/twitter.svg'
import '../scss/login.scss'
import { AuthContext } from './AuthContext'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const naviget = useNavigate()
    const { setIsLogin } = useContext(AuthContext);

    const handelSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const res = await fetch('https://reqres.in/api/register', {
                method: 'post',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json',
                },

            })
            if (res.status === 400) {
                throw new Error('nimadur')
            }
            const data = await res.json();
            localStorage.setItem('token', data.token)
            setIsLogin(true);
            naviget('/')
        } catch {
            alert("To'liq malumotni kiriting")
        }
    }


    return (
        <>
            <div className='w-[450px] mx-auto mt-16 '>
                <div>
                    <img className='w-[50px] h-[41px]' src={twitter} alt="twitter" />
                </div>
                <h1 className='mt-9 mb-9 login__log'>
                    Log in to Twitter
                </h1>
                <div>
                    <form
                        onSubmit={handelSubmit}
                        className='flex flex-col'>
                        <input
                            value={email}
                            onChange={(evt) => (
                                setEmail(evt.target.value)
                            )}
                            className='mb-6  login__input ' type="text" placeholder='Phone number, email address' />
                        <input
                            value={password}
                            onChange={(evt) => (
                                setPassword(evt.target.value)
                            )}
                            className='login__input' type="Password" placeholder='Password' />
                        <button type='submit' className='login__btn'>Log In</button>
                    </form>
                    <div className='flex justify-between mt-10'>
                        <h3 className='login__sign'>Forgot password?</h3>
                        <h3 className='login__sign'>Sign up to Twitter</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login