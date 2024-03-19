const express = require('express')
const cors = require('cors')


//DB
const database = require('./DB/db.js')

//ROUTES
const UserRoute = require('./Routes/UserRoute')
const AuthRoute = require('./Routes/AuthRoute')

const app = express()

//MIDDLEWARES
app.use(express.json()) 

app.use(cors())
app.use(UserRoute)
app.use(AuthRoute)

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal server error'
    return res.status(statusCode).json({
        success:false,
        error:message,
        statusCode
    })
})





const PORT = 8800
app.listen(PORT,()=>{
    console.log(`server started and listening on port ${PORT}`);
})