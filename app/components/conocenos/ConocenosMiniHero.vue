<template>
  <header class="page-hero-root relative overflow-hidden h-auto md:h-screen pt-24 md:pt-24 w-full bg-[#F5F2EE]">
    
    <div class="page-hero-panel relative z-20 h-auto md:h-full flex flex-col justify-center max-md:justify-start">
      
      <div
        class="absolute inset-0 opacity-[0.015] pointer-events-none z-0 hidden md:block"
        style="background-image: radial-gradient(circle, #27252B 1px, transparent 1px); background-size: 32px 32px;"
        aria-hidden="true"
      />

      <div class="w-full max-w-7xl mx-auto relative z-10 px-6 sm:px-12 md:px-16 lg:px-24 max-md:pb-12">
        
        <div class="max-md:bg-[#F5F2EE] max-md:p-8 max-md:rounded-sm max-w-2xl py-10 md:py-24">

          <div class="hidden md:flex items-center gap-3 mb-6 md:mb-8">
            <span class="w-6 h-px bg-[#71B1A5]/60" aria-hidden="true"></span>
            <p class="text-[#71B1A5] text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold leading-none">
              {{ perfil.especialidadLabel }} · LA SEDA
            </p>
          </div>

          <div class="mb-6 md:mb-8">
            <h1
              class="font-serif italic font-normal leading-[1.1] tracking-tight text-[#27252B]"
              style="font-size: clamp(2.4rem, 4.5vw, 4.2rem);"
            >
              {{ perfil.nombre }}
            </h1>
            <span 
              v-if="perfil.tituloOficial"
              class="not-italic font-sans text-[#27252B]/60 block mt-3 text-xs md:text-sm font-light tracking-wide max-w-xl leading-relaxed"
            >
              {{ perfil.tituloOficial }}
            </span>
          </div>

          <blockquote v-if="perfil.cita" class="hidden md:block relative pl-5 border-l border-[#71B1A5]/40 mb-8 md:mb-10 max-w-lg">
            <p 
              class="text-[#27252B]/80 font-serif italic leading-relaxed"
              style="font-size: clamp(0.95rem, 1.2vw, 1.15rem);"
            >
              “{{ perfil.cita }}”
            </p>
          </blockquote>

          <div class="flex flex-col sm:flex-row sm:items-center gap-5 pt-2">
            <NuxtLink
              to="/contacto"
              class="group btn-primary !inline-flex w-full sm:w-auto justify-center"
            >
              <span>Agendar Consulta</span>
              <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center text-white pointer-events-none">
                <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
                <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </div>
            </NuxtLink>

            <div
              class="inline-flex items-center justify-center text-[10px] tracking-[0.2em] uppercase font-medium text-[#27252B]/40 px-3 py-2 bg-[#27252B]/5 rounded-xs w-full sm:w-auto select-none whitespace-nowrap"
            >
              {{ perfil.rol }}
            </div>
          </div>

        </div>

      </div>

    </div>

    <div class="page-hero-panel-right max-md:relative max-md:inset-auto max-md:w-full max-md:h-[min(82vw,28rem)] z-10 overflow-hidden">
      <NuxtImg
        :src="perfil.imagen"
        :alt="perfil.imagenAlt"
        class="block w-full h-full object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-[1200ms] ease-out scale-[1.01]"
        format="webp"
        fetchpriority="high"
        preload
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/40 via-transparent to-transparent md:hidden" aria-hidden="true" />
    </div>

  </header>
</template>

<script setup lang="ts">
defineProps<{
  perfil: {
    nombre: string
    rol: string
    especialidadLabel: string
    tituloOficial: string
    cita: string
    imagen: string
    imagenAlt: string
  }
}>()
</script>

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
    /* Nos aseguramos de que los dos paneles hereden la altura exacta del calc del header */
    height: 100%; 
  }
}
</style>