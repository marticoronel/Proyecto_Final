exports.seed = function (knex) {
  return knex("musicos")
    .del()
    .then(function () {
      return knex("musicos").insert([
        { nombre_cantante: "buitres" },
        { nombre_cantante: "karibe con k" },
        { nombre_cantante: "ruben rada" },
        { nombre_cantante: "shakira" },
        { nombre_cantante: "rosalia" },
        { nombre_cantante: "luana" },
        { nombre_cantante: "rolling stones" },
        { nombre_cantante: "silk sonic" },
        { nombre_cantante: "tribalistas" },
        { nombre_cantante: "larbanois-carrero" },
      ]);
    });
};
