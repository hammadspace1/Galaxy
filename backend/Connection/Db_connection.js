require('dotenv').config();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

const Connection = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('DataBase is Connected Successfully!')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {Connection};