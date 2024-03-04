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
        const cantanteResult = await knex('musicos')
            .select('id', 'nombre_cantante', 'tapa_cantante')
            .where('nombre_cantante', 'ilike', `%${nombre}%`)
            .first();

        if (!cantanteResult) {
            return []; 
        }

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

async function buscarTop10() {
    try {
        const top10Artistas = await knex('musicos')
            .select('id', 'nombre_cantante', 'tapa_cantante');

        console.log('Top 10 artistas desde la base de datos:', top10Artistas);

        return top10Artistas.map(musico => ({
            tipo: 'musico',
            id: musico.id,
            nombre: musico.nombre_cantante,
            tapaCantante: musico.tapa_cantante,
        }));
    } catch (error) {
        console.error('Error al obtener los 10 artistas desde la base de datos:', error);
        throw error;
    }
}


module.exports = {
    buscarEnCanciones,
    buscarEnMusicos,
    buscarTop10,
};
