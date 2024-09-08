import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Contact from './Contact';
// import logIn from './logIn';
import './Header.css'
// import { document } from 'postcss';



export default function Header() {
    return (
        
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUs4Adp11oAAENAKCwI7Vk-c42UsRRT-tocQ&s"
                            src="src\componantes\WhatsApp_Image_2024-09-06_at_12.13.00_748b4230-removebg-preview (1).png"
                            className="mr-3 h-14"
                            alt="Logo"
                        />
                    </Link>
                    {/* <div className="flex items-center lg:order-2"> */}
                        {/* <NavLink
                            to="\logIn"
                            className="text-black hover:bg-orange-700 hover:text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "

                        >
  
                            Log in
                        </NavLink> */}
                        {/* <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Sign Up
                        </Link> */}
                    {/* </div> */}
                    <div
                        className="hidden justify-between  w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="  navbar flex flex-col  font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {/* <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                                    }
                                >
                                    Home
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink className="about text-white "
                                    to="/about"
                                    
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="text-white"
                                    to="/Contact"
                                   
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            


                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
