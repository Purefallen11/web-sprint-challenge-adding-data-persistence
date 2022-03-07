
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('project_id')
            tbl.string('project_name').notNullable()
            tbl.string('project_description')
            tbl.boolean('project_completed').defaultTo('false')
        })
        .createTable('resources', tbl => {
            tbl.increments('resource_id')
            tbl.string('resource_name').unique().notNullable()
            tbl.string('resource_description')
        })
        .createTable('task', tbl => {
            tbl.increments('task_id')
            tbl.string('task_description').notNullable()
            tbl.string('task_notes')
            tbl.boolean('task_completed').defaultTo('false')
        })
        .createTable('project_resources', tbl => {
            tbl.increments('project-resources_id')
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('CASCADE')
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource_id')
                .inTable('resources')
                .onDelete('CASCADE')
    })
};


exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('task')
        .dropTableIfExists('project_resources')
};