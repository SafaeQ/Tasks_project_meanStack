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
    completed: {
        type: Boolean,
        required: true,
    },
    dueDate: {
        type: Date,
        default: Date.now()
    },
    timestamps: {
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
}
}
)

module.exports = mongoose.model('Task', Tasks)