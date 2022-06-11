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
    } catch (error) {
        
    }
}
module.exports = { getAllTask }