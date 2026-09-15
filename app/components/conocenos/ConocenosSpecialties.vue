<template>
  <div class="space-y-6">
    <p class="text-xs font-semibold tracking-[0.2em] uppercase text-[#27252B]/40">
      Áreas de Especialización
    </p>
    <ul class="grid sm:grid-cols-2 gap-6 lg:gap-8 list-none p-0 m-0" aria-label="Áreas de especialización">
      <li
        v-for="(area, i) in perfil.areasEspecializacion"
        :key="i"
        class="bg-white border border-[#27252B]/5 p-6 lg:p-8 space-y-2 border-l-2 border-l-[#71B1A5] shadow-sm shadow-[#27252B]/1 transition-transform duration-300 hover:-translate-y-0.5"
      >
        <p class="font-serif italic text-lg text-[#27252B]">{{ area.titulo }}</p>
        <p class="text-sm leading-relaxed font-light text-[#27252B]/65">{{ area.descripcion }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface AreaEspecializacion {
  titulo: string
  descripcion: string
}

defineProps<{
  perfil: {
    areasEspecializacion: AreaEspecializacion[]
  }
}>()
</script>