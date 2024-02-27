exports.seed = function (knex) {
  // Borrar todos los registros de la tabla
  return knex("generos")
    .delete()
    .then(function () {
      return knex("generos").insert([
        { nombre_genero: "Rock nacional" },
        { nombre_genero: "Cumbia" },
        { nombre_genero: "Candombe" },
        { nombre_genero: "Pop Latino" },
        { nombre_genero: "Rock Internacional" },
        { nombre_genero: "Funk" },
        { nombre_genero: "Brasil" },
        { nombre_genero: "Folklore" },
        { nombre_genero: "Soul" },
        { nombre_genero: "Pop rock" },
        { nombre_genero: "Rock" },
        { nombre_genero: "Blues rock" },
        { nombre_genero: "Plena" },
        { nombre_genero: "Samba" },
        { nombre_genero: "Salsa" },
        { nombre_genero: "Nacional" },
        { nombre_genero: "Romantico" },
      ]);
    });
};
