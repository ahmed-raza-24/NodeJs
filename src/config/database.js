require('dotenv').config();
const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect(process.env.MONGODB_CONNECTION)
    .then(()=>{
        console.log("Connected to Database")
    })
}

module.exports = connectToDb