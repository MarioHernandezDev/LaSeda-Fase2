<template>
  <section class="page-container py-20 md:py-32" :aria-labelledby="idHeading">
    <div class="grid md:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-start">
      
      <div class="md:col-span-5 md:sticky md:top-28">
        <div class="section-divider mb-6 bg-[#71B1A5]" aria-hidden="true" />
        <h2 :id="idHeading" class="section-title text-[#27252B] tracking-tight">
          {{ titulo }}
        </h2>
        <div class="mt-8 w-px h-20 bg-gradient-to-b from-[#71B1A5]/40 to-transparent" aria-hidden="true" />
      </div>

      <div class="md:col-span-7 space-y-9">
        
        <div class="space-y-6">
          <p 
            v-for="(parrafo, index) in parrafos" 
            :key="index"
            :class="[
              'leading-[1.85] font-light transition-colors duration-300',
              // El primer párrafo actúa como 'lead text' (más inmersivo)
              index === 0 
                ? 'text-[20px] md:text-[22px] text-[#27252B] font-normal/30' 
                : 'text-[17px] md:text-[19px] text-[#27252B]/75'
            ]"
          >
            {{ parrafo }}
          </p>
        </div>

        <blockquote v-if="cita" class="relative pl-4 pr-6 py-6 my-8 overflow-hidden group">
          <span class="absolute -top-4 -left-2 font-serif italic text-[#71B1A5]/15 text-[7rem] leading-none select-none pointer-events-none" aria-hidden="true">
            “
          </span>
          
          <div class="relative z-10 space-y-4">
            <span class="block font-serif italic text-[#27252B]/85 text-[19px] md:text-[22px] leading-[1.7]">
              {{ cita }}
            </span>
            
            <footer v-if="citaAutor" class="flex items-center gap-3 pt-2">
              <div class="w-6 h-px bg-[#71B1A5]/60" aria-hidden="true" />
              <cite class="not-italic text-[11px] tracking-[0.25em] uppercase font-medium text-[#71B1A5]">
                {{ citaAutor }}
              </cite>
            </footer>
          </div>
        </blockquote>

        <div class="pt-4">
          <div class="inline-flex items-center gap-3 px-4 py-2.5 bg-[#71B1A5]/5 border border-[#71B1A5]/10 rounded-[2px]">
            <div class="w-1.5 h-1.5 rounded-full bg-[#71B1A5] animate-pulse" aria-hidden="true" />
            <span class="text-[11px] tracking-[0.22em] uppercase font-semibold text-[#71B1A5]">
              {{ selloTexto }}
            </span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({
  idHeading: {
    type: String,
    default: 'intro-heading'
  },
  titulo: {
    type: String,
    required: true
  },
  parrafos: {
    type: Array,
    required: true
  },
  cita: {
    type: String,
    default: ''
  },
  citaAutor: {
    type: String,
    default: ''
  },
  selloTexto: {
    type: String,
    default: 'Centro acreditado · Granada'
  }
})
</script>