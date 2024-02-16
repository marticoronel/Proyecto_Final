const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users.controllers');

router.post('/registrar', usersControllers.registrarUsuario);
router.post('/login', usersControllers.loginUsuario);

module.exports = router;
