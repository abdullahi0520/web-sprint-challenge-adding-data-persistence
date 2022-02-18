// build your `Task` model here
const db = require('../../data/dbConfig')
//SELECT t.*, project_name, project_description 
// from tasks as t JOIN projects as p on  t.project_id = p.project_id 

async function find() {
    const tasks = await db("tasks as t")
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.*', 'project_name', 'project_description')

    const results = []

    for (let i = 0; i < tasks.length; i++) {
        let result = {
        task_id: tasks[i].task_id,
        task_description: tasks[i].task_description,
        task_notes: tasks[i].task_notes,
        task_completed: tasks[i].task_completed === 0 ? false : true,
        project_name: tasks[i].project_name,
        project_description: tasks[i].project_description,
        }
        results.push(result)
    }
    return results
}


async function create(tasks) {
    const [id] = await db('tasks').insert(tasks)
    return db('tasks').where('task_id', id).first()
}

module.exports = {
    find,
    create
}