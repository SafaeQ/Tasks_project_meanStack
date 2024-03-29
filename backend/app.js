const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./connection/db')
require('dotenv').config();

const PORT = process.env.PORT || 9898

// set up express app
const app = express()


// middlewares
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors({ origin: true }))


// routes
const userRouter = require('./routes/userAuth.routes')

const taskRouter = require('./routes/task.routes')

app.use('/', userRouter, taskRouter)


// listen for requests
db().catch((err) => { throw err }).then(()=> {app.listen(PORT, ()=>{ console.log(`✌ my app is running`) })})