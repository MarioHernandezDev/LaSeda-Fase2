<template>
  <section v-reveal aria-labelledby="cta-titulo" class="relative py-28 md:py-36 overflow-hidden bg-[#FDFBF9]">
    <div class="absolute inset-0" aria-hidden="true">
      <NuxtImg 
        src="/images/fondo-cta-centro-psicologia-granada-bienestar.jpg" 
        alt="" 
        class="w-full h-full object-cover object-center filter contrast-[102%] brightness-[98%]" 
        format="webp" 
        loading="lazy" 
        width="1920" 
        height="800" 
      />
      <div class="absolute inset-0 bg-[#FDFBF9]/10 backdrop-blur-[1px]"></div>
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, #27252B 1px, transparent 0); background-size: 32px 32px;"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <div class="flex items-center justify-center gap-4 mb-10" aria-hidden="true">
        <div class="h-px w-12 bg-[#71B1A5]/40"></div>
        <div class="w-1.5 h-1.5 rounded-full bg-[#71B1A5]"></div>
        <div class="h-px w-12 bg-[#71B1A5]/40"></div>
      </div>

      <h2 id="cta-titulo" class="font-serif italic font-light text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[1.15] text-[#27252B] mb-6 tracking-tight max-w-3xl mx-auto">
        Todo proceso comienza con una <span class="not-italic font-normal text-[#71B1A5]">conversación.</span>
      </h2>

      <p class="text-stone-600/90 text-base md:text-lg leading-[1.8] mb-12 max-w-3xl mx-auto font-light">
        Si estás pensando en iniciar terapia, participar en un grupo de desarrollo personal o seguir formándote, te ayudamos a encontrar la propuesta que mejor se adapte a ti.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-md mx-auto sm:max-w-none w-full">
        
        <NuxtLink 
          to="/contacto" 
          class="group relative inline-flex items-center justify-center gap-3 bg-[#27252B] text-white px-8 py-4 md:min-w-[210px] text-[10.5px] tracking-[0.28em] uppercase font-bold rounded-full transition-all duration-500 hover:bg-[#71B1A5] w-full sm:w-auto shadow-lg shadow-[#27252B]/5 hover:shadow-xl hover:shadow-[#71B1A5]/20 transform hover:-translate-y-0.5 overflow-hidden border border-transparent"
        >
          <span>Hablemos</span>
          <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center">
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </NuxtLink>

        <NuxtLink 
          to="/terapias" 
          class="group relative inline-flex items-center justify-center gap-3 border border-[#27252B]/30 bg-[#FDFBF9]/60 backdrop-blur-md text-[#27252B] px-8 py-4 md:min-w-[210px] text-[10.5px] tracking-[0.28em] uppercase font-bold rounded-full transition-all duration-500 hover:border-[#71B1A5] hover:text-[#71B1A5] hover:bg-white/90 w-full sm:w-auto shadow-sm hover:shadow-xl hover:shadow-[#71B1A5]/10 transform hover:-translate-y-0.5 overflow-hidden"
        >
          <span>Nuestros Servicios</span>
          <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center text-[#71B1A5]">
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </NuxtLink>
      </div>

      <address class="not-italic mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-stone-500 text-[13px] tracking-wide font-light border-t border-[#27252B]/5 pt-8">
        <a href="tel:+34679571977" class="flex items-center gap-2.5 hover:text-[#71B1A5] transition-colors duration-300">
          <svg class="w-3.5 h-3.5 text-[#71B1A5]/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          679 571 977
        </a>
        <span class="hidden sm:block w-px h-3 bg-[#27252B]/10" aria-hidden="true"></span>
        <a href="mailto:hola@laseda.es" class="flex items-center gap-2.5 hover:text-[#71B1A5] transition-colors duration-300">
          <svg class="w-3.5 h-3.5 text-[#71B1A5]/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          hola@centrolaseda.com
        </a>
        <span class="hidden sm:block w-px h-3 bg-[#27252B]/10" aria-hidden="true"></span>
        <span class="flex items-center gap-2.5 text-stone-400">
          <svg class="w-3.5 h-3.5 text-[#71B1A5]/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          Granada, Andalucía
        </span>
      </address>
    </div>
  </section>
</template>