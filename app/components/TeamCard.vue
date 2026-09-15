<script setup lang="ts">
interface Terapeuta {
  id: string
  nombre: string
  rol: string
  imagen: string
  imagenAlt?: string
}

defineProps<{
  terapeuta: Terapeuta
}>()
</script>

<template>
  <div class="group/staff flex flex-col gap-6">
    <NuxtLink 
      :to="`/conocenos/${terapeuta.id}`" 
      class="block relative overflow-hidden bg-[#27252B]/5 aspect-[3/4]"
    >
      <div 
        class="absolute -top-4 -left-4 w-full h-full border border-[#71B1A5]/10 group-hover/staff:-translate-x-1 group-hover/staff:-translate-y-1 transition-transform duration-500 pointer-events-none z-0" 
        aria-hidden="true" 
      />
      <NuxtImg
        :src="terapeuta.imagen"
        :alt="terapeuta.imagenAlt || `Perfil de ${terapeuta.nombre}`"
        class="w-full h-full object-cover object-top grayscale-[20%] group-hover/staff:grayscale-0 group-hover/staff:scale-[1.02] transition-all duration-700 ease-out relative z-10"
        width="400"
        height="533"
        format="webp"
        loading="lazy"
      />
    </NuxtLink>
    
    <div class="flex flex-col flex-1">
      <p class="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#71B1A5] mb-1">
        {{ terapeuta.rol }}
      </p>
      <h3 class="font-serif italic text-2xl text-[#27252B] group-hover/staff:text-[#71B1A5] transition-colors duration-300">
        {{ terapeuta.nombre }}
      </h3>
      
      <div class="pt-4 mt-auto">
        <NuxtLink 
          :to="`/conocenos/${terapeuta.id}`" 
          class="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-[#27252B]/60 group-hover/staff:text-[#71B1A5] transition-colors duration-300"
        >
          Ver perfil clínico
          <span 
            class="w-8 h-px bg-[#27252B]/20 group-hover/staff:w-14 group-hover/staff:bg-[#71B1A5] transition-all duration-300" 
            aria-hidden="true"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>