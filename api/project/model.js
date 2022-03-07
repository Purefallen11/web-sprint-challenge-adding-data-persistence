const db = require('../../data/dbConfig')

function findProject() {
    return db('projects')
}

async function add(newProject) {
    const [project_id] = await db('projects').insert(newProject)

    return findProject(project_id)
}

module.exports = {
    findProject,
    add
}