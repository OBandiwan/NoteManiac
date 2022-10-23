require('dotenv').config()


const express = require("express")
const app = express()

const Notes =require('./controllers/Notes/getNotes.js')

let port = process.env.PORT

app.use('/api',Notes)

app.listen(port, console.log(`server is running on PORT ${port}`))