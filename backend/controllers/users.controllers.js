const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../knexfile');
const cors = require('cors');


async function registrarMailUsuario(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'El campo e-mail es obligatorio.' });
    }

    const usuarioExistente = await knex('usuarios').where({ email: email }).first();
    if (usuarioExistente) {
      return res.status(400).json({ message: 'El usuario ya existe.' });
    }

    await knex('usuarios').insert({
      email: email, 
    });

    res.status(201) .json({ message: 'Email registrado con éxito.' });
  } catch (error) {
    console.error('Error en registrar email usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
}


async function registrarUsuario(req, res) {
  try {
    const { identificador, password } = req.body;

    if (!identificador || !password) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    const usuarioExistente = await knex('usuarios').where({ nombre_usuario: identificador }).first();
    if (usuarioExistente) {
      return res.status(400).json({ message: 'El usuario ya existe.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await knex('usuarios').insert({
      nombre_usuario: identificador, 
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
    const { identificador, password } = req.body;

    if (!identificador || !password) {
      return res.status(400).json({ message: 'Usuario no encontrado.' });
    }


        const usuario = await knex('usuarios')
      .where(function() {
        this.where('email', identificador).orWhere('nombre_usuario', identificador);
      })
      .first();

      console.log(identificador);
      console.log(password);


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
  registrarMailUsuario,
  registrarUsuario,
  loginUsuario,
};
