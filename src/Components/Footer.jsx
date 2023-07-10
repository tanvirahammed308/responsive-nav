import { FaCopyright, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../../public/img/logo.png"

const Footer = () => {
    return (
       <div>
         <div className="bg-green-600 flex justify-between px-4">
         <img src={logo} alt=""  className="w-20"/>
         <div className="flex justify-between gap-5 mt-6 ">
         <FaFacebookF></FaFacebookF>
     <FaTwitter></FaTwitter>
         </div>
        
        </div>
        <div className="bg-slate-500 py-2 flex justify-center">
            <FaCopyright className="mt-1 mr-1"></FaCopyright>
            <h2>All right copy reserve 2024</h2>
        </div>
       </div>
    );
};

export default Footer;