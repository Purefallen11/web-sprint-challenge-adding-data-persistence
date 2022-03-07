const db = require('../../data/dbConfig')

function findResource() {
    return db('resources')
}

function add(newResource) {
    return db('resources')
        .insert(newResource)
        .then(([resource_id]) => {
        return findResource(resource_id)
    })
}

module.exports = {
    findResource
}