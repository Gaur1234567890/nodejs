const express = require('express');
const app = express();
const env = require('dotenv');
const {adminRoute} = require('./routes/adminRoute');
env.config();

app.use(express.json());
app.use('/admin',adminRoute);



let port = process.env.PORT;
app.listen(port,()=>{
    console.log('the process is running on port no ',port);
})
