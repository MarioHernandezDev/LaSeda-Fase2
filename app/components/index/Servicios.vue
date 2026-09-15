<template>
  <section v-reveal id="pilares-seccion" aria-labelledby="pilares-titulo" class="py-24 md:py-36 px-8 md:px-16">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <div class="flex items-center gap-3 mb-5" aria-hidden="true">
            <div class="w-6 h-px bg-[#F5F2ED]"></div>
            <span class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-medium">así trabajamos</span>
          </div>
          <h2 id="pilares-titulo" class="font-serif italic font-light text-[2rem] md:text-[2.6rem] leading-[1.15] max-w-md">
            Tres maneras para cuidarte
            <span class="not-italic font-normal text-[#71B1A5]"> y orientarte</span>
          </h2>
        </div>
        <p class="opacity-65 max-w-sm text-base leading-relaxed font-light md:text-right">
Todas nuestras áreas comparten una misma mirada humanista e integrativa, que pone a la persona, su historia y sus recursos en el centro.        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
        
        <article v-reveal class="group relative overflow-hidden bg-stone-50 border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#71B1A5]/12 hover:-translate-y-2">
          <div class="relative h-56 overflow-hidden">
            <NuxtImg src="/images/terapia-psicologica-individual-adultos-granada-la-seda.jpg" alt="Sesión de psicoterapia individual para adultos en el Centro La Seda, Granada" class="w-full h-full object-cover object-center group-hover:scale-[1.06] transition-transform duration-700 ease-out" format="webp" loading="lazy" width="560" height="224" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/65 via-transparent to-transparent" aria-hidden="true"></div>
          </div>
          <div class="p-8">
            <h3 class="font-serif italic font-normal text-[1.5rem] mb-3 group-hover:text-[#71B1A5] transition-colors duration-500 tracking-wide">
              <span class="underline decoration-[#71B1A5]/40 decoration-2 underline-offset-4">Terapias</span> Psicológicas y desarrollo Personal
            </h3>
            <p class="opacity-70 text-base leading-[1.8] mb-6 font-light">
Atendemos a personas adultas, infancia, adolescencia, parejas y familias desde una práctica rigurosa, cercana y adaptada a las necesidades de cada etapa vital.            </p>
          
            <NuxtLink to="/terapias" class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium border-b border-[#27252B]/20 pb-1 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-all duration-500 after:absolute after:inset-0" aria-label="Ver todos los servicios de terapia psicológica">
              Saber más
              <svg class="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </NuxtLink>
          </div>
        </article>

        <article v-reveal class="group relative overflow-hidden bg-stone-50 border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#71B1A5]/12 hover:-translate-y-2">
          <div class="relative h-56 overflow-hidden">
            <NuxtImg src="/images/talleres-crecimiento-personal-constelaciones-familiares-granada.jpg" alt="Taller grupal de Constelaciones Familiares y crecimiento personal en Granada — Centro La Seda" class="w-full h-full object-cover object-center group-hover:scale-[1.06] transition-transform duration-700 ease-out" format="webp" loading="lazy" width="560" height="224" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/65 via-transparent to-transparent" aria-hidden="true"></div>
          </div>
          <div class="p-8">
            <h3 class="font-serif italic font-normal text-[1.5rem] mb-3 group-hover:text-[#71B1A5] transition-colors duration-500 tracking-wide">
              <span class="underline decoration-[#71B1A5]/40 decoration-2 underline-offset-4">Talleres</span> de Desarollo Personal
            </h3>
            <p class="opacity-70 text-base leading-[1.8] mb-6 font-light">
Talleres, grupos y experiencias orientados a favorecer el autoconocimiento, fortalecer los recursos personales e integrar los aprendizajes en la vida cotidiana.            </p>
           
            <NuxtLink to="/talleres" class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium border-b border-[#27252B]/20 pb-1 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-all duration-500 after:absolute after:inset-0" aria-label="Ver todos los talleres de crecimiento personal">
              Saber más
              <svg class="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </NuxtLink>
          </div>
        </article>

        <article v-reveal class="group relative overflow-hidden bg-stone-50 border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#71B1A5]/12 hover:-translate-y-2">
          <div class="relative h-56 overflow-hidden">
            <NuxtImg src="/images/formacion-psicologos-especializacion-salud-mental-granada.jpg" alt="Formación especializada para psicólogos y profesionales de la salud mental en Granada — Centro La Seda" class="w-full h-full object-cover object-center group-hover:scale-[1.06] transition-transform duration-700 ease-out" format="webp" loading="lazy" width="560" height="224" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/65 via-transparent to-transparent" aria-hidden="true"></div>
          </div>
          <div class="p-8">
            <h3 class="font-serif italic font-normal text-[1.5rem] mb-3 group-hover:text-[#71B1A5] transition-colors duration-500 tracking-wide">
              <span class="underline decoration-[#71B1A5]/40 decoration-2 underline-offset-4">Formación</span> para Profesionales
            </h3>
            <p class="opacity-70 text-base leading-[1.8] mb-6 font-light">
Formación, supervisión y espacios de aprendizaje para profesionales que desean ampliar su mirada, profundizar en su práctica y seguir desarrollando su forma de acompañar a otras personas            </p>
           
            <NuxtLink to="/formaciones" class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium border-b border-[#27252B]/20 pb-1 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-all duration-500 after:absolute after:inset-0" aria-label="Ver programas de formación para psicólogos y profesionales">
              Saber más
              <svg class="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </NuxtLink>
          </div>
        </article>
        
      </div>
    </div>
  </section>
</template>