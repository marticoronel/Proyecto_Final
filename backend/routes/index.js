const express = require('express');
const router = express.Router();
const userRoutes = require('./users.routes');
const knex = require('../knexfile');
const cors = require('cors');


router.get('/', (req, res) => {
    res.send('HOME');
});

router.post('/ingreso_email', userRoutes);
router.post('/registrarse', userRoutes);
router.post('/login', userRoutes);
router.get('/home', userRoutes);

module.exports = router;



