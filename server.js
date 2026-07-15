require('dotenv').config();
const app = require("./src/app")

const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect(process.env.MONGODB_CONNECTION)
    .then(()=>{
        console.log("Connected to Database")
    })
}

connectToDb()


app.listen(3000, (req, res)=>{
    console.log("server is running on port 3000")
})
