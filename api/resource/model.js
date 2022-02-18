// build your `Resource` model here
const db = require('../../data/dbConfig')

async function find() {
    return db('resources')
}

async function create(resource) {
    const [id] = await db('resources').insert(resource)
    return db('resources').where('resource_id', id).first()
}

module.exports = {
    find,
    create
}