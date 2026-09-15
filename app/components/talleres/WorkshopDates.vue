<script setup lang="ts">
import { computed } from 'vue'

interface Fecha {
  dia: string
  mes: string
  diasemana: string
  anio?: string
  descripcion: string
  horario: string
  especial?: string
}

const props = withDefaults(defineProps<{
  fechas: Fecha[]
  calendarioTitulo?: string
  calendarioLabel?: string
  calendarioDescripcion?: string
  calendarioDireccion?: string
  reservaLabel?: string
  reservaUrl?: string
}>(), {
  calendarioTitulo: 'Próximas fechas',
  calendarioLabel: 'Calendario 2026–2027',
  calendarioDescripcion: 'Las plazas son limitadas para preservar el cuidado e intimidad clínica del grupo. Recomendamos formalizar la reserva con suficiente antelación.',
  calendarioDireccion: '',
  reservaLabel: 'Reservar plaza',
  reservaUrl: '/contacto'
})

const isExternalReservation = computed(() => /^https?:\/\//.test(props.reservaUrl))
</script>

<template>
  <section v-reveal class="py-20 md:py-32">
    <div class="page-container">

      <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-16 md:mb-20">
        <div class="md:col-span-5">
          <p class="text-[#71B1A5] text-[10px] tracking-[0.3em] uppercase font-bold mb-4">{{ calendarioLabel }}</p>
          <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-tight">{{ calendarioTitulo }}</h2>
        </div>
        <div class="md:col-span-7">
          <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/65">
            {{ calendarioDescripcion }}<span v-if="calendarioDireccion"> {{ calendarioDireccion }}</span>
          </p>
        </div>
      </div>

      <div class="border border-[#27252B]/5 rounded-sm overflow-hidden divide-y divide-[#27252B]/10">
        <div
          v-for="(fecha, i) in fechas"
          :key="i"
          class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center p-6 md:p-8 bg-[#FDFBF9] hover:bg-[#27252B]/[0.01] transition-colors duration-200"
        >
          <div class="md:col-span-1 flex md:block items-center gap-3">
            <span class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">{{ fecha.dia }}</span>
          </div>

          <div class="md:col-span-2">
            <span class="block text-xs tracking-[0.2em] uppercase text-[#27252B]/50 font-medium">
              {{ fecha.diasemana }}
            </span>
            <span class="block text-xs tracking-[0.15em] uppercase text-[#71B1A5] font-semibold">
              {{ fecha.mes }} · {{ fecha.anio ?? '2026' }}
            </span>
          </div>

          <div class="md:col-span-5">
            <h3 class="font-serif italic text-[#27252B] text-lg md:text-xl leading-snug">
              {{ fecha.descripcion }}
            </h3>
            <span
              v-if="fecha.especial"
              class="inline-block mt-2 text-[10px] tracking-wider uppercase text-[#71B1A5] font-medium bg-[#71B1A5]/10 px-2 py-0.5 rounded-sm"
            >
              {{ fecha.especial }}
            </span>
          </div>

          <div class="md:col-span-2 flex items-center gap-2 text-[#27252B]/60">
            <svg class="w-4 h-4 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm font-light">{{ fecha.horario }}</span>
          </div>

          <div class="md:col-span-2 flex md:justify-end">
            <a
              v-if="isExternalReservation"
              :href="reservaUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 group/cta"
            >
              <span class="text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium border-b border-[#27252B]/20 pb-0.5 group-hover/cta:border-[#71B1A5] group-hover/cta:text-[#71B1A5] transition-all duration-200 whitespace-nowrap">
                {{ reservaLabel }}
              </span>
            </a>
            <NuxtLink v-else :to="reservaUrl" class="inline-flex items-center gap-1 group/cta">
              <span class="text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium border-b border-[#27252B]/20 pb-0.5 group-hover/cta:border-[#71B1A5] group-hover/cta:text-[#71B1A5] transition-all duration-200 whitespace-nowrap">
                {{ reservaLabel }}
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>