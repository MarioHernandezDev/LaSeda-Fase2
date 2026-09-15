<script setup lang="ts">
interface Facilitadora {
  nombre: string
  imagen: string
  imagenAlt: string
}

withDefaults(defineProps<{
  descripcion: string
  descripcion2: string
  descripcion3?: string
  imagen: string
  imagenAlt: string
  bio: string
  bio2: string
  facilitadoraId: string
  facilitadora: Facilitadora | null
  facilitadoraImagenAlt?: string
  introduccionLabel?: string
  introduccionTitulo?: string
  introduccionTituloSecundario?: string
  facilitadoraLabel?: string
  facilitadoraTitulo?: string
  facilitadoraBoton?: string
  facilitadoraTituloSecundario?: string
}>(), {
  introduccionLabel: 'El Taller',
  introduccionTitulo: '¿Qué es y para quién es',
  introduccionTituloSecundario: 'este espacio?',
  facilitadoraLabel: 'Acompañamiento Profesional',
  facilitadoraTitulo: 'Sobre la facilitadora',
  facilitadoraBoton: 'Ver perfil completo',
  facilitadoraTituloSecundario: ''
})
</script>

<template>
  <div class="w-full text-[#27252B] font-sans pt-12 md:pt-16 pb-24 lg:pb-32 space-y-24 lg:space-y-36 bg-[#FDFBF9]">
    
    <section id="sobre-el-taller" v-reveal class="flex justify-center border-b border-[#27252B]/5 pb-24">

      <div class="px-6 sm:px-16 md:px-24 py-8 lg:py-24 w-full max-w-4xl flex flex-col justify-center items-center text-center">
        <div class="space-y-6 w-full">
          <div class="flex items-center justify-center gap-3">
            <span class="w-6 h-px bg-[#71B1A5]" aria-hidden="true" />
            <p class="text-xs font-bold tracking-[0.3em] uppercase text-[#71B1A5]">
              {{ introduccionLabel }}
            </p>
          </div>
          <h2 class="font-serif italic text-3xl md:text-4xl lg:text-[40px] text-[#27252B] font-normal leading-tight tracking-tight">
            {{ introduccionTitulo }}<br />
            <span class="text-[#27252B]/50 not-italic font-sans font-light text-2xl md:text-3xl block mt-1">{{ introduccionTituloSecundario }}</span>
          </h2>
          <div class="space-y-6 text-stone-600/90 text-sm md:text-base leading-relaxed md:leading-loose font-light tracking-wide pt-2">
            <p>{{ descripcion }}</p>
            <p>{{ descripcion2 }}</p>
            <p v-if="descripcion3">{{ descripcion3 }}</p>
          </div>
        </div>
      </div>
    </section>

    <section v-if="facilitadora" v-reveal class="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[50vh] lg:min-h-[650px] gap-8 lg:gap-0">
      
      <div class="px-6 sm:px-16 md:px-24 py-8 lg:py-24 w-full flex flex-col justify-center items-end lg:max-w-[90%] xl:max-w-[85%] justify-self-end order-2 lg:order-1">
        <div class="space-y-6 w-full">
          <div class="flex items-center gap-3">
            <span class="w-6 h-px bg-[#71B1A5]" aria-hidden="true" />
            <p class="text-xs font-bold tracking-[0.3em] uppercase text-[#71B1A5]">
              {{ facilitadoraLabel }}
            </p>
          </div>
          <h2 class="font-serif italic text-3xl md:text-4xl lg:text-[40px] text-[#27252B] font-normal tracking-tight leading-tight">
            {{ facilitadoraTitulo }}<br />
            <span class="text-[#27252B]/40 not-italic font-sans font-light text-xl md:text-2xl block mt-1">{{ facilitadora.nombre }}</span>
          </h2>
          
          <div class="space-y-6 text-stone-600/90 text-sm md:text-base leading-relaxed md:leading-loose font-light tracking-wide pt-2 mb-4">
            <p v-html="bio" />
            <p v-html="bio2" />
          </div>

          <div class="pt-4 w-full flex justify-start">
            <NuxtLink
              :to="`/conocenos/${facilitadoraId}`"
              class="group relative inline-flex items-center justify-center gap-4 bg-[#27252B] text-white px-10 py-5 md:min-w-[240px] text-[10.5px] tracking-[0.28em] uppercase font-bold rounded-none transition-all duration-500 hover:bg-[#71B1A5] w-full sm:w-auto shadow-md transform hover:-translate-y-0.5 overflow-hidden border border-transparent"
              :aria-label="`Ver perfil completo de ${facilitadora.nombre}`"
            >
              <span>{{ facilitadoraBoton }}</span>
              <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center">
                <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
                <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </div>
            </NuxtLink>
          </div>

        </div>
      </div>

      <div class="w-full aspect-square overflow-hidden bg-[#27252B]/5 relative order-1 lg:order-2 border border-[#27252B]/10 rounded-none max-w-[550px] lg:max-w-full justify-self-center lg:w-full">
        <img
          :src="facilitadora.imagen"
          :alt="facilitadoraImagenAlt || facilitadora.imagenAlt"
          class="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-[1200ms] ease-out scale-100 hover:scale-102"
          loading="lazy"
        />
      </div>

    </section>

  </div>
</template>

<style scoped>
:deep(strong) {
  font-weight: 500;
  color: #27252B;
}
</style>