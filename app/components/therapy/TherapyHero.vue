<script setup lang="ts">
withDefaults(defineProps<{
  categoria: string
  titulo: string
  tituloItalico: string
  subtitulo: string
  categoriaSufijo?: string
  aviso?: string
  botonPrincipal?: string
  botonPrincipalUrl?: string
  botonSecundario?: string
  botonSecundarioUrl?: string
  imagen?: string
  imagenAlt?: string
}>(), {
  categoriaSufijo: 'LA SEDA GRANADA',
  botonPrincipal: 'Pedir Orientación',
  botonPrincipalUrl: '/contacto',
  botonSecundario: 'Explorar Especialidad',
  botonSecundarioUrl: '#sobre-la-terapia',
  imagenAlt: 'Interior minimalista, cálido y acogedor de las consultas del Centro de Psicología La Seda en Granada'
})

const defaultImage = '/images/centro-clinico-clinica-salud-bienestar-minimalista-recepcion-jardin.jpg'
</script>

<template>
  <header class="page-hero-root relative overflow-hidden h-auto md:h-[calc(580px+6rem)] lg:h-[calc(640px+6rem)] pt-24 md:pt-24 border-b border-[#27252B]/5">

    <div class="page-hero-panel bg-[#F5F2EE] max-md:!relative max-md:!inset-auto max-md:!w-full max-md:!h-auto max-md:z-20 max-md:!bg-[#F5F2EE] flex flex-col justify-center">
      
      <div
        class="absolute inset-0 opacity-[0.018] pointer-events-none z-0"
        style="background-image: radial-gradient(circle, #27252B 1px, transparent 1px); background-size: 24px 24px;"
        aria-hidden="true"
      />
      <div
        class="absolute top-[-10%] left-[-20%] w-[480px] h-[480px] rounded-full bg-[#71B1A5]/5 blur-[100px] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div class="w-full relative z-10 px-0 md:px-12 lg:px-16 xl:px-20">
        <div class="max-md:bg-[#F5F2EE] max-md:py-10 max-md:px-8 max-md:w-full">

          <div class="flex items-center gap-3 mb-6 lg:mb-8">
            <span class="w-5 h-px bg-[#71B1A5]" aria-hidden="true"></span>
            <p class="text-[#71B1A5] text-[10px] md:text-[11px] tracking-[0.42em] uppercase font-bold">
              {{ categoria }}<span v-if="categoriaSufijo"> · {{ categoriaSufijo }}</span>
            </p>
          </div>

          <h1
            class="font-serif italic font-medium leading-[1.12] tracking-tight text-[#27252B] mb-8 relative flex items-start md:items-center"
            style="font-size: clamp(2.1rem, 3.5vw, 3.8rem);"
          >
            <div class="relative z-10">
              {{ titulo }}
              <span 
                v-if="tituloItalico"
                class="not-italic font-normal text-[#71B1A5] block mt-2 font-sans"
                style="font-size: clamp(1.4rem, 2.4vw, 2.6rem); letter-spacing: 0.04em;"
              >
                {{ tituloItalico }}
              </span>
            </div>
          </h1>

          <div class="flex flex-col sm:flex-row items-center gap-5 w-full">
            
            <NuxtLink
              :to="botonPrincipalUrl"
              class="group relative inline-flex items-center justify-center gap-3 bg-[#27252B] text-white px-8 py-4 md:min-w-[210px] text-[10.5px] tracking-[0.28em] uppercase font-bold rounded-full transition-all duration-500 hover:bg-[#71B1A5] w-full sm:w-auto shadow-lg shadow-[#27252B]/5 hover:shadow-xl hover:shadow-[#71B1A5]/20 transform hover:-translate-y-0.5 overflow-hidden border border-transparent"
            >
              <span>{{ botonPrincipal }}</span>
              <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center">
                <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
                <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </div>
            </NuxtLink>

            <NuxtLink
              :to="botonSecundarioUrl"
              class="group relative inline-flex items-center justify-center gap-3 border border-[#27252B]/30 bg-[#F5F2EE]/60 backdrop-blur-md text-[#27252B] px-8 py-4 md:min-w-[210px] text-[10.5px] tracking-[0.28em] uppercase font-bold rounded-full transition-all duration-500 hover:border-[#71B1A5] hover:text-[#71B1A5] hover:bg-white/90 w-full sm:w-auto shadow-sm hover:shadow-xl hover:shadow-[#71B1A5]/10 transform hover:-translate-y-0.5 overflow-hidden"
            >
              <span>{{ botonSecundario }}</span>
              <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center text-[#71B1A5]">
                <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
                <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </div>
            </NuxtLink>
          </div>

        </div>

        <p
          class="text-stone-600/85 leading-[1.85] font-light mb-8 lg:mb-10 max-w-md mt-6 px-4 md:px-0"
          style="font-size: clamp(0.85rem, 1.1vw, 1rem);"
        >
          {{ aviso || subtitulo }}
        </p>

      </div>

      <div
        class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[45%] w-px"
        style="background: linear-gradient(to bottom, transparent, rgba(113,177,165,0.35), transparent);"
        aria-hidden="true"
      ></div>

    </div>

    <div class="page-hero-panel-right max-md:!relative max-md:!inset-auto max-md:!w-full max-md:!h-[min(82vw,28rem)] max-md:z-10">
      <NuxtImg
        :src="imagen || defaultImage"
        :alt="imagenAlt"
        class="w-full h-full object-cover object-center"
        format="webp"
        fetchpriority="high"
        preload
      />
    </div>

  </header>
</template>

<style scoped>
@media (max-width: 767px) {
  .page-hero-root {
    display: flex;
    flex-direction: column;
  }
}

@media (min-width: 768px) {
  .page-hero-root {
    display: flex;
  }
  .page-hero-panel,
  .page-hero-panel-right {
    width: 50%;
    flex-shrink: 0;
    height: 100%;
  }
}
</style>