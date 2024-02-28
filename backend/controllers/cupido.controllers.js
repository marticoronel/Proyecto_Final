const cors = require('cors');
const e = require('cors');
const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);

async function obtenerPrimerCantante(req, res) {
   try {
      const result = await knex.raw(`
     SELECT 
        m.id AS id_cantante, 
        m.nombre_cantante, 
        d.id AS id_disco, 
        d.nombre_disco, 
        d.tapa_disco, 
        c.id AS id_cancion, 
        c.nombre_cancion 
     FROM 
        musicos m
     JOIN 
        discos d ON m.id = d.id_musicos
     JOIN 
        canciones c ON m.id = c.id_musicos
     WHERE 
        m.id = (SELECT MIN(id) FROM musicos)
     LIMIT 1;
    
        `);
      res.json(result.rows[0]);
   } catch (error) {
      console.error('Error al obtener el primer cantante:', error);
      res.status(500).json({ error: 'Error al obtener el primer cantante' });
   }
}

async function obtenerTodosLosCantantes(req, res) {
   try {
      const result = await knex.raw(`
           SELECT 
               m.id AS id_cantante, 
               m.nombre_cantante, 
               d.id AS id_disco, 
               d.nombre_disco, 
               d.tapa_disco, 
               c.id AS id_cancion, 
               c.nombre_cancion 
           FROM 
               musicos m
           JOIN 
               discos d ON m.id = d.id_musicos
           JOIN 
               canciones c ON m.id = c.id_musicos
       `);
      res.json(result.rows);
   } catch (error) {
      console.error('Error al obtener los cantantes:', error);
      res.status(500).json({ error: 'Error al obtener los cantantes' });
   }
}

async function soloCantantes(req, res) {
   try {
       const result = await knex.raw(`
           SELECT 
               id AS id_cantante, 
               nombre_cantante,
               tapa_cantante
           FROM 
               musicos;
       `);

       // Enviar los datos al cliente como respuesta
       res.json(result.rows);
   } catch (error) {
       console.error('Error al obtener los cantantes:', error);
       // Enviar un mensaje de error al cliente en caso de que falle la consulta
       res.status(500).json({ error: 'Error al obtener los cantantes' });
   }
}

async function guardarPlaylist(req, res) {
   try {
     // Obtener la lista de reproducción del cuerpo de la solicitud
     const listaReproduccion = req.body;
 
     // Insertar la lista de reproducción en la base de datos
     await knex('playlist_usuarios').insert(listaReproduccion);
 
     // Enviar una respuesta de éxito
     res.status(200).json({ message: 'Lista de reproducción guardada exitosamente.' });
   } catch (error) {
     console.error('Error al guardar la playlist en la base de datos:', error);
     // Enviar una respuesta de error
     res.status(500).json({ error: 'Error al guardar la playlist en la base de datos.' });
   }
 }

module.exports = {
      obtenerTodosLosCantantes,
      obtenerPrimerCantante,
      soloCantantes,
      guardarPlaylist
   };

