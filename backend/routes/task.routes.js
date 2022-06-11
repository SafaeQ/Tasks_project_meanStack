const taskRouter = require('express').Router()

const { getAllTask, createTask, deleteTask, getTaskById } = require('../controllers/Task.controller')


    taskRouter.get('/', getAllTask)

    taskRouter.post('/add', createTask)

    taskRouter.delete('/:id', deleteTask)

    taskRouter.get('/:id', getTaskById)


module.exports = taskRouter;