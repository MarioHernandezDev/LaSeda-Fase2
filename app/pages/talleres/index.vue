<script setup lang="ts">
// ─── SEO & METADATOS ULTRA-OPTIMIZADOS PARA LA PÁGINA DE TALLERES ────────────
useSeoMeta({
  title: 'Talleres, grupos y supervisión en Granada | La Seda',
  ogTitle: 'Talleres, grupos y supervisión en Granada | La Seda',
  description: 'Encuentros vivenciales, constelaciones familiares, terapia grupal, seguimiento del Programa SAT y supervisión de casos en Granada.',
  ogDescription: 'Encuentra tu espacio de crecimiento en Granada. Talleres de Constelaciones Familiares, grupos de autoconocimiento y supervisión para psicólogos en Centro La Seda.',
  ogImage: '/images/talleres-psicologia-constelaciones-familiares-granada.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Talleres de Crecimiento Personal y Supervisión Clínica en Granada',
  twitterDescription: 'Constelaciones Familiares, grupos de terapia y supervisión de casos clínicos en Granada. Grupos reducidos con enfoque humano y riguroso.',
  robots: 'index, follow'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://centrolaseda.com/talleres' }
  ],
  htmlAttrs: {
    lang: 'es'
  }
})
</script>

<template>
  <main>

    <PageHero
      label="Talleres y grupos"
      title-main="Espacios para encontrarte"
      title-accent="y seguir creciendo"
      image="/images/talleres-psicologia-constelaciones-familiares-granada.jpg"
      image-alt="Talleres y grupos vivenciales en La Seda, Granada"
      secondary-link="#proximos-encuentros"
      secondary-label="Ver próximos encuentros"
    >
      <template #description>
        Propuestas vivenciales para detenerte, compartir, cuidar tu proceso y explorar nuevas maneras de relacionarte contigo y con otras personas.
      </template>
    </PageHero>


    <section
      id="proximos-encuentros"
      class="bg-[#27252B]/[0.03] py-20 md:py-32 overflow-hidden"
      aria-labelledby="talleres-heading"
    >
      <div class="page-container">

        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 md:mb-24">
          <div>
            <p class="section-label mb-3">Nuestros espacios</p>
            <h2 id="talleres-heading" class="section-title">
              Próximos encuentros
            </h2>
          </div>
          <div class="w-24 h-px bg-[#27252B]/20 md:mb-2" aria-hidden="true" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <!-- Columna Izquierda -->
          <div class="space-y-12 lg:space-y-32">
            
            <!-- Tarjeta 1: Constelaciones -->
            <NuxtLink
              to="/talleres/constelaciones-familiares"
              class="training-card group flex flex-col bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#27252B]/5 block"
              aria-label="Ver detalles del Taller de Constelaciones Familiares"
            >
              <div class="overflow-hidden aspect-[16/10] relative">
                <div class="absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10" />
                <NuxtImg
                  src="/images/taller-constelaciones-familiares-granada-centro-la-seda.jpg"
                  alt="Talleres vivenciales de constelaciones familiares en Granada, Centro de Psicología La Seda"
                  width="800"
                  height="500"
                  format="webp"
                  loading="lazy"
                  class="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div class="p-8 md:p-10 flex flex-col flex-1 gap-5">
                <div class="section-divider" aria-hidden="true" />
                <h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug">Taller de constelaciones familiares</h3>
                <p class="text-base leading-[1.85] text-[#27252B]/75 flex-1">
                  Un espacio para observar con mayor amplitud los vínculos, patrones y lealtades familiares que siguen influyendo en nuestra vida, y abrir nuevas posibilidades de cambio.
                </p>
                <div class="text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5 flex flex-wrap gap-x-4 gap-y-1">
                  <span>Enfoque: <span class="font-normal text-[#27252B]/70">Enfoque grupal y vivencial</span></span>
                  <span class="text-[#27252B]/20">•</span>
                  <span>Facilita: <span class="font-normal text-[#27252B]/70">Leonor Cabrera</span></span>
                </div>
                <span class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300">
                  Ver fechas
                  <span class="w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300" />
                </span>
              </div>
            </NuxtLink>

            <!-- Tarjeta 3: Grupo de Terapia -->
            <NuxtLink
              to="/talleres/grupo-de-terapia"
              class="training-card group flex flex-col bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#27252B]/5 block"
              aria-label="Ver detalles del Grupo de Terapia"
            >
              <div class="overflow-hidden aspect-[16/10] relative">
                <div class="absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10" />
                <NuxtImg
                  src="/images/grupo-de-terapia-granada-la-seda.jpg"
                  alt="Grupo de terapia con enfoque gestáltico y sistémico en Granada"
                  width="800"
                  height="500"
                  format="webp"
                  loading="lazy"
                  class="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div class="p-8 md:p-10 flex flex-col flex-1 gap-5">
                <div class="section-divider" aria-hidden="true" />
                <h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug">Grupo de terapia</h3>
                <p class="text-base leading-[1.85] text-[#27252B]/75 flex-1">
                  Nueve encuentros para reconocer cómo se construyeron nuestros vínculos, observar patrones relacionales que se repiten y abrir formas más conscientes de encontrarnos con otras personas.
                </p>
                <div class="text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5 flex flex-wrap gap-x-4 gap-y-1">
                  <span>Formato: <span class="font-normal text-[#27252B]/70">Nueve encuentros · Octubre 2026–Junio 2027</span></span>
                  <span class="text-[#27252B]/20">•</span>
                  <span>Facilita: <span class="font-normal text-[#27252B]/70">Leonor Cabrera</span></span>
                </div>
                <span class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300">
                  Solicitar plaza o información
                  <span class="w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300" />
                </span>
              </div>
            </NuxtLink>

          </div>

          <!-- Columna Derecha -->
          <div class="space-y-12 lg:space-y-32 lg:mt-32">

            <!-- Tarjeta 2: Supervisión -->
            <NuxtLink
              to="/talleres/supervision-casos"
              class="training-card group flex flex-col bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#27252B]/5 block"
              aria-label="Saber más sobre el espacio de Supervisión de Casos"
            >
              <div class="overflow-hidden aspect-[16/10] relative">
                <div class="absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10" />
                <NuxtImg
                  src="/images/supervision-casos-clinicos-terapeutas-gestalt-granada.jpg"
                  alt="Supervisión de casos para profesionales de la psicología y la terapia Gestalt en Granada"
                  width="800"
                  height="500"
                  format="webp"
                  loading="lazy"
                  class="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div class="p-8 md:p-10 flex flex-col flex-1 gap-5">
                <div class="section-divider" aria-hidden="true" />
                <h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug">Supervisión de casos</h3>
                <p class="text-base leading-[1.85] text-[#27252B]/75 flex-1">
                  Un espacio de confianza para revisar la práctica clínica, desbloquear dificultades y cuidar la relación terapéutica mediante el aprendizaje compartido.
                </p>
                <div class="text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5 flex flex-wrap gap-x-4 gap-y-1">
                  <span>Acreditación: <span class="font-normal text-[#27252B]/70">Horas certificables por la AETG</span></span>
                  <span class="text-[#27252B]/20">•</span>
                  <span>Formatos: <span class="font-normal text-[#27252B]/70">Presencial y online</span></span>
                  <span class="text-[#27252B]/20">•</span>
                  <span>Facilita: <span class="font-normal text-[#27252B]/70">Ana Jiménez</span></span>
                </div>
                <span class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300">
                  Solicitar información
                  <span class="w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300" />
                </span>
              </div>
            </NuxtLink>

            <!-- Tarjeta 4: Seguimiento Programa SAT -->
            <NuxtLink
              to="/talleres/seguimiento-programa-sat"
              class="training-card group flex flex-col bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#27252B]/5 block"
              aria-label="Ver detalles del Seguimiento Eneagrama Programa SAT"
            >
              <div class="overflow-hidden aspect-[16/10] relative">
                <div class="absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10" />
                <NuxtImg
                  src="/images/seguimiento-eneagrama-programa-sat-granada.jpg"
                  alt="Seguimiento del eneagrama y Programa SAT en Granada"
                  width="800"
                  height="500"
                  format="webp"
                  loading="lazy"
                  class="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div class="p-8 md:p-10 flex flex-col flex-1 gap-5">
                <div class="section-divider" aria-hidden="true" />
                <h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug">Seguimiento eneagrama Programa SAT</h3>
                <p class="text-base leading-[1.85] text-[#27252B]/75 flex-1">
                  Un espacio para quienes ya han realizado el Introductorio o algún módulo del Programa SAT y desean continuar la investigación de las pasiones y fijaciones en la vida cotidiana.
                </p>
                <div class="text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5 flex flex-wrap gap-x-4 gap-y-1">
                  <span>Formato: <span class="font-normal text-[#27252B]/70">Nueve encuentros · Octubre 2026–Junio 2027</span></span>
                  <span class="text-[#27252B]/20">•</span>
                  <span>Responsable en Granada: <span class="font-normal text-[#27252B]/70">Leonor Cabrera</span></span>
                </div>
                <span class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300">
                  Más información en la FCN
                  <span class="w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300" />
                </span>
              </div>
            </NuxtLink>

          </div>
        </div>

        <!-- Bloque de ayuda (CTA) -->
        <div class="mt-20 lg:mt-32 max-w-3xl mx-auto">
          <NuxtLink
            to="/contacto"
            class="training-card group relative flex flex-col items-center justify-center text-center bg-[#71B1A5] rounded-sm p-10 md:p-16 min-h-[380px] transition-all duration-500 hover:shadow-2xl hover:shadow-[#71B1A5]/20 block overflow-hidden"
            aria-label="Escríbenos para orientación sobre qué taller elegir"
          >
            <div class="absolute -bottom-10 font-serif italic text-[18rem] text-[#FDFBF9]/5 leading-none select-none pointer-events-none z-0">
              &
            </div>
            
            <div class="relative z-10 space-y-6 max-w-xl flex flex-col items-center">
              <div class="w-12 h-px bg-[#FDFBF9]/60" />
              <h3 class="font-serif italic text-[#FDFBF9] text-3xl md:text-4xl leading-tight">
                ¿Tienes dudas sobre qué espacio es para ti?
              </h3>
              <p class="text-base md:text-lg text-[#FDFBF9]/90 font-light leading-relaxed">
                Cuéntanos qué buscas o en qué momento te encuentras. Te ayudaremos a encontrar la propuesta que mejor responda a tus necesidades.
              </p>
            </div>

            <div class="relative z-10 pt-8">
              <span class="btn-secondary !bg-white/95 !border-transparent hover:!bg-white text-[#27252B] hover:scale-105 shadow-xl transition-transform">
                Hablemos
              </span>
            </div>
          </NuxtLink>
        </div>

      </div>
    </section>

    <!-- Sección Metodología -->
    <section
      class="page-container py-20 md:py-32"
      aria-labelledby="metodologia-heading"
    >
      <div class="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

        <div class="relative order-2 md:order-1">
          <div class="absolute -top-4 -left-4 w-full h-full border border-[#71B1A5]/40 pointer-events-none z-0" aria-hidden="true" />
          <div class="relative z-10 overflow-hidden aspect-[3/4]">
            <NuxtImg
              src="/images/espacio-terapeutico-centro-psicologia-la-seda-granada.jpg"
              alt="Taller vivencial de psicología y crecimiento personal en La Seda, Granada"
              width="600"
              height="800"
              format="webp"
              loading="lazy"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-[#27252B]/5 pointer-events-none" aria-hidden="true" />
          </div>
          <div class="absolute bottom-6 -right-5 bg-[#FDFBF9] border border-[#27252B]/10 px-5 py-3 z-20 hidden md:block" aria-hidden="true">
            <p class="text-xs tracking-[0.2em] uppercase text-[#71B1A5]">Talleres y Formación</p>
            <p class="font-serif italic text-[#27252B] text-sm mt-0.5">La Seda · Granada</p>
          </div>
        </div>

        <div class="order-1 md:order-2">
          <p class="section-label mb-4">Cómo vivimos los encuentros</p>
          <h2 id="metodologia-heading" class="section-title mb-12">
            Transformarse<br />
            <span class="text-[#27252B]/60">desde la experiencia</span>
          </h2>

          <ol class="space-y-10" aria-label="Valores de los encuentros vivenciales">

            <!-- Metodología Paso 1 -->
            <li class="flex gap-6 items-start">
              <div class="shrink-0" aria-hidden="true">
                <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">01</span>
              </div>
              <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">
                  Presencia
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  Cuidamos cada encuentro desde la escucha, el respeto y la atención al grupo.
                </p>
              </div>
            </li>

            <li>
              <div class="w-full h-px bg-[#27252B]/8" aria-hidden="true" />
            </li>

            <!-- Metodología Paso 2 -->
            <li class="flex gap-6 items-start">
              <div class="shrink-0" aria-hidden="true">
                <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">02</span>
              </div>
              <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">
                  Experiencia
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  La transformación nace de lo vivido. La teoría cobra sentido cuando puede experimentarse.
                </p>
              </div>
            </li>

            <li>
              <div class="w-full h-px bg-[#27252B]/8" aria-hidden="true" />
            </li>

            <!-- Metodología Paso 3 -->
            <li class="flex gap-6 items-start">
              <div class="shrink-0" aria-hidden="true">
                <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">03</span>
              </div>
              <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">
                  Comunidad
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  El grupo crea un espacio cuidado donde compartir experiencias, reconocerse y crecer junto a otras personas.
                </p>
              </div>
            </li>

          </ol>
        </div>

      </div>

      <div class="mt-16 md:mt-24 pt-12 border-t border-[#27252B]/10 flex justify-center w-full">
        <NuxtLink
          to="#proximos-encuentros"
          class="group btn-primary !inline-flex"
          aria-label="Ir a ver próximos encuentros"
        >
          <span>Ver próximos encuentros</span>
          <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center text-white pointer-events-none">
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </NuxtLink>
      </div>
    </section>

  </main>
</template>