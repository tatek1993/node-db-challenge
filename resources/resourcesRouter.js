const router = require('express').Router();
const Resource = require('./resourcesModel.js');

router.get('/', (req, res) => {
    Resource.get()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(() => {
            res.status(500).json({ message: 'There was a problem finding the resource(s) you were looking for!' })
        })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    Resource.get(id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(() => {
            res.status(500).json({ message: 'There was a problem finding the resource you were looking for!' })
        })
})

router.post('/', (req, res) => {
    const resData = req.body; 
    Resource.add(resData)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new resource' });
          });
})

module.exports = router;