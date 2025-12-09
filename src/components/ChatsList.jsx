import { Search } from 'lucide-react'
import React from 'react'

function ChatsList() {
    return (
        <>
            <section className='text-amber-50 bg-black border-r-3 border-[#363636] h-screen'>
                <div className='bg-[#242424] rounded-l-xl flex flex-col gap-9 w-100 h-full'>

                    {/* Header */}
                    <div className='flex gap-5 px-6 pt-6'>
                        <span>
                            <h1 className='text-2xl'>
                                Messages&nbsp;
                                <span className='text-lg 
                                bg-blue-400
                                px-2 py-1
                                rounded-full
                                text-gray-800 font-medium'>
                                    {/* Todo make it mutable */}
                                    5
                                </span>
                            </h1>
                            <p>Recent Chats</p>
                        </span>
                        <button
                            type='button'
                            className='bg-blue-500 px-4 py-2 rounded-lg text-amber-50 cursor-pointer font-medium'
            >
                            + Create New Chat
                        </button>
                    </div>

                    {/* Search */}
                    <div className='flex gap-3 items-center bg-[#2b353eab] p-4 rounded-lg mx-6'>
                        <Search className='stroke-[#929087] size-5' />
                        <input
                            type="search"
                            placeholder='Search Messages'
                            className='outline-none w-full '
                        />
                    </div>

                    {/* All Messages List */}
                    <div>
                        <h2 className='text-gray-400 font-medium text-[15px] px-6 '>
                            ALL MESSAGES
                        </h2>
                        <ul
                            className='flex flex-col mt-2 '
                        >
                            <li className='flex gap-3 cursor-pointer border-l-4 border-[#212121] hover:bg-[#2b353eab] hover:border-l-4 hover:border-amber-50 px-6 py-5'>
                                <div className='relative rounded-2xl bg-blue-500 size-16 flex justify-center items-center'>
                                    <img src="#" alt="profile" />
                                    <div className='absolute right-0 top-0 bg-green-400 size-4 rounded-full'></div>
                                </div>
                                <div
                                    className='flex flex-col gap-4 w-2/3'>
                                    <h3
                                        className='text-lg'
                                    >John Doe</h3>
                                    <p className='text-gray-400 
                                    line-clamp-1
                                    '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit facere reprehenderit illo.</p>
                                </div>
                                <span className='flex flex-col gap-5 relative'>

                                    <div className='text-xs text-gray-400 truncate'>12:00 am</div>

                                    {/* Todo mutable & conditional*/}
                                    <div
                                        className='flex text-lg bg-red-500 px-2.5 py-0.5 rounded-full text-amber-50 font-medium absolute bottom-0 right-0'
                                    >1
                                    </div>

                                </span>
                            </li>

                        </ul>
                    </div>


                </div>


            </section>
        </>
    )
}

export default ChatsList
