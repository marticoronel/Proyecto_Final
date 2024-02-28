const express = require('express');
const router = express.Router();
const cupidoControllers = require('../controllers/cupido.controllers');


router.get('/cupido_musical/cantantes/primero', cupidoControllers.obtenerPrimerCantante);
router.get('/cupido_musical/cantantes/todos', cupidoControllers.obtenerTodosLosCantantes);
router.get('/cupido_musical/cantantes/soloCantantes', cupidoControllers.soloCantantes);

router.post('/cupido_musical/playlist', cupidoControllers.guardarPlaylist);



module.exports = router;