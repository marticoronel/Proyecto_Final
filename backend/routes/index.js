const express = require('express');
const router = express.Router();
const userRoutes = require('./users.routes');
const knex = require('../knexfile');

router.get('/', (req, res) => {
    res.send('HOME');
});

router.post('/registrar', userRoutes);


router.post('/login', userRoutes);

module.exports = router;



