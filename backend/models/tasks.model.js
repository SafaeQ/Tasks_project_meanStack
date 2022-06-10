const mongoose = require('mongoose')

const Tasks = new mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    
})