import { Phone, Send, Video } from 'lucide-react'
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessage } from '../features/messageSlice';
import { supabase } from '../supabase/supabaseClient'


function Chats() {

    const [newMessage, setNewMessage] = useState('')
    const [usersOnline, setUsersOnline] = useState([])
    const channelRef = useRef(null);

    const session = useSelector((state) => state.session.session);
    const allMessages = useSelector((state) => state.messages.messages);


    const dispatch = useDispatch();

    console.log("new session", session)

    let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });



    //Supabase Message Channel
    useEffect(() => {
        if (!session) {
            setUsersOnline([]);
            return;
        }
        const roomOne = supabase.channel('room_one', {
            config: {
                presence: {
                    key: session?.user?.id,
                },
            },
        });
        channelRef.current = roomOne;

        // Broadcast
        roomOne.on('broadcast', { event: 'message' }, (payload) => {
            console.log('Broadcast received:', payload);
            dispatch(
                setMessage({
                    id: payload.payload.id,
                    timestamp: payload.payload.time,
                    name: payload.payload.name,
                    chat: payload.payload.chat,
                    avatar: payload.payload.avatar
                })
            );
        });

        // track user presence subscribe
        roomOne.subscribe(async (status) => {
            if (status === 'SUBSCRIBED') {
                await roomOne.track({
                    online_at: new Date().toISOString(),
                    id: session?.user?.id
                });
            }
        })

        // handle user presence
        roomOne.on('presence', { event: 'async' }, () => {
            const state = roomOne.presenceState();
            setUsersOnline(Object.keys(state));
            console.log('Users online:', Object.keys(state));
        });

        // unsubscribe from roomOne
        return () => {
            roomOne.unsubscribe();
        };

    }, [session])

    // send message
    const sendMessage = async (e) => {
        e.preventDefault();

        const messageData = {
            id: session?.user?.id,
            timestamp: time,
            name: session?.user?.user_metadata.full_name,
            chat: newMessage,
            avatar: session?.user?.user_metadata.avatar_url,
        };

        // Dispatch locally (broadcasts don't echo back to sender)
        dispatch(setMessage(messageData));

        // Send to other users
        channelRef.current?.send({
            type: 'broadcast',
            event: 'message',
            payload: messageData
        });

        setNewMessage('');
    };

    console.log("All Message", allMessages);


    return (
        <>
            <section className='text-amber-50 bg-[#242424] rounded-r-2xl w-full h-screen'>
                <div className=' flex flex-col gap-9 w-full h-screen p-6'>

                    {/* Header */}
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-4'>
                            <div className='relative rounded-2xl bg-blue-500 size-16 flex justify-center items-center'>
                                <img
                                    src={session?.user?.user_metadata?.avatar_url} alt="profile"
                                    className='rounded-xl w-16 h-16'

                                />
                            </div>
                            <div>
                                <h1 className='text-2xl font-semibold'>{session?.user?.user_metadata.full_name}</h1>
                                {
                                    session ? (
                                        <span className='text-green-400'>Online</span>
                                    ) : (
                                        <span className='text-red-400'>Offline</span>
                                    )
                                }

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
                    <div className='relative flex flex-col gap-6 h-full border-2 border-[#363636] rounded-xl p-6 overflow-y-auto'>
                        {/* Messages Area*/}

                        {allMessages.map((msg, index) => (
                            <div key={index} className={`${msg.id === session?.user?.id ? 'justify-end' : 'justify-start'} relative flex items-center gap-4`}>
                                {
                                    msg.id !== session?.user?.id && (
                                        <div className='relative rounded-2xl bg-blue-500 size-10 flex justify-center items-center'>
                                            <img
                                                src={msg.avatar} alt="profile"
                                                className='rounded-xl w-10 h-10'
                                            />
                                        </div>
                                    )
                                }
                                <div className=' flex gap-2'>

                                    <div className={`${msg.id === session?.user?.id ? 'rounded-tl-2xl' : 'rounded-tr-2xl'} relative bg-[#2b353e] p-4 w-max max-w-xs rounded-br-2xl rounded-bl-2xl`}>
                                        <p className="text-amber-50">{msg.chat}</p>
                                    </div>
                                    <span className='flex items-end text-gray-400 text-xs'>{msg.timestamp}</span>
                                </div>

                            </div>
                        ))}


                    </div>
                    {/* Input Area */}
                    <form
                        onSubmit={sendMessage}
                        className='flex gap-3 items-center relative bottom-0'>
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder='Type your message...'
                            className='outline-none w-full p-4 rounded-lg bg-[#2b353eab] text-amber-50'
                        />
                        <button
                            type='submit'
                            className='bg-blue-500 px-4 py-2 rounded-lg text-amber-50 cursor-pointer font-medium'
                        >
                            <Send />
                        </button>
                    </form>
                </div>

            </section>
        </>
    )
}
export default Chats
