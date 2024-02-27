const express = require('express');
const router = express.Router();
const cupidoControllers = require('../controllers/cupido.controllers');


router.get('/cupido_musical/cantantes/primero', cupidoControllers.obtenerPrimerCantante);



module.exports = router;