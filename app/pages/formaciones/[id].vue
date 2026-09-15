<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()

// 1. BASE DE DATOS DE PROFESORADO / STAFF
const staff: Record<string, any> = {
  'ana-jimenez': {
    id: 'ana-jimenez',
    nombre: 'Ana María Jiménez',
    rol: 'Psicóloga y psicoterapeuta Gestalt · Miembro didacta de la AETG',
    imagen: '/images/ana-jimenez-psicologa-gestalt-terapia-infanto-juvenil-granada.jpg',
    imagenAlt: 'Ana María Jiménez, directora de la formación en Gestalt aplicada a la infancia y adolescencia'
  },
  'oriol-belles': {
    id: 'oriol-belles',
    nombre: 'Oriol Bellés',
    rol: 'Symbiotik Institut · Formador Oficial Wingwave®',
    imagen: '/images/oriol-belles-formador-wavewave.jpg',
    imagenAlt: 'Oriol Bellés, formador oficial del método Wingwave'
  },
  'leonor-cabrera': {
    id: 'leonor-cabrera',
    nombre: 'Leonor Cabrera',
    rol: 'Symbiotik Institut · Formadora Oficial Wingwave®',
    imagen: '/images/leonor-cabrera-coach-wingwave-constelaciones-familiares-granada.jpg',
    imagenAlt: 'Leonor Cabrera, formadora certificada Wingwave'
  }
}

// 2. BASE DE DATOS DE FORMACIONES
const formations: Record<string, any> = {
  'gestalt-infantil': {
    titulo: 'Formación vivencial en Gestalt aplicada a la infancia y la adolescencia',
    tituloItalico: '',
    subtitulo: 'Un recorrido para acercarte a tu propia historia y aprender a cuidar los procesos de la infancia y la adolescencia.',
    categoria: 'Tercera convocatoria · 2027 · Inscripciones abiertas',
    categoriaSufijo: 'La Seda Granada',
    imagen: '/images/formacion-terapia-gestalt-infancia-adolescencia-granada.jpg',
    imagenAlt: 'Grupo participante en una formación vivencial de La Seda en Granada',
    botonPrincipal: 'Solicitar plaza o información',
    botonPrincipalUrl: '#formulario',
    botonSecundario: 'Conocer la formación',
    botonSecundarioUrl: '#sobre-la-terapia',
    descripcion: 'La infancia y la adolescencia dejan huellas que siguen presentes en la vida adulta. Esta formación propone volver a ellas con cuidado para reconocer necesidades, emociones y formas de relación que quizá todavía buscan un lugar.',
    descripcion2: 'Al mismo tiempo, ofrece una base teórica y práctica para comprender mejor los procesos infantiles y adolescentes desde una perspectiva gestáltica, humanista y relacional. El aprendizaje nace de la experiencia y se traslada después a la forma de estar con niñas, niños, adolescentes y familias.',
    descripcion3: 'Por eso pueden participar tanto personas que desean realizar una revisión terapéutica de su infancia y adolescencia como profesionales que quieren formarse y enriquecer su práctica.',
    cita: '',
    propuestaLabel: 'Una formación con dos puertas de entrada',
    propuestaTitulo: 'Revisar la propia historia y aprender a estar con otras infancias',
    propuestaTituloSecundario: '',
    aprendizajesLabel: 'Cómo se aprende',
    aprendizajesTitulo: 'Una experiencia que pone en diálogo lo personal y lo profesional',
    equipoLabel: 'Dirección de la formación',
    equipoTitulo: 'Ana María Jiménez',
    equipoTituloSecundario: 'Psicóloga y psicoterapeuta Gestalt · Miembro didacta de la AETG',
    equipoDescripcion: 'Ana María Jiménez dirige un programa en el que la formación teórica, la experiencia personal y la práctica se sostienen mutuamente. Su trayectoria clínica y docente aporta rigor, cercanía y atención al proceso del grupo.',
    equipoBoton: 'Conocer a Ana',
    estructuraLabel: 'La estructura del recorrido',
    estructuraTitulo: 'Tiempo, continuidad y experiencia compartida',
    estructuraTituloSecundario: '',
    procesoLabel: 'Tercera convocatoria · 2027',
    procesoTitulo: 'Inscripciones abiertas',
    procesoTituloSecundario: '',
    procesoDescripcion: 'Ya están abiertas las inscripciones para la tercera convocatoria, que se celebrará en 2027. Si quieres conocer el programa, valorar si es adecuado para ti o iniciar la inscripción, puedes solicitar una entrevista con la dirección.',
    procesoBotonPrincipal: 'Solicitar plaza o información',
    procesoBotonSecundario: 'Ver otras formaciones',
    terapeutas: ['ana-jimenez'], 
    beneficios: [
      'Recursos creativos y expresivos: explorar el juego, el dibujo, los cuentos, la caja de arena y otras formas de expresión propias de la infancia.',
      'Comprensión de los procesos infantiles y adolescentes: acercarse a las necesidades emocionales y relacionales de cada etapa, atendiendo también al contexto familiar.',
      'Presencia y escucha: cultivar una forma de estar más consciente, sensible y respetuosa ante lo que cada persona necesita.',
      'Familia y vínculos: observar cómo las relaciones familiares influyen en el desarrollo e incluirlas en la comprensión de cada situación.',
      'Práctica y revisión de casos: relacionar lo aprendido con situaciones reales y revisar dudas dentro de un marco grupal cuidado.',
    ],
    motivos: [
      { numero: '288h', titulo: '288 horas de recorrido formativo', desc: '240 horas de encuentros presenciales y 48 horas destinadas al desarrollo acompañado del proyecto final.' },
      { numero: '15', titulo: '15 encuentros monográficos', desc: 'Un fin de semana al mes para profundizar en aspectos del desarrollo infantil y adolescente desde la experiencia, la teoría y la práctica.' },
      { numero: '01', titulo: 'Un encuentro previo', desc: 'Antes de incorporarte tendrás una entrevista gratuita con la dirección. Es un espacio para conocernos, comprender qué buscas y valorar si la propuesta encaja contigo.' },
      { numero: 'AETG', titulo: 'Dirección con experiencia clínica y docente', desc: 'El programa está dirigido por profesionales en activo y cuenta con la participación de especialistas con experiencia en distintos ámbitos.' },
    ],
    proceso: [
      { paso: '01', texto: 'Solicita información mediante el formulario de esta página.' },
      { paso: '02', texto: 'Realiza una entrevista gratuita con la dirección para compartir qué buscas y resolver tus dudas.' },
      { paso: '03', texto: 'Si la formación encaja contigo y hay plazas disponibles, recibirás la información necesaria para formalizar la matrícula.' },
    ],
    faqs: [
      { pregunta: '¿Tengo que ser profesional para participar?', respuesta: 'No. La formación está abierta tanto a personas que desean revisar terapéuticamente su infancia y adolescencia como a profesionales que quieren formarse. La entrevista previa nos ayudará a valorar contigo si el recorrido encaja con lo que buscas.' },
      { pregunta: '¿En qué se diferencian el recorrido personal y el profesional?', respuesta: 'El grupo y los encuentros son compartidos. Lo que cambia es el propósito con el que cada persona se acerca: profundizar en su propia historia, ampliar sus recursos profesionales o reunir ambas necesidades.' },
      { pregunta: '¿Necesito conocer la Terapia Gestalt?', respuesta: 'No. El programa está pensado para que puedas acercarte al enfoque de manera progresiva, a través de explicaciones claras y experiencias que ayudan a dar sentido a lo aprendido.' },
      { pregunta: '¿Existen facilidades de pago?', respuesta: 'Sí. La matrícula puede abonarse de forma fraccionada por encuentros mensuales y sin recargos. Recibirás todos los detalles al solicitar información.' },
      { pregunta: '¿Qué ocurre si no puedo asistir a un encuentro?', respuesta: 'La continuidad es importante en un proceso de estas características. Si surge una ausencia, el equipo te explicará las posibilidades de recuperación y apoyo previstas por el programa.' },
      { pregunta: '¿Esta formación me habilita para ejercer como terapeuta?', respuesta: 'No por sí sola. El ejercicio profesional depende de la titulación, las competencias y la normativa aplicable a cada ámbito. Esta formación permite profundizar en el enfoque y ampliar recursos, pero no sustituye una titulación habilitante cuando sea necesaria.' },
      { pregunta: '¿Cómo solicito plaza para 2027?', respuesta: 'Completa el formulario de esta página. Te enviaremos el programa y concertaremos una entrevista gratuita con la dirección antes de formalizar la matrícula.' },
    ],
    faqLabel: 'Preguntas frecuentes',
    faqTitulo: 'Antes de decidir',
    faqSubtitulo: '',
    ctaTitulo: 'Solicita plaza o información',
    ctaDescripcion: 'Tanto si te interesa el recorrido personal como si buscas formación profesional, puedes escribirnos desde aquí. Te enviaremos el programa y te ayudaremos a valorar si esta propuesta responde a lo que necesitas.',
    ctaLabel: 'Enviar solicitud',
    seoTitle: 'Formación vivencial en Gestalt, infancia y adolescencia · 2027 | La Seda',
    seoDescription: 'Tercera convocatoria de la formación vivencial en Gestalt aplicada a la infancia y adolescencia en Granada. Abierta a procesos personales y a profesionales. Inscripciones abiertas para 2027.',
  },
  'supervision-casos': {
    titulo: 'Supervisión de casos para profesionales de la terapia',
    tituloItalico: '',
    subtitulo: 'Un espacio para revisar la práctica, compartir dificultades y seguir creciendo como profesional.',
    categoria: 'Práctica profesional',
    categoriaSufijo: 'La Seda Granada',
    imagen: '/images/supervision-casos-clinicos-terapeutas-gestalt-granada.jpg',
    imagenAlt: 'Grupo de supervisión de casos para profesionales de la terapia en La Seda, Granada',
    botonPrincipal: 'Solicitar plaza o información',
    botonPrincipalUrl: '#sobre-la-terapia',
    botonSecundario: 'Conocer la supervisión',
    botonSecundarioUrl: '#sobre-la-terapia',
    descripcion: 'La supervisión permite detenerse y observar con más claridad lo que sucede en el trabajo terapéutico: las dudas que aparecen, los casos que se bloquean, las decisiones que cuesta tomar o aquello que la relación con una persona despierta en quien la atiende.',
    descripcion2: 'En el grupo se comparten casos y experiencias profesionales dentro de un marco confidencial. La aportación de la supervisora y del resto de participantes ayuda a descubrir nuevas posibilidades de intervención y a cuidar la forma de estar en consulta.',
    descripcion3: 'No se trata de evaluar ni de ofrecer respuestas cerradas. Se trata de pensar la práctica en compañía, reconocer recursos y encontrar una orientación más ajustada para cada situación.',
    cita: '',
    propuestaLabel: 'La supervisión',
    propuestaTitulo: 'Un lugar donde no tener que sostener la práctica en soledad',
    propuestaTituloSecundario: '',
    aprendizajesLabel: 'Qué puede aportar la supervisión',
    aprendizajesTitulo: 'Un espacio para pensar, aprender y cuidar la práctica',
    equipoLabel: 'La supervisora',
    equipoTitulo: 'Ana Jiménez',
    equipoTituloSecundario: 'Psicóloga y psicoterapeuta Gestalt · Miembro didacta de la AETG',
    equipoDescripcion: 'Ana Jiménez es psicóloga y psicoterapeuta Gestalt, miembro didacta y supervisora acreditada por la Asociación Española de Terapia Gestalt (AETG). Cuenta con más de quince años de experiencia supervisando a profesionales de la terapia.',
    equipoBoton: 'Conocer a Ana',
    estructuraLabel: 'Qué puede aportar la supervisión',
    estructuraTitulo: 'Un espacio para pensar, aprender y cuidar la práctica',
    estructuraTituloSecundario: '',
    procesoLabel: 'Próxima convocatoria',
    procesoTitulo: 'Grupo abierto desde octubre de 2026',
    procesoTituloSecundario: '',
    procesoDescripcion: 'En octubre de 2026 comienza un nuevo grupo de supervisión de casos. Las plazas son limitadas para cuidar la confianza, la continuidad y el trabajo compartido. La fecha de inicio, el calendario, el horario y las condiciones de participación se facilitarán al solicitar información.',
    procesoBotonPrincipal: 'Solicitar plaza o información',
    procesoBotonSecundario: 'Volver a Talleres',
    terapeutas: ['ana-jimenez'],
    beneficios: [
      'Más claridad ante los casos: revisar la información disponible, ordenar hipótesis y encontrar nuevas posibilidades cuando un proceso parece estancado.',
      'Conciencia sobre la propia intervención: reconocer cómo influyen las emociones, expectativas y formas de relacionarse de quien acompaña.',
      'Una devolución honesta y cuidadosa: recibir otras perspectivas sin juicio, dentro de un entorno orientado al aprendizaje.',
      'Apoyo entre profesionales: compartir el impacto emocional de la práctica con personas que conocen sus exigencias y responsabilidades.',
      'Cuidado ético: pensar límites, responsabilidades y decisiones complejas para ofrecer una atención más consciente y responsable.',
      'Horas acreditables por la AETG: las horas realizadas con Ana Jiménez pueden acreditarse como horas de supervisión para la formación en Terapia Gestalt de la AETG.'
    ],
    motivos: [],
    proceso: [
      { paso: '01', texto: 'Solicita plaza o información mediante el formulario de esta página.' },
      { paso: '02', texto: 'Te escribiremos para ofrecerte la información necesaria y confirmar la disponibilidad.' },
      { paso: '03', texto: 'El formato concreto y las condiciones de participación se comunicarán junto con el calendario.' }
    ],
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
    ctaTitulo: 'Un lugar para cuidar también a quien acompaña',
    ctaDescripcion: 'La supervisión ofrece tiempo y compañía para pensar la práctica con más claridad, sostener sus dificultades y continuar aprendiendo.',
    ctaLabel: 'Solicitar plaza o información',
    seoTitle: 'Supervisión de casos para profesionales de la terapia en Granada | La Seda',
    seoDescription: 'Grupo de supervisión de casos en Granada, facilitado por Ana Jiménez. Nuevo grupo abierto desde octubre de 2026. Solicita plaza o información.'
  },
  'metodo-wingwave': {
    titulo: 'Formación Certificada Oficial en el',
    tituloItalico: 'Método Wingwave®',
    subtitulo: 'Certificación internacional en coaching emocional y regulación del estrés respaldada por evidencias científicas.',
    categoria: 'Certificación ISO 29993 · Mayo 2026',
    imagen: '/images/formacion-certificada-metodo-wingwave-coaching-granada.jpg',
    imagenAlt: 'Prácticas del test miostático u O-Ring durante la formación oficial de Wingwave en Granada',
    descripcion: 'El Método Wingwave® es un enfoque de intervención rápida para el desbloqueo emocional y el rendimiento mental. Combina la estimulación bilateral de los hemisferios cerebrales (similar a la fase REM del sueño) con la Programación Neurolingüística (PNL) y el test miostático O-Ring para localizar con precisión los disparadores exactos del estrés.',
    descripcion2: 'Esta formación intensiva te capacita de manera oficial para utilizar una de las herramientas de regulación de ansiedad y superación de traumas más estudiadas y extendidas en Europa. Al finalizar, obtendrás la titulación oficial internacional que te acredita como Coach Wingwave® certificado.',
    cita: '"Una combinación perfecta de precisión muscular, reprogramación neurolingüística y balance cerebral profundo."',
    // CAMBIO AQUÍ: Dejamos únicamente a Leonor Cabrera en el array
    terapeutas: ['leonor-cabrera'],
    beneficios: [
      'Aprender a disolver bloqueos, fobias, miedos escénicos y estrés postraumático en pocas sesiones.',
      'Dominar el test miostático o de resistencia muscular como brújula precisa en tus terapias.',
      'Incorporar protocolos validados científicamente por más de 14 estudios independientes.',
      'Acceso al buscador y red mundial de profesionales acreditados de la marca Besser-Siegmund.',
      'Formación con sello de calidad europeo ISO 29993 orientada a la excelencia formativa.',
    ],
    motivos: [
      { numero: '32h', titulo: 'Horas Académicas', desc: 'Distribuidas de forma intensiva a lo largo de 4 jornadas consecutivas con un enfoque eminentemente práctico.' },
      // Actualizamos también el texto de la cantidad de alumnos por formador para adaptarlo a un único profesor
      { numero: '12', titulo: 'Alumnos por Formadora', desc: 'Plazas estrictamente limitadas para garantizar la supervisión milimétrica de las prácticas individuales en la sala.' },
      { numero: 'ISO', titulo: 'Calidad Europea Certificada', desc: 'Contenidos y metodologías pedagógicas auditadas bajo los más altos estándares internacionales de formación.' },
      { numero: '04', titulo: 'Días de Inmersión Total', desc: 'Convocatoria del 9 al 12 de mayo de 2026 en nuestras instalaciones presenciales de Granada capital.' },
    ],
    proceso: [
      { paso: '01', texto: 'Inscripción online previa para reservar una de las plazas limitadas del grupo intensivo de mayo.' },
      { paso: '02', texto: 'Acceso al material didáctico oficial preparatorio y lecturas recomendadas antes del inicio de las clases.' },
      { paso: '03', texto: 'Entrenamiento intensivo presencial de 4 días y alta en la comunidad internacional de profesionales.' },
    ],
    faqs: [
      { pregunta: '¿Qué titulación se obtiene al finalizar el curso?', respuesta: 'Se expide el diploma oficial internacional expedido de forma conjunta por Symbiotik Institut y el Besser-Siegmund-Institut de Hamburgo, Alemania.' },
      { pregunta: '¿Es necesario ser psicólogo para certificarse?', respuesta: 'Está dirigido a psicólogos, terapeutas, médicos, coaches profesionales, mentores o profesionales de recursos humanos y optimización del rendimiento.' },
      { pregunta: '¿Qué materiales incluye la matrícula?', respuesta: 'Incluye los manuales oficiales de formación de la marca registrada, cuadernos de trabajo y el acceso a la plataforma online de recursos.' },
    ],
  },
}

// Control de Ruta de Nuxt
const id = route.params.id as string
const formacion = computed(() => formations[id] ?? null)

// Mapeo seguro del Profesorado Activo utilizando el componente visual de equipo
const profesoresActivos = computed(() => {
  if (!formacion.value || !formacion.value.terapeutas) return []
  return formacion.value.terapeutas
    .map((idRef: string) => ({ id: idRef, ...staff[idRef] }))
    .filter((p: any) => p.nombre)
})

// Reactividad de SEO Avanzado Dinámico
const seoTitle = computed(() =>
  formacion.value
    ? (formacion.value.seoTitle ?? `${formacion.value.titulo} ${formacion.value.tituloItalico} · Granada 2026`)
    : 'Formación no encontrada · Centro La Seda'
)
const seoDescription = computed(() =>
  formacion.value ? (formacion.value.seoDescription ?? `${formacion.value.subtitulo} Convocatoria abierta 2026.`) : ''
)
const seoImage = computed(() =>
  formacion.value?.imagen
    ? `https://centrolaseda.com${formacion.value.imagen}`
    : 'https://centrolaseda.com/images/centro-psicologia-la-seda-granada-hero.jpg'
)
const seoUrl = computed(() => `https://centrolaseda.com/formaciones/${id}`)

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
  canonical: seoUrl,
})
</script>

<template>
  <div class="bg-[#FDFBF9] antialiased">
    
    <main
      v-if="!formacion"
      class="min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <p class="section-label mb-4 text-[#71B1A5]">Error 404</p>
      <h1 class="font-serif italic text-[#27252B] text-4xl md:text-5xl mb-6">
        Formación no encontrada
      </h1>
      <p class="text-lg md:text-xl text-[#27252B]/60 max-w-md mb-12">
        El programa de especialización que buscas no pertenece a la convocatoria 2026.
      </p>
      <NuxtLink to="/formaciones" class="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase border border-[#27252B] px-6 py-3.5 hover:bg-[#27252B] hover:text-white transition-all duration-300">
        Ver todos los programas
      </NuxtLink>
    </main>

    <main v-else>
      
      <TherapyHero 
        :categoria="formacion.categoria"
        :categoriaSufijo="formacion.categoriaSufijo"
        :titulo="formacion.titulo"
        :tituloItalico="formacion.tituloItalico"
        :subtitulo="formacion.subtitulo"
        :imagen="formacion.imagen"
        :imagenAlt="formacion.imagenAlt"
        :botonPrincipal="formacion.botonPrincipal"
        :botonPrincipalUrl="formacion.botonPrincipalUrl"
        :botonSecundario="formacion.botonSecundario"
        :botonSecundarioUrl="formacion.botonSecundarioUrl"
      />

      <FormationOverview 
        :descripcion="formacion.descripcion"
        :descripcion2="formacion.descripcion2"
        :cita="formacion.cita"
        :beneficios="formacion.beneficios"
        :propuestaLabel="formacion.propuestaLabel"
        :propuestaTitulo="formacion.propuestaTitulo"
        :propuestaTituloSecundario="formacion.propuestaTituloSecundario"
        :descripcion3="formacion.descripcion3"
        :aprendizajesLabel="formacion.aprendizajesLabel"
        :aprendizajesTitulo="formacion.aprendizajesTitulo"
      />

      <FormationTeam
        :profesores="profesoresActivos"
        :label="formacion.equipoLabel"
        :titulo="formacion.equipoTitulo"
        :tituloSecundario="formacion.equipoTituloSecundario"
        :descripcion="formacion.equipoDescripcion"
        :boton="formacion.equipoBoton"
      />

      <FormationEstructure 
        :motivos="formacion.motivos"
        :imagen="formacion.imagen"
        :imagenAlt="formacion.imagenAlt"
        :label="formacion.estructuraLabel"
        :titulo="formacion.estructuraTitulo"
        :tituloSecundario="formacion.estructuraTituloSecundario"
      />

      <FormationProcess 
        :proceso="formacion.proceso"
        :label="formacion.procesoLabel"
        :titulo="formacion.procesoTitulo"
        :tituloSecundario="formacion.procesoTituloSecundario"
        :descripcion="formacion.procesoDescripcion"
        :botonPrincipal="formacion.procesoBotonPrincipal"
        :botonSecundario="formacion.procesoBotonSecundario"
      />

      <TherapyFAQ 
        :faqs="formacion.faqs"
        :label="formacion.faqLabel"
        :titulo="formacion.faqTitulo"
        :subtitulo="formacion.faqSubtitulo"
        :ctaTitulo="formacion.ctaTitulo"
        :ctaDescripcion="formacion.ctaDescripcion"
        :ctaLabel="formacion.ctaLabel"
      />

      <FormationRelated 
        :actualId="id"
        :todasLasFormaciones="formations"
      />

    </main>
  </div>
</template>