/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = function (knex) {
  return knex("genero_canciones").del()
    .then(function () {
      return knex("genero_canciones").insert([
        { id_canciones: 1, id_genero: 1 },
        { id_canciones: 1, id_genero: 2 },
        { id_canciones: 1, id_genero: 3 },
      ]);
    });
};
