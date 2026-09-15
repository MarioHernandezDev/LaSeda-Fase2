<script setup lang="ts">
interface Beneficio {
  numero: string
  titulo: string
  desc: string
}

defineProps<{
  label: string
  titulo: string
  beneficios: Beneficio[]
}>()
</script>

<template>
  <section v-reveal class="bg-[#27252B] py-24 md:py-36 overflow-hidden relative">
    <div 
      class="absolute top-1/4 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#71B1A5]/[0.02] blur-[120px] pointer-events-none" 
      aria-hidden="true" 
    />

    <div class="page-container relative z-10">

      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-28">
        <div class="max-w-2xl">
          <div class="flex items-center gap-3 mb-5">
            <span class="w-4 h-px bg-[#71B1A5]/60" aria-hidden="true"></span>
            <p class="text-[#71B1A5] text-[10px] tracking-[0.35em] uppercase font-bold">
              {{ label }}
            </p>
          </div>
          <h2 class="font-serif italic text-[#FDFBF9] text-4xl md:text-5xl leading-[1.15] tracking-tight">
            {{ titulo }}
          </h2>
        </div>
        <div class="hidden md:block w-32 h-px bg-[#71B1A5]/25 mb-4 shrink-0" aria-hidden="true" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-20">
        <div
          v-for="(b, i) in beneficios"
          :key="i"
          class="group/card flex flex-col items-start relative transition-all duration-500 ease-out"
        >
          <div class="flex items-baseline justify-between w-full mb-4">
            <span 
              class="font-serif italic text-[#71B1A5]/30 group-hover/card:text-[#71B1A5]/80 text-5xl font-medium transition-all duration-500 ease-out transform group-hover/card:-translate-y-1 select-none" 
              aria-hidden="true"
            >
              {{ b.numero }}
            </span>
            <span class="w-0 h-[1px] bg-[#71B1A5]/40 transition-all duration-700 ease-out group-hover/card:w-12" aria-hidden="true"></span>
          </div>

          <div class="w-full pt-4 border-t border-white/[0.07] group-hover/card:border-[#71B1A5]/30 transition-colors duration-500">
            <h3 class="text-[#FDFBF9] font-medium text-lg tracking-wide mb-3 transition-colors duration-300 group-hover/card:text-white">
              {{ b.titulo }}
            </h3>
            <p class="text-white/50 text-[14px] leading-[1.75] font-light tracking-wide transition-colors duration-500 group-hover/card:text-white/70">
              {{ b.desc }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Optimizamos la aceleración por hardware para las microinteracciones */
.group\/card * {
  will-change: transform, color, opacity, width;
}
</style>