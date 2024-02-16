const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../knexfile');

async function registrarUsuario(req, res) {
  try {
    const { email, nombre_usuario, password } = req.body;

    const usuarioExistente = await knex('usuarios').where({ email }).first();
    if (usuarioExistente) {
      return res.status(400).json({ message: 'El usuario ya existe.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await knex('usuarios').insert({
      email,
      nombre_usuario,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'Usuario registrado con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
}

async function loginUsuario(req, res) {
  try {
    const { email, password } = req.body;

    const usuario = await knex('usuarios').where({ email }).first();
    if (!usuario) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    const passwordMatch = await bcrypt.compare(password, usuario.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    const token = jwt.sign({ usuarioId: usuario.id }, 'secreto', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
}


module.exports = {
  registrarUsuario,
  loginUsuario,
};
