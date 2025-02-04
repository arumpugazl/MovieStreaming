const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const MongodbConnect = require('./Config/db')


const app = express()
app.use(express.json())
app.use(cors())
app.use(helmet())

//Connect To Database
MongodbConnect()

app.use('/',(req,res) => {
    res.send("Hello World")
    console.log("Request received")
})

app.listen(3000,() => console.log("Server Running on port 3000"))


