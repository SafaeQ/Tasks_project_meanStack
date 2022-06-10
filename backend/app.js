const express = require('express')


const app = express()


app.use('/', (req, res)=>{
    res.send('hello from backend')
})

app.listen(9898, ()=>{console.log(`✌ my app is running`)})