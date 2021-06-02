require("dotenv").config()
const express = require("express");
const app = express();
const { User } = require("./src/models/")
const  userRouter = require("./src/routes/user-router")


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.use("/api/users", userRouter)


app.get("/api", (req, res)=>{
    res.json({
        success: 200,
        message: "It's working"
    })
})

app.listen(process.env.APP_PORT, ()=>{
    console.log("Server is running on port ", process.env.APP_PORT)
})