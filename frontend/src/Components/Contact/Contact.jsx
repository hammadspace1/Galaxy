import React from "react";

const Contact = () => {
    return(
        <div className="md:w-[89%] bg-[#1A191E] px-3 md:px-0 py-5 md:py-11 md:ml-[20.3%]">
            <div className="pt-[3rem] flex">
            <input className="w-[23rem] h-11 border-2 border-white bg-[#1A191E] px-5 " type="text" placeholder="Search here" />
            <button className="w-[5rem] h-11 border-2 border-white bg-[#1A191E] hover:bg-red-500 ml-[-3px] hover:border-red-500 text-white text-[1.2rem]  "><ion-icon name="search"></ion-icon></button>
            </div>
            <div className="md:w-[51rem] md:ml-[-210px] mt-[5rem] flex-col ">
                <h1 className="text-white font-semibold text-[2.5rem]">Lets Contact Us</h1>
                <div className="md:w-[64rem] mt-[3rem] flex flex-wrap  justify-between">
                    <div className="flex-col leading-10">
                        <h1 className="text-white ml-[-147px] md:ml-[30px]">Your First Name</h1>
                        <input className="w-[18rem] md:w-[22rem] bg-[#1A191E] text-white border-b-2 border-white ml-[30px] md:ml-[268px] mt-5" type="text" placeholder="Robert Lee" />
                    </div>
                    <div className="flex-col mt-[3rem] md:mt-0 md:ml-[-230px] leading-10">
                        <h1 className="text-white ml-[-150px] md:ml-[-245px] ">Your Last Name</h1>
                        <input className="w-[18rem] md:w-[22rem] ml-[30px] md:ml-0 bg-[#1A191E] text-white border-b-2 border-white  mt-5" type="text" placeholder="Anderson" />
                    </div>
                </div>
                <div className="md:w-[64rem] mt-[3rem] flex flex-wrap  justify-between">
                    <div className="flex-col leading-10">
                        <h1 className="text-white ml[-450px] ml-[-147px] md:ml-[30px]">E-Mail Address</h1>
                        <input className="w-[18rem] md:w-[22rem] bg-[#1A191E] text-white border-b-2 border-white ml-[30px] md:ml-[268px] mt-5" type="text" placeholder="kevin.jones@mail.com
" />
                    </div>
                    <div className="flex-col mt-[3rem] md:mt-0 ml-[-230px] leading-10">
                        <h1 className="text-white ml-[115px] md:ml-0">What Is This About?</h1>
                        <select className="w-[18rem] md:w-[22rem] bg-[#1A191E] text-white border-b-2 border-white ml-[260px] md:ml-[210px] mt-9" type="text"  >
                            <option value="1">Personal Proposal</option>
                            <option value="1">Business Proposal</option>
                            <option value="1">Want to say Hello</option>
                        </select>
                    </div>
                </div> 
                <div className="w-[18rem] md:w-[64rem] mt-[3rem] flex-col">
                    <div className="flex-col leading-10">
                        <h1 className="text-white ml-[-130px] md:ml-[-400px]">Your message</h1>
                        <input className="w-[18rem] md:w-[48rem] bg-[#1A191E] text-white border-b-2 border-white ml-[30px] md:ml-[268px] mt-5" type="text" placeholder="Enter Your Message..." />
                        <button className="w-[9rem] h-10 border-1  bg-red-500 hover:bg-red-900  text-white ml-[-80px] md:ml-[-150px]  mt-[4rem]">Send Now<ion-icon name="arrow-round-forward"></ion-icon></button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;