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
        
        const task = await Task.findById(id)

        res.status(200).send(task)

    } catch (error) {

        res.status(404).send(error)
    }
}

const updateTasks = async (req, res) => {
    try {
        const id = req.params.id

        const {label, description, dueDate, type} = req.body

        const task = await Task.updateOne({ _id: id }, {
            label: label,
            description: description,
            dueDate: dueDate,
            type: type
        })

        if (!task) {
            return res.status(404).send({ success: false, message: "Task not found with id " + id });
        }

    } catch (error) {
        
    }

}
module.exports = { getAllTask, createTask, deleteTask, getTaskById}