const project = [
    {
        project_id: 1,
        project_name: 'Project Alpha',
        project_description: 'Hoorah, Macho Man!',
        project_completed: false
    },
    {
        project_id: 2,
        project_name: 'Project Omega',
        project_description: 'Silent, but Deadly!',
        project_completed: false
    },
    {
        project_id: 3,
        project_name: 'Project Beta',
        project_description: 'Second is First Loser!',
        project_completed: false
    }
]

exports.seed = async function (knex) {
    await knex('project').insert(project)
}