const resource = [
    {
        resource_id: 1,
        resource_name: 'Mr Macho',
        resource_description: 'Meet, Macho Man!',
        
    },
    {
        resource_id: 2,
        resource_name: 'Introvert Ian',
        resource_description: 'Meet, Introvert Ian!',
        
    },
    {
        resource_id: 3,
        resource_name: 'Beta Bob',
        resource_description: 'Meet Beta Bob',
        
    }
]

exports.seed = async function (knex) {
    await knex('resource').insert(resource)
}