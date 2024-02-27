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


module.exports = {
    obtenerPrimerCantante
};

