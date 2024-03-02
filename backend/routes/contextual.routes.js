const express = require('express');
const cors = require('cors');
const router = express.Router();
const contextualControllers = require('../controllers/contextual.controllers');

router.use(cors());

router.get('/generos', contextualControllers.obtenerGeneros);
router.post('/playlist', contextualControllers.guardarPlaylist);
router.post('/playlist_contextual', contextualControllers.guardarPlaylist);
router.get('/ocasiones', contextualControllers.obtenerOcasionesDesdeDB);
router.get('/clima', contextualControllers.obtenerClimaDesdeDB);
router.get('/estados_animo', contextualControllers.obtenerEstadosDesdeDB);
router.get('/discos', contextualControllers.obtenerTapasDiscos);


module.exports = router;
