const express = require('express');

const helmet = require('helmet');
const CORS = require('cors');

// const projectRouter = require('../projects/projectsRouter.js');

const server = express();

server.use(helmet());
server.use(CORS());
server.use(express.json());

// server.use('/api/projects', projectRouter)

server.get('/', (req, res) => {
    res.send(`<h1>Hello World</h1>`)
})

module.exports = server;