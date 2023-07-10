import { Link } from "react-router-dom";
import logo from "../../public/img/logo.png"
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [open , setOpen]=useState(false);
    const toggleNav=()=>{
        setOpen(!open)
    }
    return (
        <nav className="bg-emerald-500 flex justify-between ">
         <div className="flex gap-5 px-3">
            <Link to={'/'}>
            
            <img src={logo} alt="company logo" className="w-[80px]" />
            </Link>
            <h2 className="mt-4 font-bold">Tanvir</h2>
         </div>
         {/* for computer  */}
         <div className="hidden md:block mt-4 px-3">
            <ul className="flex gap-5 font-bold">
                <li>
                    <Link to={'/'}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to={'/about'}>
                    About
                    </Link>
                </li>
                <li>
                    <Link to={'/contact'}>
                    Contact
                    </Link>
                </li>
            </ul>
         </div>
         {/* for mobile  */}

         <div onClick={toggleNav} className="md:hidden mt-4 pr-2 ">
            {
                open ? <FaTimes /> : <FaBars />
            }

         </div>
         {
            open && 

            <div className="absolute top-[60px]  bg-green-500 p-5 md:hidden" >
                    <ul className=" gap-5 font-bold">
                           <li>
                               <Link to={'/'}>
                               Home
                               </Link>
                           </li>
                           <li>
                               <Link to={'/about'}>
                               About
                               </Link>
                           </li>
                           <li>
                               <Link to={'/contact'}>
                               Contact
                               </Link>
                           </li>
                       </ul>
                    </div>
         }

        
        </nav>
    );
};

export default Navbar;