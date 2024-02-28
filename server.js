const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const app = express();
env.config();
app.use(express.json())

// create connection with mongodb

async function connect (){
    return await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.cxwdwkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
}
let po = connect();
po.then((d)=>{console.log('connected to data base ')
const friends = mongoose.model('frinds',{
    firstName : {type:String,required:true},
    lastName : String,
    Mobileno : Number,
    Hobbies : String
})
app.post('/friends',(req,res)=>{
    res.status(200).json({
        msg: 'successfully data entered'
    })

let obj = new friends({firstName : req.body.firstName , lastName:req.body.lastName , Mobileno : req.body.Mobileno ,Hobbies : req.body.Hobbies});
obj.save().then(d=>{console.log('saved data successfully')}).catch(e=>{console.log('error to save data')});

})

})


let port = process.env.PORT;
app.listen(port,()=>{
    console.log('the process is running on port no',port);
})
