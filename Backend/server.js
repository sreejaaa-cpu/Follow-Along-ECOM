const{app} = require("./app")
require("dotenv").config()

app.get("/test",async(req,res)=>{
    res.send("Iam Sreeja")
})




const port=process.env.PORT
app.listen(port,async()=>{
    console.log(`App is running on http://localhost:${port}`)
})







