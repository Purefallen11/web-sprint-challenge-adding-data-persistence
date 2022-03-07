
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('project_id')
            tbl.string('project_name').notNullable()
            tbl.string('project_description')
            tbl.boolean('project_completed').defaultTo(0)
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
            tbl.boolean('task_completed').defaultTo(0)
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
        .dropTableIfExist('projects')
        .dropTableIfExist('resources')
        .dropTableIfExist('task')
        .dropTableIfExist('project_resources')
    
    
    
};

//for the projects table
//- [ ] `project_id` - primary key
//   - [ ] `project_name` - required
//   - [ ] `project_description` - optional
//   - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not provided

//for the resource table
// - [ ] `resource_id` - primary key
//   - [ ] `resource_name` - required and unique
//   - [ ] `resource_description` - optional

//for task
//  - [ ] `task_id` - primary key
//   - [ ] `task_description` - required
//   - [ ] `task_notes` - optional
//   - [ ] `task_completed` - the database defaults it to `false` (integer 0) if not provided
//   - [ ]

//resource assignment
//- [ ] A **resource assignment** connects a resource and a project, and is stored in a `project_resources` table. You decide what columns to use.