const express = require("express")

const app = express();

app.get("/",(req, res)=>{
    res.send("this is dhanraj testing ")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("server is running")
})