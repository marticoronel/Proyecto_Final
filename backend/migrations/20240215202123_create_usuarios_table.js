/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('usuarios', function (table) {
      table.increments('id').primary();
      table.string('serial');
      table.string('email');
      table.string('nombre_usuario');
      table.string('password');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('usuarios');
  };
  