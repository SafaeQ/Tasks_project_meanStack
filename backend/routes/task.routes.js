const taskRouter = require('express').Router()

const { getAllTask, createTask, deleteTask, getTaskById, updateTasks } = require('../controllers/Task.controller')

const checkAuth = require('../middlewares/isAuth')


    taskRouter.get('/', getAllTask)

    taskRouter.post('/add', createTask)

    taskRouter.delete('/:id', deleteTask)

    taskRouter.get('/:id', getTaskById)

    taskRouter.put('/:id', updateTasks)


module.exports = taskRouter;