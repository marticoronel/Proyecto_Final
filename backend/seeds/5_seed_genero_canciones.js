/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex("genero_canciones")
  .del()
  .then(function () {
      return knex("genero_canciones").insert([
        { id_cancion: 1, id_genero: 1 },
        { id_cancion: 1, id_genero: 11 },
        { id_cancion: 1, id_genero: 12 },
        // { id_cancion: 2, id_genero: 1 },
        // { id_cancion: 2, id_genero: 11 },
        // { id_cancion: 2, id_genero: 12 },
        // { id_cancion: 3, id_genero: 1 },
        // { id_cancion: 3, id_genero: 11 },
        // { id_cancion: 3, id_genero: 12 },
        // { id_cancion: 4, id_genero: 2 },
        // { id_cancion: 4, id_genero: 13 },
        // { id_cancion: 4, id_genero: 15 },
        // { id_cancion: 5, id_genero: 2 },
        // { id_cancion: 5, id_genero: 13 },
        // { id_cancion: 5, id_genero: 15 },
        // { id_cancion: 6, id_genero: 2 },
        // { id_cancion: 6, id_genero: 13 },
        // { id_cancion: 6, id_genero: 15 },
        // { id_cancion: 7, id_genero: 3 },
        // { id_cancion: 7, id_genero: 16 },
        // { id_cancion: 7, id_genero: 15 },
        // { id_cancion: 8, id_genero: 3 },
        // { id_cancion: 8, id_genero: 16 },
        // { id_cancion: 8, id_genero: 15 },
        // { id_cancion: 9, id_genero: 3 },
        // { id_cancion: 9, id_genero: 16 },
        // { id_cancion: 9, id_genero: 15 },
        // { id_cancion: 10, id_genero: 4 },
        // { id_cancion: 10, id_genero: 10 },
        // { id_cancion: 10, id_genero: 17 },
        // { id_cancion: 11, id_genero: 4 },
        // { id_cancion: 11, id_genero: 10 },
        // { id_cancion: 11, id_genero: 17 },
        // { id_cancion: 12, id_genero: 4 },
        // { id_cancion: 12, id_genero: 10 },
        // { id_cancion: 12, id_genero: 17 },
        // { id_cancion: 13, id_genero: 5 },
        // { id_cancion: 13, id_genero: 10 },
        // { id_cancion: 13, id_genero: 17 },
        // { id_cancion: 14, id_genero: 5 },
        // { id_cancion: 14, id_genero: 10 },
        // { id_cancion: 14, id_genero: 17 },
        // { id_cancion: 15, id_genero: 5 },
        // { id_cancion: 15, id_genero: 10 },
        // { id_cancion: 15, id_genero: 17 },
        // { id_cancion: 16, id_genero: 6 },
        // { id_cancion: 16, id_genero: 11 },
        // { id_cancion: 16, id_genero: 12 },
        // { id_cancion: 17, id_genero: 6 },
        // { id_cancion: 17, id_genero: 11 },
        // { id_cancion: 17, id_genero: 12 },
        // { id_cancion: 18, id_genero: 6 },
        // { id_cancion: 18, id_genero: 11 },
        // { id_cancion: 18, id_genero: 12 },
        // { id_cancion: 19, id_genero: 7 },
        // { id_cancion: 19, id_genero: 16 },
        // { id_cancion: 19, id_genero: 15 },
        // { id_cancion: 20, id_genero: 7 },
        // { id_cancion: 20, id_genero: 16 },
        // { id_cancion: 20, id_genero: 15 },
        // { id_cancion: 21, id_genero: 7 },
        // { id_cancion: 21, id_genero: 16 },
        // { id_cancion: 21, id_genero: 15 },
        // { id_cancion: 22, id_genero: 8 },
        // { id_cancion: 22, id_genero: 16 },
        // { id_cancion: 22, id_genero: 15 },
        // { id_cancion: 23, id_genero: 8 },
        // { id_cancion: 23, id_genero: 16 },
        // { id_cancion: 23, id_genero: 15 },
        // { id_cancion: 24, id_genero: 8 },
        // { id_cancion: 24, id_genero: 16 },
        // { id_cancion: 24, id_genero: 15 },
        // { id_cancion: 25, id_genero: 9 },
        // { id_cancion: 25, id_genero: 10 },
        // { id_cancion: 25, id_genero: 6 },
        // { id_cancion: 26, id_genero: 9 },
        // { id_cancion: 26, id_genero: 10 },
        // { id_cancion: 26, id_genero: 6 },
        // { id_cancion: 27, id_genero: 9 },
        // { id_cancion: 27, id_genero: 10 },
        // { id_cancion: 27, id_genero: 6 },
        // { id_cancion: 28, id_genero: 10 },
        // { id_cancion: 28, id_genero: 14 },
        // { id_cancion: 28, id_genero: 17 },
        // { id_cancion: 29, id_genero: 10 },
        // { id_cancion: 29, id_genero: 14 },
        // { id_cancion: 29, id_genero: 17 },
        // { id_cancion: 30, id_genero: 10 },
        // { id_cancion: 30, id_genero: 14 },
        // { id_cancion: 30, id_genero: 17 },
        // { id_cancion: 31, id_genero: 11 },
        // { id_cancion: 31, id_genero: 13 },
        // { id_cancion: 31, id_genero: 14 },
        // { id_cancion: 32, id_genero: 11 },
        // { id_cancion: 32, id_genero: 13 },
        // { id_cancion: 32, id_genero: 14 },
        // { id_cancion: 33, id_genero: 11 },
        // { id_cancion: 33, id_genero: 13 },
        // { id_cancion: 33, id_genero: 14 },
        // { id_cancion: 34, id_genero: 12 },
        // { id_cancion: 34, id_genero: 15 },
        // { id_cancion: 34, id_genero: 13 },
        // { id_cancion: 35, id_genero: 12 },
        // { id_cancion: 35, id_genero: 15 },
        // { id_cancion: 35, id_genero: 13 },
        // { id_cancion: 36, id_genero: 12 },
        // { id_cancion: 36, id_genero: 15 },
        // { id_cancion: 36, id_genero: 13 },
        // { id_cancion: 37, id_genero: 13 },
        // { id_cancion: 37, id_genero: 16 },
        // { id_cancion: 37, id_genero: 15 },
        // { id_cancion: 38, id_genero: 13 },
        // { id_cancion: 38, id_genero: 16 },
        // { id_cancion: 38, id_genero: 15 },
        // { id_cancion: 39, id_genero: 13 },
        // { id_cancion: 39, id_genero: 16 },
        // { id_cancion: 39, id_genero: 15 },
        // { id_cancion: 40, id_genero: 14 },
        // { id_cancion: 40, id_genero: 12 },
        // { id_cancion: 40, id_genero: 17 },
        // { id_cancion: 41, id_genero: 14 },
        // { id_cancion: 41, id_genero: 12 },
        // { id_cancion: 41, id_genero: 17 },
        // { id_cancion: 42, id_genero: 14 },
        // { id_cancion: 42, id_genero: 12 },
        // { id_cancion: 42, id_genero: 17 },
        // { id_cancion: 43, id_genero: 15 },
        // { id_cancion: 43, id_genero: 13 },
        // { id_cancion: 43, id_genero: 14 },
        // { id_cancion: 44, id_genero: 15 },
        // { id_cancion: 44, id_genero: 13 },
        // { id_cancion: 44, id_genero: 14 },
        // { id_cancion: 45, id_genero: 15 },
        // { id_cancion: 45, id_genero: 13 },
        // { id_cancion: 45, id_genero: 14 },
        // { id_cancion: 46, id_genero: 16 },
        // { id_cancion: 46, id_genero: 11 },
        // { id_cancion: 46, id_genero: 12 },
        // { id_cancion: 47, id_genero: 16 },
        // { id_cancion: 47, id_genero: 11 },
        // { id_cancion: 47, id_genero: 12 },
        // { id_cancion: 48, id_genero: 16 },
        // { id_cancion: 48, id_genero: 11 },
        // { id_cancion: 48, id_genero: 12 },
        // { id_cancion: 49, id_genero: 17 },
        // { id_cancion: 49, id_genero: 15 },
        // { id_cancion: 49, id_genero: 13 },
        // { id_cancion: 50, id_genero: 17 },
        // { id_cancion: 50, id_genero: 15 },
        // { id_cancion: 50, id_genero: 13 },
        // { id_cancion: 51, id_genero: 17 },
        // { id_cancion: 51, id_genero: 15 },
        // { id_cancion: 51, id_genero: 13 },
        // { id_cancion: 52, id_genero: 18 },
        // { id_cancion: 52, id_genero: 13 },
        // { id_cancion: 52, id_genero: 14 },
        // { id_cancion: 53, id_genero: 18 },
        // { id_cancion: 53, id_genero: 13 },
        // { id_cancion: 53, id_genero: 14 },
        // { id_cancion: 54, id_genero: 18 },
        // { id_cancion: 54, id_genero: 13 },
        // { id_cancion: 54, id_genero: 14 },
        // { id_cancion: 55, id_genero: 19 },
        // { id_cancion: 55, id_genero: 10 },
        // { id_cancion: 55, id_genero: 6 },
        // { id_cancion: 56, id_genero: 19 },
        // { id_cancion: 56, id_genero: 10 },
        // { id_cancion: 56, id_genero: 6 },
        // { id_cancion: 57, id_genero: 19 },
        // { id_cancion: 57, id_genero: 10 },
        // { id_cancion: 57, id_genero: 6 },
        // { id_cancion: 58, id_genero: 20 },
        // { id_cancion: 58, id_genero: 14 },
        // { id_cancion: 58, id_genero: 17 },
        // { id_cancion: 59, id_genero: 20 },
        // { id_cancion: 59, id_genero: 14 },
        // { id_cancion: 59, id_genero: 17 },
        // { id_cancion: 60, id_genero: 20 },
        // { id_cancion: 60, id_genero: 14 },
        // { id_cancion: 60, id_genero: 17 },
        // { id_cancion: 61, id_genero: 21 },
        // { id_cancion: 61, id_genero: 17 },
        // { id_cancion: 61, id_genero: 13 },
        // { id_cancion: 62, id_genero: 21 },
        // { id_cancion: 62, id_genero: 17 },
        // { id_cancion: 62, id_genero: 13 },
        // { id_cancion: 63, id_genero: 21 },
        // { id_cancion: 63, id_genero: 17 },
        // { id_cancion: 63, id_genero: 13 },
        // { id_cancion: 64, id_genero: 22 },
        // { id_cancion: 64, id_genero: 11 },
        // { id_cancion: 64, id_genero: 12 },
        // { id_cancion: 65, id_genero: 22 },
        // { id_cancion: 65, id_genero: 11 },
        // { id_cancion: 65, id_genero: 12 },
        // { id_cancion: 66, id_genero: 22 },
        // { id_cancion: 66, id_genero: 11 },
        // { id_cancion: 66, id_genero: 12 },
        // { id_cancion: 67, id_genero: 23 },
        // { id_cancion: 67, id_genero: 16 },
        // { id_cancion: 67, id_genero: 15 },
        // { id_cancion: 68, id_genero: 23 },
        // { id_cancion: 68, id_genero: 16 },
        // { id_cancion: 68, id_genero: 15 },
        // { id_cancion: 69, id_genero: 23 },
        // { id_cancion: 69, id_genero: 16 },
        // { id_cancion: 69, id_genero: 15 },
        // { id_cancion: 70, id_genero: 24 },
        // { id_cancion: 70, id_genero: 16 },
        // { id_cancion: 70, id_genero: 15 },
        // { id_cancion: 71, id_genero: 24 },
        // { id_cancion: 71, id_genero: 16 },
        // { id_cancion: 71, id_genero: 15 },
        // { id_cancion: 72, id_genero: 24 },
        // { id_cancion: 72, id_genero: 16 },
        // { id_cancion: 72, id_genero: 15 },
        // { id_cancion: 73, id_genero: 25 },
        // { id_cancion: 73, id_genero: 17 },
        // { id_cancion: 73, id_genero: 13 },
        // { id_cancion: 74, id_genero: 25 },
        // { id_cancion: 74, id_genero: 17 },
        // { id_cancion: 74, id_genero: 13 },
        // { id_cancion: 75, id_genero: 25 },
        // { id_cancion: 75, id_genero: 17 },
        // { id_cancion: 75, id_genero: 13 },
        // { id_cancion: 76, id_genero: 26 },
        // { id_cancion: 76, id_genero: 17 },
        // { id_cancion: 76, id_genero: 13 },
        // { id_cancion: 77, id_genero: 26 },
        // { id_cancion: 77, id_genero: 17 },
        // { id_cancion: 77, id_genero: 13 },
        // { id_cancion: 78, id_genero: 26 },
        // { id_cancion: 78, id_genero: 17 },
        // { id_cancion: 78, id_genero: 13 },
        // { id_cancion: 79, id_genero: 27 },
        // { id_cancion: 79, id_genero: 16 },
        // { id_cancion: 79, id_genero: 15 },
        // { id_cancion: 80, id_genero: 27 },
        // { id_cancion: 80, id_genero: 16 },
        // { id_cancion: 80, id_genero: 15 },
        // { id_cancion: 81, id_genero: 27 },
        // { id_cancion: 81, id_genero: 16 },
        // { id_cancion: 81, id_genero: 15 },
        // { id_cancion: 82, id_genero: 28 },
        // { id_cancion: 82, id_genero: 13 },
        // { id_cancion: 82, id_genero: 14 },
        // { id_cancion: 83, id_genero: 28 },
        // { id_cancion: 83, id_genero: 13 },
        // { id_cancion: 83, id_genero: 14 },
        // { id_cancion: 84, id_genero: 28 },
        // { id_cancion: 84, id_genero: 13 },
        // { id_cancion: 84, id_genero: 14 },
        // { id_cancion: 85, id_genero: 29 },
        // { id_cancion: 85, id_genero: 10 },
        // { id_cancion: 85, id_genero: 6 },
        // { id_cancion: 86, id_genero: 29 },
        // { id_cancion: 86, id_genero: 10 },
        // { id_cancion: 86, id_genero: 6 },
        // { id_cancion: 87, id_genero: 29 },
        // { id_cancion: 87, id_genero: 10 },
        // { id_cancion: 87, id_genero: 6 },
        // { id_cancion: 88, id_genero: 30 },
        // { id_cancion: 88, id_genero: 14 },
        // { id_cancion: 88, id_genero: 17 },
        // { id_cancion: 89, id_genero: 30 },
        // { id_cancion: 89, id_genero: 14 },
        // { id_cancion: 89, id_genero: 17 },
        // { id_cancion: 90, id_genero: 30 },
        // { id_cancion: 90, id_genero: 14 },
        // { id_cancion: 90, id_genero: 17 },
        // { id_cancion: 91, id_genero: 31 },
        // { id_cancion: 91, id_genero: 17 },
        // { id_cancion: 91, id_genero: 13 },
        // { id_cancion: 92, id_genero: 31 },
        // { id_cancion: 92, id_genero: 17 },
        // { id_cancion: 92, id_genero: 13 },
        // { id_cancion: 93, id_genero: 31 },
        // { id_cancion: 93, id_genero: 17 },
        // { id_cancion: 93, id_genero: 13 },
        // { id_cancion: 94, id_genero: 32 },
        // { id_cancion: 94, id_genero: 11 },
        // { id_cancion: 94, id_genero: 12 },
        // { id_cancion: 95, id_genero: 32 },
        // { id_cancion: 95, id_genero: 11 },
        // { id_cancion: 95, id_genero: 12 },
        // { id_cancion: 96, id_genero: 32 },
        // { id_cancion: 96, id_genero: 11 },
        // { id_cancion: 96, id_genero: 12 },
        // { id_cancion: 97, id_genero: 33 },
        // { id_cancion: 97, id_genero: 16 },
        // { id_cancion: 97, id_genero: 15 },
        // { id_cancion: 98, id_genero: 33 },
        // { id_cancion: 98, id_genero: 16 },
        // { id_cancion: 98, id_genero: 15 },
        // { id_cancion: 99, id_genero: 33 },
        // { id_cancion: 99, id_genero: 16 },
        // { id_cancion: 99, id_genero: 15 },
        // { id_cancion: 100, id_genero: 34 },
        // { id_cancion: 100, id_genero: 13 },
        // { id_cancion: 100, id_genero: 14 },
      ]);
    });
};