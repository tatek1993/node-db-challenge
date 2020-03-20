const router = require('express').Router();
const Task = require('./tasksModel.js');

router.get('/', (req, res) => {
    Task.get()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(() => {
            res.status(500).json({ message: 'There was a problem finding the task(s) you were looking for!' })
        })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    Task.get(id)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(() => {
            res.status(500).json({ message: 'There was a problem finding the task you were looking for!' })
        })
})

router.post('/', (req, res) => {
    const taskData = req.body; 
    Task.add(taskData)
        .then(task => {
            res.status(200).json(task)
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new task' });
          });
})

module.exports = router;