import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Home = () => {
    

    const [data, setData] = useState([]);

    const name = sessionStorage.getItem("username");
    const email = sessionStorage.getItem('email');

    const navigate = useNavigate();

    useEffect(() => {
        axios.post('http://localhost:5000/getBlog', {email}).then((res) => {
            setData(res.data.d)
            // alert(res.data.msg)
        }).catch((error) => {
            console.log(error)
        })
    },[])





    return (
        <div className="md:w-[89%] flex flex-wrap bg-[#1A191E] px-3 md:px-0 py-5 md:py-11 md:ml-[20.3%]">
            <div className="flex flex-col bg-[#1A191E] md:w-[55%]">
                <div>
                    {data.map((rdata,index) => (
                        <div key={index} className="flex flex-col w-full mt-10">
                        <img className="w-full object-cover md:h-[27rem]" src={rdata.imageUrl} alt="" />
                        <h1 className="text-white text-[1.5rem] md:text-[2rem] font-semibold text-left pt-3 md:leading-10"><Link>{rdata.title}</Link></h1>
                        <div className="flex mt-5">
                            <p className="text-white "><Link>{rdata.date}</Link></p>
                            <p className="text-white ml-[3rem] "><Link>Photography</Link></p>
                        </div>
                        <p className="text-white mt-5 text-left font-extralight">{rdata.content}</p>
                        <button className="w-[9rem] h-10 border-1  bg-red-500 hover:bg-red-900  text-white mt-5">Read More<ion-icon name="arrow-round-forward"></ion-icon></button>
                    </div>
                    ))}
                    
                </div>

            </div>
            <div className=" md:w-[45%] px-5 md:px-0 flex flex-col bg-[#1A191E]  ">
                <div className=" md:px-7 ">
                    <img className="md:w-[15rem] rounded-3xl md:ml-[22%] " src="https://demo.themefisher.com/galaxy-bootstrap/images/author-sm.png" alt="" />
                    <h1 className="text-white text-[2rem] border-b-2 border-red-500 w-[150px] md:ml-[32%] mt-5 font-semibold">About Me</h1>
                    <p className="text-white text-[1rem] mt-5">Lorem ipsum dolor sit coectetur adiing elit. Tincidunfywjt leo mi, viearra urna. Arcu ve isus, condimentum ut vulpate cursus por turpis.</p>
                    <div className="flex w-[150px] justify-between mt-5 text-[1.3rem] ml-[25%] md:ml-[32%] ">
                        <Link to='#' className="hover:text-red-400 text-white"><ion-icon name="logo-twitter"></ion-icon></Link>
                        <Link to='#' className="hover:text-red-400 text-white"><ion-icon name="logo-facebook"></ion-icon></Link>
                        <Link to='#' className="hover:text-red-400 text-white"><ion-icon name="logo-instagram"></ion-icon></Link>
                        <Link to='#' className="hover:text-red-400 text-white"><ion-icon name="logo-linkedin"></ion-icon></Link>
                    </div>
                </div>
                <div className="flex flex-col md:px-7 mt-[3rem] ">
                    <h1 className="text-white text-[2rem] border-b-2 border-red-500 w-[220px] md:ml-[25%] mt-5 font-semibold">Subscribe Blog</h1>
                    <p className="text-white text-[1rem] mt-5">Lorem ipsum dolor sit coectetur adiing elit. Tincidunfywjt leo mi, viearra urna. Arcu ve isus, condimentum ut vulpate cursus por turpis.</p>
                    <input type="email" placeholder="Your Email Adress" className="h-10 bg-[#1A191E] text-center border-2 border-black rounded-sm mt-5" />
                    <button className="w-[11rem] h-10 border-1  bg-red-500 hover:bg-red-900  text-white mt-8 ml-[4rem] md:ml-[9rem]">Subscribe Now<ion-icon name="arrow-round-forward"></ion-icon></button>
                </div>
                <div>
                    <h1 className="text-white text-[2rem] border-b-2 border-red-500 w-[220px] md:ml-[29%] mt-[5rem] font-semibold">Featured Posts</h1>
                    <div className="flex flex-col w-full px-5 mt-11">
                        <img className="md:w-[70%] object-cover md:h-[15rem] md:ml-[15%]" src="https://demo.themefisher.com/galaxy-bootstrap/images/post/post-lg/01.png" alt="" />
                        <h1 className="md:w-[70%] md:ml-[15%] text-white text-[1.5rem] md:text-[2rem] font-semibold text-left pt-3 md:leading-10"><Link>Excepteur ado Do minimal duis laborum Fugiat ea</Link></h1>
                        <div className="flex mt-5 md:ml-[15%]">
                            <p className="text-white "><Link>24 April, 2016</Link></p>
                            <p className="text-white ml-[3rem] "><Link>Photography</Link></p>
                        </div>
                        <button className="w-[9rem] h-10 md:ml-[15%] border-1  bg-red-500 hover:bg-red-900  text-white mt-8">Read More<ion-icon name="arrow-round-forward"></ion-icon></button>
                    </div>
                    <div className="flex flex-col w-full px-5 mt-11">
                        <img className="md:w-[70%] object-cover md:h-[15rem] md:ml-[15%]" src="https://demo.themefisher.com/galaxy-bootstrap/images/post/post-lg/01.png" alt="" />
                        <h1 className="md:w-[70%] md:ml-[15%] text-white text-[1.5rem] md:text-[2rem] font-semibold text-left pt-3 md:leading-10"><Link>Excepteur ado Do minimal duis laborum Fugiat ea</Link></h1>
                        <div className="flex mt-5 md:ml-[15%]">
                            <p className="text-white "><Link>24 April, 2016</Link></p>
                            <p className="text-white ml-[3rem] "><Link>Photography</Link></p>
                        </div>
                        <button className="w-[9rem] h-10 md:ml-[15%] border-1  bg-red-500 hover:bg-red-900  text-white mt-8">Read More<ion-icon name="arrow-round-forward"></ion-icon></button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home;