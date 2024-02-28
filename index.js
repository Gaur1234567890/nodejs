const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const app = express();
env.config();

async function connect() {
    return await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.cxwdwkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
}
connect().then((d)=>{console.log('connected')
const students = mongoose.model('students',{name:String});
const obj = new students({name : 'pankaj'})
obj.save().then(d=>{console.log('save data successfully')}).catch(e=>{console.log('error to saved')})
const obj1 = new students({name : 'gaurav'})
obj1.save().then(d=>{console.log('save data successfully')}).catch(e=>{console.log('error to saved')})

const obj2 = new students({name : 'ravi'})
obj2.save().then(d=>{console.log('save data successfully')}).catch(e=>{console.log('error to saved')})



}).catch((e)=>{console.log('error ',e)});

let port = process.env.PORT;
app.listen(port,()=>{
    console.log('the process is running on port no ',port);
})
