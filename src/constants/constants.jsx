import { Bell, Contact, Info, MessageCircle, Phone} from 'lucide-react'

// Nav Menu
const svgStyle = "w-6 h-6 stroke-amber-50";

const NavItems = [
    {
        id: 1,
        to:"/",
        icon: <MessageCircle className={svgStyle}></MessageCircle>,
        tip: "Chats"
        },
        {
            id: 2,
            to: '/calls', 
            icon: <Phone className={svgStyle} />, 
            tip: 'Calls'
        },
        {
            id: 3,
            to: '/notification', 
            icon: <Bell className={svgStyle} />, 
            tip: 'Notification' 
        },
        {
            id: 4,
            to: '/contact', 
            icon: <Contact className={svgStyle} />, 
            tip: 'Contact' 
        },
        {
            id: 5,
            to: '/help', 
            icon: <Info className={svgStyle} />, 
            tip: 'Help' 
        }
]

export { NavItems, svgStyle}