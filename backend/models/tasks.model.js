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
        type: String,
        required: true,
        enum: ['work', 'personal', 'growth']
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    dueDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Task', Tasks)