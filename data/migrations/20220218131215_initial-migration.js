
exports.up = async function(knex) {
  await knex.schema
  .createTable('projects', table => {
      table.increments('project_id')
      table.string('project_name', 200).notNullable().unique()
      table.string('project_description')
      table.integer('project_completed',0).defaultTo(0).unsigned()
  })
  .createTable('resources', table => {
      table.increments('resource_id')
      table.string('resource_name', 200).notNullable().unique()
      table.string('resource_description')
  })
  .createTable('tasks', table => {
    table.increments('task_id')
    table.string('task_description', 200).notNullable()
    table.string('task_notes')
    table.integer('task_completed', 0).defaultTo(0).unsigned()
    table.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
  })
  .createTable('project_resources', table => {
      table.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
    table.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('resource_id')
      .inTable('resources')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
  })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
