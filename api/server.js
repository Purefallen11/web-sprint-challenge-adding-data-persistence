const express = require('express')
const resourceRouter = require('./resource/router')
const projectsRouter = require('./project/router')
const server = express()

server.use(express.json())

server.use('/api/resources', resourceRouter)
server.use('/api/projects', projectsRouter)


module.exports = server