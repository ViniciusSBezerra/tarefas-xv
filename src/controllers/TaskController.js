
const Task = require('../database/models/Tasks');

const crypto = require('crypto');

module.exports = {

    async taskAlreadExist(req, res, next) {
        const { taskName } = req.body;

        const taskAlreadExist = await Task.findOne({ where: { taskName } });

        if (taskAlreadExist) {
            return res.status(403).json({ type: "error", message: "Task already exists" });
        }

        return next();

    },

    async taskNotFound(req, res, next) {
        const { id } = req.params;

        const taskNotFound = await Task.findOne({ where: { id } });

        if (!taskNotFound) {
            return res.status(404).json({ type: "error", message: "Task not found" });
        }

        return next();

    },

    async createTask(req, res) {
        const { taskName, task } = req.body;

        const id = crypto.randomBytes(10).toString('hex');

        try {
            Task.create({
                id,
                taskName,
                task
            })

            return res.status(201).json({ type: "success", message: "task created successfully" });

        } catch (error) {



            return res.status(400).json({ type: "error", message: "error registering task" });
        }
    },

    async listTasks(req, res) {
        const tasks = await Task.findAll({})

        return res.status(200).json({ tasks: tasks });
    },

    async updateTask(req, res) {
        const { taskName, task } = req.body;

        const { id } = req.params;

        try {
            await Task.update({ taskName, task }, { where: { id } })

            return res.status(200).json({ type: "success", message: "task changed successfully" })
        } catch (error) {
            return res.status(400).json({ type: "error", message: "error changing task" })
        }
    },

    async deleteTask(req, res) {
        const { id } = req.params;

        try {
            Task.destroy({ where: { id } });

            return res.status(200).json({ type: "success", message: "task deleted successfully" })
        } catch (error) {
            return res.status(400).json({ type: "error", message: "error deleting task" })
        }
    }

}