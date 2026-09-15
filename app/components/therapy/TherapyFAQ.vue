<script setup lang="ts">
interface FAQ {
  pregunta: string
  respuesta: string
}

withDefaults(defineProps<{
  faqs: FAQ[]
  label?: string
  titulo?: string
  subtitulo?: string
  ctaTitulo?: string
  ctaDescripcion?: string
  ctaLabel?: string
  cierreSecundario?: string
  cierreSecundarioUrl?: string
  cierreLabel?: string
  cierreDescripcion?: string
}>(), {
  label: 'Dudas comunes',
  titulo: 'Resolvemos tus preguntas',
  subtitulo: 'con total transparencia',
  ctaTitulo: '¿Prefieres que hablemos directamente?',
  ctaDescripcion: 'Estamos aquí para escucharte de forma activa. La primera orientación telefónica es completamente gratuita y sin compromiso alguno.',
  ctaLabel: 'Reservar orientación',
  cierreSecundario: 'Contactar por WhatsApp',
  cierreSecundarioUrl: 'https://wa.me/34679571977?text=Hola,%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20la%20orientaci%C3%B3n%20gratuita.'
})

const faqAbierta = ref<number | null>(null)
const toggleFaq = (i: number) => {
  faqAbierta.value = faqAbierta.value === i ? null : i
}
</script>

<template>
  <section v-if="faqs.length > 0" v-reveal class="py-24 md:py-32 bg-[#FDFBF9] relative overflow-hidden">
    <div class="page-container relative z-10">
      <div class="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
        
        <div class="lg:col-span-7 space-y-12">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <span class="w-1.5 h-1.5 rounded-full bg-[#71B1A5]" aria-hidden="true" />
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

          <div class="divide-y divide-[#27252B]/10 border-t border-b border-[#27252B]/10">
            <div v-for="(faq, i) in faqs" :key="i" class="py-2">
              <button 
                @click="toggleFaq(i)"
                class="w-full flex items-center justify-between py-6 text-left group"
                :aria-expanded="faqAbierta === i"
              >
                <span class="text-base md:text-lg font-serif italic text-[#27252B] tracking-tight group-hover:text-[#71B1A5] transition-colors duration-300">
                  {{ faq.pregunta }}
                </span>
                
                <span class="relative w-5 h-5 shrink-0 ml-4" aria-hidden="true">
                  <span 
                    class="absolute inset-0 w-px h-4 bg-[#71B1A5] mx-auto transition-transform duration-500 ease-out" 
                    :class="faqAbierta === i ? 'rotate-90 opacity-0' : 'rotate-0'" 
                  />
                  <span class="absolute inset-0 h-px w-4 bg-[#71B1A5] my-auto" />
                </span>
              </button>
              
              <div 
                class="grid transition-all duration-500 ease-in-out text-[#27252B]/60 font-light leading-relaxed text-sm md:text-base"
                :class="faqAbierta === i ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pointer-events-none'"
              >
                <div class="overflow-hidden">
                  <p class="pr-4">
                    {{ faq.respuesta }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 lg:sticky lg:top-32 mt-4">
          <div class="bg-[#F5F2EE]/50 border border-[#27252B]/5 rounded-2xl p-8 md:p-10 lg:p-12">
            <div class="w-8 h-px bg-[#71B1A5] mb-6" aria-hidden="true" />
            <h3 class="font-serif italic text-2xl md:text-3xl text-[#27252B] leading-tight mb-4">
              {{ ctaTitulo }}
            </h3>
            <p class="text-[#27252B]/60 font-light text-sm md:text-base leading-relaxed mb-8">
              {{ ctaDescripcion }}
            </p>
            
            <div class="space-y-4 pt-2">
              <NuxtLink 
                to="/contacto" 
                class="flex items-center gap-4 group p-3 -mx-3 rounded-xl transition-colors duration-300 hover:bg-white"
              >
                <div class="w-10 h-10 rounded-full bg-[#71B1A5]/10 text-[#71B1A5] flex items-center justify-center group-hover:bg-[#71B1A5] group-hover:text-white transition-all duration-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <span class="text-[11px] tracking-[0.2em] uppercase font-bold text-[#27252B]/80 group-hover:text-[#71B1A5] transition-colors duration-300">
                  {{ ctaLabel }}
                </span>
              </NuxtLink>

              <a
                :href="cierreSecundarioUrl"
                :target="cierreSecundarioUrl.startsWith('http') ? '_blank' : undefined"
                :rel="cierreSecundarioUrl.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="flex items-center gap-4 group p-3 -mx-3 rounded-xl transition-colors duration-300 hover:bg-white"
              >
                <div class="w-10 h-10 rounded-full bg-[#71B1A5]/10 text-[#71B1A5] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.334.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                </div>
                <span class="text-[11px] tracking-[0.2em] uppercase font-bold text-[#27252B]/80 group-hover:text-[#25D366] transition-colors duration-300">
                  {{ cierreSecundario }}
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>