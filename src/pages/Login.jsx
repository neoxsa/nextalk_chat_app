import React from 'react'
import LoginForm from '../components/LoginForm'

function Login({
    login
}) {
    return (
        <>
            <section className='flex justify-center items-center h-screen w-full  text-amber-50 flex-col '>
                <LoginForm login={login} />
            </section>
        </>
    )
}

export default Login
