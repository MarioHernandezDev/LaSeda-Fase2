<template>
  <div class="space-y-8">
    <div class="flex items-center gap-3">
      <span class="w-1.5 h-1.5 rounded-full bg-[#71B1A5]" aria-hidden="true" />
      <p class="text-[10px] font-bold tracking-[0.25em] uppercase text-[#27252B]/40 font-sans">
        Formación Académica Destacada
      </p>
    </div>
    
    <ol class="space-y-0 list-none p-0 m-0 border-t border-[#27252B]/10">
      <li
        v-for="(item, i) in perfil.formacion"
        :key="i"
        class="flex items-start gap-6 py-6 border-b border-[#27252B]/5 group/item transition-all duration-300 hover:pl-2"
      >
        <span
          class="font-serif italic text-[#27252B]/20 group-hover/item:text-[#71B1A5] text-2xl md:text-3xl leading-none select-none shrink-0 w-10 transition-colors duration-400 mt-0.5"
          aria-hidden="true"
        >
          {{ String(i + 1).padStart(2, '0') }}
        </span>
        
        <div class="flex-1 space-y-1">
          <p class="font-medium text-[#27252B]/85 group-hover/item:text-[#27252B] text-base md:text-[17px] leading-snug transition-colors duration-300">
            {{ item.titulo }}
          </p>
          <div class="flex items-center gap-2">
            <span class="w-1 h-px bg-[#71B1A5]/40 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
            <p class="text-xs md:text-sm text-[#27252B]/50 font-light tracking-wide font-sans group-hover/item:text-[#27252B]/70 transition-colors duration-300">
              {{ item.institucion }}
            </p>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
interface ItemFormacion {
  titulo: string
  institucion: string
}

defineProps<{
  perfil: {
    formacion: ItemFormacion[]
  }
}>()
</script>