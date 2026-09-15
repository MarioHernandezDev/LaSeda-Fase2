<script setup lang="ts">
const route = useRoute()

// Base de datos de perfiles profesionales
const staff: Record<string, any> = {
  'ana-jimenez': {
    id: 'ana-jimenez',
    nombre: 'Ana Jiménez',
    rol: 'Psicología Clínica y Co-dirección',
    imagen: '/images/ana-jimenez-psicologa-gestalt-terapia-infanto-juvenil-granada.jpg',
    imagenAlt: 'Ana Jiménez, psicóloga sanitaria y co-directora en Granada'
  },
  'leonor-cabrera': {
    id: 'leonor-cabrera',
    nombre: 'Leonor Cabrera',
    rol: 'Coaching Profesional y Co-dirección',
    imagen: '/images/leonor-cabrera-coach-wingwave-constelaciones-familiares-granada.jpg',
    imagenAlt: 'Leonor Cabrera, coach profesional certificada en Granada'
  },
  'cristina-lence': {
    id: 'cristina-lence',
    nombre: 'Cristina Lence',
    rol: 'Educación Social · Infancia y Familias',
    imagen: '/images/cristina-lence-educadora-familiar-gestalt-sistemica-granada.jpg',
    imagenAlt: 'Cristina Lence, educadora social especializada en Gestalt infanto-juvenil'
  },
  'reyes-sanchez': {
    id: 'reyes-sanchez',
    nombre: 'Reyes Sánchez Tallón',
    rol: 'Medicina Pediátrica · Salud Integrativa',
    imagen: '/images/reyes-sanchez-tallon-medica-pediatra-gestalt-terapia-granada.jpg',
    imagenAlt: 'Reyes Sánchez Tallón, médica pediatra y terapeuta'
  },
  'maria-noel-reyes': {
    id: 'maria-noel-reyes',
    nombre: 'María Noel Reyes',
    rol: 'Psicología y Acompañamiento',
    imagen: '/images/maria-noel-reyes-granada.jpg',
    imagenAlt: 'María Noel Reyes, psicóloga en Granada'
  }
}

// Base de datos de Terapias
const terapias: Record<string, any> = {
  'adultos': {
    titulo: 'Terapia para adultos',
    tituloItalico: '',
    subtitulo: 'Un lugar donde poder detenerte, comprender lo que estás viviendo y encontrar una forma más propia de seguir adelante.',
    categoria: 'Terapia para adultos',
    categoriaSufijo: 'Granada y online',
    botonPrincipal: 'Solicitar una cita',
    botonSecundario: 'Conocer la terapia',
    imagen: '/images/terapia-acompanamiento-adulto-psicologia-granada-la-seda.jpg',
    imagenAlt: 'Sesión de Terapia Gestalt para adultos en el Centro de Psicología La Seda, Granada',
    overviewLabel: 'Cuando sostenerlo en soledad ya no ayuda',
    overviewTitulo: 'No necesitas saber exactamente qué te pasa para empezar',
    descripcion: 'A veces llegamos a terapia por un malestar concreto. Otras veces solo sabemos que algo se repite, que estamos atravesando situaciones que nos desbordan o que hemos perdido el contacto con lo que necesitamos.',
    descripcion2: 'La terapia ofrece tiempo y presencia para poner palabras a la experiencia, reconocer los recursos disponibles y ensayar otras maneras de relacionarte contigo, con las demás personas y con tu realidad. El proceso se adapta a tu historia y a tu momento. No partimos de respuestas cerradas ni de una única manera de trabajar.',
    cita: '"La terapia Gestalt no es un conjunto de técnicas sino la transmisión de una actitud, una forma de estar en la vida." — Claudio Naranjo',
    terapeutas: ['ana-jimenez', 'leonor-cabrera', 'cristina-lence', 'reyes-sanchez', 'maria-noel-reyes'],
    beneficios: [
      'Aumentar el autoconocimiento y la comprensión de lo que te ocurre.',
      'Gestionar mejor las emociones y fortalecer tu autoestima.',
      'Afrontar bloqueos, miedos, ansiedad, estrés o experiencias traumáticas.',
      'Mejorar tus relaciones, tu comunicación y tu capacidad para tomar decisiones.',
      'Encontrar nuevas formas de vivir con mayor presencia, equilibrio y coherencia personal.',
    ],
    motivos: [
      { numero: '01', titulo: 'Ansiedad, estrés y sensación de desborde', desc: 'Cuando la preocupación, la exigencia o la tensión ocupan demasiado espacio y cuesta recuperar la calma.' },
      { numero: '02', titulo: 'Relaciones y patrones que se repiten', desc: 'Dificultades en los vínculos, límites que cuesta sostener o situaciones que parecen volver una y otra vez.' },
      { numero: '03', titulo: 'Bloqueos, experiencias difíciles y asuntos pendientes', desc: 'Experiencias del pasado o del presente que siguen generando malestar, miedo o la sensación de no poder avanzar.' },
      { numero: '04', titulo: 'Crisis, cambios y decisiones', desc: 'Momentos de pérdida, transición o incertidumbre en los que resulta difícil encontrar dirección.' },
    ],
    workAreasLabel: 'Cuándo puede ser útil pedir ayuda',
    workAreasTitulo: 'Algunas situaciones que podemos trabajar',
    workAreasNota: 'No es necesario identificarte con ninguna de estas situaciones. Una primera cita sirve para comprender qué necesitas y valorar la propuesta más adecuada.',
    teamLabel: 'El equipo',
    teamTitulo: 'Una propuesta adaptada',
    teamSubtitulo: 'a cada persona',
    teamNota: 'El equipo reúne profesionales de la psicología, la medicina, la educación social, la Terapia Gestalt y el acompañamiento emocional. Cada intervención se ajustará a la formación, las competencias y el ámbito profesional de quien la realiza. En el primer contacto te orientaremos para encontrar a la profesional que mejor pueda responder a tu situación.',
    proceso: [
      { paso: '01', texto: 'Primer contacto para escuchar qué estás viviendo y orientarte hacia la profesional y el tipo de atención más adecuados.' },
      { paso: '02', texto: 'Primera sesión para conocerte, comprender tu situación y acordar qué te gustaría trabajar.' },
      { paso: '03', texto: 'Sesiones de seguimiento adaptadas a tu ritmo. Revisaremos conjuntamente cómo avanza el proceso y qué necesitas en cada momento.' },
    ],
    processLabel: 'Cómo será el proceso',
    processTitulo: 'Un recorrido construido',
    processSubtitulo: 'contigo',
    modalidad: 'Presencial en Granada u online',
    processCta: 'Solicitar una cita',
    faqs: [
      { pregunta: '¿Cuánto duran las sesiones?', respuesta: 'Habitualmente, 55 minutos.' },
      { pregunta: '¿Puedo hacer terapia online?', respuesta: 'Sí. En el primer contacto valoraremos contigo si la modalidad online resulta adecuada para tu situación.' },
      { pregunta: '¿Tengo que saber qué quiero trabajar?', respuesta: 'No. Puedes llegar con una situación concreta o simplemente con la sensación de que algo no está bien. La primera sesión sirve también para empezar a darle forma.' },
      { pregunta: '¿Cuánto durará el proceso?', respuesta: 'No existe una duración predeterminada. Dependerá de tu situación, de tus objetivos y de cómo evolucione el trabajo. Lo iremos revisando contigo.' },
    ],
    faqLabel: 'Preguntas frecuentes',
    faqTitulo: 'Antes de comenzar',
    faqSubtitulo: '',
    faqCtaTitulo: 'Todo proceso puede comenzar con una conversación',
    faqCtaDescripcion: 'No necesitas tenerlo todo claro para pedir ayuda. Puedes empezar contándonos qué estás viviendo.',
    faqCtaLabel: 'Solicitar una cita',
    faqCierreSecundario: 'Ver otras terapias',
    faqCierreUrl: '/terapias',
    formTherapyName: 'Terapia para adultos',
    formIntro: 'Puedes contarnos brevemente qué estás viviendo. Te escribiremos para orientarte y acordar el primer encuentro.',
    formShowModality: true,
    formModalityLabel: 'Preferencia · Presencial / Online / No lo sé todavía',
    formConfirmation: 'Gracias. Hemos recibido tu solicitud. Te escribiremos para orientarte y acordar los siguientes pasos.',
  },
  'adolescentes': {
    titulo: 'Terapia para adolescentes',
    tituloItalico: '',
    subtitulo: 'Un lugar propio donde poder hablar, entender lo que está pasando y atravesar esta etapa con más recursos y menos soledad.',
    categoria: 'Terapia para adolescentes',
    categoriaSufijo: 'La Seda Granada',
    botonPrincipal: 'Solicitar una cita',
    botonSecundario: 'Conocer la terapia',
    imagen: '/images/terapia-psicologica-adolescentes-granada-centro-la-seda.jpg',
    imagenAlt: 'Sesión de terapia psicológica para adolescentes en el Centro La Seda, Granada',
    descripcion: 'La adolescencia trae cambios en el cuerpo, la identidad, las relaciones y la manera de mirar el mundo. Puede ser una etapa intensa tanto para quien la vive como para su familia.',
    descripcion2: 'La terapia ofrece un espacio confidencial para expresar lo que cuesta compartir en otros lugares, reconocer emociones y encontrar maneras más cuidadas de afrontar lo que ocurre. La familia puede participar cuando sea necesario. El modo de hacerlo se acuerda respetando la intimidad y la autonomía progresiva de cada adolescente.',
    cita: '"Para acompañar bien a un adolescente primero hay que entender qué le está sucediendo por dentro."',
    overviewLabel: 'Un tiempo de cambios',
    overviewTitulo: 'Cuando no resulta fácil explicar lo que sucede',
    workAreasLabel: 'Cuándo puede ser útil pedir ayuda',
    workAreasTitulo: 'Algunas situaciones que podemos trabajar',
    workAreasNota: 'No todas las dificultades de la adolescencia requieren terapia. Una primera valoración puede ayudar a distinguir un momento evolutivo de una situación que necesita apoyo profesional.',
    teamLabel: 'El equipo',
    teamTitulo: 'Profesionales con experiencia',
    teamSubtitulo: 'en adolescencia y familias',
    processLabel: 'Cómo será el proceso',
    processTitulo: 'Un espacio propio',
    processSubtitulo: 'que también tiene en cuenta a la familia',
    modalidad: 'Presencial en Granada u online, cuando el equipo valore que este formato es adecuado',
    processCta: 'Solicitar una cita',
    faqLabel: 'Preguntas frecuentes',
    faqTitulo: 'Antes de comenzar',
    faqSubtitulo: '',
    faqCtaTitulo: 'No hace falta esperar a que todo se vuelva más difícil',
    faqCtaDescripcion: 'Una primera conversación puede ayudaros a entender qué está ocurriendo y decidir con calma cuál puede ser el siguiente paso.',
    faqCtaLabel: 'Solicitar una cita',
    faqCierreSecundario: 'Ver otras terapias',
    faqCierreUrl: '/terapias',
    terapeutas: ['ana-jimenez', 'cristina-lence', 'maria-noel-reyes'],
    beneficios: [
      'Gestionar mejor sus emociones y fortalecer su autoestima.',
      'Mejorar sus relaciones con la familia y el entorno.',
      'Afrontar situaciones como ansiedad, aislamiento o dificultades académicas.',
      'Reducir conductas de riesgo e impulsividad.',
      'Que los padres comprendan mejor a su hijo y mejoren la comunicación.',
    ],
    motivos: [
      { numero: '01', titulo: 'Aislamiento, tristeza o pérdida de interés', desc: 'Cuando cuesta salir, relacionarse o encontrar motivación para actividades que antes resultaban importantes.' },
      { numero: '02', titulo: 'Enfado, impulsividad y conflictos', desc: 'Reacciones intensas, discusiones frecuentes o dificultades para regular lo que se siente.' },
      { numero: '03', titulo: 'Cambios, rupturas y pérdidas', desc: 'Experiencias que necesitan ser reconocidas y elaboradas para poder continuar.' },
      { numero: '04', titulo: 'Dificultades escolares o de orientación', desc: 'Desmotivación, bloqueo, presión académica o dudas sobre el futuro que generan malestar.' },
    ],
    proceso: [
      { paso: '01', texto: 'Primer contacto para conocer la situación y decidir cómo organizar la primera cita. Según la edad y el caso, puede comenzar con la familia o directamente con la persona adolescente.' },
      { paso: '02', texto: 'Primeras sesiones para construir confianza, comprender lo que está ocurriendo y acordar qué se quiere trabajar.' },
      { paso: '03', texto: 'Seguimiento adaptado al proceso. Cuando resulte útil, se incorporarán encuentros familiares, explicando previamente qué información se comparte.' },
    ],
    faqs: [
      { pregunta: '¿Cuánto duran las sesiones?', respuesta: 'Habitualmente, 55 minutos.' },
      { pregunta: '¿A partir de qué edad atendéis?', respuesta: 'Esta área está dirigida a adolescentes a partir de los 12 años.' },
      { pregunta: '¿Cuánto durará el proceso?', respuesta: 'No existe una duración igual para todas las personas. Depende de la situación, de los objetivos y de cómo evolucione el proceso. Lo revisaremos conjuntamente.' },
      { pregunta: '¿Lo que se habla en sesión es confidencial?', respuesta: 'Sí. La confidencialidad es esencial para construir confianza. Al comenzar explicaremos tanto a la persona adolescente como a su familia sus límites y cómo se gestionará la comunicación.' },
    ],
  },
  'pareja-familia': {
    titulo: 'Terapia de pareja y familia',
    tituloItalico: '',
    subtitulo: 'Cuando una relación duele o la convivencia se vuelve difícil, contar con un espacio compartido puede ayudar a escuchar lo que ya no conseguimos decirnos.',
    categoria: 'Terapia de pareja y familia',
    categoriaSufijo: 'Granada y online',
    botonPrincipal: 'Solicitar una cita',
    botonSecundario: 'Conocer la terapia',
    imagen: '/images/terapia-pareja-familia-sistemica-granada-centro-la-seda.jpg',
    overviewLabel: 'Un lugar para la relación',
    overviewTitulo: 'La terapia no parte de buscar quién tiene razón',
    descripcion: 'Las parejas y las familias atraviesan cambios, crisis y momentos en los que las formas habituales de relacionarse dejan de funcionar.',
    descripcion2: 'La terapia permite detener la escalada del conflicto, escuchar las distintas experiencias y comprender las dinámicas que mantienen el malestar. El objetivo no tiene que ser siempre continuar la relación. También puede ser tomar decisiones con mayor claridad, afrontar una separación de forma cuidada o construir una nueva manera de organizar la familia.',
    cita: '"El objetivo no es siempre salvar la relación, sino ayudar a cada persona a tomar decisiones auténticas desde un lugar más claro."',
    terapeutas: ['leonor-cabrera', 'reyes-sanchez'],
    beneficios: [
      'Mejorar la comunicación y expresar necesidades y deseos con mayor claridad.',
      'Resolver conflictos recurrentes de forma más efectiva.',
      'Acompañar procesos de infidelidad, pérdida de confianza o crisis de pareja.',
      'Establecer pautas de crianza más coherentes y colaborativas.',
      'Facilitar la adaptación ante separaciones, duelos o cambios importantes.',
    ],
    motivos: [
      { numero: '01', titulo: 'Conflictos que se repiten', desc: 'Discusiones que vuelven una y otra vez, distancia emocional o sensación de no encontrar escucha dentro de la relación.' },
      { numero: '02', titulo: 'Rupturas de confianza', desc: 'Infidelidades, secretos o experiencias que han dañado el vínculo y necesitan ser comprendidas antes de decidir cómo continuar.' },
      { numero: '03', titulo: 'Crianza y organización familiar', desc: 'Diferencias sobre límites, cuidados, responsabilidades o decisiones relacionadas con hijas e hijos.' },
      { numero: '04', titulo: 'Cambios, separaciones y pérdidas', desc: 'Transiciones vitales que afectan a la convivencia y requieren encontrar una nueva forma de relacionarse.' },
    ],
    workAreasLabel: 'Cuándo puede ser útil pedir ayuda',
    workAreasTitulo: 'Algunas situaciones que podemos trabajar',
    workAreasNota: 'No es necesario esperar a que la relación esté al límite. La terapia también puede ser un espacio para prevenir, ordenar y cuidar el vínculo.',
    teamLabel: 'El equipo',
    teamTitulo: 'Una comprensión relacional',
    teamSubtitulo: 'y sistémica',
    teamNota: 'Cada intervención se ajustará a la formación, las competencias y el ámbito profesional de quien la realiza. En el primer contacto te explicaremos quién puede atender mejor vuestra situación.',
    proceso: [
      { paso: '01', texto: 'Primer encuentro conjunto para conocer qué está ocurriendo, escuchar las distintas perspectivas y acordar qué se necesita trabajar.' },
      { paso: '02', texto: 'Sesiones de trabajo adaptadas a la situación. La mayor parte del recorrido será conjunta, aunque en algunos momentos pueden proponerse encuentros diferentes si tienen sentido para el proceso.' },
      { paso: '03', texto: 'Revisión de los cambios, las dificultades que permanecen y los acuerdos que permitan continuar de una forma más consciente.' },
    ],
    processLabel: 'Cómo será el proceso',
    processTitulo: 'Un espacio donde cada voz',
    processSubtitulo: 'pueda ser escuchada',
    modalidad: 'Presencial en Granada u online',
    processCta: 'Solicitar una cita',
    faqs: [
      { pregunta: '¿Cuánto duran las sesiones?', respuesta: 'La duración puede variar según el tipo de encuentro. Se informará antes de comenzar.' },
      { pregunta: '¿Podemos hacer las sesiones online?', respuesta: 'Sí, cuando la situación y las condiciones de privacidad permitan trabajar adecuadamente.' },
      { pregunta: '¿Tenemos que asistir todas las personas implicadas?', respuesta: 'Para trabajar la relación es importante contar con la participación de quienes forman parte del proceso. En terapia familiar acordaremos qué personas necesitan asistir a cada encuentro.' },
      { pregunta: '¿Y si una de las personas no quiere continuar la relación?', respuesta: 'La terapia puede ayudar a expresar las distintas posiciones y tomar decisiones con mayor claridad. No presupone que la relación deba mantenerse a cualquier precio.' },
    ],
    faqLabel: 'Preguntas frecuentes',
    faqTitulo: 'Antes de comenzar',
    faqSubtitulo: '',
    faqCtaTitulo: 'A veces, empezar a escucharse requiere un lugar diferente',
    faqCtaDescripcion: 'Una primera conversación puede ayudaros a comprender qué necesitáis y valorar si este espacio puede ser útil.',
    faqCtaLabel: 'Solicitar una cita',
    faqCierreSecundario: 'Ver otras terapias',
    faqCierreUrl: '/terapias',
    formTherapyName: 'Terapia de pareja y familia',
    formIntro: 'Cuéntanos brevemente qué está ocurriendo. Nos pondremos en contacto para orientaros y acordar el primer encuentro.',
    formNameLabel: 'Nombre y apellidos de la persona de contacto',
    formShowRelationship: true,
    formConfirmation: 'Gracias. Hemos recibido vuestra solicitud. Os escribiremos para conocer mejor la situación y acordar los siguientes pasos.',
  },
  'infantil': {
    titulo: 'Terapia infantil',
    tituloItalico: '',
    subtitulo: 'Cuando algo preocupa en la infancia, no siempre es fácil saber qué ocurre ni cómo ayudar. La terapia ofrece un lugar para entenderlo y encontrar nuevas formas de cuidarlo en familia.',
    categoria: 'Terapia infantil · De 6 a 11 años',
    categoriaSufijo: 'La Seda Granada',
    botonPrincipal: 'Solicitar una cita',
    botonSecundario: 'Conocer la terapia',
    imagen: '/images/terapia-infantil-psicologia-ninos-granada-centro-la-seda.jpg',
    imagenAlt: 'Sala de terapia infantil de La Seda en Granada',
    overviewLabel: 'Un espacio para entender lo que está pasando',
    overviewTitulo: 'La infancia tiene sus propios lenguajes',
    descripcion: 'Las niñas y los niños no siempre pueden explicar con palabras lo que sienten. A veces el malestar aparece en forma de miedo, enfado, aislamiento, dificultades en el colegio, problemas de sueño o cambios de conducta.',
    descripcion2: 'A través del juego, el dibujo, el cuerpo y la conversación, la terapia les permite expresar su experiencia de una manera cercana a su edad. La familia forma parte del proceso. Escuchamos a las personas adultas responsables y ofrecemos orientación para comprender mejor las necesidades de cada menor.',
    cita: '"La infancia no es solo el principio de la vida, es también el principio de todo lo que vendrá después."',
    terapeutas: ['ana-jimenez', 'cristina-lence', 'maria-noel-reyes'],
    beneficios: [
      'Reducir el síntoma que le genera malestar: ansiedad, miedos, tristeza.',
      'Aprender a identificar y gestionar sus emociones.',
      'Mejorar la comunicación con la familia y el entorno.',
      'Desarrollar mejores herramientas para relacionarse con amigos y familia.',
      'Que los padres comprendan qué patrones familiares se repiten y cómo resolverlos.',
    ],
    motivos: [
      { numero: '01', titulo: 'Miedos y preocupación', desc: 'Miedo a dormir, ir al colegio, separarse de la familia o afrontar determinadas situaciones.' },
      { numero: '02', titulo: 'Enfado y dificultades con los límites', desc: 'Reacciones intensas, impulsividad o conflictos frecuentes que están generando malestar en casa o en otros entornos.' },
      { numero: '03', titulo: 'Relaciones y convivencia', desc: 'Dificultades para relacionarse, experiencias de rechazo, acoso escolar o problemas para encontrar un lugar en el grupo.' },
      { numero: '04', titulo: 'Cambios, separaciones y pérdidas', desc: 'Situaciones familiares o vitales que necesitan tiempo, palabras y apoyo para poder ser elaboradas.' },
    ],
    workAreasLabel: 'Cuándo puede ser útil pedir ayuda',
    workAreasTitulo: 'Algunas situaciones que podemos trabajar',
    workAreasNota: 'Estas señales no significan necesariamente que exista un problema psicológico. Una primera conversación puede ayudar a valorar qué necesita la familia.',
    teamLabel: 'El equipo',
    teamTitulo: 'Profesionales con experiencia',
    teamSubtitulo: 'en infancia y familias',
    teamNota: 'Antes de comenzar, valoramos qué profesional puede responder mejor a la situación y explicamos a la familia cómo se desarrollará el proceso.',
    proceso: [
      { paso: '01', texto: 'Primer encuentro con las personas adultas responsables para conocer la situación, la historia y las necesidades actuales.' },
      { paso: '02', texto: 'Primeras sesiones adaptadas a su edad, utilizando el juego y otros recursos expresivos. Acordaremos cuándo es útil incluir encuentros familiares.' },
      { paso: '03', texto: 'Devolución a la familia y propuesta de trabajo. La frecuencia y la duración se adaptarán a la evolución y a las necesidades del proceso.' },
    ],
    processLabel: 'Cómo será el proceso',
    processTitulo: 'Un recorrido que incluye a quien consulta',
    processSubtitulo: 'y a su familia',
    modalidad: 'Presencial en el centro de Granada',
    processCta: 'Solicitar una cita',
    faqs: [
      { pregunta: '¿Cuánto duran las sesiones?', respuesta: 'Habitualmente, 55 minutos.' },
      { pregunta: '¿Qué edades atendéis?', respuesta: 'Esta área está dirigida a menores de 6 a 11 años. A partir de los 12 años, puedes consultar la terapia para adolescentes.' },
      { pregunta: '¿La familia participa en la terapia?', respuesta: 'Sí. La participación de la familia se acuerda en función de la edad y de lo que resulte más útil. Habrá espacios para orientar a las personas adultas responsables sin invadir la intimidad de quien está en terapia.' },
      { pregunta: '¿Qué ocurre en la primera cita?', respuesta: 'El primer encuentro suele realizarse con las personas adultas responsables. Sirve para conocer qué está ocurriendo, recoger la historia y explicar cómo podemos ayudar.' },
    ],
    faqLabel: 'Preguntas frecuentes',
    faqTitulo: 'Antes de comenzar',
    faqSubtitulo: '',
    faqCtaTitulo: 'Pedir ayuda también es una forma de cuidar',
    faqCtaDescripcion: 'Si algo os preocupa, no es necesario esperar a tener todas las respuestas. Podemos empezar con una primera conversación.',
    faqCtaLabel: 'Solicitar una cita',
    faqCierreSecundario: 'Ver otras terapias',
    faqCierreUrl: '/terapias',
    formTherapyName: 'Terapia infantil',
    formIntro: 'Cuéntanos brevemente qué os preocupa. Nos pondremos en contacto contigo para orientarte y proponer el primer encuentro.',
    formNameLabel: 'Nombre y apellidos de la persona adulta de contacto',
    formAgeLabel: 'Edad de la persona menor',
  },
}

// Control de Ruta de Nuxt
const id = route.params.id as string
const terapia = computed(() => terapias[id] ?? null)

// Mapeo seguro de Terapeutas Activos resolviendo el desfase asíncrono
const terapeutasActivos = computed(() => {
  if (!terapia.value || !terapia.value.terapeutas) return []
  const rolesAdolescentes: Record<string, string> = {
    'ana-jimenez': 'Psicología y psicoterapia Gestalt',
    'cristina-lence': 'Educación social, adolescencia y familias',
    'maria-noel-reyes': 'Psicología y acompañamiento'
  }
  return terapia.value.terapeutas
    .map((idRef: string) => ({
      id: idRef,
      ...staff[idRef],
      nombre: id === 'infantil' && idRef === 'maria-noel-reyes' ? 'María Duarte' : staff[idRef].nombre,
      rol: id === 'adolescentes'
        ? rolesAdolescentes[idRef]
        : id === 'infantil' && idRef === 'maria-noel-reyes'
          ? 'Psicóloga Sanitaria'
          : staff[idRef].rol
    }))
    .filter((t: any) => t.nombre)
})

// Reactividad de SEO Avanzado
const seoTitle = computed(() =>
  terapia.value
    ? id === 'adolescentes'
      ? 'Terapia para adolescentes en Granada | Centro La Seda'
      : id === 'infantil'
        ? 'Terapia infantil en Granada | Centro La Seda'
        : id === 'adultos'
          ? 'Terapia para adultos en Granada y online | La Seda'
          : `${terapia.value.titulo} ${terapia.value.tituloItalico} en Granada · La Seda`
    : 'Terapia no encontrada · La Seda'
)
const seoDescription = computed(() =>
  terapia.value
    ? id === 'adolescentes'
      ? 'Terapia para adolescentes en Granada. Un espacio confidencial para comprender lo que ocurre, fortalecer recursos y cuidar también la relación familiar.'
      : id === 'infantil'
        ? 'Terapia infantil de 6 a 11 años en Granada. Un espacio para comprender lo que sucede y ofrecer apoyo también a la familia.'
        : id === 'adultos'
          ? 'Terapia psicológica y acompañamiento emocional para adultos en Granada y online. Un espacio para comprender, elaborar y recuperar recursos.'
          : `${terapia.value.subtitulo} Centro de Psicología La Seda, Granada. Primera orientación gratuita.`
    : ''
)
const seoImage = computed(() =>
  terapia.value?.imagen
    ? `https://www.laseda.es${terapia.value.imagen}`
    : 'https://www.laseda.es/images/hero-consulta-laseda.jpg'
)
const seoUrl = computed(() =>
  terapia.value ? `https://www.laseda.es/terapias/${id}` : 'https://www.laseda.es/terapias'
)

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
  ogImage: seoImage,
  ogType: 'website',
  ogUrl: seoUrl,
  ogLocale: 'es_ES',
  twitterCard: 'summary_large_image',
  twitterTitle: seoTitle,
  twitterDescription: seoDescription,
  twitterImage: seoImage,
  robots: 'index, follow',
  canonical: seoUrl,
})

useHead({
  script: computed(() => terapia.value ? [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: `${terapia.value.titulo} ${terapia.value.tituloItalico} — Centro La Seda Granada`,
        description: terapia.value.subtitulo,
        url: seoUrl.value,
        image: seoImage.value,
        telephone: '+34-679-571-977',
        email: 'hola@centrolaseda.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Calle Horno de Haza 29, Bajo 1',
          addressLocality: 'Granada',
          addressRegion: 'Andalucía',
          postalCode: '18001',
          addressCountry: 'ES',
        },
        parentOrganization: {
          '@type': 'MedicalBusiness',
          name: 'La Seda · Psicología y Crecimiento en Granada',
          url: 'https://www.laseda.es',
        },
      }),
    },
  ] : [])
})
</script>

<template>
  <div class="bg-[#FDFBF9] antialiased">
    
    <main
      v-if="!terapia"
      class="min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <p class="section-label mb-4 text-[#71B1A5]">Error 404</p>
      <h1 class="font-serif italic text-[#27252B] text-4xl md:text-5xl leading-[1.2] mb-6">
        Terapia no encontrada
      </h1>
      <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/60 max-w-md mb-12">
        La especialidad clínica que buscas no existe o ha cambiado de dirección.
      </p>
      <NuxtLink to="/terapias" class="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase border border-[#27252B] px-6 py-3.5 hover:bg-[#27252B] hover:text-white transition-all duration-300">
        Ver todas las terapias
      </NuxtLink>
    </main>

    <main v-else>
      
      <TherapyHero 
        :categoria="terapia.categoria"
        :categoriaSufijo="terapia.categoriaSufijo"
        :titulo="terapia.titulo"
        :tituloItalico="terapia.tituloItalico"
        :subtitulo="terapia.subtitulo"
        :imagen="terapia.imagen"
        :imagenAlt="terapia.imagenAlt"
        :botonPrincipal="terapia.botonPrincipal"
        :botonSecundario="terapia.botonSecundario"
      />

      <TherapyOverview 
        :descripcion="terapia.descripcion"
        :descripcion2="terapia.descripcion2"
        :cita="terapia.cita"
        :beneficios="terapia.beneficios"
        :label="terapia.overviewLabel"
        :titulo="terapia.overviewTitulo"
        :subtitulo="terapia.overviewSubtitulo"
      />

      <TherapyTeam 
        :terapeutas="terapeutasActivos"
        :label="terapia.teamLabel"
        :titulo="terapia.teamTitulo"
        :subtitulo="terapia.teamSubtitulo"
        :nota="terapia.teamNota"
      />

      <TherapyWorkAreas 
        :motivos="terapia.motivos"
        :imagen="terapia.imagen"
        :imagenAlt="terapia.imagenAlt"
        :label="terapia.workAreasLabel"
        :titulo="terapia.workAreasTitulo"
        :nota="terapia.workAreasNota"
      />

      <TherapyProcess 
        :proceso="terapia.proceso"
        :therapyId="id"
        :label="terapia.processLabel"
        :titulo="terapia.processTitulo"
        :subtitulo="terapia.processSubtitulo"
        :modalidad="terapia.modalidad"
        :ctaLabel="terapia.processCta"
      />

      <TherapyFAQ 
        :faqs="terapia.faqs"
        :label="terapia.faqLabel"
        :titulo="terapia.faqTitulo"
        :subtitulo="terapia.faqSubtitulo"
        :ctaTitulo="terapia.faqCtaTitulo"
        :ctaDescripcion="terapia.faqCtaDescripcion"
        :ctaLabel="terapia.faqCtaLabel"
        :cierreSecundario="terapia.faqCierreSecundario"
        :cierreSecundarioUrl="terapia.faqCierreUrl"
      />

      <TherapyRelated 
        :actualId="id"
        :todasLasTerapias="terapias"
      />

    </main>
  </div>
</template>