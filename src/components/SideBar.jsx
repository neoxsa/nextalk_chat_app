import { Bell, Bird, Contact, Info, LogOut, MessageCircle, Phone, Settings } from 'lucide-react'
import { Tooltip } from 'react-tooltip';
import {NavLink, useNavigate} from 'react-router-dom'

function SideBar({ logout }) {

    const navigate = useNavigate()


    const svgStyle = "w-6 h-6 stroke-amber-50";
    const liStyle = "cursor-pointer rounded-lg";
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
                            >
                            <NavLink 
                                to='/'
                             className={({ isActive }) =>`${liStyle} p-3 flex items-center justify-center ${isActive ? 'bg-gray-500/30' : ''}`}>
                                <MessageCircle className={svgStyle} />
                            </NavLink>
                        </li>
                        <li
                            data-tooltip-id="menu-tooltip"
                            data-tooltip-content="Calls">
                                <NavLink 
                                to='/calls'
                                className={({ isActive }) =>`${liStyle} p-3 flex items-center justify-center ${isActive ? 'bg-gray-500/30' : ''}`}>
                            
                            <Phone className={svgStyle} />
                                </NavLink>
                        </li>
                       <li
                            data-tooltip-id="menu-tooltip"
                            data-tooltip-content="Notification">
                                <NavLink 
                               to='/notification'
                                className={({ isActive }) =>`${liStyle} p-3 flex items-center justify-center ${isActive ? 'bg-gray-500/30' : ''}`}>
                            <Bell className={svgStyle} />
                                </NavLink>
                        </li>
                        <li
                            data-tooltip-id="menu-tooltip"
                            data-tooltip-content="Contact">
                                <NavLink 
                                to='/contact'
                                className={({ isActive }) =>`${liStyle} p-3 flex items-center justify-center ${isActive ? 'bg-gray-500/30' : ''}`}>
                            <Contact className={svgStyle} />
                                </NavLink>
                        </li>
                       <li
                            data-tooltip-id="menu-tooltip"
                            data-tooltip-content="Help">
                                <NavLink 
                                to='/help'
                                className={({ isActive }) =>`${liStyle} p-3 flex items-center justify-center ${isActive ? 'bg-gray-500/30' : ''}`}>
                            <Info className={svgStyle} />
                                </NavLink>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col gap-8'>
                    <button 
                        data-tooltip-id="menu-tooltip"
                        data-tooltip-content="Setting"
                        className="cursor-pointer "
                        >
                        <Settings className={svgStyle} /> </button>
                    <button
                     className="cursor-pointer "
                     data-tooltip-id="menu-tooltip"
                        data-tooltip-content="Logout"
                        onClick={() => {
                            logout(); 
                            navigate('/login')
                        }}
                    >
                        <LogOut className="w-6 h-6 stroke-red-500" />
                    </button>
                </div>

            </aside>

            <Tooltip
                id="menu-tooltip"
                place="right"
                delayShow={1000}
                className="py-1 px-3 w-fit text-center text-xs rounded-md bg-blue-200 text-blue-900 shadow-2xl z-50"
            />
        </>
    )
}

export default SideBar
