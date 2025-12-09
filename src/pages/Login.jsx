import React from 'react'
import LoginForm from '../components/LoginForm'

function Login({
    login,
    session
}) {
    return (
        <>
            <section className='flex justify-center items-center h-screen w-full  text-amber-50 flex-col '>
                <LoginForm login={login} session={session} />
            </section>
        </>
    )
}

export default Login
