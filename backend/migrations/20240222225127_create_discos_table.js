/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("discos", function (table) {
        table.increments("id").primary();
        table.integer("id_musico").references("id").inTable("musicos");
        table.text("nombre_disco");
        table.text("tapa_disco");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("discos");
};





