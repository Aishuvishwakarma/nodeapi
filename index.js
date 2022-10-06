const express = require('express')

const app = express();

// require('./src/models/UserModel')

require('dotenv').config();

require('cors')();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api',require('./src/routes/index'))


app.listen(process.env.PORT,()=>console.log(`server running on port ${process.env.PORT}`))