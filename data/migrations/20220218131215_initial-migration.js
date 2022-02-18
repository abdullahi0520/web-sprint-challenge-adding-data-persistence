
exports.up = async function(knex) {
  await knex.schema
  .createTable('project', table => {
      table.increments('project_id')
      table.string('project_name', 200).notNullable().unique()
      table.string('project_description')
      table.integer('project_completed').defaultTo(0).unsigned()
  })
  .createTable('resource', table => {
      table.increments('resource_id')
      table.string('resource_name', 200).notNullable().unique()
      table.string('resource_description')
  })
  .createTable('task', table => {
    table.increments('task_id')
    table.string('task_description', 200).notNullable()
    table.string('task_notes')
    table.integer('task_completed').defaultTo(0).unsigned()
    table.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('project')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
})
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('project')
    .dropTableIfExists('resource')
    .dropTableIfExists('task')
};
