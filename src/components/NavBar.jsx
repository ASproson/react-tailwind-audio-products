import React from "react";
import { Link } from 'react-router-dom'
import abletonLogo from '../assets/ableton-logo.png'

const NavBar = () => {
  return (
    <div className="pl-10 pr-10 lg:border-2 xl:pl-80 xl:pr-80">
        <nav className="p-2">
            <div className="flex items-center">
                <div className="w-20 h-20 flex justify-center items-center shrink-0">
                   <img src={ abletonLogo } alt=""/>
                </div>
                <div className="invisible md:visible space-x-6 sm:space-x-8 ml-10">
                    <Link to='/' className="hover:text-hoverGray">Live</Link>
                    <Link to='/' className="hover:text-hoverGray">Push</Link>
                    <Link to='/' className="hover:text-hoverGray">Link</Link>
                    <Link to='/' className="hover:text-hoverGray">Shop</Link>
                    <Link to='/' className="hover:text-hoverGray">Packs</Link>
                    <Link to='/' className="hover:text-hoverGray">Help</Link>
                    <Link to='/' className="hover:text-hoverGray">More +</Link>
                </div>
                <div className="invisible mdlg:visible space-x-6 sm:space-x-8 ml-auto">
                    <Link to='/' className="text-blue font-semibold hover:text-orange">Try Live for free</Link>
                    <Link to='/' className="hover:text-hoverGray">Account</Link>
                    <Link to='/' className="hover:text-hoverGray">Login</Link>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default NavBar;

