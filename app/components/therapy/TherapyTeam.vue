<script setup lang="ts">
interface Terapeuta {
  id: string
  nombre: string
  rol: string
  imagen: string
  imagenAlt?: string
}

withDefaults(defineProps<{
  terapeutas: Terapeuta[]
  label?: string
  titulo?: string
  subtitulo?: string
  nota?: string
}>(), {
  label: 'Acompañamiento Humano',
  titulo: 'Especialistas a tu lado',
  subtitulo: 'en este proceso',
  nota: ''
})
</script>

<template>
  <section v-reveal
    v-if="terapeutas.length > 0" 
    class="py-24 md:py-32 bg-[#FDFBF9] border-b border-[#27252B]/5 relative overflow-hidden"
  >
    <div 
      class="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-[#27252B]/5 via-transparent to-transparent hidden lg:block" 
      aria-hidden="true" 
    />

    <div class="page-container relative z-10">
      
      <div class="grid md:grid-cols-12 gap-8 items-end mb-20">
        <div class="md:col-span-7 lg:col-span-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="w-2 h-2 rounded-full bg-[#71B1A5]" aria-hidden="true" />
            <p class="text-[#71B1A5] text-[10px] tracking-[0.35em] uppercase font-bold">
              {{ label }}
            </p>
          </div>
          <h2 class="font-serif italic text-3xl md:text-4xl lg:text-5xl text-[#27252B] leading-[1.15]">
            {{ titulo }}<br>
            <span class="text-[#27252B]/40 not-italic font-sans font-light text-2xl md:text-3xl block mt-1">
              {{ subtitulo }}
            </span>
          </h2>
        </div>

        <div class="md:col-span-5 lg:col-span-6 flex md:justify-end items-center border-l md:border-l-0 md:border-r border-[#27252B]/10 pl-6 md:pl-0 md:pr-8 h-fit">
          <div class="text-left md:text-right">
            <span class="font-serif italic text-2xl text-[#71B1A5]">
              0{{ terapeutas.length }}
            </span>
            <p class="text-[10px] tracking-widest text-[#27252B]/50 uppercase font-medium mt-0.5">
              {{ terapeutas.length === 1 ? 'Especialista asignado' : 'Equipo de la especialidad' }}
            </p>
          </div>
        </div>
      </div>

      <p v-if="nota" class="max-w-2xl text-[#27252B]/60 font-light leading-relaxed -mt-12 mb-16">
        {{ nota }}
      </p>

      <div 
        class="grid gap-10 md:gap-12 justify-center"
        :class="{
          'grid-cols-1 max-w-sm mx-auto': terapeutas.length === 1,
          'sm:grid-cols-2 max-w-3xl mx-auto': terapeutas.length === 2,
          'sm:grid-cols-2 lg:grid-cols-3 w-full': terapeutas.length >= 3
        }"
      >
        <NuxtLink
          v-for="terapeuta in terapeutas"
          :key="terapeuta.id"
          :to="`/conocenos/${terapeuta.id.replace('ana-jimenez', 'ana-jimenez')}`"
          class="flex flex-col group bg-[#F5F2EE]/30 border border-[#27252B]/5 rounded-2xl overflow-hidden p-4 transition-all duration-500 hover:bg-[#F5F2EE]/60 hover:border-[#71B1A5]/20 hover:shadow-xl hover:shadow-[#71B1A5]/5 cursor-pointer"
        >
          <div class="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#27252B]/5 mb-6">
            <NuxtImg
              :src="terapeuta.imagen"
              :alt="terapeuta.imagenAlt || `Fotografía de ${terapeuta.nombre}, psicólogo en La Seda`"
              class="w-full h-full object-cover object-center grayscale-[30%] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              loading="lazy"
              format="webp"
            />
            <div class="absolute top-4 left-4 bg-[#FDFBF9]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#27252B]/5">
              <p class="text-[9px] tracking-widest text-[#71B1A5] uppercase font-bold">
                Equipo Clínico
              </p>
            </div>
          </div>

          <div class="px-2 pb-4 pt-1 flex-grow flex flex-col justify-between space-y-4">
            <div>
              <h3 class="font-serif italic text-2xl text-[#27252B] tracking-tight group-hover:text-[#71B1A5] transition-colors duration-300">
                {{ terapeuta.nombre }}
              </h3>
              <p class="text-[11px] tracking-wider text-[#27252B]/40 uppercase font-medium mt-1">
                {{ terapeuta.rol }}
              </p>
            </div>

            <div class="pt-2 border-t border-[#27252B]/5 flex items-center justify-between text-[11px] tracking-widest uppercase font-bold text-[#27252B]/70 group-hover:text-[#71B1A5] transition-colors duration-300">
              <span>Conocer trayectoria</span>
              <svg 
                class="w-4 h-4 transform -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>