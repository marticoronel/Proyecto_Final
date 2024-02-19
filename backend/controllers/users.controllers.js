const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../knexfile');

async function registrarUsuario(req, res) {
  try {
    const { email, nombre_usuario, password } = req.body;

    if (!email || !nombre_usuario || !password) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

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
    console.error('Error en registrarUsuario:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
}

async function loginUsuario(req, res) {
  try {
    const { email, nombre_usuario, password } = req.body;

    if (!email || (!nombre_usuario && !password)) {
      return res.status(400).json({ message: 'Usuario no encontrado.' });
    }

    const usuario = await knex('usuarios')
      .where(function() {
        this.where('email', email).orWhere('nombre_usuario', nombre_usuario);
      })
      .first();

      console.log(email);
      console.log(nombre_usuario);


    if (!usuario) {
      return res.status(401).json({ message: 'Usuario no encontrado.' });
    }

    const passwordMatch = await bcrypt.compare(password, usuario.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta.' });
    }

    const token = jwt.sign({ usuarioId: usuario.id }, process.env.JWT_SECRET || 'secreto', { expiresIn: '1h' });

    res.status(200).json({ 'logeado con exito' :token });
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
}

module.exports = {
  registrarUsuario,
  loginUsuario,
};
