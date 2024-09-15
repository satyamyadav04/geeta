import { Link, NavLink } from 'react-router-dom'
import '../style/Header.css'
export default function Header() {
    return (
        
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-slate-900 border-gray-200 px-4 lg:px-6 py-2">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="src\assets\WhatsApp_Image_2024-09-06_at_12.13.00_748b4230-removebg-preview (1).png"
                            className="mr-3 h-14"
                            alt="Logo"
                        />
                    </Link>
                   
                    <div
                        className="hidden justify-between  w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="  navbar flex flex-col  font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            
                            <li>
                                <NavLink className="text-white hover:bg-orange-600 focus:ring-4 focus:ring-orange-400 font-medium rounded-2xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            
                                   to="/about"
                                    
                                >
                                    About
                                </NavLink>
                            </li>
                           

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
);
}
