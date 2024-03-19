const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to database');
}).catch((err)=>{
    console.log('database connection failed');
    // console.log(err);
})
 