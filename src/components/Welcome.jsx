import React from 'react'

function Welcome() {
    return (
        <>
            <section className='flex-1 bg-gray-900 text-amber-50 flex flex-col justify-center items-center rounded-2xl'>
                <div>
                    <h1 className='text-3xl font-bold'>Welcome to NexTalk</h1>
                    <p className='text-lg mt-4'>Select a chat to start messaging</p>
                </div>
            </section>
        </>
    )
}

export default Welcome
