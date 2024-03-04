const express = require('express');
const router = express.Router();
const cupidoControllers = require('../controllers/cupido.controllers');
const verifyToken  = require('../middlewares/verifyToken');


router.get('/cupido_musical/cantantes/primero', cupidoControllers.obtenerPrimerCantante);
router.get('/cupido_musical/cantantes/todos', cupidoControllers.obtenerTodosLosCantantes);
router.get('/cupido_musical/cantantes/soloCantantes', cupidoControllers.soloCantantes);

router.get('/cupido_musical/cantantes/prueba', verifyToken, cupidoControllers.endpointdeprueba);


router.post('/cupido_musical/playlist', verifyToken, cupidoControllers.guardarPlaylist);



module.exports = router;