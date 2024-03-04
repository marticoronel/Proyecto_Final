const express = require('express');
const router = express.Router();
const buscadorControllers = require('../controllers/buscador.controllers');

router.get('/buscar', async (req, res) => {
    const { nombre } = req.query;

    try {
        const canciones = await buscadorControllers.buscarEnCanciones(nombre);
        const musicos = await buscadorControllers.buscarEnMusicos(nombre);

        console.log('Canciones encontradas:', canciones);
        console.log('Musicos encontrados:', musicos);

        const resultados = [...canciones, ...musicos];
        res.json(resultados);
    } catch (error) {
        console.error('Error al buscar:', error);
        res.status(500).json({ error: 'Error al buscar' });
    }
});

router.get('/top10artistas', async (req, res) => {
    try {
        const top10Artistas = await buscadorControllers.buscarTop10();
        res.json(top10Artistas);
    } catch (error) {
        console.error('Error al obtener los 10 artistas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;
