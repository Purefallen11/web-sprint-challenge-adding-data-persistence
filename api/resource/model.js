const db = require('../../data/dbConfig')

function findResource() {
    return db('resources')
}

module.exports = {
    findResource
}