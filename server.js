const express = require("express")

const app = express()

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})

const notes = [
    {
        title:"test title 1",
        description:"test description 1"
    },
    {
        title:"test title 2",
        description:"test description 2"
    },
]