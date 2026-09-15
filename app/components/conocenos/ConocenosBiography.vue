<template>
  <div class="w-full text-[#27252B] font-sans my-16 md:my-28 space-y-0 bg-[#FDFBF9]">
    
    <section class="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[50vh] lg:min-h-[680px] gap-0">
      
      <div 
        v-if="fotoUno" 
        class="lg:col-span-5 w-full min-h-[400px] lg:min-h-full h-full overflow-hidden bg-stone-100 relative"
      >
        <img
          :src="fotoUno.src"
          :alt="fotoUno.alt"
          class="absolute inset-0 w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-[1200ms] ease-out scale-100 hover:scale-102"
          loading="lazy"
        />
      </div>

      <div class="lg:col-span-7 px-8 sm:px-16 md:px-24 lg:px-28 py-16 lg:py-24 w-full flex flex-col justify-center items-start">
        <div class="space-y-8 max-w-2xl w-full">
          <div class="flex items-center gap-3">
            <span class="w-6 h-px bg-[#71B1A5]" aria-hidden="true" />
            <p class="text-xs font-bold tracking-[0.3em] uppercase text-[#71B1A5]">
              Filosofía y Enfoque
            </p>
          </div>
          
          <h3 class="font-serif italic text-3xl md:text-4xl lg:text-5xl text-[#27252B] font-normal leading-[1.15] tracking-tight">
            Trayectoria y Enfoque Humano
          </h3>
          
          <div class="space-y-6 text-stone-600/90 text-base md:text-[16.5px] leading-[1.85] font-light tracking-wide pt-2">
            <p 
              v-if="perfil.biografiaExtendida.length > 0"
              class="font-serif italic text-lg md:text-xl text-[#27252B]/90 border-l-2 border-[#71B1A5] pl-6 py-1 mb-8 leading-relaxed"
              v-html="perfil.biografiaExtendida[0]"
            />
            
            <p 
              v-for="(parrafo, i) in perfil.biografiaExtendida.slice(1)" 
              :key="i"
              v-html="parrafo"
            />
          </div>
        </div>
      </div>
    </section>

<section class="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[50vh] lg:min-h-[680px] gap-0">
        
      <div class="lg:col-span-7 px-8 sm:px-16 md:px-24 lg:px-28 py-16 lg:py-24 w-full flex flex-col justify-center items-start order-2 lg:order-1">
        <div class="space-y-8 max-w-2xl w-full">
          <div class="flex items-center gap-3">
            <span class="w-6 h-px bg-[#71B1A5]" aria-hidden="true" />
            <p class="text-xs font-bold tracking-[0.3em] uppercase text-[#71B1A5]">
              Evolución Profesional
            </p>
          </div>
          
          <h3 class="font-serif italic text-3xl md:text-4xl lg:text-5xl text-[#27252B] font-normal tracking-tight leading-[1.15]">
            El tejido de una identidad
          </h3>
          
          <div class="space-y-8 pt-4 w-full">
            <div 
              v-for="(parrafo, i) in perfil.trayectoria" 
              :key="i"
              class="flex gap-5 group items-start"
            >
              <div class="font-serif italic text-lg text-[#71B1A5] bg-[#71B1A5]/5 w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#71B1A5] group-hover:text-white">
                0{{ i + 1 }}
              </div>
              <div 
                class="text-stone-600/90 text-sm md:text-base leading-[1.75] font-light tracking-wide pt-1.5 transition-colors duration-300 group-hover:text-[#27252B]" 
                v-html="parrafo" 
              />
            </div>
          </div>
        </div>
      </div>

      <div 
        v-if="fotoDos" 
        class="lg:col-span-5 w-full min-h-[400px] lg:min-h-full h-full overflow-hidden bg-stone-100 relative order-1 lg:order-2"
      >
        <img
          :src="fotoDos.src"
          :alt="fotoDos.alt"
          class="absolute inset-0 w-full h-full object-cover object-top grayscale-[10%] hover:grayscale-0 transition-all duration-[1200ms] ease-out scale-100 hover:scale-102"
          loading="lazy"
        />
      </div>

    </section>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface FotoGaleria {
  src: string
  alt: string
}

interface PerfilProfesional {
  id: string
  nombre: string
  biografiaExtendida: string[]
  trayectoria: string[]
  galeria?: FotoGaleria[]
}

const props = defineProps<{
  perfil: PerfilProfesional
}>()

const fotoUno = computed(() => {
  return props.perfil?.galeria && props.perfil.galeria.length > 0 ? props.perfil.galeria[0] : null
})

const fotoDos = computed(() => {
  return props.perfil?.galeria && props.perfil.galeria.length > 1 ? props.perfil.galeria[1] : null
})
</script>

<style scoped>
:deep(strong) {
  font-weight: 500;
  color: #27252B;
}
</style>