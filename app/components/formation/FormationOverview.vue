<script setup lang="ts">
withDefaults(defineProps<{
  descripcion: string
  descripcion2: string
  cita: string
  beneficios: string[]
  propuestaLabel?: string
  propuestaTitulo?: string
  propuestaTituloSecundario?: string
  descripcion3?: string
  aprendizajesLabel?: string
  aprendizajesTitulo?: string
}>(), {
  propuestaLabel: 'Propuesta Formativa',
  propuestaTitulo: 'Integrar la teoría,',
  propuestaTituloSecundario: 'desarrollar la práctica clínica',
  aprendizajesLabel: 'Objetivos del Programa',
  aprendizajesTitulo: 'Qué te aporta esta especialización'
})
</script>

<template>
  <section id="sobre-la-terapia" v-reveal class="bg-[#FDFBF9] py-20 md:py-28 relative scroll-mt-12">
    <div class="page-container max-w-4xl mx-auto">
      
      <div class="space-y-12">
        
        <div class="text-center md:text-left">
          <div class="w-8 h-px bg-[#71B1A5] mb-5 max-md:mx-auto" aria-hidden="true" />
          <p class="text-[#71B1A5] text-[10px] tracking-[0.35em] uppercase font-bold mb-3">
            {{ propuestaLabel }}
          </p>
          <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl lg:text-5xl leading-[1.2]">
            {{ propuestaTitulo }}<br />
            <span class="text-[#27252B]/40 not-italic font-sans font-light text-2xl md:text-3xl block mt-1">
              {{ propuestaTituloSecundario }}
            </span>
          </h2>
        </div>

        <div class="space-y-6 text-[#27252B]/75 font-light text-base md:text-lg leading-[1.9] text-justify md:text-left">
          <p class="first-letter:text-5xl first-letter:font-serif first-letter:font-medium first-letter:text-[#71B1A5] first-letter:mr-3 first-letter:float-left first-letter:leading-none">
            {{ descripcion }}
          </p>
          <p>
            {{ descripcion2 }}
          </p>
          <p v-if="descripcion3">
            {{ descripcion3 }}
          </p>
        </div>

        <div v-if="cita" class="py-10 my-6 border-t border-b border-[#27252B]/10 relative">
          <blockquote class="text-center max-w-2xl mx-auto">
            <p class="text-[#27252B]/80 font-serif italic text-lg md:text-xl leading-[1.85]">
              {{ cita.startsWith('"') || cita.startsWith('“') ? cita : `“${cita}”` }}
            </p>
          </blockquote>
        </div>

        <div class="pt-6 space-y-8">
          <div>
            <p class="text-[10px] tracking-[0.25em] uppercase font-bold text-[#71B1A5] mb-1">
              {{ aprendizajesLabel }}
            </p>
            <h3 class="font-serif italic text-2xl text-[#27252B]">
              {{ aprendizajesTitulo }}
            </h3>
          </div>

          <ul class="grid sm:grid-cols-2 gap-x-12 gap-y-6 pt-2">
            <li 
              v-for="(beneficio, i) in beneficios" 
              :key="i"
              class="flex items-start gap-4 text-sm md:text-[15px] leading-[1.75] text-[#27252B]/70 py-2 border-b border-[#27252B]/5"
            >
              <span class="text-[#71B1A5] font-serif text-lg leading-none select-none mt-0.5">—</span>
              <span class="font-light">
                {{ beneficio }}
              </span>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </section>
</template>