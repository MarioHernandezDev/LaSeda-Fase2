<script setup lang="ts">
interface Profesor {
  id: string
  nombre: string
  rol: string
  imagen: string
  imagenAlt?: string
}

withDefaults(defineProps<{
  profesores: Profesor[]
  label?: string
  titulo?: string
  tituloSecundario?: string
  descripcion?: string
  boton?: string
}>(), {
  label: 'Excelencia y Experiencia',
  titulo: 'Dirección de la Formación',
  tituloSecundario: 'y especialistas a cargo',
  descripcion: 'Profesional en activo con un amplio bagaje clínico y docente. Se encarga de velar por el rigor del programa teórico, coordinar las dinámicas vivenciales del grupo, la supervisión directa de casos prácticos y la tutorización metodológica de los alumnos.',
  boton: 'Trayectoria profesional completa'
})
</script>

<template>
  <section v-reveal
    v-if="profesores.length > 0" 
    class="py-24 md:py-32 bg-[#FDFBF9] border-b border-[#27252B]/5 relative overflow-hidden"
  >
    <div 
      class="absolute top-0 right-1/2 w-px h-full bg-gradient-to-b from-[#27252B]/5 via-transparent to-transparent hidden lg:block" 
      aria-hidden="true" 
    />

    <div class="page-container relative z-10">
      
      <div class="grid md:grid-cols-12 gap-8 items-end mb-16 lg:mb-24">
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
              {{ tituloSecundario }}
            </span>
          </h2>
        </div>

        <div class="md:col-span-5 lg:col-span-6 flex md:justify-end items-center border-l md:border-l-0 md:border-r border-[#27252B]/10 pl-6 md:pl-0 md:pr-8 h-fit">
          <div class="text-left md:text-right">
            <span class="font-serif italic text-2xl text-[#71B1A5]">
              0{{ profesores.length }}
            </span>
            <p class="text-[10px] tracking-widest text-[#27252B]/50 uppercase font-medium mt-0.5">
              {{ profesores.length === 1 ? 'Docente a cargo' : 'Docentes asignados' }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="profesores.length === 1" class="max-w-5xl mx-auto">
        <NuxtLink
          :to="`/conocenos/${profesores[0].id}`"
          class="group grid grid-cols-1 lg:grid-cols-12 border border-[#27252B]/10 rounded-none overflow-hidden p-0 gap-0 transition-all duration-700 hover:border-[#71B1A5]/40 hover:shadow-2xl hover:shadow-[#71B1A5]/5 cursor-pointer items-stretch bg-transparent"
        >
          <div class="relative aspect-square lg:col-span-5 w-full overflow-hidden bg-[#27252B]/5 border-b lg:border-b-0 lg:border-r border-[#27252B]/10">
            <NuxtImg
              :src="profesores[0].imagen"
              :alt="profesores[0].imagenAlt || `Fotografía de ${profesores[0].nombre}`"
              class="w-full h-full object-cover object-center grayscale-[20%] transition-all duration-[1000ms] ease-out scale-100 group-hover:scale-102 group-hover:grayscale-0"
              loading="lazy"
              format="webp"
            />
          </div>

          <div class="lg:col-span-7 flex flex-col justify-center h-full space-y-8 p-8 sm:p-12 md:p-14 lg:p-12 xl:p-16 bg-[#F5F2EE]/10 group-hover:bg-[#F5F2EE]/30 transition-colors duration-500">
            <div class="space-y-4">
              <h3 class="font-serif italic text-3xl lg:text-4xl text-[#27252B] tracking-tight group-hover:text-[#71B1A5] transition-colors duration-300">
                {{ profesores[0].nombre }}
              </h3>
              <p class="text-xs tracking-[0.1em] text-[#27252B]/60 uppercase font-medium leading-relaxed">
                {{ profesores[0].rol }}
              </p>
              <div class="w-16 h-px bg-[#71B1A5]/50 pt-px" aria-hidden="true" />
              
              <p class="text-stone-600/90 text-sm md:text-base leading-relaxed md:leading-loose font-light tracking-wide pt-4">
                {{ descripcion }}
              </p>
            </div>

            <div class="pt-6 border-t border-[#27252B]/5 inline-flex items-center gap-4 text-[11px] tracking-[0.15em] uppercase font-bold text-[#27252B]/70 group-hover:text-[#71B1A5] transition-colors duration-300">
              <span class="border-b border-transparent group-hover:border-[#71B1A5]/40 pb-0.5 transition-all duration-300">
                {{ boton }}
              </span>
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

      <div 
        v-else
        class="grid gap-10 md:gap-12 max-w-4xl mx-auto"
        :class="{
          'sm:grid-cols-2': profesores.length === 2,
          'sm:grid-cols-2 lg:grid-cols-3': profesores.length >= 3
        }"
      >
        <NuxtLink
          v-for="(profesor, index) in profesores"
          :key="profesor.id"
          :to="`/conocenos/${profesor.id}`"
          class="flex flex-col group bg-[#F5F2EE]/30 border border-[#27252B]/5 rounded-none overflow-hidden p-4 transition-all duration-500 hover:bg-[#F5F2EE]/60 hover:border-[#71B1A5]/20 hover:shadow-xl hover:shadow-[#71B1A5]/5 cursor-pointer"
        >
          <div class="relative aspect-[4/5] w-full rounded-none overflow-hidden bg-[#27252B]/5 mb-6">
            <NuxtImg
              :src="profesor.imagen"
              :alt="profesor.imagenAlt || `Fotografía de ${profesor.nombre}`"
              class="w-full h-full object-cover object-center grayscale-[30%] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              loading="lazy"
              format="webp"
            />
            <div class="absolute top-4 left-4 bg-[#FDFBF9]/90 backdrop-blur-sm px-3 py-1 rounded-none border border-[#27252B]/5">
              <p class="text-[9px] tracking-widest text-[#71B1A5] uppercase font-bold">
                {{ index === 0 ? 'Codirección / Docente' : 'Docente Especialista' }}
              </p>
            </div>
          </div>

          <div class="px-2 pb-4 pt-1 flex-grow flex flex-col justify-between space-y-4">
            <div>
              <h3 class="font-serif italic text-2xl text-[#27252B] tracking-tight group-hover:text-[#71B1A5] transition-colors duration-300">
                {{ profesor.nombre }}
              </h3>
              <p class="text-[11px] tracking-wider text-[#27252B]/40 uppercase font-medium mt-1 leading-snug">
                {{ profesor.rol }}
              </p>
            </div>

            <div class="pt-2 border-t border-[#27252B]/5 flex items-center justify-between text-[11px] tracking-widest uppercase font-bold text-[#27252B]/70 group-hover:text-[#71B1A5] transition-colors duration-300">
              <span>Trayectoria académica</span>
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