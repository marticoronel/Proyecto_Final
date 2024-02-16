const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/index');
const port = process.env.PORT || 3000;

// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('proyectoAUDN', 'postgres', 'loira', {
//   host: 'localhost',
//   dialect:'postgres'
// });


const dotenv = require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
} );


