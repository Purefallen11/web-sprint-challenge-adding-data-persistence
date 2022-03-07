const express = require('express')

const Task = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Task.findTask()
        .then(task => {
        res.status(200).json(task)
        })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Task.add(req.body)
        .then(task => {
        res.status(201).json(task)
        })
    .catch(next)
})

router.use((err, req, res) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = router