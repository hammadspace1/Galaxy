import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
    const [data, setData] = useState([]);
    const [updateData, setUpdateData] = useState({});
    const [temData, setTemData] = useState('')
    const [open, setOpen] = useState(false);
    const check = sessionStorage.getItem('isLoggedIn');

    const navigate = useNavigate();

    useEffect(() => {
        if (!check) {
            navigate('/login');
        }
    },[])

    useEffect(() => {
        axios.post('http://localhost:5000/getBlog').then((res) => {
            setData(res.data.d)
        }, [deletePost, update])
    })

    const handleImage=(e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.addEventListener('load', () => {
            setUpdateData({...updateData, imageUrl : fileReader.result})
        })
    }

    const handleUpdate = (e) => {
        setUpdateData({
            ...updateData, [e.target.name]: e.target.value, _id: temData._id
        });
    }

    const postUpdate = (e) => {
        setOpen(!open)
        setTemData(e)

    }

    const update = () => {
        if(updateData.author !== undefined && updateData.title !== undefined && updateData.content !== undefined && updateData.imageUrl !== undefined ){
            axios.post('http://localhost:5000/updateBlog', {updateData}).then((res) => {
                alert(res.data.msg)
            }).catch((error) => {
                console.log(error)
            })
        }else{
            alert("Please Fill All the Fields!")
        }
        setOpen(!open);
    }

    const deletePost = (data) => {
        axios.post("http://localhost:5000/deleteBlog", { data }).then((res) => {
            alert(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <div className="md:w-[89%] flex flex-wrap bg-[#1A191E] px-3 md:px-0 py-5 md:py-11 md:ml-[20.3%]">
            <div className="flex flex-col bg-[#1A191E] md:w-[55%]">
                <div>
                    {data.map((rdata, index) => (
                        <div key={index} className="flex flex-col w-full mt-10">
                            <img className="w-full object-cover md:h-[27rem]" src={rdata.imageUrl} alt="" />
                            <h1 className="text-white text-[1.5rem] md:text-[2rem] font-semibold text-left pt-3 md:leading-10"><Link>{rdata.title}</Link></h1>
                            <div className="flex mt-5">
                                <p className="text-white "><Link>{rdata.date}</Link></p>
                                <p className="text-white ml-[3rem] "><Link>Photography</Link></p>
                            </div>
                            <p className="text-white mt-5 text-left font-extralight">{rdata.content}</p>
                            <div className="flex  mt-5">
                            <button onClick={() => (deletePost(rdata._id))} className="w-[9rem] h-10 border-1  bg-red-500 hover:bg-red-900  text-white ">Delete Post<ion-icon name="arrow-round-forward"></ion-icon></button>
                            <button onClick={() => (postUpdate(rdata))} className="w-[9rem] h-10 border-1 ml-10  bg-green-500 hover:bg-green-900   text-white">Update Post<ion-icon name="arrow-round-forward"></ion-icon></button>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            {open && (
                <div className=" fixed left-[0px] top-[3rem] md:left-[1050px] w-full md:w-[45%]  flex flex-col bg-[#1A191E]  ">
                <div className="px-5 md:px-0">
                    <div className="flex ml-[-20px] md:ml-[-40px] bg-[#1A191E] ">
                    <h1 className="text-white text-[2rem] md:text-[3rem]">Update Something</h1>
                    <button onClick={() => setOpen(!open)} className="text-white ml-[30px] h-[85px] bg-red-500 hover:bg-red-300 text-[4rem]"><ion-icon name='close'></ion-icon></button>
                    </div>
                    <input className=" w-full md:ml-[-80px]  h-10 bg-[#1A191E]  px-5  mt-5 border-2 border-white text-white" onChange={handleUpdate} name="title" id="title"  type="text" placeholder={`Enter New Title old is  "${temData.title}"`} />
                    <input className=" w-full md:ml-[-80px] h-10 bg-[#1A191E]  px-5  mt-5 border-2 border-white text-white" onChange={handleUpdate} name="author" id="author"  type="text" placeholder={`Enter New Author old is  "${temData.author}"`} />
                    <input className=" w-full md:ml-[-80px] h-[150px] bg-[#1A191E] px-5  mt-5 border-2 border-white justify-start text-white" onChange={handleUpdate} name="content" id="content"  type="text" placeholder={`Enter New Content old is  "${temData.content}"`} />
                    <input className=" w-full md:ml-[-80px] h-10 bg-[#1A191E]   mt-5  text-white" onChange={handleImage} name="imageUrl" id="imageUrl"  type="file" /><br />
                    <button onClick={update} className="w-[100px] rounded h-10 bg-red-500 hover:bg-red-300 px-5 ml-[-230px] md:ml-[-650px] mt-8 border-2 border-white text-white">Update</button>
                    
                </div>
            </div>
            )}

        </div>
    )
}

export default Edit;