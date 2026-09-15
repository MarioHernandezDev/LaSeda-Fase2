<template>
  <main>
    <PageHero
      label="Quiénes somos · Granada"
      title-main="Una sensibilidad"
      title-accent="Compartida"
      image="/images/centro-psicologia-la-seda-granada-hero.jpg"
      image-alt="Equipo del Centro de Psicología La Seda en Granada"
      secondary-link="/terapias"
      secondary-label="Ver nuestras terapias"
    >
      <template #description>
        En La Seda compartimos una comprensión humanista e integrativa de las personas. La experiencia y especialización de cada profesional enriquecen un proyecto común, construido desde la escucha y el cuidado.
      </template>
    </PageHero>



    <section
      class="py-24 md:py-36 bg-[#FDFBF9]"
      aria-labelledby="equipo-heading"
    >
      <div class="page-container">

        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-24 md:mb-32">
          <div>
            <p class="section-label mb-4">Una forma compartida de trabajar</p>
            <h2
              id="equipo-heading"
              class="font-serif italic text-4xl md:text-5xl leading-[1.15] text-[#27252B]"
            >
              Profesionales de la<br />
              <span class="text-[#27252B]/50"> psicologia y la terapia</span>
            </h2>
          </div>
          <p class="text-[#27252B]/60 max-w-sm text-base leading-relaxed font-light md:text-right border-l md:border-l-0 md:border-r border-[#71B1A5]/30 pl-4 md:pl-0 md:pr-4 md:mb-1">
            Nuestro equipo reúne experiencia en psicología, medicina, terapia Gestalt, coaching y educación social. Esta diversidad permite ofrecer una atención coordinada a lo largo de la vida, con especial dedicación a infancia, adolescencia y familias.
          </p>
        </div>

        <ul
          class="flex flex-col gap-16 md:gap-24 list-none p-0 m-0"
          role="list"
          aria-label="Miembros del equipo de La Seda Granada"
        >
          <li 
            v-for="(miembro, index) in equipo" 
            :key="miembro.id"
            class="block"
          >
            <NuxtLink 
              :to="`/conocenos/${miembro.id}`"
              class="group relative flex flex-col md:flex-row items-stretch gap-8 md:gap-12 bg-[#FDFBF9] border border-[#27252B]/5 p-6 md:p-10 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#27252B]/5 cursor-pointer decoration-transparent block"
              :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
            >
              <div class="relative w-full md:w-[300px] lg:w-[340px] shrink-0 aspect-[3/4] overflow-hidden bg-[#27252B]/5 rounded-sm">
                <NuxtImg
                  :src="miembro.imagen"
                  :alt="miembro.imagenAlt"
                  class="w-full h-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                  width="340"
                  height="453"
                  format="webp"
                  loading="lazy"
                />
                <div class="absolute top-4 left-4 text-[9px] font-medium tracking-[0.2em] uppercase bg-[#71B1A5] text-white px-3 py-1.5 shadow-xs">
                  {{ miembro.rol }}
                </div>
              </div>

              <div class="flex flex-col justify-between flex-1 py-1 w-full">
                <div class="space-y-5">
                  <div>
                    <h3 class="font-serif italic text-2xl md:text-3xl text-[#27252B] leading-tight mb-1 group-hover:text-[#71B1A5] transition-colors duration-300">
                      {{ miembro.nombre }}
                    </h3>
                    <p class="text-xs font-medium tracking-[0.12em] text-[#27252B]/40 uppercase">
                      {{ miembro.subtitulo }}
                    </p>
                  </div>

                  <p class="font-serif italic text-[#27252B]/80 text-base md:text-lg leading-relaxed border-l-2 border-[#71B1A5]/40 pl-4">
                    “{{ miembro.cita }}”
                  </p>

                  <div class="space-y-3 pt-4">
                    <p class="text-[10px] tracking-wider uppercase text-[#27252B]/50 font-medium">Áreas de intervención:</p>
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="esp in miembro.especialidades" 
                        :key="esp"
                        class="text-xs bg-[#27252B]/[0.03] text-[#27252B]/85 border border-[#27252B]/5 px-3 py-1.5 rounded-sm font-light tracking-wide transition-colors group-hover:bg-[#27252B]/[0.05]"
                      >
                        {{ esp }}
                      </span>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8 pt-4 border-t border-[#27252B]/5">
                  <div class="flex items-center gap-2">
                    <svg class="w-3.5 h-3.5 text-[#71B1A5]/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 00.806 1.946 3.42 3.42 0 013.138 3.138z"/>
                    </svg>
                    <span class="text-[11px] text-[#27252B]/50 font-light" v-html="miembro.colegiadoTexto" />
                  </div>

                  <div class="inline-flex items-center gap-3 py-1 text-xs text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
                    <span class="tracking-[0.15em] uppercase font-medium">Ver Especialidades</span>
                    <span class="w-6 h-px bg-[#27252B]/40 group-hover:w-10 group-hover:bg-[#71B1A5] transition-all duration-300" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>

        <p class="mt-28 md:mt-36 text-center text-xs text-[#27252B]/35 font-light tracking-wider max-w-md mx-auto leading-relaxed">
          El equipo de La Seda ejerce desde el compromiso ético, el rigor profesional y los requisitos de titulación y acreditación propios de cada disciplina.
        </p>

      </div>
    </section>

    <section
      class="bg-[#27252B] py-24 md:py-32"
      aria-labelledby="valores-heading"
    >
      <div class="page-container">

        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 md:mb-20">
          <div>
            <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-3">
              Compromisos
            </p>
            <h2
              id="valores-heading"
              class="font-serif italic text-white text-3xl md:text-4xl leading-[1.2]"
            >
              Lo que sostiene nuestra práctica
            </h2>
          </div>
          <div class="w-24 h-px bg-white/10 md:mb-2" aria-hidden="true" />
        </div>

        <ol
          class="grid md:grid-cols-3 gap-10 md:gap-16 list-none"
          aria-label="Valores del equipo de La Seda"
        >
          <li class="border-t border-white/10 pt-8">
            <span class="font-serif italic text-[#71B1A5]/30 text-5xl leading-none select-none block mb-6" aria-hidden="true">01</span>
            <h3 class="font-serif italic text-white text-2xl mb-4">Aprendizaje continuo</h3>
            <p class="text-white/60 text-base leading-relaxed font-light">
              Seguimos formándonos porque la práctica profesional también exige revisión, curiosidad y crecimiento.
            </p>
          </li>

          <li class="border-t border-white/10 pt-8">
            <span class="font-serif italic text-[#71B1A5]/30 text-5xl leading-none select-none block mb-6" aria-hidden="true">02</span>
            <h3 class="font-serif italic text-white text-2xl mb-4">Supervisión</h3>
            <p class="text-white/60 text-base leading-relaxed font-light">
              La supervisión forma parte de nuestro trabajo. Compartir la práctica ayuda a cuidar cada intervención y aporta nuevas perspectivas.
            </p>
          </li>

          <li class="border-t border-white/10 pt-8">
            <span class="font-serif italic text-[#71B1A5]/30 text-5xl leading-none select-none block mb-6" aria-hidden="true">03</span>
            <h3 class="font-serif italic text-white text-2xl mb-4">Responsabilidad</h3>
            <p class="text-white/60 text-base leading-relaxed font-light">
              Reconocer cuándo otra especialidad puede ofrecer una respuesta más adecuada también forma parte de nuestro compromiso. Buscamos siempre el recurso que mejor cuide cada situación.
            </p>
          </li>
        </ol>

      </div>
    </section>

    <section
      class="page-container py-24 md:py-32"
      aria-labelledby="cta-heading"
    >
      <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-10">
        <div class="md:col-span-5">
          <p class="section-label mb-4">Contacto</p>
          <h2
            id="cta-heading"
            class="font-serif italic text-3xl md:text-4xl leading-[1.2]"
          >
            ¿Hablamos?
          </h2>
        </div>
        <div class="md:col-span-7">
          <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/65">
            Si no tienes claro qué tipo de ayuda necesitas, escríbenos. Te ayudaremos a encontrar la profesional y el enfoque que mejor se adapten a tu momento.
          </p>
        </div>
      </div>

      <div class="pt-12 border-t border-[#27252B]/10 flex flex-col sm:flex-row justify-center items-center gap-6 w-full">
        <NuxtLink
          to="/contacto"
          class="group btn-primary !inline-flex"
          aria-label="Ir a la página de contacto para reservar primera cita en La Seda"
        >
          <span>Reservar primera cita</span>
          <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center text-white pointer-events-none">
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </NuxtLink>

        <NuxtLink
          to="/terapias"
          class="btn-secondary !inline-flex"
          aria-label="Ver todos los servicios y terapias del Centro La Seda del Albaicín en Granada"
        >
          <span>Ver nuestras terapias</span>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface MiembroEquipo {
  id: string
  nombre: string
  rol: string
  subtitulo: string
  cita: string
  biografia: string
  imagen: string
  imagenAlt: string
  colegiadoTexto: string
  especialidades: string[]
}

const equipo: MiembroEquipo[] = [
  {
    id: 'ana-jimenez',
    nombre: 'Ana Jiménez',
    rol: 'Co-dirección',
    subtitulo: 'Psicología Clínica · Co-directora de La Seda',
    cita: 'Acompañar desde la presencia es permitir que cada persona descubra su propio ritmo para florecer.',
    biografia: 'Psicóloga sanitaria colegiada y terapeuta Gestalt, miembro didacta de la Asociación Española de Terapia Gestalt (AETG). Formada en Psicoterapia Clínica Integrativa junto a Juanjo Albert, sistémica y constelaciones familiares. Cuenta con amplia especialización clínica en el territorio de la infancia, adolescencia y acompañamiento familiar.',
    imagen: '/images/ana-jimenez-psicologa-gestalt-terapia-infanto-juvenil-granada.jpg',
    imagenAlt: 'Ana Jiménez, psicóloga sanitaria colegiada y co-directora del Centro La Seda Granada',
    colegiadoTexto: 'Colegiada <strong class="text-[#27252B]/70 font-medium">Nº AO06843</strong> — Psicóloga Sanitaria',
    especialidades: ['Psicología Sanitaria', 'Terapia Gestalt Infantil', 'Constelaciones Familiares', 'Psicoterapia Integrativa']
  },
  {
    id: 'leonor-cabrera',
    nombre: 'Leonor Cabrera',
    rol: 'Co-dirección',
    subtitulo: 'Terapia Gestalt · Co-directora de La Seda',
    cita: 'Desatar los nudos del pasado nos permite recuperar la fuerza para habitar el presente.',
    biografia: 'Terapeuta Gestalt, transpersonal e integrativa con más de 5.000 horas de experiencia en sesiones individuales. Coach Profesional Certificada por ASESCO. Especializada en trauma, memoria emocional y bloqueos mediante el método Wingwave® (coformadora oficial) y las Constelaciones Familiares. Profesora del Programa SAT de Claudio Naranjo y autora del libro "El camino de la fuerza interior".',
    imagen: '/images/leonor-cabrera-coach-wingwave-constelaciones-familiares-granada.jpg',
    imagenAlt: 'Leonor Cabrera, terapeuta integrativa y co-directora del Centro La Seda en Granada',
    colegiadoTexto: 'Certificación ASESCO <strong class="text-[#27252B]/70 font-medium">Nº 10.457</strong> — Coach Profesional',
    especialidades: ['Terapia Gestalt', 'Método Wingwave', 'Constelaciones Familiares', 'Coaching Profesional']
  },
  {
    id: 'cristina-lence',
    nombre: 'Cristina Lence',
    rol: 'Educación Familiar',
    subtitulo: 'Educación Social · Infancia y Familias',
    cita: 'Ofrecer un espacio seguro a la infancia y a las familias es sembrar raíces fuertes para el mañana.',
    biografia: 'Educadora Social con un enfoque socioemocional que integra las Técnicas Gestálticas para Infancia y Adolescencia (ITG Valencia) con la mirada sistémica familiar. Formada en el Programa SAT de Claudio Naranjo y especializada en acompañamiento de menores en dificultades adaptativas, conductuales y en orientación de parentalidad consciente.',
    imagen: '/images/cristina-lence-educadora-familiar-gestalt-sistemica-granada.jpg',
    imagenAlt: 'Cristina Lence, educadora social especializada en Gestalt infanto-juvenil y sistémica en el Centro La Seda de Granada',
    colegiadoTexto: 'Educadora Social — <strong class="text-[#27252B]/70 font-medium">Habilitada</strong>',
    especialidades: ['Educación Social', 'Técnicas Gestálticas Infancia', 'Acompañamiento Familiar', 'Parentalidad Consciente']
  },
  {
    id: 'reyes-sanchez',
    nombre: 'Reyes Sánchez Tallón',
    rol: 'Terapia',
    subtitulo: 'Terapia Gestalt · Colaboradora en Salud Integrativa',
    cita: 'Integrar el cuidado del cuerpo y la salud emocional es devolverle la plenitud y el equilibrio al ser.',
    biografia: 'Médica colegiada, licenciada en Medicina y Cirugía (Universidad de Granada) y especialista en Pediatría por la vía MIR. Colaboradora de La Seda formada en terapia Gestalt (equipo Qualia), Terapia Corporal Integrativa, análisis caracterológico psico-corporal, terapia sistémica y herramientas de intervención en trauma y TEPT.',
    imagen: '/images/reyes-sanchez-tallon-medica-pediatra-gestalt-terapia-granada.jpg',
    imagenAlt: 'Reyes Sánchez Tallón, médica colegiada y colaboradora en salud integrativa en el Centro La Seda de Granada',
    colegiadoTexto: 'Médica Colegiada <strong class="text-[#27252B]/70 font-medium">Nº 18-10008273</strong>',
    especialidades: ['Medicina', 'Terapia Gestalt', 'Terapia Corporal Integrativa', 'Trauma y TEPT']
  },
  {
    id: 'maria-noel-reyes',
    nombre: 'María Noel Reyes',
    rol: 'Psicoterapia',
    subtitulo: 'Psicoterapia Integradora-Humanista · Adultos',
    cita: 'Cada persona lleva dentro los recursos para crecer; mi trabajo es acompañarla a encontrarlos.',
    biografia: 'Psicoterapeuta con enfoque integrador-humanista y terapeuta Gestalt, con más de una década de experiencia en el acompañamiento a personas mayores, duelo y final de vida en Barcelona, y dedicada desde 2015 a la psicoterapia privada con adultos: crecimiento personal, gestión emocional y terapia de pareja.',
    imagen: '/images/maria-noel-reyes-granada.jpg',
    imagenAlt: 'María Noel Reyes, psicoterapeuta en el Centro de Psicología La Seda en Granada',
    colegiadoTexto: '<strong class="text-[#27252B]/70 font-medium">Máster en Psicología General Sanitaria</strong> — Universidad de Valencia',
    especialidades: ['Terapia Gestalt', 'Enfoque Integrador-Humanista', 'Duelo y Pérdidas', 'Psicogerontología']
  },
  {
    id: 'maria-duarte',
    nombre: 'María Duarte',
    rol: 'Psicoterapia',
    subtitulo: 'Psicología Infantil, Adolescencia y Familias',
    cita: 'Acercarse a cada historia con respeto y sensibilidad permite ofrecer un espacio seguro basado en la confianza.',
    biografia: 'Psicóloga General Sanitaria (Nº Colegiada AO13355) graduada por la Universidad de Málaga y Máster por la UNIR. Especializada en la práctica clínica integrativa con niños, adolescentes y acompañamiento familiar. Cuenta con una sólida experiencia en la reparación del vínculo materno-filial en contextos de adversidad y trauma, además de integrar enfoques corporales y gestálticos en consulta.',
    imagen: '/images/maria-duarte-psicologa-infantil-granada.jpg',
    imagenAlt: 'María Duarte, psicóloga general sanitaria especializada en infancia y familias en el Centro La Seda',
    colegiadoTexto: 'Colegiada <strong class="text-[#27252B]/70 font-medium">Nº AO13355</strong> — Psicóloga Sanitaria',
    especialidades: ['Psicología Infantil', 'Adolescencia', 'Acompañamiento Familiar', 'Trauma y Vínculos']
  },
]

// ─── SEO META LOCALIZADO Y TRANSACCIONAL ─────────────────────────────────────
useSeoMeta({
  title: 'Psicólogos en Granada | Nuestro Equipo de Terapeutas | Centro La Seda',
  description: 'Conoce a nuestro equipo de psicólogos colegiados, profesionales sanitarios y terapeutas Gestalt en Granada. Expertos en psicoterapia integrativa y familiar.',
  ogTitle: 'Psicólogos en Granada | Nuestro Equipo de Terapeutas | Centro La Seda',
  ogDescription: 'Especialistas de la psicología clínica, Gestalt y sistémica en Granada. Consulta los perfiles y números de colegiado de nuestro equipo multidisciplinar.',
  ogImage: '/images/centro-psicologia-la-seda-granada-hero.jpg',
  ogType: 'website',
  ogUrl: 'https://www.laseda.es/conocenos',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Equipo de Psicólogos y Terapeutas en Granada · Centro La Seda',
  twitterDescription: 'Acompañamiento psicológico clínico y humanista de confianza. Profesionales acreditados en Terapia Gestalt, EMDR y Constelaciones Familiares.',
  robots: 'index, follow',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://www.laseda.es/conocenos' }],
})

// ─── JSON-LD SCHEMA AVANZADO (E-E-A-T GOOGLE CORRESPONSAL) ────────────────────
const jsonLdSchema = computed(() => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Equipo de psicólogos colegiados y terapeutas — La Seda Granada',
    description: 'Listado oficial verificado de psicólogos sanitarios, médicos y profesionales de la salud mental del Centro La Seda en Granada.',
    url: 'https://www.laseda.es/conocenos',
    numberOfItems: equipo.length,
    itemListElement: equipo.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Person',
        name: m.nombre,
        jobTitle: m.subtitulo,
        url: `https://www.laseda.es/conocenos/${m.id}`,
        image: `https://www.laseda.es${m.imagen}`,
        knowsAbout: m.especialidades,
        worksFor: {
          '@type': 'MedicalBusiness',
          '@id': 'https://www.laseda.es/#business',
          name: 'La Seda · Centro de Psicología en Granada',
          url: 'https://www.laseda.es'
        }
      },
    })),
  }
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(jsonLdSchema.value),
    },
  ],
})
</script>