const express = require("express");
const bodyParser = require("body-parser");
const userrouter = require("./routes/user");

const app = express();
const port = 5000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/user',userrouter);
 
app.get('/',(req,res)=>{
    res.send("This is home page")
})

app.listen(port,()=> console.log("listening..."))