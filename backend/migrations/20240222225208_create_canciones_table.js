/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("canciones", function (table) {
        table.increments("id").primary();
        table.text("nombre_cancion");
        table.integer("id_musico");
        table.integer("id_disco");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("canciones");
};
