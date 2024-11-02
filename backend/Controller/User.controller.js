const {User} = require('../Models/User.model')

const Login = async (req,res) => {

    const {email, password} = req.body.data;

    try {
        const result = await User.find({email: email, password: password})
        if(result.length > 0){
            res.json({msg: "Login Successfully!", d: result})
        }else{
            res.json({msg: "Invalid!"})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { Login };