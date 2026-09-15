<template>
  <section v-reveal aria-labelledby="redes-titulo" class="relative overflow-hidden bg-[#F5F2ED] px-6 py-20 sm:px-10 md:py-28 lg:px-16">
    <div class="absolute inset-0 opacity-40" style="background-image: radial-gradient(circle, #E6E1DA 1px, transparent 1px); background-size: 36px 36px;" aria-hidden="true"></div>

    <div class="relative z-10 mx-auto max-w-7xl">
      <div class="mb-10 flex items-end justify-between gap-6 md:mb-14">
        <div>
          <div class="mb-5 flex items-center gap-3" aria-hidden="true">
            <div class="h-px w-6 bg-[#71B1A5]"></div>
            <span class="text-xs font-medium uppercase tracking-[0.4em] text-[#71B1A5]">Comunidad</span>
          </div>
          <h2 id="redes-titulo" class="font-serif text-4xl font-light italic leading-[1.1] text-[#27252B] sm:text-5xl">
            La Seda <span class="not-italic font-normal text-[#71B1A5]">en red</span>
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <a href="https://www.instagram.com/centrolaseda/" target="_blank" rel="noopener noreferrer" class="group relative isolate aspect-[4/5] overflow-hidden bg-[#27252B]">
          <NuxtImg src="/images/instagram-reel-bienestar-emocional-psicologia-granada.jpg" alt="Instagram de Centro La Seda" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" format="webp" loading="lazy" width="560" height="700" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/90 via-[#27252B]/10 to-transparent"></div>
          <div class="absolute inset-x-0 bottom-0 p-6 text-white"><h3 class="font-serif text-3xl italic">Instagram</h3><p class="mt-1 text-xs uppercase tracking-[0.18em] text-white/75">@centrolaseda</p></div>
        </a>
        <a href="https://www.tiktok.com/@centro.la.seda" target="_blank" rel="noopener noreferrer" class="group relative isolate aspect-[4/5] overflow-hidden bg-[#27252B]">
          <NuxtImg src="/images/tiktok-video-divulgacion-psicologia.jpg" alt="TikTok de Centro La Seda" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" format="webp" loading="lazy" width="560" height="700" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/90 via-[#27252B]/10 to-transparent"></div>
          <div class="absolute inset-x-0 bottom-0 p-6 text-white"><h3 class="font-serif text-3xl italic">TikTok</h3><p class="mt-1 text-xs uppercase tracking-[0.18em] text-white/75">@centro.la.seda</p></div>
        </a>
        <a href="https://www.facebook.com/CentroLaSeda/?locale=es_ES" target="_blank" rel="noopener noreferrer" class="group relative isolate aspect-[4/5] overflow-hidden bg-[#27252B]">
          <NuxtImg src="/images/facebook-taller-infancia-adolescencia-psicologia-granada.jpg" alt="Facebook de Centro La Seda" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" format="webp" loading="lazy" width="560" height="700" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/90 via-[#27252B]/10 to-transparent"></div>
          <div class="absolute inset-x-0 bottom-0 p-6 text-white"><h3 class="font-serif text-3xl italic">Facebook</h3><p class="mt-1 text-xs uppercase tracking-[0.18em] text-white/75">Centro La Seda</p></div>
        </a>
        <a href="https://maps.google.com/?q=Calle+Horno+de+Haza+29+Granada" target="_blank" rel="noopener noreferrer" class="group flex aspect-[4/5] flex-col justify-between bg-[#27252B] p-6 text-white transition-colors duration-500 hover:bg-[#71B1A5] sm:p-8" aria-label="Cómo llegar al Centro La Seda en Google Maps">
          <span class="flex h-12 w-12 items-center justify-center rounded-full bg-[#FDFBF9]/10 text-[#71B1A5] transition-colors duration-500 group-hover:bg-white group-hover:text-[#71B1A5]"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21s7-6.1 7-12a7 7 0 10-14 0c0 5.9 7 12 7 12z"/><circle cx="12" cy="9" r="2.5" stroke-width="1.5"/></svg></span>
          <span><span class="block font-serif text-3xl italic">Cómo llegar</span><span class="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/70 transition-transform group-hover:translate-x-1">Google Maps <span aria-hidden="true">→</span></span></span>
        </a>
      </div>
    </div>
  </section>
</template>