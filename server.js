require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./config/mongoDBConfig')
const bankRouter = require('./routes/bankRouter')
app.use(express.json())
app.use('/', bankRouter)
connectDB()
app.listen(process.env.PORT, console.log("listening"));