/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex("clima")
    .del()
    .then(function () {
      return knex("clima").insert([
        { tipo_clima: "soleado" },
        { tipo_clima: "lluvioso" },
        { tipo_clima: "frío" },
        { tipo_clima: "cálido" },
        { tipo_clima: "nublado" },
      ]);
    });
};
