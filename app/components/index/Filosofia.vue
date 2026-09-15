<template>
  <section v-reveal aria-labelledby="filosofia-titulo" class="relative py-28 md:py-40 overflow-hidden">
    <div class="absolute inset-0 bg-[#27252B]"></div>
    <div class="absolute inset-0 opacity-[0.06]" aria-hidden="true">
      <NuxtImg
        src="/images/fondo-filosofia-psicologia-bienestar-granada.jpg"
        alt=""
        class="w-full h-full object-cover"
        format="webp"
        loading="lazy"
      />
    </div>
    <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(circle, #71B1A5 1px, transparent 1px); background-size: 40px 40px;" aria-hidden="true"></div>

    <div class="relative z-10 max-w-4xl mx-auto px-8 md:px-16 text-center">
      <div class="flex items-center justify-center gap-6 mb-16" aria-hidden="true">
        <div class="h-px flex-1 max-w-[80px] bg-[#71B1A5]/40"></div>
        <div class="w-8 h-8 border border-[#71B1A5]/40 flex items-center justify-center rotate-45">
          <div class="w-2 h-2 bg-[#71B1A5] rotate-[-45deg]"></div>
        </div>
        <div class="h-px flex-1 max-w-[80px] bg-[#71B1A5]/40"></div>
      </div>

      <h2 id="filosofia-titulo" class="sr-only">Nuestra filosofía</h2>

      <figure class="flex flex-col items-center">
        <blockquote class="font-serif italic font-light text-[1.9rem] md:text-[2.4rem] lg:text-[2.9rem] text-white leading-[1.45] mb-12 tracking-[-0.005em]">
          <span class="block">"Lo que necesita nuestro tiempo son seres más bondadosos, no seres más inteligentes.
          <em class="text-[#71B1A5] not-italic"> La inteligencia sin bondad es una mutación fallida.</em>"</span>
        </blockquote>

        <div class="flex items-center gap-3 mb-4" aria-hidden="true">
          <div class="h-px w-8 bg-[#71B1A5]/50"></div>
          <div class="w-1 h-1 rounded-full bg-[#71B1A5]"></div>
          <div class="h-px w-8 bg-[#71B1A5]/50"></div>
        </div>
        <figcaption>
          <cite class="not-italic">
            <span class="block text-white/90 text-sm tracking-[0.35em] uppercase font-medium">Claudio Naranjo</span>
            <span class="block text-white/55 text-xs tracking-[0.25em] uppercase mt-1.5">Psiquiatra y humanista chileno</span>
          </cite>
        </figcaption>
      </figure>

      <p class="mt-16 text-white/70 text-[18px] md:text-[21px] leading-[1.9] max-w-2xl mx-auto font-light">
        Entendemos la terapia como algo más que aliviar síntomas: un recorrido para recuperar recursos, vivir con mayor autenticidad y relacionarse con más conciencia.
      </p>
    </div>
  </section>
</template>