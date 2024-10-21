const express = require("express");
const { Login } = require("../Controller/User.controller")
const { CreateBlog, GetBlog, DeleteBlog, UpdateBlog} = require("../Controller/Blog.controller")


const router = express.Router()

router.post('/login', Login);
router.post('/createBlog', CreateBlog);
router.post('/getBlog', GetBlog);
router.post('/deleteBlog', DeleteBlog);
router.post('/updateBlog', UpdateBlog);
module.exports = router;