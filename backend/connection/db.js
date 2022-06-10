const mongoose = require('mongoose')

const dotenv = require('dotenv').config()

function db(){
    mongoose.connect(process.env.DATABASE, {useNewUrlParser : true}, err => {
        console.log('👏 Connected with db');
    })
}

module.exports = db;