const { Blog } = require("../Models/Blog.model")


const CreateBlog = async (req, res) => {
    const { title, content, author, imageUrl } = req.body.data;


    const data = Blog({
        title: title,
        content: content,
        author: author,
        imageUrl: imageUrl,
        status: 0,
        date: new Date().toDateString()
    })

    try {

        await data.save();
        res.json("Data Added to Database")
    } catch (error) {
        console.log(error)
    }
}

const GetBlog = async (req, res) => {

    try {
        const data = await Blog.find({ status: 0 });

        if (data.length > 0) {
            res.json({ msg: "Data Fetched!", d: data })
        } else {
            res.json({ msg: "Sorry You Have'nt Posted Anything yet!" })
        }
    } catch (error) {
        console.log(error)
    }
}

const UpdateBlog = async (req, res) => {
    const {_id, title, author, content, imageUrl} = req.body.updateData;

    try {
        const filter = {_id: _id};
        const update = {title: title, author: author, content: content, imageUrl: imageUrl} 
        
        const data = await Blog.findOneAndUpdate(filter, update);

        if(Blog.title === title && Blog.content === content && Blog.author === author && Blog.imageUrl === imageUrl ){
            res.json({msg: "Not Updated!"})
        }else{
            res.json({msg: "Data Updated Successfully!"})
        }
    } catch (error) {
        console.log(error)
    }
}

const DeleteBlog = async (req, res) => {
    const { data } = req.body;
    try {
        const filter ={_id: data};
        const update = {status: 1};
        await Blog.findOneAndUpdate(filter, update);
            res.json("Data Deleted!")
    } catch (error) {
        console.log(error)
    }
}

module.exports = { CreateBlog, GetBlog, DeleteBlog, UpdateBlog};