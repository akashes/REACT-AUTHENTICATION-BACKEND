const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const PORT = 8800
app.listen(PORT,()=>{
    console.log(`server started and listening on port ${PORT}`);
})