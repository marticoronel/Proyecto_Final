/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex("discos").del()
    .then(function () {
      return knex("discos").insert([
        { id_musicos: 1, nombre_disco: "Buena Suerte…Hasta Siempre", tapa_disco: "buena_suerte_hasta_siempre.png" },
        { id_musicos: 1, nombre_disco: "Mientras", tapa_disco: "mientras.png" },
        { id_musicos: 1, nombre_disco: "20 Canciones 20", tapa_disco: "20_canciones_20.png" },
        { id_musicos: 1, nombre_disco: "Periplo", tapa_disco: "periplo.png" },
        { id_musicos: 1, nombre_disco: "Lo Mejor de Buitres 2", tapa_disco: "lo_mejor_2.png" },
        { id_musicos: 1, nombre_disco: "10 Años", tapa_disco: "10_años.png" },
        { id_musicos: 2, nombre_disco: "Kumpleaños con K", tapa_disco: "kumpleaños_con_k.png" },
        { id_musicos: 2, nombre_disco: "Dios los Cria..Vol 3", tapa_disco: "dios_los_cria_volumen_3.png" },
        { id_musicos: 2, nombre_disco: "Superstar", tapa_disco: "superstar.png" },
        { id_musicos: 2, nombre_disco: "La 8va.Maravilla", tapa_disco: "la_8va_maravilla.png" },
        { id_musicos: 2, nombre_disco: "La Generación del 2001", tapa_disco: "la_generación_del_2001.png" },
        { id_musicos: 2, nombre_disco: "Sobredosis", tapa_disco: "sobredosis.png" },
        { id_musicos: 2, nombre_disco: "Amos del Futuro", tapa_disco: "amos_del_futuro.png" },
        { id_musicos: 2, nombre_disco: "Furor Tropical", tapa_disco: "furor_tropical.png" },
        { id_musicos: 2, nombre_disco: "Imbatibles Muchachos", tapa_disco: "imbatibles_muchachos.png" },
        { id_musicos: 3, nombre_disco: "Quién Va a Cantar", tapa_disco: "quien_va_a_cantar.png" },
        { id_musicos: 3, nombre_disco: "Tango, Milonga y Candombe", tapa_disco: "tango_milonga_y_candombe.png" },
        { id_musicos: 3, nombre_disco: "Rada", tapa_disco: "rada.png" },
        { id_musicos: 3, nombre_disco: "Alegre Caballero", tapa_disco: "alegre_caballero.png" },
        { id_musicos: 3, nombre_disco: "Radeces", tapa_disco: "radeces.png" },
        { id_musicos: 3, nombre_disco: "Fan", tapa_disco: "fan.png" },
        { id_musicos: 3, nombre_disco: "Richie Silver", tapa_disco: "richie_silver.png" },
        { id_musicos: 4, nombre_disco: "Donde Están Los Ladrones", tapa_disco: "donde_estan_los_ladrones.png" },
        { id_musicos: 4, nombre_disco: "Pies Descalzos", tapa_disco: "pies_descalzos.png" },
        { id_musicos: 4, nombre_disco: "Loba", tapa_disco: "loba.png" },
        { id_musicos: 4, nombre_disco: "Laundry Service", tapa_disco: "laundry_service.png" },
        { id_musicos: 5, nombre_disco: "Con Altura", tapa_disco: "con_altura.png" },
        { id_musicos: 5, nombre_disco: "Motomami", tapa_disco: "motomami.png" },
        { id_musicos: 5, nombre_disco: "El Mal Querer", tapa_disco: "el_mal_querer.png" },
        { id_musicos: 5, nombre_disco: "RR", tapa_disco: "rr.png" },
        { id_musicos: 5, nombre_disco: "Tuya", tapa_disco: "tuya.png" },
        { id_musicos: 5, nombre_disco: "Llylm", tapa_disco: "ll_y_lm.png" },
        { id_musicos: 6, nombre_disco: "Lo Siento", tapa_disco: "lo_siento.png" },
        { id_musicos: 6, nombre_disco: "A Ella", tapa_disco: "a_ella.png" },
        { id_musicos: 6, nombre_disco: "Solo Tu y Yo", tapa_disco: "solo_tu_y_yo.png" },
        { id_musicos: 6, nombre_disco: "Inocente", tapa_disco: "inocente.png" },
        { id_musicos: 6, nombre_disco: "En un lugar un niño", tapa_disco: "en_un_lugar_un_niño.png" },
        { id_musicos: 6, nombre_disco: "Oncemil", tapa_disco: "oncemil.png" },
        { id_musicos: 6, nombre_disco: "Que Digan Lo Que Quieran", tapa_disco: "que_digan_lo_que_quieran.png" },
        { id_musicos: 6, nombre_disco: "Mi Primer Amor", tapa_disco: "mi_primar_amor.png" },
        { id_musicos: 6, nombre_disco: "Amarte No Se Olvida", tapa_disco: "amarte_no_se_olvida.png" },
        { id_musicos: 6, nombre_disco: "Santa Noche", tapa_disco: "santa_noche.png" },
        { id_musicos: 7, nombre_disco: "Aftermath", tapa_disco: "aftermath.png" },
        { id_musicos: 7, nombre_disco: "Forty Licks", tapa_disco: "forty_licks.png" },
        { id_musicos: 7, nombre_disco: "Tatoo You", tapa_disco: "tatoo_you.png" },
        { id_musicos: 7, nombre_disco: "Goats Head Soup", tapa_disco: "goats_head_soup.png" },
        { id_musicos: 7, nombre_disco: "Let It Bleed", tapa_disco: "let_it_bleed.png" },
        { id_musicos: 7, nombre_disco: "Sticky Fingers", tapa_disco: "sticky_fingers.png" },
        { id_musicos: 7, nombre_disco: "Out Of Our Heads", tapa_disco: "out_of_our_heads.png" },
        { id_musicos: 8, nombre_disco: "An Evening With Silk Sonic", tapa_disco: "an_evening_with_silk_sonic.png" },
        { id_musicos: 9, nombre_disco: "Tribalistas", tapa_disco: "tribalistas.png" },
        { id_musicos: 10, nombre_disco: "Canciones de SantaMarta", tapa_disco: "canciones_de_santamarta.png" },
        { id_musicos: 10, nombre_disco: "25 Años (En Vivo)", tapa_disco: "25_años_(en_vivo).png" },
        { id_musicos: 10, nombre_disco: "40 Años", tapa_disco: "40_años.png" },
        { id_musicos: 10, nombre_disco: "Antología", tapa_disco: "antología.png" },
        { id_musicos: 10, nombre_disco: "Historias", tapa_disco: "historias.png" },
        { id_musicos: 10, nombre_disco: "La Noche", tapa_disco: "la_noche.png" },
      ]);
    });
};
