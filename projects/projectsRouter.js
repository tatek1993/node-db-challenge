const router = require('express').Router();
const Proj = require('./projectsModel.js');

router.get('/', (req, res) => {
    Proj.get()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(() => {
            res.status(500).json({ message: 'There was a problem finding the project(s) you were looking for!' })
        })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    Proj.get(id)
        .then(project => {
            
            res.status(200).json(project)
        })
        .catch(() => {
            res.status(500).json({ message: 'There was a problem finding the project you were looking for!' })
        })
})

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
    Proj.get(id)
        .then(project => {
            Proj.getTasks(id)
                .then(tasks => {
                    project.tasks = tasks;
                    res.status(200).json(project);
                })
                .catch(() => {
                    res.status(500).json({ message: 'There was a problem finding the tasks you were looking for!' })
                })
        })
        .catch(() => {
            res.status(500).json({ message: 'There was a problem finding the project you were looking for!' })
        });
    
})

router.post('/', (req, res) => {
    const projectData = req.body; 
    Proj.add(projectData)
        .then(project => {
            res.status(200).json(project)
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new project' });
          });
})

module.exports = router;