const cors = require('cors');
const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);
const express = require('express');
const app = express();

app.use(cors());

async function obtenerGeneros(req, res) {
    try {
        const result = await knex('generos').select('nombre_genero', 'id');
        res.json(result);
    } catch (error) {
        console.error('Error al obtener los géneros:', error);
        res.status(500).json({ error: 'Error al obtener los géneros' });
    }
}

async function guardarPlaylist(req, res) {
    try {
        const { generos } = req.body;

        // console.log('Géneros recibidos para la playlist:', generos);

        if (!generos || generos.length === 0) {
            return res.status(400).json({ error: 'Debes proporcionar al menos un género.' });
        }

        const result = await knex('genero_canciones as gc')
            .select('id_cancion')
            .whereIn('gc.id_genero', generos);

        const idsCanciones = result.map(cancion => cancion.id_cancion);
        // console.log('IDs de Canciones:', idsCanciones);

        const cancionesResult = await knex('canciones')
            .select('nombre_cancion', 'id_musicos', 'id_discos')
            .whereIn('id', idsCanciones);

        // console.log('Canciones obtenidas:', cancionesResult);

        const musicosResult = await knex('musicos')
            .select('id', 'nombre_cantante')
            .whereIn('id', cancionesResult.map(cancion => cancion.id_musicos));

        const discosResult = await knex('discos')
            .select('id', 'tapa_disco')
            .whereIn('id', cancionesResult.map(cancion => cancion.id_discos));

        const playlistResult = cancionesResult.map(cancion => {
            const musico = musicosResult.find(musico => musico.id === cancion.id_musicos);
            const disco = discosResult.find(disco => disco.id === cancion.id_discos);

            return {
                nombre_cancion: cancion.nombre_cancion,
                nombre_cantante: musico ? musico.nombre_cantante : 'Desconocido',
                tapa_disco: disco ? disco.tapa_disco : 'Desconocido',
            };
        });

        res.json(playlistResult);

    } catch (error) {
        console.error('Error al generar la playlist:', error);
        res.status(500).json({ error: 'Error al generar la playlist.' });
    }
}

async function obtenerTapasDiscos(req, res) {
    try {
        const result = await knex('discos').select('tapa_disco');
        const tapasDiscos = result.map(disco => disco.tapa_disco);

        // Elegir aleatoriamente 4 tapas de discos
        const tapasAleatorias = [];

        while (tapasAleatorias.length < 4 && tapasDiscos.length > 0) {
            const randomIndex = Math.floor(Math.random() * tapasDiscos.length);
            tapasAleatorias.push(tapasDiscos.splice(randomIndex, 1)[0]);
        }

        res.json(tapasAleatorias);

        console.log('Tapas de discos obtenidas:', tapasAleatorias);

    } catch (error) {
        console.error('Error al obtener las tapas de discos:', error);
        res.status(500).json({ error: 'Error al obtener las tapas de discos' });
    }
}

async function obtenerOcasionesDesdeDB(req, res) {
    try {
        const result = await knex('ocasiones').select('nombre_actividad');
        res.json(result);
    } catch (error) {
        console.error('Error al obtener los géneros:', error);
        res.status(500).json({ error: 'Error al obtener las ocasiones' });
    }
}

async function obtenerClimaDesdeDB(req, res) {
    try {
        const result = await knex('clima').select('tipo_clima');
        res.json(result);
    } catch (error) {
        console.error('Error al obtener los géneros:', error);
        res.status(500).json({ error: 'Error al obtener las ocasiones' });
    }
}

async function obtenerEstadosDesdeDB(req, res) {
    try {
        const result = await knex('estados_animo').select('estado_animo');
        res.json(result);
    } catch (error) {
        console.error('Error al obtener los géneros:', error);
        res.status(500).json({ error: 'Error al obtener las ocasiones' });
    }
}

module.exports = {
    obtenerGeneros,
    guardarPlaylist,
    obtenerOcasionesDesdeDB,
    obtenerClimaDesdeDB,
    obtenerEstadosDesdeDB,
    obtenerTapasDiscos,
};
