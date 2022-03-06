
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('project_id')
            tbl.string('project_name').notNullable()
            tbl.string('project_description')
            tbl.boolean('project_completed').defaultTo(0)
    })
};


exports.down = function(knex) {
return knex.schema.dropTableIfExist('projects')
};


//- [ ] `project_id` - primary key
//   - [ ] `project_name` - required
//   - [ ] `project_description` - optional
//   - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not provided
