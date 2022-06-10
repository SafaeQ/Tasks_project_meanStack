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

app.use('/', (req, res)=>{
    res.send('hello from backend')
})

// routes

// listen for requests
db()
    .catch((error) => {throw error})
    .then(()=> {app.listen(PORT, ()=>{console.log(`✌ my app is running`)})})