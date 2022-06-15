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
    dueDate: {
        type: Date,
        default: Date.now()
    }
},
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = mongoose.model('Task', Tasks)