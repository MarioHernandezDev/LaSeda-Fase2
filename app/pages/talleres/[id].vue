<script setup lang="ts">
import { computed } from 'vue'
import TherapyHero from '~/components/therapy/TherapyHero.vue'
import WorkshopIntro from '~/components/talleres/WorkshopIntro.vue'
import WorkshopBenefits from '~/components/talleres/WorkshopBenefits.vue'
import WorkshopDates from '~/components/talleres/WorkshopDates.vue'
import WorkshopFaqs from '~/components/talleres/WorkshopFaqs.vue'

const route = useRoute()

const staff: Record<string, any> = {
  'ana-jimenez': {
    nombre: 'Ana Jiménez',
    imagen: '/images/ana-jimenez-consulta-granada.jpg',
    imagenAlt: 'Ana Jiménez, psicóloga, psicoterapeuta Gestalt y supervisora acreditada por la AETG'
  },
  'leonor-cabrera': {
    nombre: 'Leonor Cabrera Torrado',
    imagen: '/images/la-seda-leonor-cabrera.jpg',
    imagenAlt: 'Leonor Cabrera Torrado, especialista y facilitadora de Constelaciones Familiares'
  }
}

const workshops: Record<string, any> = {
  'supervision-casos': {
    titulo: 'Supervisión de casos',
    tituloItalico: '',
    subtitulo: 'Un espacio para revisar la práctica, compartir dificultades y seguir creciendo como profesional.',
    categoria: 'Práctica profesional',
    categoriaSufijo: 'La Seda Granada',
    aviso: 'Nuevo grupo abierto · Octubre de 2026',
    botonPrincipal: 'Solicitar',
    botonPrincipalUrl: '#sobre-el-taller',
    botonSecundario: 'Conocer la supervisión',
    botonSecundarioUrl: '#sobre-el-taller',
    imagen: '/images/supervision-casos-clinicos-terapeutas-gestalt-granada.jpg',
    imagenAlt: 'Grupo de supervisión de casos para profesionales de la terapia en La Seda, Granada',
    facilitadoraId: 'ana-jimenez',
    bio: 'Ana Jiménez es psicóloga y psicoterapeuta Gestalt, miembro didacta y supervisora acreditada por la Asociación Española de Terapia Gestalt (AETG). Cuenta con más de quince años de experiencia supervisando a profesionales de la terapia.',
    bio2: 'Su forma de trabajar pone en relación la revisión del caso con lo que sucede en quien acompaña. Atiende tanto a las decisiones profesionales como a las emociones, dudas o bloqueos que pueden aparecer durante el proceso terapéutico.',
    descripcion: 'La supervisión permite detenerse y observar con más claridad lo que sucede en el trabajo terapéutico: las dudas que aparecen, los casos que se bloquean, las decisiones que cuesta tomar o aquello que la relación con una persona despierta en quien la atiende.',
    descripcion2: 'En el grupo se comparten casos y experiencias profesionales dentro de un marco confidencial. La aportación de la supervisora y del resto de participantes ayuda a descubrir nuevas posibilidades de intervención y a cuidar la forma de estar en consulta.',
    descripcion3: 'No se trata de evaluar ni de ofrecer respuestas cerradas. Se trata de pensar la práctica en compañía, reconocer recursos y encontrar una orientación más ajustada para cada situación.',
    introduccionLabel: 'La supervisión',
    introduccionTitulo: 'Un lugar donde no tener que sostener la práctica en soledad',
    introduccionTituloSecundario: '',
    facilitadoraLabel: 'La supervisora',
    facilitadoraTitulo: '',
    facilitadoraBoton: 'Conocer a Ana',
    beneficiosLabel: 'Qué puede aportar la supervisión',
    beneficiosTitulo: 'Un espacio para pensar, aprender y cuidar la práctica',
    beneficios: [
      { numero: '01', titulo: 'Más claridad ante los casos', desc: 'Revisar la información disponible, ordenar hipótesis y encontrar nuevas posibilidades cuando un proceso parece estancado.' },
      { numero: '02', titulo: 'Conciencia sobre la propia intervención', desc: 'Reconocer cómo influyen las emociones, expectativas y formas de relacionarse de quien acompaña.' },
      { numero: '03', titulo: 'Una devolución honesta y cuidadosa', desc: 'Recibir otras perspectivas sin juicio, dentro de un entorno orientado al aprendizaje.' },
      { numero: '04', titulo: 'Apoyo entre profesionales', desc: 'Compartir el impacto emocional de la práctica con personas que conocen sus exigencias y responsabilidades.' },
      { numero: '05', titulo: 'Cuidado ético', desc: 'Pensar límites, responsabilidades y decisiones complejas para ofrecer una atención más consciente y responsable.' },
      { numero: '06', titulo: 'Horas acreditables por la AETG', desc: 'Las horas realizadas con Ana Jiménez pueden acreditarse como horas de supervisión para la formación en Terapia Gestalt de la AETG.' }
    ],
    fechas: [],
    calendarioLabel: 'Próxima convocatoria',
    calendarioTitulo: 'Grupo abierto desde octubre de 2026',
    calendarioDescripcion: 'En octubre de 2026 comienza un nuevo grupo de supervisión de casos. Las plazas son limitadas para cuidar la confianza, la continuidad y el trabajo compartido. La fecha de inicio, el calendario, el horario y las condiciones de participación se facilitarán al solicitar información.',
    reservaLabel: 'Solicitar',
    reservaUrl: '#sobre-el-taller',
    faqs: [
      { pregunta: '¿Necesito tener experiencia para participar?', respuesta: 'No es necesario contar con una trayectoria extensa. El grupo puede ser útil tanto al comienzo de la práctica como en etapas posteriores. Si tienes dudas sobre si encaja contigo, puedes contárnoslo en el formulario.' },
      { pregunta: '¿La supervisión es grupal?', respuesta: 'Sí. Esta convocatoria corresponde a un grupo de supervisión de casos. El formato concreto y las condiciones de participación se comunicarán junto con el calendario.' },
      { pregunta: '¿Qué puedo llevar a supervisión?', respuesta: 'Puedes traer un caso, una dificultad de la relación terapéutica, una decisión que necesites revisar, un bloqueo o una situación que te esté generando dudas en la práctica.' },
      { pregunta: '¿Todavía no atiendo casos, puedo participar?', respuesta: 'Sí. También puedes trabajar dudas, inseguridades o dificultades relacionadas con el inicio de tu recorrido profesional.' },
      { pregunta: '¿Las horas pueden acreditarse para la formación Gestalt?', respuesta: 'Sí. Ana Jiménez es miembro didacta y supervisora acreditada por la AETG. Las horas realizadas pueden certificarse como horas de supervisión.' },
      { pregunta: '¿Cómo solicito plaza o más información?', respuesta: 'Completa el formulario de esta página. Te escribiremos con el calendario, el horario, las condiciones y la disponibilidad del grupo. No necesitas llamar por teléfono.' }
    ],
    faqLabel: 'Preguntas frecuentes',
    faqTitulo: 'Antes de incorporarte al grupo',
    faqSubtitulo: '',
    ctaTitulo: 'Solicita plaza o información',
    ctaDescripcion: 'Si te interesa incorporarte al grupo o quieres resolver alguna duda antes de decidir, completa el formulario. Te escribiremos para ofrecerte la información necesaria y confirmar la disponibilidad.',
    ctaLabel: 'Enviar solicitud',
    ctaUrl: '#sobre-el-taller',
    seoTitle: 'Supervisión de casos para profesionales de la terapia en Granada | La Seda',
    seoDescription: 'Grupo de supervisión de casos en Granada, facilitado por Ana Jiménez. Nuevo grupo abierto desde octubre de 2026. Solicita plaza o información.'
  },
  'constelaciones-familiares': {
    titulo: 'Talleres de Constelaciones',
    tituloItalico: 'Familiares',
    subtitulo: 'Revelar lo invisible para liberarse de lo que no nos pertenece.',
    categoria: 'Espacios vivenciales',
    imagen: '/images/taller-constelaciones-familiares-granada-centro-la-seda.jpg',
    imagenAlt: 'Taller vivencial y grupal de constelaciones familiares en Granada',
    facilitadoraId: 'leonor-cabrera',
    bio: 'Leonor Cabrera Torrado está especializada en trabajar la fuerza interior y los bloqueos emocionales a través de las <strong>Constelaciones Familiares</strong>...',
    bio2: 'Es autora del libro "El camino de la fuerza interior". Su trabajo combina el rigor del método sistémico de Bert Hellinger con una <strong>mirada profundamente compasiva</strong>...',
    descripcion: 'Los talleres de Constelaciones Familiares de La Seda sirven para abordar problemas y dinámicas familiares, así como otros desafíos personales...',
    descripcion2: 'El objetivo principal es revelar y resolver estos patrones para promover el bienestar emocional y las relaciones saludables...',
    beneficiosLabel: 'Qué abordamos',
    beneficiosTitulo: 'Situaciones que este taller puede mover',
    beneficios: [
      { numero: '01', titulo: 'Resolver conflictos familiares', desc: 'Identifica y resuelve conflictos persistententes dentro de la familia: entre padres e hijos, entre hermanos...' },
      { numero: '02', titulo: 'Comprender patrones repetitivos', desc: 'Las personas a menudo repiten patrones que se originan en su historia familiar.' },
      { numero: '03', titulo: 'Liberar cargas transgeneracionales', desc: 'Devuelve simbólicamente lo que pertenece a generaciones anteriores y recupera tu propio lugar.' },
      { numero: '04', titulo: 'Elaborar duelos y pérdidas', desc: 'Hay duelos que no pueden ser elaborados y que siguen doliendo a pesar de que pasa el tiempo.' },
      { numero: '05', titulo: 'Tomar decisiones importantes', desc: 'En ocasiones, las personas recurren a las Constelaciones para tomar decisiones sobre trabajo, relaciones o crianza.' },
      { numero: '06', titulo: 'Autoconocimiento y dirección vital', desc: 'Muchas personas salen de los talleres con una percepción renovada de sí mismas.' }
    ],
    fechas: [
      { dia: '18', mes: 'Sep', anio: '2026', diasemana: 'Viernes', descripcion: 'Constelaciones abiertas', horario: '17:00 – 21:00 h' },
      { dia: '10', mes: 'Oct', anio: '2026', diasemana: 'Sábado', descripcion: 'Pareja y vínculos', horario: '10:00 – 19:00 h' },
      { dia: '21', mes: 'Nov', anio: '2026', diasemana: 'Sábado', descripcion: 'Constelaciones abiertas', horario: '10:00 – 14:00 h' },
      { dia: '23', mes: 'Ene', anio: '2027', diasemana: 'Sábado', descripcion: 'Cierres, pérdidas y duelo', horario: '10:00 – 19:00 h' },
      { dia: '26', mes: 'Feb', anio: '2027', diasemana: 'Viernes', descripcion: 'Constelaciones abiertas', horario: '17:00 – 21:00 h' },
      { dia: '20', mes: 'Mar', anio: '2027', diasemana: 'Sábado', descripcion: 'Trabajo y lugar en el mundo', horario: '10:00 – 19:00 h' },
      { dia: '29', mes: 'Abr', anio: '2027', diasemana: 'Jueves', descripcion: 'Constelaciones', horario: '17:00 – 21:00 h' },
      { dia: '21', mes: 'May', anio: '2027', diasemana: 'Viernes', descripcion: 'Constelaciones abiertas', horario: '17:00 – 21:00 h' },
      { dia: '9-11', mes: 'Jul', anio: '2027', diasemana: 'Vie-Dom', descripcion: 'Linaje, pertenencia y dirección vital', horario: 'Vie 17:00 – Dom 17:00 h', especial: 'RESIDENCIAL · Lugar por determinar' }
    ],
    faqs: [
      { pregunta: '¿Es necesaria experiencia previa para asistir?', respuesta: 'No. Los talleres están abiertos a cualquier persona independientemente de su experiencia.' },
      { pregunta: '¿Cómo funciona el taller? ¿Qué ocurre durante la sesión?', respuesta: 'El facilitador elige entre los asistentes a alguien para trabajar su tema y le hace una pequeña entrevista...' },
      { pregunta: '¿Es seguro que constelaré en el taller?', respuesta: 'En este tipo de talleres no podemos asegurar que todos los participantes constelen por razones terapéuticas...' },
      { pregunta: '¿Puedo participar como representante sin tener una constelación propia?', respuesta: 'Sí, y es una experiencia muy valiosa en sí misma.' },
      { pregunta: '¿Cómo reservo plaza en un taller?', respuesta: 'Puedes escribirnos a hola@centrolaseda.com o enviar un WhatsApp al 656 431 309.' }
    ],
    reservaUrl: 'https://wa.me/34656431309?text=Hola%20buenas!%20Quiero%20informaci%C3%B3n%20sobre%20los%20talleres%20de%20Constelaciones%20Familiares.'
  },
  'seguimiento-programa-sat': {
    titulo: 'Seguimiento eneagrama Programa SAT',
    tituloItalico: '',
    subtitulo: 'Un espacio compartido para continuar el recorrido iniciado en el Programa SAT y llevar su comprensión a la experiencia cotidiana.',
    categoria: 'Seguimiento eneagrama Programa SAT',
    categoriaSufijo: 'En colaboración con la Fundación Claudio Naranjo',
    aviso: 'Nueve encuentros · De 18:30 a 20:30',
    botonPrincipal: 'Info FCN',
    botonPrincipalUrl: 'https://programasat.com/es/grupos/seguimiento',
    botonSecundario: 'Conocer el grupo',
    botonSecundarioUrl: '#sobre-el-taller',
    imagen: '/images/seguimiento-eneagrama-programa-sat-granada.jpg',
    imagenAlt: 'Grupo de seguimiento del Programa SAT en La Seda, Granada',
    facilitadoraId: 'leonor-cabrera',
    bio: 'Leonor Cabrera Torrado participa como colaboradora del Programa SAT y será la responsable del grupo de seguimiento en Granada.',
    bio2: 'Su manera de sostener los procesos parte de una presencia cercana, respetuosa y atenta a la experiencia de cada persona y del grupo.',
    descripcion: 'El trabajo con el eneagrama no termina al reconocer un carácter o comprender una estructura. Lo aprendido cobra una nueva dimensión cuando podemos observar cómo aparece en nuestras relaciones, decisiones y maneras de estar en el mundo.',
    descripcion2: 'El grupo de seguimiento reúne a personas que comparten el deseo de continuar investigándose y seguir advancing en el camino abierto por el Programa SAT. A lo largo de los encuentros profundizaremos en la presencia de las pasiones y las fijaciones en la vida cotidiana, acercándonos a ellas con honestidad, atención y respeto por el momento de cada persona.',
    introduccionLabel: 'Continuar el proceso',
    introduccionTitulo: 'Un lugar para seguir profundizando',
    introduccionTituloSecundario: '',
    facilitadoraLabel: 'En Granada',
    facilitadoraBoton: 'Conocer a Leonor',
    beneficiosLabel: 'El recorrido',
    beneficiosTitulo: 'De la comprensión a la experiencia',
    beneficios: [
      { numero: '01', titulo: 'Observar lo cotidiano', desc: 'Reconoceremos cómo las pasiones, las fijaciones y los automatismos se expresan en situaciones concretas de la vida.' },
      { numero: '02', titulo: 'Profundizar en la comprensión de sí', desc: 'Volveremos sobre lo aprendido desde la experiencia presente, permitiendo que aparezcan nuevos matices y preguntas.' },
      { numero: '03', titulo: 'Compartir el camino', desc: 'El grupo ofrece continuidad y compañía junto a otras personas con una motivación común: seguir avanzando en su proceso de autoconocimiento.' },
      { numero: '04', titulo: 'Dar espacio a la integración', desc: 'Cada encuentro ayuda a enlazar el trabajo realizado en los módulos con la forma en que vivimos, nos relacionamos y elegimos.' }
    ],
    fechas: [
      { dia: '8', mes: 'Oct', anio: '2026', diasemana: 'Jueves', descripcion: 'Jueves, 8 de octubre de 2026', horario: '18:30 – 20:30 h' },
      { dia: '5', mes: 'Nov', anio: '2026', diasemana: 'Jueves', descripcion: 'Jueves, 5 de noviembre de 2026', horario: '18:30 – 20:30 h' },
      { dia: '3', mes: 'Dic', anio: '2026', diasemana: 'Jueves', descripcion: 'Jueves, 3 de diciembre de 2026', horario: '18:30 – 20:30 h' },
      { dia: '7', mes: 'Ene', anio: '2027', diasemana: 'Jueves', descripcion: 'Jueves, 7 de enero de 2027', horario: '18:30 – 20:30 h' },
      { dia: '4', mes: 'Feb', anio: '2027', diasemana: 'Jueves', descripcion: 'Jueves, 4 de febrero de 2027', horario: '18:30 – 20:30 h' },
      { dia: '11', mes: 'Mar', anio: '2027', diasemana: 'Jueves', descripcion: 'Jueves, 11 de marzo de 2027', horario: '18:30 – 20:30 h' },
      { dia: '1', mes: 'Abr', anio: '2027', diasemana: 'Jueves', descripcion: 'Jueves, 1 de abril de 2027', horario: '18:30 – 20:30 h' },
      { dia: '13', mes: 'May', anio: '2027', diasemana: 'Jueves', descripcion: 'Jueves, 13 de mayo de 2027', horario: '18:30 – 20:30 h' },
      { dia: '2', mes: 'Jun', anio: '2027', diasemana: 'Miércoles', descripcion: 'Miércoles, 2 de junio de 2027', horario: '18:30 – 20:30 h' }
    ],
    calendarioTitulo: 'Nueve encuentros en Granada',
    calendarioDescripcion: 'Los encuentros se celebrarán en La Seda, en el centro de Granada, de 18:30 a 20:30.',
    calendarioDireccion: 'La Seda · Calle Horno de Haza, 29, Bajo 1 · Granada',
    reservaLabel: 'Info FCN',
    reservaUrl: 'https://programasat.com/es/grupos/seguimiento',
    faqs: [
      { pregunta: '¿Puedo participar si no he realizado el Programa SAT?', respuesta: 'No. Los grupos de seguimiento están dirigidos a personas que ya han realizado el Introductorio o cualquier otro módulo del Programa SAT.' },
      { pregunta: '¿Es un curso de eneagrama?', respuesta: 'No es un curso inicial ni un nuevo módulo. Es un espacio para continuar profundizando en la experiencia y observar las pasiones y fijaciones en la vida cotidiana.' },
      { pregunta: '¿Dónde se realizan los encuentros?', respuesta: 'En La Seda, en Calle Horno de Haza, 29, Bajo 1, en el centro de Granada.' },
      { pregunta: '¿Quién acompaña el grupo?', respuesta: 'Leonor Cabrera Torrado, colaboradora del Programa SAT y responsable del grupo de seguimiento en Granada.' },
      { pregunta: '¿Cómo se realiza la inscripción?', respuesta: 'A través del formulario oficial del Programa SAT. Si necesitas resolver alguna duda sobre el proceso, puedes escribir a seguimiento@programasat.com.' }
    ],
    faqLabel: 'Preguntas frecuentes',
    faqTitulo: 'Antes de incorporarte',
    faqSubtitulo: '',
    ctaTitulo: 'Más información e inscripción',
    ctaDescripcion: 'La información y la inscripción se gestionan a través de la web oficial del Programa SAT de la Fundación Claudio Naranjo. Desde el botón podrás consultar los detalles y acceder al formulario correspondiente al grupo de Granada.',
    ctaLabel: 'Ir a la web de la FCN',
    ctaUrl: 'https://programasat.com/es/grupos/seguimiento',
    seoTitle: 'Seguimiento eneagrama Programa SAT en Granada | La Seda',
    seoDescription: 'Grupo de seguimiento del Programa SAT en Granada para continuar profundizando en el eneagrama y observar las pasiones y fijaciones en la vida cotidiana.',
    enlaceInscripcion: 'https://programasat.com/es/grupos/seguimiento'
  },
  'grupo-de-terapia': {
    titulo: 'Grupo de terapia',
    tituloItalico: '',
    subtitulo: 'Con enfoque gestáltico y sistémico',
    categoria: 'Grupo de terapia',
    categoriaSufijo: 'Con enfoque gestáltico y sistémico',
    aviso: 'Pack completo cerrado · Nueve encuentros (De 17:00 a 19:30)',
    botonPrincipal: 'Solicitar',
    botonPrincipalUrl: '/contacto',
    botonSecundario: 'Conocer el grupo',
    botonSecundarioUrl: '#sobre-el-taller',
    imagen: '/images/grupo-de-terapia-granada-la-seda.jpg',
    imagenAlt: 'Grupo de terapia con enfoque gestáltico y sistémico en La Seda, Granada',
    facilitadoraId: 'leonor-cabrera',
    facilitadoraImagenAlt: 'Leonor Cabrera Torrado, facilitadora del grupo de terapia',
    bio: 'Leonor Cabrera Torrado es facilitadora de constelaciones familiares y se dedica al acompañamiento emocional desde 2013.',
    bio2: 'Su forma de trabajar integra la Terapia Gestalt, la perspectiva sistémica y el trabajo con la historia familiar. En este grupo sostendrá un espacio cercano y estructurado, atento tanto al proceso individual como a lo que vaya sucediendo en las relaciones dentro del grupo. Es autora de «El camino de la fuerza interior».',
    descripcion: 'Nuestra forma de relacionarnos empieza a construirse en los primeros vínculos. En la familia aprendemos qué podemos esperar de las demás personas, qué lugar ocupamos y qué necesitamos hacer para sentir pertenencia, protección o reconocimiento.',
    descripcion2: 'Muchas de esas respuestas fueron necesarias en su momento. Sin embargo, podemos seguir repitiéndolas de forma automática en la vida adulta, incluso cuando ya no responden a lo que necesitamos. El grupo ofrece un contexto vivo para reconocer esos movimientos mientras aparecen: cómo nos acercamos, cómo nos alejamos, qué nos cuesta pedir, qué tememos mostrar y qué papel tendemos a asumir en las relaciones. No se trata de aprender una manera correcta de relacionarse. Se trata de comprender de dónde viene nuestra forma de hacerlo y ampliar la posibilidad de elegir.',
    introduccionLabel: 'Lo relacional',
    introduccionTitulo: 'El grupo como lugar para observar lo que nos sucede con otras personas',
    introduccionTituloSecundario: '',
    facilitadoraLabel: 'La facilitadora',
    facilitadoraBoton: 'Conocer a Leonor',
    beneficiosLabel: 'El recorrido',
    beneficiosTitulo: 'Nueve encuentros para acercarnos a nuestra historia relacional',
    beneficios: [
      { numero: '01', titulo: 'El sistema familiar', desc: 'Observaremos cómo se ha organizado nuestra familia, qué lugares ha ocupado cada persona y qué reglas explícitas o silenciosas han sostenido el sistema.' },
      { numero: '02', titulo: 'Patrones que se repiten', desc: 'Reconoceremos formas de vincularnos que reproducimos sin darnos cuenta en la pareja, las amistades, la familia o el trabajo.' },
      { numero: '03', titulo: 'Conflictos nucleares del sistema', desc: 'Nos acercaremos a dificultades profundas que atraviesan la historia familiar y que pueden seguir influyendo en cómo vivimos y nos relacionamos.' },
      { numero: '04', titulo: 'Creencias familiares que limitan', desc: 'Revisaremos ideas sobre el amor, el cuidado, el éxito, la pertenencia o el propio valor que hemos recibido y que quizá seguimos tomando como verdades.' },
      { numero: '05', titulo: 'La imagen que construimos de quiénes somos', desc: 'Exploraremos cómo los vínculos familiares han contribuido a formar una imagen de quiénes somos y distinguiremos qué parte de esa imagen todavía nos representa y cuál necesita ser revisada.' },
      { numero: '06', titulo: 'Un lugar más propio', desc: 'Buscaremos ordenar la experiencia familiar interna para relacionarnos desde una posición más adulta, presente y consciente.' }
    ],
    fechas: [
      { dia: '22', mes: 'Oct', anio: '2026', diasemana: 'Jueves', descripcion: 'Sesión 1: Grupo de Terapia', horario: '17:00 – 19:30 h', especial: 'Pack completo · Asistencia requerida' },
      { dia: '20', mes: 'Nov', anio: '2026', diasemana: 'Jueves', descripcion: 'Sesión 2: Grupo de Terapia', horario: '17:00 – 19:30 h', especial: 'Pack completo · Asistencia requerida' },
      { dia: '17', mes: 'Dic', anio: '2026', diasemana: 'Jueves', descripcion: 'Sesión 3: Grupo de Terapia', horario: '17:00 – 19:30 h', especial: 'Pack completo · Asistencia requerida' },
      { dia: '21', mes: 'Ene', anio: '2027', diasemana: 'Jueves', descripcion: 'Sesión 4: Grupo de Terapia', horario: '17:00 – 19:30 h', especial: 'Pack completo · Asistencia requerida' },
      { dia: '18', mes: 'Feb', anio: '2027', diasemana: 'Jueves', descripcion: 'Sesión 5: Grupo de Terapia', horario: '17:00 – 19:30 h', especial: 'Pack completo · Asistencia requerida' },
      { dia: '18', mes: 'Mar', anio: '2027', diasemana: 'Jueves', descripcion: 'Sesión 6: Grupo de Terapia', horario: '17:00 – 19:30 h', especial: 'Pack completo · Asistencia requerida' },
      { dia: '15', mes: 'Abr', anio: '2027', diasemana: 'Jueves', descripcion: 'Sesión 7: Grupo de Terapia', horario: '17:00 – 19:30 h', especial: 'Pack completo · Asistencia requerida' },
      { dia: '20', mes: 'May', anio: '2027', diasemana: 'Jueves', descripcion: 'Sesión 8: Grupo de Terapia', horario: '17:00 – 19:30 h', especial: 'Pack completo · Asistencia requerida' },
      { dia: '17', mes: 'Jun', anio: '2027', diasemana: 'Jueves', descripcion: 'Sesión 9: Grupo de Terapia', horario: '17:00 – 19:30 h', especial: 'Pack completo · Asistencia requerida' }
    ],
    calendarioTitulo: 'Nueve encuentros mensuales (Pack cerrado)',
    calendarioDescripcion: 'Este proceso funciona como un pack cerrado de 9 encuentros desde octubre de 2026 a junio de 2027. Para garantizar la cohesión, la seguridad y el trabajo profundo del grupo, no es posible reservar sesiones sueltas; la inscripción implica el compromiso de asistir al recorrido completo.',
    calendarioDireccion: 'La Seda · Granada',
    reservaLabel: 'Solicitar',
    reservaUrl: 'https://wa.me/34656431309?text=Hola%20buenas!%20Quiero%20informaci%C3%B3n%20sobre%20el%20Grupo%20de%20Terapia.',
    faqs: [
      { pregunta: '¿Puedo reservar sesiones sueltas?', respuesta: 'No. El grupo de terapia es un proceso cerrado en formato pack. No se permite la asistencia puntual a fechas sueltas para cuidar la intimidad, la confianza y el proceso del grupo.' },
      { pregunta: '¿Necesito haber hecho terapia anteriormente?', respuesta: 'No es imprescindible. Antes de incorporarte tendremos un primer contacto para conocer qué buscas y valorar si el grupo puede responder a tu momento y a tus necesidades.' },
      { pregunta: '¿Tengo que contar mi historia delante del grupo?', respuesta: 'No tendrás que compartir más información de la que desees. El proceso se construirá respetando tu intimidad, tus límites y tu ritmo.' },
      { pregunta: '¿Es un grupo de constelaciones familiares?', respuesta: 'No. Es un grupo de terapia vivencial con una comprensión gestáltica y sistémica. En algunos encuentros podrán utilizarse trabajos inspirados en las constelaciones como uno de los recursos del proceso.' },
      { pregunta: '¿Tengo que asistir a los nueve encuentros?', respuesta: 'Sí. La inscripción corresponde al recorrido completo de las nueve sesiones. La continuidad de los mismos integrantes es imprescindible para construir el vínculo de confianza que sostiene el trabajo terapéutico.' },
      { pregunta: '¿Cómo sé si este grupo es para mí?', respuesta: 'Puede resultarte útil si deseas comprender mejor tus relaciones, reconocer patrones familiares que se repiten o revisar el lugar que sueles ocupar ante otras personas. El contacto previo servirá para valorar conjuntamente si es el espacio adecuado.' },
      { pregunta: '¿Dónde se realizará?', respuesta: 'Los encuentros serán presenciales en La Seda, en el centro de Granada.' }
    ],
    faqLabel: 'Preguntas frecuentes',
    faqTitulo: 'Antes de incorporarte',
    faqSubtitulo: '',
    ctaTitulo: 'Solicita plaza o información',
    ctaDescripcion: 'Si quieres saber si este grupo puede ser adecuado para ti, completa el formulario. Te escribiremos para resolver tus dudas, explicarte las condiciones y valorar contigo la incorporación al pack completo.',
    ctaLabel: 'Enviar solicitud',
    ctaUrl: '/contacto',
    seoTitle: 'Grupo de terapia en Granada | La Seda',
    seoDescription: 'Grupo de terapia con enfoque gestáltico y sistémico para explorar los vínculos familiares y los patrones que repetimos en nuestras relaciones. Nueve encuentros en pack cerrado en Granada, de octubre de 2026 a junio de 2027.'
  }
}

const id = route.params.id as string
const taller = computed(() => workshops[id] ?? null)
const facilitadoraActiva = computed(() => taller.value ? staff[taller.value.facilitadoraId] : null)

// Metatags SEO
const seoTitle = computed(() => taller.value ? (taller.value.seoTitle ?? `${taller.value.titulo} ${taller.value.tituloItalico} · Granada 2026`) : 'Taller no encontrado')
const seoDescription = computed(() => taller.value ? (taller.value.seoDescription ?? taller.value.subtitulo) : '')

useSeoMeta({
  title: seoTitle,
  description: seoDescription
})
</script>

<template>
  <div class="bg-[#FDFBF9] antialiased">
    <main v-if="!taller" class="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 class="font-serif italic text-3xl mb-4">Taller no encontrado</h1>
      <NuxtLink to="/talleres" class="text-xs uppercase tracking-widest border border-[#27252B] px-6 py-3">Ver todos</NuxtLink>
    </main>

    <main v-else>
      <TherapyHero
        :categoria="taller.categoria"
        :categoriaSufijo="taller.categoriaSufijo"
        :titulo="taller.titulo"
        :tituloItalico="taller.tituloItalico"
        :subtitulo="taller.subtitulo"
        :aviso="taller.aviso"
        :imagen="taller.imagen"
        :imagenAlt="taller.imagenAlt"
        :botonPrincipal="taller.botonPrincipal"
        :botonPrincipalUrl="taller.botonPrincipalUrl"
        :botonSecundario="taller.botonSecundario"
        :botonSecundarioUrl="taller.botonSecundarioUrl"
      />

      <WorkshopIntro
        :descripcion="taller.descripcion"
        :descripcion2="taller.descripcion2"
        :descripcion3="taller.descripcion3"
        :imagen="taller.imagen"
        :imagenAlt="taller.imagenAlt"
        :bio="taller.bio"
        :bio2="taller.bio2"
        :facilitadoraId="taller.facilitadoraId"
        :facilitadora="facilitadoraActiva"
        :facilitadoraImagenAlt="taller.facilitadoraImagenAlt"
        :introduccionLabel="taller.introduccionLabel"
        :introduccionTitulo="taller.introduccionTitulo"
        :introduccionTituloSecundario="taller.introduccionTituloSecundario"
        :facilitadoraLabel="taller.facilitadoraLabel"
        :facilitadoraTitulo="taller.facilitadoraTitulo"
        :facilitadoraBoton="taller.facilitadoraBoton"
      />

      <WorkshopBenefits
        :label="taller.beneficiosLabel"
        :titulo="taller.beneficiosTitulo"
        :beneficios="taller.beneficios"
      />

      <WorkshopDates
        :fechas="taller.fechas"
        :calendarioTitulo="taller.calendarioTitulo"
        :calendarioLabel="taller.calendarioLabel"
        :calendarioDescripcion="taller.calendarioDescripcion"
        :calendarioDireccion="taller.calendarioDireccion"
        :reservaLabel="taller.reservaLabel"
        :reservaUrl="taller.reservaUrl"
      />

      <WorkshopFaqs
        :faqs="taller.faqs"
        :label="taller.faqLabel"
        :titulo="taller.faqTitulo"
        :subtitulo="taller.faqSubtitulo"
        :ctaTitulo="taller.ctaTitulo"
        :ctaDescripcion="taller.ctaDescripcion"
        :ctaLabel="taller.ctaLabel"
        :ctaUrl="taller.ctaUrl"
      />
    </main>
  </div>
</template>