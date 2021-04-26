const mongoose = require("mongoose");
const bodyParser = require("body-parser");



const users = require("../models/user")
mongoose.connect('mongodb://localhost:27017/compony',{useNewUrlParser: true,useUnifiedTopology: true});
mongoose.connection.once('open',()=>{
    console.log("connection made")
}).on('error',(error)=>{
    console.log(error)
})

const getuser = async function(req,res){
    users.find()      
        .then(result => { 
            res.send(result)
            })  
        .catch(err => { 
            console.log(err);
        })
} 

const postuser = function(req,res){
    const user = new users({
        name:req.body.name,
        email:req.body.email,
        number:req.body.number
    })

    user.save()
    .then(result => {
        res.send("information saved")
    }).catch(err=>{
        console.log(err)
    }) 
}

const deleteUser = async (req, res) => { 
    try {
        const { id } = req.params;
        !id && res.send('enter id');
        await user
            .deleteOne({ _id: id })
            .then(() => {
                res.send('user deleted');
            })
            .catch(err => {
                return res.send(err);
            });
    } catch (err) {
        console.log('error', res.send(err));
    }
};

const updateUser = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            res.send('Enter your id');
        }
        const { id } = req.body;

        await users
            .findOneAndUpdate(
                { id: query },
                { $set: { number: number } },
                { new: true }
            )
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.send(err);
            });
        return;
    } catch (err) {
        res.send(err);
    }
};

module.exports = {getuser,deleteUser,postuser,updateUser};

