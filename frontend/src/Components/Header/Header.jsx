import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();
    const [data, setData] = useState(false)

    return(
        <>
            <div className="block md:hidden bg-[#1A191E] ">
                <div className="flex justify-between p-5">
                <Link><img className="w-[7rem]" src="https://demo.themefisher.com/galaxy-bootstrap/images/logo.png" alt="logo" /></Link>
                <div className="text-white text-[3rem] " onClick={()=> (setData(!data))}>
                <ion-icon name={`${data ? 'close' : 'menu'}`}></ion-icon>
                </div>
                </div>
            </div>
            <div className={`w-[70%] md:w-[25%] h-screen fixed left-0 top-0 bg-[#1A191E] text-white flex-col ${data ? "left-0 top-0" : "left-[-280px] md:left-0"}`}>
            <div>
                <Link to='/'><img className="ml-[3.5rem] mt-[4rem]" src="https://demo.themefisher.com/galaxy-bootstrap/images/logo.png" alt="logo" /></Link>
            </div>
            <div className="leading-[3rem]">
                
                <ul className="flex flex-col w-[2rem] ml-[3.5rem] mt-[6rem] leading-[3rem]">
                    <li className={location.pathname === '/'? " border-b-4 rounded-sm border-white w-6 ": ""}> <Link onClick={() => setData(!data)} className=" text-[1rem] font-bold font-sans text-white  " to='/'>Home</Link></li>
                    <li className={location.pathname === '/about'? " border-b-4 rounded-sm border-white w-6 ": ""}> <Link onClick={() => setData(!data)} className=" text-[1rem] font-bold font-sans text-white" to='/about'>About</Link></li>
                    <li className={location.pathname === '/contact'? " border-b-4 rounded-sm border-white w-6 ": ""}> <Link onClick={() => setData(!data)} className=" text-[1rem] font-bold font-sans text-white" to='/contact'>Contact</Link></li>
                    <li className={location.pathname === '/admin'? " border-b-4 rounded-sm border-white w-6 ": ""}><Link onClick={() => setData(!data)} className=" text-[1rem] font-bold font-sans text-white" to='/admin'>Admin</Link></li>
                </ul>
                    
                    
                <select className=" w-[6rem] h-8 border-[1px] border-white bg-black text-white ml-[-60px] md:ml-[-157px]" name="language" id="language">
                    <option defaultChecked value="english">English</option>
                    <option  value="french">French</option>
                </select>
            </div>
            <div className="flex w-[9rem] justify-between mt-9 md:mt-[7rem] text-[1.3rem] ml-[3.2rem] ">
                <Link to='#' className="hover:text-red-400"><ion-icon name="logo-twitter"></ion-icon></Link>
                <Link to='#' className="hover:text-red-400"><ion-icon name="logo-facebook"></ion-icon></Link>
                <Link to='#' className="hover:text-red-400"><ion-icon name="logo-instagram"></ion-icon></Link>
                <Link to='#' className="hover:text-red-400"><ion-icon name="logo-linkedin"></ion-icon></Link>
            </div>
        </div>
        </>
    )
}

export default Header;