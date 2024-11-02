import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [data, setData] = useState({});
    const navigate = useNavigate()

    const handleInput = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }

    const submitPost = () => {
        if(data.email !== undefined && data.password !== undefined){
            axios.post('http://localhost:5000/login', {data}).then((res) => {
                alert(res.data.msg)
                sessionStorage.setItem("username", res.data.d[0].name);
                sessionStorage.setItem("email", res.data.d[0].email);
                sessionStorage.setItem("isLoggedIn", true);
                
                navigate('/admin');

            }).catch((error) => {
                console.log(error)
            })
        }else{
            alert("Please Fill Empty Fields First!")
        }
    }


    return(
        <div className="md:w-[89%] flex-col bg-[#1A191E] px-5 md:px-0 py-5 md:py-11 md:ml-[20.3%]">
            <h1 className="text-white  md:px-0 text-[3rem] md:text-[5rem]">Login</h1>
            <input className=" w-full md:w-[600px] h-10 bg-[#1A191E]  px-5  mt-10 border-2 border-white rounded-md text-white" name="email" id="email" onChange={handleInput} type="email" placeholder="Enter Your Email" />
            <input className=" w-full md:w-[600px] h-10 bg-[#1A191E]  px-5  mt-10 border-2 border-white rounded-md text-white" name="password" id="password" onChange={handleInput} type="password" placeholder="Enter Your Password" /><br />
            <button onClick={submitPost} className="w-[100px] h-10 bg-red-500 hover:bg-red-300 px-5 md:ml-[-495px]  mt-10 border-2 border-white rounded-md text-white">Login</button>
        </div>
    )
}

export default Login;