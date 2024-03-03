exports.seed = function (knex) {
  return knex("musicos")
    .del()
    .then(function () {
      return knex("musicos").insert([
        { nombre_cantante: "buitres", tapa_cantante: "buitrez.jpg" },
        { nombre_cantante: "karibe con k", tapa_cantante: "karibeconk.jpg" },
        { nombre_cantante: "ruben rada", tapa_cantante: "rubenrada.jpg" },
        { nombre_cantante: "shakira", tapa_cantante: "shakira.jpg" },
        { nombre_cantante: "rosalia", tapa_cantante: "rosalia.jpg" },
        { nombre_cantante: "luana", tapa_cantante: "luana.jpg" },
        { nombre_cantante: "rolling stones", tapa_cantante: "rollingstone.jpg" },
        { nombre_cantante: "silk sonic", tapa_cantante: "silksonic.jpg" },
        { nombre_cantante: "tribalistas", tapa_cantante: "tribalistas.jpg" },
        { nombre_cantante: "larbanois-carrero", tapa_cantante: "larbanois.jpg" },
      ]);
    });
};
