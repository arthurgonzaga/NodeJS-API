require("dotenv").config()
const express = require("express");
const app = express();
const { User } = require("./src/models/")


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.get("/api", (req, res)=>{
    res.json({
        success: 200,
        message: "It's working"
    })
})


app.post('/register', async (req, res) => {
    console.log(req.body)
    const user = await User.create(req.body);
    res.json(user);
  });

app.listen(process.env.APP_PORT, ()=>{
    console.log("Server is running on port ", process.env.APP_PORT)
})