exports.up = function (knex) {
    return knex.schema.createTable('playlist_canciones', function (table) {
      table.increments('id').primary();
      table.integer('id_playlist');
      table.integer('id_canciones');
  
      table.foreign('id_canciones').references('canciones.id').onDelete('NO ACTION').onUpdate('NO ACTION');
      table.foreign('id_playlist').references('playlist.id').onDelete('NO ACTION').onUpdate('NO ACTION');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('playlist_canciones');
  };
  