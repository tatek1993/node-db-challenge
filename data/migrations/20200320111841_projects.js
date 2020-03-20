
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.varchar('name', 255)
            .unique()
            .notNullable();
        tbl.varchar('description', 500);
        tbl.boolean('completed').defaultTo(false);       
  })

  .createTable('tasks', tbl => {
        tbl.increments();
        tbl.varchar('description', 250)
            .notNullable()
            .unique()
        tbl.varchar('notes', 500);
        tbl.boolean('completed').defaultTo(false);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');    
  })
  
  .createTable('resources', tbl => {
        tbl.increments();
        tbl.varchar('name', 255)
            .notNullable()
            .unique();
        tbl.varchar('description', 500);    
  })

  .createTable('project_resources', tbl => {
        tbl.increments();
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');     
  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
};
