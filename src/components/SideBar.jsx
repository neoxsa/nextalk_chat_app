import { Bell, Bird, Contact, Info, LogOut, MessageCircle, Phone, Settings } from 'lucide-react'
import { Tooltip } from 'react-tooltip';
import {NavLink, useNavigate} from 'react-router-dom'
import { NavItems, svgStyle } from '../constants/constants.jsx';


function SideBar({ logout }) {

    const navigate = useNavigate()
    const liStyle = "cursor-pointer rounded-lg";


    return (
        <>
            <aside className=' rounded-l-2xl hidden md:flex h-auto w-20 flex-col justify-between items-center bg-black px-4 py-6 text-amber-50 shadow-2xl shadow-blue-900/50 '>
                <div className='flex flex-col gap-3 items-center'>
                <div className="rounded-full bg-white/5 p-2 shadow-inner shadow-blue-900/30">
                 <Bird className="stroke-blue-400 w-9 h-9" />
                </div>

                    <ul className=' flex flex-col justify-center gap-9 mt-10 mb-20'>

                        {
                            NavItems.map(({id, to, icon, tip }) => (
                                <li
                                key={id}
                                data-tooltip-id="menu-tooltip"
                                data-tooltip-content= {tip}
                                >
                                <NavLink 
                                    to={to}
                                    className={({ isActive }) =>
                                        `${liStyle} p-3 flex items-center justify-center rounded-xl transition-all duration-200 ${
                                          isActive
                                            ? 'bg-blue-500/20 text-blue-100 ring-2 ring-blue-400/40'
                                            : 'text-amber-50 hover:bg-white/10 hover:translate-x-0.5'
                                        }`
                                      }>
                                    {icon}
                                </NavLink>
                            </li>
                            ))}
                    </ul>
                </div>

                <div className='flex flex-col gap-8'>
                    <button 
                        data-tooltip-id="menu-tooltip"
                        data-tooltip-content="Setting"
                        className="p-3 rounded-xl hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                        >
                        <Settings className={svgStyle} /> </button>
                    <button
                        className="p-3 rounded-xl hover:bg-red-500/25 transition-colors duration-200 cursor-pointer"
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
                delayShow={600}
                className="py-1 px-3 w-fit text-center text-xs rounded-md bg-slate-100 text-slate-900 shadow-2xl"
            />
        </>
    )
}

export default SideBar
