const db = require('../../data/dbConfig')

function findTask() {
    return db('task')
}

async function add(newTask) {
    const [task_id] = await db('task').insert(newTask)

    return findTask(task_id)
}

module.exports = {
    findTask,
    add
}