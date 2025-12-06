import { Phone, Send, Video } from 'lucide-react'


function Chats() {
    return (
        <>
            <section className='text-amber-50 bg-[#242424] rounded-r-2xl w-full h-screen'>
                <div className=' flex flex-col gap-9 w-full h-screen p-6'>

                    {/* Header */}
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-4'>
                            <div className='relative rounded-2xl bg-blue-500 size-16 flex justify-center items-center'>
                                <img src="#" alt="profile" />
                            </div>
                            <div>
                                <h1 className='text-2xl font-semibold'>John Doe</h1>
                                <p className='text-blue-400'>Online</p>
                            </div>
                        </div>
                        {/* buttons */}
                        <div className='flex'>
                            <button
                                type='button'
                                className=' bg-[#454545] px-4 py-3.5 text-amber-50 cursor-pointer font-medium ml-4 rounded-full '
                            >
                                <Video />
                            </button>
                            <button
                                type='button'
                                className='bg-[#454545] px-4 py-3.5 text-amber-50 cursor-pointer font-medium ml-4 rounded-full'>
                                <Phone />
                            </button>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className='flex flex-col gap-6 h-full border-2 border-[#363636] rounded-xl p-6 overflow-y-auto'>
                        {/* Messages will go here */}
                    </div>

                    {/* Input Area */}
                    <div className='flex gap-3'>
                        <input
                            type="text"
                            placeholder='Type your message...'
                            className='outline-none w-full p-4 rounded-lg bg-[#2b353eab] text-amber-50'
                        />
                        <button
                            type='button'
                            className='bg-blue-500 px-4 py-2 rounded-lg text-amber-50 cursor-pointer font-medium'
                        >
                            <Send />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Chats
