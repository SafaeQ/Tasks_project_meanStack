const mongoose = require('mongoose')

require('dotenv').config()


async function db(){
    await mongoose.connect(process.env.DATABASE, {useNewUrlParser : true}, err => {
        console.log('👏 Connected with db');
    })
}

module.exports = db;