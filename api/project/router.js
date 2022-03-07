// build your `/api/projects` router here
// - [ ] `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

// - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

const express = require('express')

const Project = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Project.findProject()
        .then(project => {
        res.status(200).json(project)
        })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Project.add(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})

router.use((err, req, res) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = router