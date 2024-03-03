const cors = require('cors');
const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);
const express = require('express');
const app = express();

app.use(cors());


async function buscarEnCanciones(nombre) {
    try {
        const cancionesResult = await knex('canciones')
            .select('id', 'nombre_cancion', 'id_musicos', 'id_discos')
            .where('nombre_cancion', 'ilike', `%${nombre}%`);

        return cancionesResult.map(cancion => ({
            tipo: 'cancion',
            id: cancion.id,
            nombre: cancion.nombre_cancion,
            idMusico: cancion.id_musicos,
            idDisco: cancion.id_discos,
        }));
    } catch (error) {
        throw error;
    }
}

async function buscarEnMusicos(nombre) {
    try {
        const musicosResult = await knex('musicos')
            .select('id', 'nombre_cantante')
            .where('nombre_cantante', 'ilike', `%${nombre}%`);

        return musicosResult.map(musico => ({
            tipo: 'musico',
            id: musico.id,
            nombre: musico.nombre_cantante,
        }));
    } catch (error) {
        throw error;
    }
}

module.exports = {
    buscarEnCanciones,
    buscarEnMusicos,
};

