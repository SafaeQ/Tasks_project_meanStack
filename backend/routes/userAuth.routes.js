const userRouter = require('express').Router()

const {signup, login, logout} = require('../controllers/auth/usersAuth')


    userRouter.post('/register', signup)

    userRouter.post('/login', login)

    userRouter.post('/logout', logout)


module.exports = userRouter