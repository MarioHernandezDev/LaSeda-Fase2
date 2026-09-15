<script setup lang="ts">
defineProps<{
  proceso: Array<{
    paso: string
    texto: string
  }>
  therapyId: string
  label?: string
  titulo?: string
  subtitulo?: string
  modalidad?: string
  ctaLabel?: string
}>()
</script>

<template>
  <section v-reveal class="bg-[#27252B] py-24 md:py-32 relative overflow-hidden">
    <div 
      class="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#71B1A5]/5 blur-[130px] pointer-events-none" 
      aria-hidden="true" 
    />

    <div class="page-container relative z-10">
      
      <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-20 md:mb-24">
        <div class="md:col-span-6 lg:col-span-5">
          <div class="flex items-center gap-3 mb-4">
            <span class="w-2 h-2 rounded-full bg-[#71B1A5]" aria-hidden="true" />
            <p class="text-[#71B1A5] text-[10px] tracking-[0.35em] uppercase font-bold">
              {{ label || 'Metodología Interna' }}
            </p>
          </div>
          <h2 class="text-white text-3xl md:text-4xl lg:text-5xl font-serif italic font-light leading-[1.15]">
            {{ titulo || 'Cómo son las sesiones' }}<br />
            <span class="text-white/40 not-italic font-sans font-light text-2xl md:text-3xl block mt-2">
              {{ subtitulo || 'en La Seda Granada' }}
            </span>
          </h2>
        </div>
        
        <div class="md:col-span-6 lg:col-span-7 border-l border-white/10 pl-6 md:pl-10">
          <p class="text-white/60 text-base md:text-[17px] leading-[1.85] font-light max-w-xl">
            Los procesos comienzan con una 
            <strong class="text-[#71B1A5] font-medium font-sans tracking-wide uppercase text-xs ml-1 bg-[#71B1A5]/10 px-2 py-0.5 rounded-none">
              orientación telefónica gratuita
            </strong> 
            en la que te escuchamos de forma activa para valorar qué tipo de abordaje clínico y qué profesional de nuestro equipo se adapta mejor a tu realidad presente.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 group/container">
        
        <div class="relative bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-none transition-all duration-500 flex flex-col justify-between min-h-[250px] hover:bg-white/[0.04] hover:border-[#71B1A5]/30 hover:!opacity-100 group-hover/container:opacity-60 hover:-translate-y-1 group">
          <div class="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#71B1A5]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div class="flex justify-between items-start">
            <span class="font-serif italic text-4xl lg:text-5xl text-[#71B1A5]">
              En sala
            </span>
            <span class="text-[9px] tracking-widest text-[#71B1A5] font-mono uppercase pt-2">
              Presencial
            </span>
          </div>
          <p class="text-white/80 text-base leading-[1.85] font-light mt-8">
            {{ modalidad || 'Te recibimos en nuestro espacio privado en pleno centro de Granada (C/ Horno de Haza 29). Un entorno protegido, confortable y silencioso.' }}
          </p>
        </div>

        <div 
          v-if="therapyId !== 'infantil'"
          class="relative bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-none transition-all duration-500 flex flex-col justify-between min-h-[250px] hover:bg-white/[0.04] hover:border-[#71B1A5]/30 hover:!opacity-100 group-hover/container:opacity-60 hover:-translate-y-1 group"
        >
          <div class="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#71B1A5]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div class="flex justify-between items-start">
            <span class="font-serif italic text-4xl lg:text-5xl text-[#71B1A5]">
              En línea
            </span>
            <span class="text-[9px] tracking-widest text-[#71B1A5] font-mono uppercase pt-2">
              Online
            </span>
          </div>
          <p class="text-white/80 text-base leading-[1.85] font-light mt-8">
            Sesiones telemáticas a través de Google Meet o Skype. Mantenemos exactamente la misma confidencialidad, rigor clínico y duración (55 min).
          </p>
        </div>

        <div
          v-for="(paso, i) in proceso"
          :key="i"
          class="relative bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-none transition-all duration-500 flex flex-col justify-between min-h-[250px] hover:bg-white/[0.04] hover:border-[#71B1A5]/30 hover:!opacity-100 group-hover/container:opacity-60 hover:-translate-y-1 group"
          :class="{
            /* Si NO es infantil (5 tarjetas en total): el último paso (Fase 3) ocupa las 2 columnas y se centra */
            'lg:col-span-2 lg:max-w-[calc(50%-1.5rem)] lg:w-full lg:justify-self-center': therapyId !== 'infantil' && i === proceso.length - 1
          }"
        >
          <div class="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#71B1A5]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div class="flex justify-between items-start">
            <span class="font-serif italic text-4xl lg:text-5xl text-white/20 group-hover:text-white/40 transition-colors duration-500">
              {{ paso.paso }}
            </span>
            <span class="text-[9px] tracking-widest text-white/20 font-mono uppercase pt-2">
              Paso 0{{ i + 1 }}
            </span>
          </div>
          <p class="text-white/70 group-hover:text-white/85 text-base leading-[1.85] font-light transition-colors duration-500 mt-8">
            {{ paso.texto }}
          </p>
        </div>

      </div>

      <div class="mt-20 flex flex-col sm:flex-row items-center justify-center gap-5 border-t border-white/5 pt-12 w-full">
        
        <NuxtLink 
          to="/contacto" 
          class="group inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#F5F2EE] text-[#27252B] border border-[#F5F2EE] rounded-none hover:bg-[#71B1A5] hover:text-white hover:border-[#71B1A5] transition-all duration-500 w-full sm:w-auto text-center"
          aria-label="Pedir orientación gratuita"
        >
          <span class="text-[11px] tracking-[0.25em] uppercase font-bold">{{ ctaLabel || 'Pedir orientación gratuita' }}</span>
          <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center pointer-events-none">
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute text-[#27252B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </NuxtLink>

        <NuxtLink 
          to="/terapias" 
          class="group inline-flex items-center justify-center gap-4 px-8 py-4 bg-transparent text-white/70 border border-white/20 rounded-none hover:border-[#71B1A5] hover:text-white transition-all duration-500 w-full sm:w-auto text-center"
          aria-label="Ver otras especialidades"
        >
          <span class="text-[11px] tracking-[0.25em] uppercase font-bold">Ver otras especialidades</span>
          <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center text-[#71B1A5] pointer-events-none">
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute fill-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </NuxtLink>

      </div>

    </div>
  </section>
</template>