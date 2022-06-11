const taskRouter = require('express').Router()

const { getAllTask, createTask, deleteTask, getTaskById } = require('../controllers/Task.controller')


    taskRouter.get('/', getAllTask)

    taskRouter.get('/add', createTask)

    taskRouter.get('/delete', deleteTask)

    taskRouter.get('/:id', getTaskById)
    

module.exports = taskRouter;