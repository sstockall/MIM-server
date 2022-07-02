exports.up = function(knex) {
    return knex.schema
      .createTable('users', (table) => {
        table.string('id').unique().primary();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('avatar_url');
        table.string('email');
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
      .createTable('records', (table) => {
        table.string('id').unique().primary();
        table.string('user_id').notNullable();
        table.string('location' ).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('width');
        table.string('length');
        table.string('texture');
        table.string('coloring');
        table.string('special_info');
        table
          .foreign('user_id')
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('records').dropTable('users');
  };
