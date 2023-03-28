import React from 'react'
import twitter from '../img/twitter.svg'
import '../scss/login.scss'

function Login() {


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
                    <form className='flex flex-col'>
                        <input className='mb-6  login__input ' type="text" placeholder='Phone number, email address' />
                        <input className='login__input' type="Password" placeholder='Password' />
                        <button className='login__btn'>Log In</button>
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