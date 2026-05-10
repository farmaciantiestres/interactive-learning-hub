export interface Accion {
  id: string;
  pregunta: string;
  tema: string;
  acciones: string;
  descripcion: string;
  momentos?: { titulo: string; contenido: string }[];
  icono: string;
}

export const estudiante = "Sugeiry Ponzón Rivadeneira";
export const titulo = "Acciones Pedagógicas";
export const contexto = "Zona rural de Hatonuevo, La Guajira";

export const acciones: Accion[] = [
  {
    id: "para-quien",
    pregunta: "¿Para quién es?",
    tema: "Niños y niñas",
    acciones: "Reconocer la diversidad cultural y características del grupo",
    descripcion:
      "Niños y niñas de primera infancia (5 a 6 años) de la zona rural de Hatonuevo, La Guajira. Es un aula intercultural compuesta mayormente por población Wayuu, compartiendo espacio con niños de otras regiones de Colombia y de Venezuela.",
    icono: "👧🏽",
  },
  {
    id: "que-fortalecer",
    pregunta: "¿Qué se quiere fortalecer?",
    tema: "Identidad cultural e interculturalidad",
    acciones: "Promover el reconocimiento y valoración de las culturas",
    descripcion:
      "Con esta propuesta quiero fortalecer la identidad cultural y el fortalecimiento del wayuunaiki como su lengua materna. Lo que buscamos es que los niños y niñas no solo escuchen su idioma, sino que lo usen y lo valoren como su principal rasgo de pertenencia al pueblo Wayuu.",
    icono: "🌿",
  },
  {
    id: "para-que",
    pregunta: "¿Para qué se quiere fortalecer?",
    tema: "Identidad cultural e interculturalidad",
    acciones: "Fomentar el respeto, la convivencia y el sentido de pertenencia",
    descripcion:
      "El objetivo fundamental es fortalecer la identidad cultural durante la primera infancia. A través de esta propuesta, se pretende que los niños y niñas se apropien de su herencia ancestral, promoviendo de manera simultánea una convivencia armónica basada en el reconocimiento del otro y la valoración de la diversidad en contextos interculturales.",
    icono: "🤝",
  },
  {
    id: "como-fortalecer",
    pregunta: "¿Cómo se puede fortalecer?",
    tema: "Identidad cultural e interculturalidad",
    acciones: "Implementar estrategias pedagógicas con recursos sonoros y culturales",
    descripcion:
      "A través de experiencias lúdicas alineadas con la realidad sociocultural.",
    momentos: [
      {
        titulo: "Inicio",
        contenido:
          'Iniciamos con el saludo en wayuunaiki y uso de la audioteca "De agua, viento y verdor" para conectar con relatos de sabedores, utilizando computador, equipo de sonido y narraciones de los abuelos. Con esta actividad queremos fortalecer la pronunciación de su lengua nativa. La actividad tiene una duración de 30 minutos.',
      },
      {
        titulo: "Desarrollo",
        contenido:
          'Acción y juego. Escuchamos Maguaré, jugamos a "nombra y actúa" y representamos historias culturales usando lo que hay en el entorno. Pudimos evidenciar a los niños y niñas bailando la yonna, baile representativo de la cultura wayuu. Utilizamos los recursos como la Plataforma Maguaré y materiales del medio. Con esta actividad buscamos fortalecer el uso espontáneo del vocabulario y la conexión real de la lengua y la cultura.',
      },
      {
        titulo: "Cierre",
        contenido:
          "Reflexión y calma. Cerramos con una ronda de palabras y un arrullo final para dialogar sobre lo vivido. Espacio de diálogo y audios previos. Hacemos una retroalimentación positiva de lo que las niñas y los niños sintieron con esta actividad y cuál fue la enseñanza que les dejó a cada uno de ellos. Que ellos mismos nos cuenten lo que se les quedó de las anécdotas que contaban los abuelos. Después de realizar la actividad pude evidenciar que hablaban de su lengua y su identidad con más fluidez y sin temor a avergonzarse.",
      },
    ],
    icono: "🎶",
  },
];
