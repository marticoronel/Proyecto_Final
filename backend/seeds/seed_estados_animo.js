/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex("estados_animo")
    .del()
    .then(function () {
      return knex("estados_animo").insert([
        { estado_animo: "feliz" },
        { estado_animo: "melancólico" },
        { estado_animo: "enérgico" },
        { estado_animo: "tranquilo" },
        { estado_animo: "ansioso" },
      ]);
    });
};
