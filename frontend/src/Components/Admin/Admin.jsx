import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {

    const check = sessionStorage.getItem('isLoggedIn');

    useEffect(() => {
        if (!check) {
            navigate('/login');
        }
    },[])
    const logOut = () => {
        sessionStorage.clear();
        alert("Log Out Successfully!")
        navigate("/login")
    }

    const [data, setData] = useState({})
    const navigate = useNavigate();

    const handleInput = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)

        fileReader.addEventListener('load', () =>{
            setData({ ...data, imageUrl: fileReader.result})
        })
    }

    const submitPost = () => {
        if(data.title !== undefined && data.author !== undefined && data.content !== undefined && data.imageUrl !== undefined){
            axios.post('http://localhost:5000/createBlog', {data}).then((res) => {
                alert(res.data);
                // console.log(res.data);
                navigate("/");
            }).catch((error) => {
                console.log(error)
            })
        } else {
            alert('Invalid from frontend!')
        }
    }
    // console.log(data);


    return(
        <div className="md:w-[89%] flex-col bg-[#1A191E] px-5 md:px-0 py-5 md:ml-[20.3%]">
            <h1 className="text-white  md:px-0 text-[3rem] md:text-[5rem]">Post Something</h1>
            <input className=" w-full md:w-[600px] h-10 bg-[#1A191E]  px-5  mt-5 border-2 border-white text-white" name="title" id="title" onChange={handleInput} type="text" placeholder="Enter Title" />
            <input className=" w-full md:w-[600px] h-10 bg-[#1A191E]  px-5  mt-5 border-2 border-white text-white" name="author" id="author" onChange={handleInput} type="text" placeholder="Enter Your Name" />
            <input className=" w-full md:w-[600px] h-[150px] bg-[#1A191E] px-5  mt-5 border-2 border-white justify-start text-white" name="content" id="content" onChange={handleInput} type="text" placeholder="Enter Content" />
            <input className=" w-full md:w-[600px] h-10 bg-[#1A191E]   mt-5  text-white" name="imageUrl" id="imageUrl" onChange={handleImage} type="file" /><br />
            <button onClick={submitPost} className="w-[100px] rounded h-10 bg-red-500 hover:bg-red-300 px-5  mt-5 border-2 border-white text-white">Post</button>
            <div className="w-full flex justify-between mt-10 md:px-[15rem] ">
            <Link to='/edit' className="w-[150px] font-bold pt-[.3rem] underline text-red-500  ">Delete/Update</Link>
            <button onClick={logOut} className="w-[150px] font-bold pt-[.3rem] underline text-red-500  ">LogOut</button>
            </div>
        </div>
    )
}

export default Admin;