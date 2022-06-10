const mongoose = require('mongoose')

const Users = mongoose.Model(
    'Users',
    new mongoose.Schema({
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        }
    })
)

module.exports = Users;