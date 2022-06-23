exports.up = function(knex) {
    return knex.schema
      .createTable('users', (table) => {
        table.increments('patient_id').primary();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('avatar_url').notNullable();
        table.string('email');

        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
      .createTable('records', (table) => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.string('location' ).notNullable();
        table.binary('image')
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('width');
        table.string('length');
        table.string('special_info')

        table
          .foreign('patient_id')
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('posts').dropTable('users');
  };
