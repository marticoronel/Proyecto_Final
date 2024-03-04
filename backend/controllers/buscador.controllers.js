const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);

async function buscarEnCanciones(nombre) {
    try {
        const cancionesResult = await knex('canciones')
            .select('canciones.id', 'nombre_cancion', 'id_musicos', 'id_discos', 'musicos.nombre_cantante', 'musicos.tapa_cantante')
            .leftJoin('musicos', 'canciones.id_musicos', 'musicos.id')
            .where('nombre_cancion', 'ilike', `%${nombre}%`);

        return cancionesResult.map(cancion => ({
            tipo: 'cancion',
            id: cancion.id,
            nombre: cancion.nombre_cancion,
            idMusico: cancion.id_musicos,
            idDisco: cancion.id_discos,
            nombreCantante: cancion.nombre_cantante,
            tapaCantante: cancion.tapa_cantante,
        }));
    } catch (error) {
        throw error;
    }
}

async function buscarEnMusicos(nombre) {
    try {
        // Obtener información del cantante
        const cantanteResult = await knex('musicos')
            .select('id', 'nombre_cantante', 'tapa_cantante')
            .where('nombre_cantante', 'ilike', `%${nombre}%`)
            .first();

        if (!cantanteResult) {
            return []; // No se encontró el cantante
        }

        // Obtener canciones asociadas al cantante
        const cancionesResult = await knex('canciones')
            .select('id', 'nombre_cancion', 'id_musicos', 'id_discos')
            .where('id_musicos', cantanteResult.id);

        const cancionesDelCantante = cancionesResult.map(cancion => ({
            tipo: 'cancion',
            id: cancion.id,
            nombre: cancion.nombre_cancion,
            idMusico: cancion.id_musicos,
            idDisco: cancion.id_discos,
            nombreCantante: cantanteResult.nombre_cantante,
            tapaCantante: cantanteResult.tapa_cantante,
        }));

        // Devolver el cantante y las canciones asociadas
        return [
            {
                tipo: 'musico',
                id: cantanteResult.id,
                nombre: cantanteResult.nombre_cantante,
                tapaCantante: cantanteResult.tapa_cantante,
            },
            ...cancionesDelCantante,
        ];
    } catch (error) {
        throw error;
    }
}

module.exports = {
    buscarEnCanciones,
    buscarEnMusicos,
};
