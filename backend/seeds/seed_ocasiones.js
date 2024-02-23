/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex("ocasiones")
    .del()
    .then(function () {
      return knex("ocasiones").insert([
        { nombre_actividad: "Ejercicio físico" },
        { nombre_actividad: "Limpieza" },
        { nombre_actividad: "Celebración" },
        { nombre_actividad: "Dormir" },
        { nombre_actividad: "Meditación" },
        { nombre_actividad: "Socializar" },
        { nombre_actividad: "Estudiar" },
        { nombre_actividad: "Relajación" },
        { nombre_actividad: "Viajar" },
      ]);
    });
};
