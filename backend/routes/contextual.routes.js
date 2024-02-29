const express = require('express');
const cors = require('cors');
const router = express.Router();
const contextualControllers = require('../controllers/contextual.controllers');

router.use(cors());

router.get('/generos', contextualControllers.obtenerGeneros);
router.post('/playlist', contextualControllers.guardarPlaylist);
router.post('/playlist_contextual', contextualControllers.guardarPlaylist);

module.exports = router;
