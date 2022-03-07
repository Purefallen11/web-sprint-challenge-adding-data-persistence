// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`
const express = require('express')


const Resource = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Resource.findResource()
        .then(resource => {
        res.status(200).json(resource)
        })
        .catch(err){
        res.status(500).json({message: err.message})
    }
})

module.exports = router