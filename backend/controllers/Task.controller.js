const Task = require('../models/tasks.model')


const getAllTask = async (req, res) => {
    try {
        const task = await Task.find({})

        task ? res.json(task) : res.status(404).send('user not found')

    } catch (error) {

        res.status(404).send(error)

        throw new Error('No User Found')
    }
}

const createTask = async (req, res) => {
    try {
        const {label, discription, type, dueDate} = req.body

        const task = await Task.create({
            label,
            discription,
            type,
            dueDate
        })

        const result = await task.save()
        
        res.status(200).send(result)

    } catch (error) {

        res.status(400).send(error)
    }
}

const deleteTask = async (req, res) => {
    try {
        const id = req.params.id

        const taks = await Task.findByIdAndRemove(id)

        res.status(200).json({taks, msg: 'Task was deleted'})

    } catch (error) {

        res.status(404).send(error)
    }
}

const getTaskById = async (req, res) => {
    try {
        const id = req.params.id 

        const task = await Task.find(id)

        res.status(200).send(task)

    } catch (error) {
        
        res.status(404).send(error)
    }
}
module.exports = { getAllTask, createTask, deleteTask, getTaskById}