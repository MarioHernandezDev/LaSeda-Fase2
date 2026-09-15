<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  actualId: string
  todasLasFormaciones: Record<string, any>
}>()

// Filtramos las formaciones para sugerir únicamente las demás
const formacionesSugeridas = computed(() => {
  return Object.entries(props.todasLasFormaciones)
    .filter(([id]) => id !== props.actualId)
    .map(([id, data]) => ({ id, ...data }))
})
</script>

<template>
  <section v-if="formacionesSugeridas.length > 0" v-reveal class="py-24 bg-[#FDFBF9] border-t border-[#27252B]/5 relative overflow-hidden">
    <div class="page-container relative z-10">
      
      <div class="flex items-end justify-between mb-12 md:mb-16">
        <div>
          <div class="flex items-center gap-3 mb-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[#71B1A5]" aria-hidden="true" />
            <p class="text-[#71B1A5] text-[10px] tracking-[0.35em] uppercase font-bold">
              Otros Programas
            </p>
          </div>
          <h2 class="font-serif italic text-2xl md:text-3xl lg:text-4xl text-[#27252B]">
            Especializaciones relacionadas
          </h2>
        </div>
        
        <NuxtLink 
          to="/formaciones" 
          class="hidden md:flex items-center gap-2 text-[10px] tracking-widest uppercase font-bold text-[#27252B]/50 hover:text-[#71B1A5] transition-colors group/all"
        >
          <span>Ver toda la oferta</span>
          <span class="transform group-hover/all:translate-x-1 transition-transform duration-300">→</span>
        </NuxtLink>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <NuxtLink 
          v-for="f in formacionesSugeridas" 
          :key="f.id"
          :to="`/formaciones/${f.id}`"
          class="group flex flex-col justify-between bg-[#F5F2EE]/30 border border-[#27252B]/5 p-6 md:p-8 rounded-xl transition-all duration-500 hover:bg-[#F5F2EE]/70 hover:border-[#71B1A5]/20 hover:shadow-xl hover:shadow-[#71B1A5]/5"
        >
          <div>
            <p class="text-[9px] tracking-[0.25em] uppercase text-[#71B1A5] font-bold mb-3">
              {{ f.categoria || 'Especialización' }}
            </p>
            
            <h3 class="font-serif italic text-xl text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-300 leading-[1.3]">
              {{ f.titulo }} 
              <span class="not-italic font-sans font-light text-lg text-[#27252B]/70 block mt-0.5">
                {{ f.tituloItalico }}
              </span>
            </h3>
          </div>

          <div class="mt-8 pt-4 border-t border-[#27252B]/5 flex items-center justify-between text-[10px] tracking-widest uppercase font-bold text-[#27252B]/50 group-hover:text-[#71B1A5] transition-colors duration-300">
            <span>Ver programa</span>
            <svg 
              class="w-4 h-4 transform -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>