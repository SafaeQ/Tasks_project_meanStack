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

    },
    dueDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Task', Tasks)