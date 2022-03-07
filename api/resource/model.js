const db = require('../../data/dbConfig')

function findResource() {
    return db('resources')
}

async function add(newResource) {
    const [resource_id] = await db('resources').insert(newResource)

    return findResource(resource_id)
}

module.exports = {
    findResource,
    add
}