const express = require('express');
const router = express.Router();
const userRoutes = require('./users.routes');
const cupidoRoutes = require('./cupido.routes');
const knex = require('../knexfile');
const cors = require('cors');


router.get('/', (req, res) => {
    res.send('HOME');
});

router.get('/cupido_musical/cantantes/primero', cupidoRoutes);

router.get('/cupido_musical/cantantes/todos', cupidoRoutes);

router.get('/cupido_musical/cantantes/soloCantantes', cupidoRoutes);

router.post('/cupido_musical/playlist', cupidoRoutes);

router.post('/ingreso_email', userRoutes);
router.post('/registrarse', userRoutes);
router.post('/login', userRoutes);
router.get('/home', userRoutes);

module.exports = router;



