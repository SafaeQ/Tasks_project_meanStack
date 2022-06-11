const taskRouter = require('express').Router()

const { getAllTask, createTask, deleteTask, getTaskById, updateTasks } = require('../controllers/Task.controller')

const checkAuth = require('../middlewares/isAuth')


    taskRouter.get('/', checkAuth, getAllTask)

    taskRouter.post('/add',checkAuth, createTask)

    taskRouter.delete('/:id',checkAuth, deleteTask)

    taskRouter.get('/:id',checkAuth, getTaskById)

    taskRouter.put('/:id',checkAuth, updateTasks)


module.exports = taskRouter;