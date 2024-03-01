exports.up = function (knex) {
    return knex.schema.createTable('playlist', function (table) {
      table.increments('id').primary();
      table.text('nombre');
      table.integer('id_usuario');
  
      table.foreign('id_usuario').references('usuarios.id').onDelete('NO ACTION').onUpdate('NO ACTION');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('playlist');
  };
  