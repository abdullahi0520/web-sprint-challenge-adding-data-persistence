const task = [
    {
        task_id: 1,
        task_description: 'task to become Alpha',
        task_notes: 'Go to House Alpha, and meet Macho Man!',
        task_completed: false,
        project_id: 1

    },
    {
        task_id: 2,
        task_description: 'task to become Omega',
        task_notes: 'Go to house Omega, and meet Introvert Ian!',
        task_completed: false,
        project_id: 2
    },
    {
        task_id: 3,
        task_description: 'task to become Beta',
        task_notes: 'I doubt you even want to become a beta lol',
        task_completed: false,
        project_id: 3
    }
]

exports.seed = async function (knex) {
    await knex('tasks').insert(task)
}