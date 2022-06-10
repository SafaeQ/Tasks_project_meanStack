const mongoose = require('mongoose')

const Tasks = new mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    type: {

    }
})

module.exports = mongoose.model('Task', Tasks)