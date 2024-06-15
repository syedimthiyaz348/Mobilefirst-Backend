require('./mongo')
const express = require('express');
const user = require('./user')
const app = express();
app.use(express.json());
const jwt = require("jsonwebtoken")
const cors = require('cors');
app.use(cors());

app.get('/',async (req,res) => {
    //let data = await user.find({})
    res.send("Hello World")    
})

app.get('/data', async (req, res) => {
    let data = await user.find({})
    res.send(data);
})

app.post('/login', async (req, res) => {
    let name = req.body.username;
    let userPassword = req.body.password
    let data1 = await user.findOne({username:name});
    if (data1){
        if (userPassword === data1.password){
            const payload = {username : data1.username}
            const jwtToken = jwt.sign(payload, "MY_SECRET");
            res.send({jwtToken})
        }
        else{
            const error_msg = "Password Incorrect"
            res.send({error_msg})
        }
    }else{
        res.send("Not Exists")
    }
})

app.post('/signup',async (req, res) => {
    console.log(req.body)
    let data = await user(req.body);
    let result = await data.save();
    console.log(result)
    res.send(result)
})

app.listen(3000, () => {
    console.log("Server Started")
})


module.exports = app