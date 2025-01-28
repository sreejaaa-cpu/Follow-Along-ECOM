
const {app} =require("./app")
require("dotenv").config()


app.get("/test",async(req,res)=>{
    res.send("hello......")
})

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`app is running on http://localhost:${port}`)
})