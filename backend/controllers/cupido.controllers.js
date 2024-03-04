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
   const authHeader = req.headers['authorization'];
   /* console.log(authHeader); */
   const usuario_id = req.user.usuarioId;
   /* console.log(req.user.usuarioId); */
   try {
      // Obtener la lista de reproducción del cuerpo de la solicitud
      const idDeMusicos = req.body;
      const canciones = await knex.raw(`
       SELECT * 
       FROM canciones
       WHERE id_musicos IN (${idDeMusicos.join(',')});
     `);

      // Insertar la lista de reproducción en la base de datos
      const playlist = await knex('playlist').insert({ nombre: 'cupido ', id_usuario: usuario_id }).returning('*');
      const idPlaylist = playlist[0].id;

      for (const cancion of canciones.rows) {
         /* console.log(cancion); */
         await knex('playlist_canciones').insert({ id_playlist: idPlaylist, id_canciones: cancion.id });

      }

      // Enviar una respuesta de éxito
      res.status(200).json({ message: 'Lista de reproducción guardada exitosamente.' });
   } catch (error) {
      console.error('Error al guardar la playlist en la base de datos:', error);
      // Enviar una respuesta de error
      res.status(500).json({ error: 'Error al guardar la playlist en la base de datos.' });
   }
}



/* async function endpointdeprueba(req, res) {
  const authHeader = req.headers['authorization'];
  console.log("esto es el token encriptado", authHeader);
  const usuario_id = req.user.usuarioId;
  console.log("esto es el id del usuario", req.user.usuarioId);

  try {
     const prueba = await knex.raw(`

     SELECT canciones.*
     FROM canciones
     JOIN playlist_canciones ON playlist_canciones.id_canciones = canciones.id
     WHERE playlist_canciones.id_playlist = (
     SELECT id
     FROM playlist
     WHERE id_usuario = 1
     ORDER BY id DESC
     LIMIT 1);

     `);
     console.log(prueba);
     res.json(prueba);
  }
  catch (error) {
     console.error('Error al obtener los cantantes:', error);
  }
} */

async function endpointdeprueba(req, res) {
   const authHeader = req.headers['authorization'];
   console.log("esto es el token encriptado", authHeader);
   const usuario_id = req.user.usuarioId;
   console.log("esto es el id del usuario", req.user.usuarioId);

   try {
      const { rows } = await knex.raw(`
SELECT 
    canciones.*, 
    (SELECT tapa_disco 
     FROM discos 
     WHERE discos.id = canciones.id_discos
     LIMIT 1) AS tapa_disco
FROM 
    canciones
JOIN 
    playlist_canciones ON playlist_canciones.id_canciones = canciones.id
WHERE 
    playlist_canciones.id_playlist = (
        SELECT id
        FROM playlist
        WHERE id_usuario = ?
        ORDER BY id DESC
        LIMIT 1
    )`, [usuario_id]);

      res.json(rows);
      console.log("solo el rows", rows);
   } catch (error) {
      console.error('Error al obtener los cantantes:', error);
      res.status(500).json({ error: 'Error al obtener los cantantes.' });
   }
}


module.exports = {
   obtenerTodosLosCantantes,
   obtenerPrimerCantante,
   soloCantantes,
   guardarPlaylist,
   endpointdeprueba
};

