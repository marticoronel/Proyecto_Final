const express = require('express');
const router = express.Router();
const buscadorControllers = require('../controllers/buscador.controllers');

router.get('/buscar', async (req, res) => {
    const { nombre } = req.query;

    try {
        const canciones = await buscadorControllers.buscarEnCanciones(nombre);
        const musicos = await buscadorControllers.buscarEnMusicos(nombre);

        // Combinar los resultados y enviarlos como respuesta
        const resultados = [...canciones, ...musicos];
        res.json(resultados);
    } catch (error) {
        console.error('Error al buscar:', error);
        res.status(500).json({ error: 'Error al buscar' });
    }
});

module.exports = router;
