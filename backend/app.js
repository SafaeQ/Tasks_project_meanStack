const express = require('express')

const db = require('./connection/db')

// set up express app
const app = express()


const PORT = process.env.PORT || 9898


// middlewares
app.use('/', (req, res)=>{
    res.send('hello from backend')
})


// listen for requests
db()
    .catch((error) => {throw error})
    .then(()=> {app.listen(PORT, ()=>{console.log(`✌ my app is running`)})})