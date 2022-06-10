const userRouter = require('express').Router()

const {signup} = require('../controllers/auth/usersAuth')


    userRouter.post('/register', signup)


module.exports = userRouter