// console.log('okk');

const express = require('express');
const env = require('dotenv');
const mongoose  = require('mongoose');
env.config();
const app = express();

// connection in mongodb

async function connect(){
    return await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.cxwdwkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
}
let po = connect();
po.then(d=>{console.log('connected to database')
const student = mongoose.model('students',{
    name:{type:String ,required:true},
    email:String,
    password:String,
    hobbies :String
})
app.post('/getstudent',(req,res)=>{
res.status(200).json({msg:"data successfully entered"});

let obj1 = new student({name:req.query.name, email:req.query.email , password:req.query.password , hobbies:req.query.hobbies});
obj1.save().then(d=>{console.log('save data successfully')}).catch(e=>{console.log('data not save ')})


})


}).catch(e=>{console.log('error to connect database')});


let port = process.env.PORT;
app.listen(port,()=>{
    console.log('the process is running on port no',port);
})