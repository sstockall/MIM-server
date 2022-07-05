exports.up = function(knex) {
    return knex.schema
      .createTable('lesions', (table) => {
        table.increments('id').unique().primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.string('treatments').notNullable();
        table.string('addtional_info').notNullable();
        table.string('status').notNullable();
      })
      .createTable('terms', (table) => {
        table.increments('id').unique().primary();
        table.string('name').notNullable();
        table.string('definition').notNullable();
        table.string('example');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('records').dropTable('users');
  };
