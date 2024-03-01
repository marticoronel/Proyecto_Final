exports.seed = function (knex) {
  return knex("musicos")
    .del()
    .then(function () {
      return knex("musicos").insert([
        { nombre_cantante: "buitres", tapa_cantante: "buitrez.png" },
        { nombre_cantante: "karibe con k", tapa_cantante: "karibeconk.png" },
        { nombre_cantante: "ruben rada", tapa_cantante: "rubenrada.png" },
        { nombre_cantante: "shakira", tapa_cantante: "shakira.png" },
        { nombre_cantante: "rosalia", tapa_cantante: "rosalia.png" },
        { nombre_cantante: "luana", tapa_cantante: "buitrez.png" },
        { nombre_cantante: "rolling stones", tapa_cantante: "rollingstone.png" },
        { nombre_cantante: "silk sonic", tapa_cantante: "silksonic.png" },
        { nombre_cantante: "tribalistas", tapa_cantante: "tribalistas.png" },
        { nombre_cantante: "larbanois-carrero", tapa_cantante: "larbanois.png" },
      ]);
    });
};
