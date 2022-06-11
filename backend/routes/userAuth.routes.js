const userRouter = require('express').Router()

const {signup, login} = require('../controllers/auth/usersAuth')


    userRouter.post('/register', signup)

    userRouter.post('/login', login)


module.exports = userRouter