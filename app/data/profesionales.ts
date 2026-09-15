// app/data/profesionales.ts

export interface AreaEspecializacion {
  titulo: string
  descripcion: string
}

export interface ItemFormacion {
  titulo: string
  institucion: string
}

export interface FotoGaleria {
  src: string
  alt: string
}

export interface PerfilProfesional {
  id: string
  nombre: string
  nombreCorto: string
  rol: string
  especialidadLabel: string
  tituloOficial: string
  cita: string
  imagen: string
  imagenAlt: string
  galeria?: FotoGaleria[]
  acreditaciones: string[]
  tags: string[]
  biografiaExtendida: string[]
  trayectoria: string[]
  areasEspecializacion: AreaEspecializacion[]
  formacion: ItemFormacion[]
  seo: {
    title: string
    description: string
  }
}

export const perfiles: Record<string, PerfilProfesional> = {
  'ana-jimenez': {
    id: 'ana-jimenez',
    nombre: 'Ana Jiménez',
    nombreCorto: 'Ana',
    rol: 'Co-dirección',
    especialidadLabel: 'Psicología Clínica · Co-directora',
    tituloOficial: 'Psicóloga Sanitaria Colegiada · Terapeuta Gestalt',
    cita: 'Acompañar desde la presencia es permitir que cada persona descubra su propio ritmo para florecer.',
    imagen: '/images/ana-jimenez-psicologa-gestalt-terapia-infanto-juvenil-granada.jpg',
    imagenAlt: 'Ana Jiménez, psicóloga sanitaria y co-directora del Centro de Psicología La Seda en Granada',
    galeria: [
      { src: '/images/ana-jimenez-consulta-granada.jpg', alt: 'Ana Jiménez atendiendo una sesión terapéutica en La Seda' },
      { src: '/images/la-seda-sala-gestalt.jpg', alt: 'Detalle de los espacios de encuentro y co-visión en Centro La Seda' }
    ],
    acreditaciones: [
      'Colegiada Nº AO06843 — Colegio Oficial de Psicología de Andalucía Oriental',
      'Miembro Didacta de la Asociación Española de Terapia Gestalt (AETG)',
      'Certificada en Psicoterapia Clínica Integrativa — Instituto Juanjo Albert',
    ],
    tags: ['Terapia Gestalt', 'Psicoterapia Integrativa', 'Sistémica', 'Infanto-Juvenil', 'Constelaciones Familiares', 'Mindfulness', 'Programa SAT'],
    biografiaExtendida: [
      'Ana Jiménez es <strong>psicóloga sanitaria colegiada</strong>, co-directora y alma fundacional del Centro de Psicología La Seda. Su práctica clínica nace de una convicción profunda: que la transformación duradera solo es posible cuando el acompañamiento profesional va de la mano de una <strong>presencia humana genuina</strong>, sin prisa y sin atajos.',
      'Su mirada terapéutica integra la solidez del <strong>enfoque Gestalt</strong> —del que es miembro didacta acreditado por la AETG— con herramientas de la <strong>psicoterapia sistémica, las constelaciones familiares y el trabajo corporal</strong>. Esta síntesis le permite leer a cada persona en su totalidad: su historia, su cuerpo, sus vínculos y su momento vital.',
      'La <strong>infancia y la adolescencia</strong> son el territorio en el que Ana ha desarrollado gran parte de su especialización, convencida de que intervenir de manera temprana y respetuosa en los primeros años de vida es una de las inversiones más valiosas en salud mental a largo plazo.',
    ],
    trayectoria: [
      'Ana comenzó su formación clínica en el Instituto Gestalt de Granada, ampliando posteriormente su base teórica con la formación en <strong>Psicoterapia Clínica Integrativa</strong> junto a Juanjo Albert, una de las figuras más reconocidas de la psicoterapia humanista en España.',
      'Su participación en el <strong>Programa SAT de Claudio Naranjo</strong> marcó un punto de inflexión en su desarrollo como terapeuta, integrando la psicología transpersonal, el trabajo con el carácter y la dimensión espiritual del proceso terapéutico.',
      'Con <strong>más de doce años de experiencia clínica en Granada</strong>, ha acompañado a cientos de personas, familias y parejas en procesos de crisis, duelo, ansiedad, trauma y búsqueda de sentido. Co-fundó La Seda con la visión de crear un espacio donde rigor científico y sensibilidad humana formaran una misma cosa.',
    ],
    areasEspecializacion: [
      { titulo: 'Terapia individual de adultos', descripcion: 'Acompañamiento en procesos de ansiedad, depresión, duelo, crisis vitales, bloqueos emocionales y búsqueda de identidad desde un enfoque integrativo y profundo.' },
      { titulo: 'Psicología infanto-juvenil', descripcion: 'Intervención psicológica con niños y adolescentes en dificultades emocionales, conductuales, de aprendizaje y de vinculación, con especial atención al sistema familiar.' },
      { titulo: 'Terapia familiar y de pareja', descripcion: 'Exploración de los patrones sistémicos que generan sufrimiento en los vínculos más cercanos, facilitando nuevas formas de relacionarse con mayor consciencia y amor.' },
      { titulo: 'Constelaciones familiares', descripcion: 'Metodología vivencial de origen sistémico que permite hacer visible la dinámica oculta de los sistemas familiares y sanar lealtades inconscientes que pesan en el presente.' }
    ],
    formacion: [
      { titulo: 'Licenciatura en Psicología', institucion: 'Universidad de Granada' },
      { titulo: 'Formación en Psicoterapia Gestalt (nivel didacta)', institucion: 'Instituto Gestalt de Granada · AETG' },
      { titulo: 'Postgrado en Psicoterapia Clínica Integrativa', institucion: 'Instituto Juanjo Albert, Valencia' },
      { titulo: 'Formación en Terapia Sistémica y Constelaciones Familiares', institucion: 'Escuela Terapia Familiar de Granada' },
      { titulo: 'Programa SAT — Psicología del Carácter y Espiritualidad', institucion: 'Instituto SAT — Claudio Naranjo' },
      { titulo: 'Formación en Trauma y Apego en Infancia', institucion: 'Fundación FARO, Madrid' }
    ],
    seo: {
      title: 'Ana Jiménez | Psicóloga Integrativa y Co-directora en Granada — La Seda',
      description: 'Ana Jiménez, psicóloga sanitaria colegiada (Nº AO06843) y co-directora del Centro La Seda en Granada. Especializada en terapia Gestalt, psicología infanto-juvenil y constelaciones familiares.'
    }
  },
  'leonor-cabrera': {
    id: 'leonor-cabrera',
    nombre: 'Leonor Cabrera',
    nombreCorto: 'Leonor',
    rol: 'Co-dirección',
    especialidadLabel: 'Terapia Gestalt · Co-directora',
    tituloOficial: 'Terapeuta Gestalt, transpersonal e integrativa · Formadora de profesionales · Coach Profesional Certificada',
    cita: 'Desatar los nudos del pasado nos permite recuperar la fuerza para habitar el presente.',
    imagen: '/images/leonor-cabrera-coach-wingwave-constelaciones-familiares-granada.jpg',
    imagenAlt: 'Leonor Cabrera, terapeuta integrativa y co-directora del Centro La Seda en Granada',
    galeria: [
      { src: '/images/leonor-cabrera-formacion-wingwave.jpg', alt: 'Leonor Cabrera durante un acompañamiento terapéutico' },
      { src: '/images/la-seda-sala-reuniones.jpg', alt: 'Espacio de trabajo y desarrollo personal en La Seda Granada' }
    ],
    acreditaciones: [
      'Coach Profesional Certificada por ASESCO (Nº 10.457)',
      'Coformadora acreditada en Coaching Wingwave® por el Instituto Besser-Siegmund de Hamburgo',
      'Profesora y colaboradora del Programa SAT de Claudio Naranjo',
    ],
    tags: [
      'Terapia Gestalt',
      'Trauma y memoria emocional',
      'Eneagrama',
      'Constelaciones Familiares',
      'Coaching Wingwave®',
      'PNL',
      'Bioenergética',
      'Formación de profesionales',
      'Desarrollo personal'
    ],
    biografiaExtendida: [
      'Leonor Cabrera es cofundadora y codirectora del Centro La Seda de Granada. Desde 2013 acompaña procesos de transformación personal y acumula <strong>más de 5.000 horas de experiencia en sesiones individuales</strong>. Su enfoque terapéutico destaca por un entendimiento holístico y respetuoso de las crisis y los bloqueos humanos.',
      'Su metodología de acompañamiento integra de forma activa la escucha terapéutica, el cuerpo, la comprensión profunda del carácter, la memoria emocional y la mirada sistémica. No busca únicamente cambiar el malestar inmediato, sino entender los patrones corporales y relacionales inconscientes que siguen influyendo en el presente de la persona.',
      'Junto a su labor individual, Leonor cuenta con una amplia trayectoria vinculada a la <strong>formación y mentoría de profesionales del desarrollo personal</strong> en ámbitos como el coaching profesional, el método Wingwave® y la Psicología de los Eneatipos.'
    ],
    trayectoria: [
      'Antes de dedicarse plenamente al ámbito del acompañamiento terapéutico, Leonor ejerció durante quince años como periodista licenciada en medios de comunicación de primer nivel como <strong>El Mundo y Europa Press</strong>, colaborando además con la Cadena SER. Esta larga experiencia le otorgó una agudeza excepcional en la escucha y en el arte de formular preguntas para reorganizar historias vitales.',
      'En 2013 dio el salto definitivo al fundar Viventi, una reconocida escuela de desarrollo personal en Málaga, y en 2022 consolidó su andadura cofundando el Centro La Seda en Granada. Su entendimiento corporal procede también de su bagaje personal: practica activamente <strong>aikido</strong> (disciplina de equilibrio y energía consciente) y en su juventud fue atleta de competición, proclamándose en varias ocasiones <strong>campeona de España</strong>, lo que le enseñó el valor de la constancia y el traspasar límites sin perder el centro.',
      'Es autora del libro de autoconocimiento <strong>"El camino de la fuerza interior"</strong>, enfocado en dotar a las personas de los recursos emocionales necesarios para aprender a desatar sus nudos con autonomía.'
    ],
    areasEspecializacion: [
      { titulo: 'Terapia individual y transformación personal', descripcion: 'Acompañamiento a personas que atraviesan crisis vitales, duelos, bloqueos emocionales, baja autoestima, dificultades relacionales o momentos de pérdida de sentido.' },
      { titulo: 'Trauma y memoria emocional', descripcion: 'Exploración e integración de experiencias del pasado manifestadas en el cuerpo y las relaciones presentes, respetando los límites de cada persona desde una mirada Gestalt e integrativa.' },
      { titulo: 'Eneagrama y Psicología de los Eneatipos', descripcion: 'Comprensión dinámica de la estructura del carácter, automatismos y protecciones, respaldada por su experiencia como profesora del Programa SAT de Claudio Naranjo.' },
      { titulo: 'Constelaciones Familiares y Sistémicas', descripcion: 'Exploración de vínculos y lealtades invisibles en el sistema familiar, tanto en sesiones individuales (con recursos simbólicos) como en talleres grupales.' },
      { titulo: 'Coaching Wingwave®', descripcion: 'Trabajo focalizado con el estrés, la inseguridad, las dificultades de rendimiento y bloqueos emocionales como coformadora oficial acreditada por Hamburgo.' }
    ],
    formacion: [
      { titulo: 'Grado en Psicología (Actualmente en curso)', institucion: 'Universidad Internacional de La Rioja, UNIR' },
      { titulo: 'Licenciatura en Periodismo', institucion: 'Universidad de Málaga' },
      { titulo: 'Formación en Psicoterapia Gestalt, Bioenergética y Crecimiento Personal (520h)', institucion: 'Centro de Psicología Humanista de Málaga (C. Garcés y C. Odriozola)' },
      { titulo: 'Introducción al Trauma y su Tratamiento — Modelo Aleceia (72h)', institucion: 'Instituto Aleces de Psicoterapia del Trauma (Mario Salvador, Cert. AETG)' },
      { titulo: 'Formación y Profundización en Constelaciones Familiares (250h y postgrados)', institucion: 'ECOS Escuela de Constelaciones (Peter Bourquin) e Institut Gestalt (Joan Garriga)' },
      { titulo: 'Experta en Coaching Profesional Certificado (210h)', institucion: 'COANCO (Centro acreditado por ASESCO, Cert. 10.457)' },
      { titulo: 'Coach y Coformadora Acreditada en Wingwave®', institucion: 'Instituto Besser-Siegmund de Hamburgo (Formada con Cora Besser-Siegmund)' },
      { titulo: 'Master Practitioner y Practitioner en PNL (180h)', institucion: 'Institut Gestalt e Institut Integratiu de Barcelona (Vicens Olivé)' },
      { titulo: 'Programa SAT completo — Psicología de los Eneatipos', institucion: 'Fundación Claudio Naranjo' }
    ],
    seo: {
      title: 'Leonor Cabrera | Terapeuta Gestalt e Integrativa en Granada — La Seda',
      description: 'Conoce a Leonor Cabrera, codirectora de La Seda Granada. Especialista en terapia Gestalt, constelaciones familiares, Eneagrama (Programa SAT) y método Wingwave®.'
    }
  },
  'maria-noel-reyes': {
    id: 'maria-noel-reyes',
    nombre: 'María Noel Reyes',
    nombreCorto: 'María Noel',
    rol: 'Psicoterapia',
    especialidadLabel: 'Psicología Clínica · Adultos',
    tituloOficial: 'Psicóloga Sanitaria Colegiada · Especialista en Trauma y Apego',
    cita: 'El espacio terapéutico es un lugar de revelación y soporte donde integrar cada fragmento de la historia vital.',
    imagen: '/images/maria-noel-reyes-psicologa-terapeuta-granada.jpg',
    imagenAlt: 'María Noel Reyes, psicóloga sanitaria colegiada en el Centro de Psicología La Seda en Granada',
    galeria: [
      { src: '/images/maria-noel-reyes-consulta.jpg', alt: 'María Noel Reyes en una sesión clínica clínica individual' },
      { src: '/images/la-seda-detalles-granada.jpg', alt: 'Detalle ambiental y pacífico de los despachos en La Seda' }
    ],
    acreditaciones: [
      'Colegiada Nº AO11245 — Colegio Oficial de Psicología de Andalucía Oriental',
      'Máster en Psicología General Sanitaria — Universidad de Granada',
      'Especialista en Trauma, Apego y Procesamiento Emocional',
    ],
    tags: ['Psicología Clínica', 'Trauma y Apego', 'EMDR', 'Mindfulness', 'Enfoque Integrativo', 'Regulación Emocional'],
    biografiaExtendida: [
      'María Noel Reyes es <strong>psicóloga sanitaria colegiada</strong> y especialista en psicoterapia integrativa de adultos en La Seda. Su labor se centra en construir un puente seguro hacia el autoconocimiento, permitiendo que cada paciente explore sus dificultades desde un clima de <strong>absoluto respeto, calidez y validación</strong>.',
      'Su enfoque combina la evidencia científica con una sensibilidad humanista profunda, prestando especial atención a cómo las <strong>experiencias de apego temprano</strong> y las vivencias difíciles moldean nuestra manera de gestionar el estrés, la ansiedad y las relaciones en el presente.',
      'Entiende el síntoma psicológico no como un enemigo a batir, sino como una señal de alarma del organismo que necesita ser comprendida y atendida mediante herramientas de <strong>regulación emocional y procesamiento profundo</strong>.'
    ],
    trayectoria: [
      'Desarrolló sus primeras etapas de especialización clínica en el ámbito de la <strong>salud mental y la psicoterapia de adultos en Granada</strong>, orientando su práctica hacia el tratamiento de trastornos del estado de ánimo, duelos complejos y bloqueos existenciales.',
      'Su continuo interés por los mecanismos corporales y emocionales del estrés la llevó a formarse en abordajes de vanguardia como el <strong>procesamiento del trauma (EMDR) y técnicas basadas en Mindfulness</strong>. Esto le permite intervenir tanto en el plano cognitivo como en el sistema nervioso.',
      'En el Centro La Seda, María Noel ofrece un acompañamiento psicoterapéutico riguroso y personalizado, ayudando a consolidar un bienestar interno duradero y una relación más compasiva de la persona consigo misma.'
    ],
    areasEspecializacion: [
      { titulo: 'Psicoterapia de adultos', descripcion: 'Tratamiento personalizado para la ansiedad, estados depresivos, transiciones vitales complejas, baja autoestima y crisis de identidad.' },
      { titulo: 'Trauma y heridas de apego', descripcion: 'Acompañamiento especializado en el procesamiento de vivencias dolorosas del pasado y la reparación de dinámicas vinculares que afectan al bienestar actual.' },
      { titulo: 'Regulación del sistema nervioso', descripcion: 'Integración de herramientas corporales y de atención plena para modular la respuesta al estrés crónico, la angustia y la somatización.' }
    ],
    formacion: [
      { titulo: 'Graduada en Psicología', institucion: 'Universidad de Granada' },
      { titulo: 'Máster en Psicología General Sanitaria', institucion: 'Universidad de Granada' },
      { titulo: 'Formación Avanzada en Psicoterapia de Trauma y Apego', institucion: 'Asociación Española de Psicología Sanitaria' },
      { titulo: 'Especialización en Técnicas de Integración Cerebral y EMDR', institucion: 'Instituto de Psicoterapia Integrativa' },
      { titulo: 'Instrucción en Mindfulness y Compasión Aplicada a la Clínica', institucion: 'Centro de Formation en Salud Mental' }
    ],
    seo: {
      title: 'María Noel Reyes | Psicóloga Sanitaria y Terapeuta en Granada — La Seda',
      description: 'María Noel Reyes, psicóloga colegiada especializada en psicoterapia integrativa de adultos, trauma y apego en el Centro La Seda de Granada. Pide cita.'
    }
  },
  'cristina-lence': {
    id: 'cristina-lence',
    nombre: 'Cristina Lence',
    nombreCorto: 'Cristina',
    rol: 'Educación Familiar',
    especialidadLabel: 'Educación Social · Infancia y Familias',
    tituloOficial: 'Educadora Social · Especialista en Gestalt Infanto-Juvenil y Sistémica',
    cita: 'Ofrecer un espacio seguro a la infancia y a las familias es sembrar raíces fuertes para el mañana.',
    imagen: '/images/cristina-lence-educadora-familiar-gestalt-sistemica-granada.jpg',
    imagenAlt: 'Cristina Lence, educadora social especializada en Gestalt infanto-juvenil y sistémica en el Centro La Seda de Granada',
    galeria: [
      { src: '/images/cristina-lence-talleres.jpg', alt: 'Cristina Lence preparando materiales para dinámicas con niños y adolescentes' },
      { src: '/images/la-seda-sala-infantil.jpg', alt: 'Gabinete y espacio lúdico para psicología infanto-juvenil en La Seda' }
    ],
    acreditaciones: [
      'Titulada en Educación Social — habilitada para la intervención con menores y familias',
      'Formada en Técnicas Gestálticas para Infancia y Adolescencia — ITG Valencia',
      'Certificada en el Programa SAT de Claudio Naranjo',
    ],
    tags: ['Educación Social', 'Gestalt Infanto-Juvenil', 'Sistémica', 'Familias', 'Adolescencia', 'Programa SAT', 'Prevención'],
    biografiaExtendida: [
      'Cristina Lence es <strong>educadora social</strong> y uno de los pilares del trabajo con infancia y familias en el Centro La Seda. Su labor se sitúa en el <strong>acompañamiento socioemocional</strong> que necesitan niños, niñas, adolescentes y sus familias.',
      'Su enfoque integra la <strong>Gestalt aplicada a la infancia y la adolescencia</strong> con la <strong>mirada sistémica</strong>, que le permite leer los comportamientos del niño no de forma aislada, sino dentro del tejido familiar.',
      'Cristina aporta al equipo una sensibilidad especial para conectar con la infancia desde su propio lenguaje: <strong>el juego, el movimiento, la expresión artística y la narrativa</strong>.'
    ],
    trayectoria: [
      'Formada en Educación Social, Cristina orientó desde el principio su carrera hacia la infancia en contextos de vulnerabilidad emocional. Su experiencia en Granada le mostró que las dificultades de los menores reflejan un <strong>sistema familiar</strong> que necesita atención.',
      'Esta convicción la llevó a profundizar en la Gestalt aplicada a la infancia y la adolescencia con la ITG de Valencia. Aprendió a trabajar con <strong>el cuerpo y la emoción</strong> como vías de acceso al mundo interno del niño.',
      'Su paso por el <strong>Programa SAT de Claudio Naranjo</strong> amplió su perspectiva sobre el desarrollo humano. En La Seda, Cristina acompaña familias y facilita <strong>talleres de parentalidad consciente</strong>.'
    ],
    areasEspecializacion: [
      { titulo: 'Acompañamiento infanto-juvenil', descripcion: 'Intervención socioemocional individualizada con niños y adolescentes que presentan dificultades de conducta, regulación emocional o adaptación escolar.' },
      { titulo: 'Orientación y educación familiar', descripcion: 'Acompañamiento a padres y madres en el desarrollo de una parentalidad más consciente, conectada y respetuosa, con herramientas prácticas.' },
      { titulo: 'Talleres de expresión emocional', descripcion: 'Programas grupales para niños donde el juego, el arte y el movimiento se convierten en lenguajes para explorar el mundo emocional.' },
      { titulo: 'Intervención sistémica familiar', descripcion: 'Trabajo con el sistema familiar para comprender los patrones relacionales que generan sufrimiento y facilitar cambios que beneficien a todos.' }
    ],
    formacion: [
      { titulo: 'Diplomatura en Educación Social', institucion: 'Universidad de Granada' },
      { titulo: 'Formación en Técnicas Gestálticas para Infancia y Adolescencia', institucion: 'Instituto de Terapia Gestalt (ITG), Valencia' },
      { titulo: 'Programa SAT — Psicología del Carácter y Desarrollo Personal', institucion: 'Instituto SAT — Claudio Naranjo' },
      { titulo: 'Formación en Terapia Sistémica Breve', institucion: 'Centro de Terapia Sistémica de Granada' },
      { titulo: 'Especialización en Parentalidad Consciente y Crianza Respetuosa', institucion: 'Instituto Aware Parenting, España' },
      { titulo: 'Curso de Intervención en Duelo Infantil', institucion: 'Fundación Mario Losantos del Campo, Madrid' }
    ],
    seo: {
      title: 'Cristina Lence | Educadora Familiar y Especialista en Infancia en Granada — La Seda',
      description: 'Cristina Lence, educadora social especializada en Gestalt infanto-juvenil y sistémica en el Centro La Seda de Granada. Acompañamiento a niños, adolescentes y familias.'
    }
  },
  'reyes-sanchez': {
    id: 'reyes-sanchez',
    nombre: 'Reyes Sánchez Tallón',
    nombreCorto: 'Reyes',
    rol: 'Medicina',
    especialidadLabel: 'Medicina Pediátrica · Salud Integrativa',
    tituloOficial: 'Médica Pediatra Colegiada · Especialista en Terapia Gestalt y Trabajo Corporal',
    cita: 'Integrar el cuidado del cuerpo y la salud emocional es devolverle la plenitud y el equilibrio al ser.',
    imagen: '/images/reyes-sanchez-tallon-medica-pediatra-gestalt-terapia-granada.jpg',
    imagenAlt: 'Reyes Sánchez Tallón, médica pediatra colegiada y especialista en salud integrativa en el Centro La Seda de Granada',
    galeria: [
      { src: '/images/reyes-sanchez-intervencion-corporal.jpg', alt: 'Reyes Sánchez Tallón aplicando dinámicas de terapia corporal integrativa' },
      { src: '/images/la-seda-consulta-medica.jpg', alt: 'Despacho clínico polivalente para enfoques de medicina integrativa en La Seda' }
    ],
    acreditaciones: [
      'Colegiada Nº 18-10008273 — Colegio Oficial de Médicos de Granada',
      'Especialista en Pediatría — Formación MIR',
      'Formada en Terapia Gestalt — AETG',
      'Certificada en Terapia Corporal Integrativa — equipo Antonio Pacheco',
    ],
    tags: ['Medicina Pediátrica', 'Terapia Gestalt', 'Trabajo Corporal', 'Bioenergética', 'Eneatipos', 'Sistémica', 'Salud Integrativa'],
    biografiaExtendida: [
      'Reyes Sánchez Tallón es médica pediatra colegiada y la voz de la <strong>medicina integrativa</strong> dentro de La Seda. Su presencia encarna una visión de la salud donde <strong>el cuerpo, la emoción y la mente</strong> forman un sistema indivisible.',
      'Su formación como pediatra le dio una base científica sólida. Pero fue su encuentro con la <strong>Gestalt y el trabajo corporal</strong> lo que transformó su forma de acompañar, añadiendo la capacidad de leer el cuerpo como un mapa emocional vivo.',
      'Reyes trabaja desde la frontera enriquecedora que existe entre la medicina y la psicoterapia, un espacio donde la <strong>somatización</strong> tiene nombre y donde el síntoma físico es también un mensaje de alerta.'
    ],
    trayectoria: [
      'Tras completar su especialización como pediatra por <strong>vía MIR</strong>, Reyes ejerció durante años en el sistema sanitario público, donde fue testigo de cómo el malestar emocional se manifestaba en forma de <strong>síntomas físicos</strong>.',
      'Su formación en <strong>terapia Gestalt</strong> le abrió la puerta al trabajo con la experiencia subjetiva. Poco después, la <strong>Terapia Corporal Integrativa (TCI)</strong> le proporcionó un lenguaje para intervenir directamente a través del cuerpo.',
      'El trabajo con la psicología de los eneatipos y la <strong>Bioenergética</strong> añadió una capa de comprensión del carácter que enriquece enormemente su consulta en La Seda, la cual combina con su formación en terapia sistémica.'
    ],
    areasEspecializacion: [
      { titulo: 'Salud pediátrica integrativa', descripcion: 'Atención médica pediátrica que integra la perspectiva emocional en la comprensión de los síntomas físicos de niños y adolescentes, con foco en somatizaciones.' },
      { titulo: 'Terapia Gestalt con adultos', descripcion: 'Acompañamiento terapéutico individual desde el enfoque Gestalt, trabajando con la conciencia del momento presente, el contacto y el cuerpo.' },
      { titulo: 'Terapia corporal integrativa', descripcion: 'Intervención terapéutica que utiliza el cuerpo como vía de acceso a experiencias emocionales y memorias somáticas que el lenguaje verbal no procesa.' },
      { titulo: 'Psicología de los eneatipos', descripcion: 'Trabajo con el mapa del carácter y la estructura energética del cuerpo para comprender los patrones de respuesta emocional y liberar bloqueos.' }
    ],
    formacion: [
      { titulo: 'Licenciatura en Medicina y Cirugía', institucion: 'Universidad de Granada' },
      { titulo: 'Especialidad en Pediatría (MIR)', institucion: 'Hospital Universitario Clínico San Cecilio, Granada' },
      { titulo: 'Formación en Terapia Gestalt', institucion: 'Instituto Gestalt de Granada · AETG' },
      { titulo: 'Terapia Corporal Integrativa', institucion: 'Equipo Antonio Pacheco, España' },
      { titulo: 'Psicología de los Eneatipos y Bioenergética', institucion: 'Formación con Fernando de Juan' },
      { titulo: 'Programa SAT — Psicología del Carácter y Espiritualidad', institucion: 'Instituto SAT — Claudio Naranjo' },
      { titulo: 'Formación en Terapia Sistémica (en curso)', institucion: 'Psicogestalt, Madrid' }
    ],
    seo: {
      title: 'Reyes Sánchez Tallón | Médica Pediatra y Terapeuta Gestalt en Granada — La Seda',
      description: 'Reyes Sánchez Tallón, médica pediatra colegiada (Nº 18-10008273) especializada en salud integrativa y terapia Gestalt en el Centro La Seda de Granada.'
    }
  }
}