
const { taskAlreadExist } = require('./controllers/TaskController');
const TaskController = require('./controllers/TaskController');

const router = require('express').Router();

router.post('/task', taskAlreadExist, TaskController.createTask);
router.get('/task', TaskController.listTasks);
router.put('/task/:id', TaskController.taskNotFound, TaskController.updateTask);
router.delete('/task/:id', TaskController.taskNotFound, TaskController.deleteTask);

module.exports = router