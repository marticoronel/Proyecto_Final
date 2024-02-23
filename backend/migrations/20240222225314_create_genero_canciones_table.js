/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("genero_canciones", function (table) {
        table.integer("id_cancion").references("id").inTable("canciones");
        table.integer("id_genero").references("id").inTable("generos");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("genero_canciones");
};



