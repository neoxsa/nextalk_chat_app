import { Bell, Bird, Contact, Info, LogOut, MessageCircle, Phone, Settings } from 'lucide-react'
import { Tooltip } from 'react-tooltip';

function SideBar({ logout }) {

    const svgStyle = "w-6 h-6 stroke-amber-50";
    const liStyle = "cursor-pointer hover:bg-gray-500/30 p-3 rounded-lg";
    return (
        <>
            <aside className='rounded-l-2xl bg-black h-auto flex flex-col justify-around items-center px-5 py-6 text-amber-50 w-18 shadow-xl shadow-blue-900/70'>
                <div className='flex flex-col gap-3 justify-around items-center'>
                    {/* <img src="#" alt="logo" /> */}
                    <Bird className="stroke-blue-500 w-10 h-10" />

                    <ul className=' flex flex-col justify-center gap-9 mt-10 mb-20'>
                        <li
                            data-tooltip-id="menu-tooltip"
                            data-tooltip-content="Chats"
                            className={liStyle}>
                            <MessageCircle
                                className={svgStyle} />
                        </li>
                        <li
                            data-tooltip-id="menu-tooltip"
                            data-tooltip-content="Calls"
                            className={liStyle}>
                            <Phone className={svgStyle} />
                        </li>
                        <li
                            data-tooltip-id="menu-tooltip"
                            data-tooltip-content="Notifications"
                            className={liStyle}>
                            <Bell className={svgStyle} />
                        </li>
                        <li
                            data-tooltip-id="menu-tooltip"
                            data-tooltip-content="Contacts"
                            className={liStyle}>
                            <Contact className={svgStyle} />
                        </li>
                        <li
                            data-tooltip-id="menu-tooltip"
                            data-tooltip-content="Info"
                            className={liStyle}>
                            <Info className={svgStyle} />
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col gap-3'>
                    <button className={liStyle}>
                        <Settings className={svgStyle} /> </button>
                    <button
                        className={liStyle}
                        onClick={() => { logout }}
                    >
                        <LogOut className="w-6 h-6 stroke-red-500" />
                    </button>
                </div>

            </aside>

            <Tooltip
                id="menu-tooltip"
                place="right"
                delayShow={1000}
                className="!py-1 !px-3 !w-fit !text-center !text-xs !rounded-md !bg-blue-200 !text-blue-900 !shadow-2xl"
            />
        </>
    )
}

export default SideBar
