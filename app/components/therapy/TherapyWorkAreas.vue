<script setup lang="ts">
interface Motivo {
  numero: string
  titulo: string
  desc: string
}

withDefaults(defineProps<{
  motivos: Motivo[]
  imagen: string
  imagenAlt: string
  label?: string
  titulo?: string
  subtitulo?: string
  nota?: string
}>(), {
  label: '¿Cuándo acudir?',
  titulo: 'Motivos de consulta',
  subtitulo: 'más frecuentes',
  nota: ''
})
</script>

<template>
  <section v-if="motivos.length > 0" v-reveal class="py-24 md:py-32 bg-[#FDFBF9] border-b border-[#27252B]/5 relative overflow-hidden">
    <div 
      class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#27252B]/5 to-transparent hidden lg:block" 
      aria-hidden="true" 
    />

    <div class="page-container relative z-10">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
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

          <div class="divide-y divide-[#27252B]/5 border-t border-b border-[#27252B]/5">
            <div 
              v-for="motivo in motivos" 
              :key="motivo.numero" 
              class="py-6 flex gap-6 md:gap-8 items-start px-2"
            >
              <span class="font-serif italic text-xl md:text-2xl text-[#71B1A5]/60 select-none pt-0.5">
                {{ motivo.numero }}
              </span>
              
              <div class="space-y-1.5 flex-grow">
                <h3 class="font-medium text-lg text-[#27252B] tracking-tight">
                  {{ motivo.titulo }}
                </h3>
                <p class="text-sm text-[#27252B]/60 font-light leading-relaxed">
                  {{ motivo.desc }}
                </p>
              </div>
            </div>
          </div>

          <p v-if="nota" class="text-sm text-[#27252B]/60 font-light leading-relaxed border-l-2 border-[#71B1A5] pl-5">
            {{ nota }}
          </p>
        </div>

        <div class="lg:col-span-5 lg:sticky lg:top-32 mt-8 lg:mt-4">
          <div class="max-w-md mx-auto lg:ml-auto">
            <div class="relative overflow-hidden aspect-[4/5] bg-[#27252B]/5 rounded-2xl shadow-sm">
              <NuxtImg 
                :src="imagen" 
                :alt="imagenAlt"
                class="w-full h-full object-cover"
                loading="lazy"
                format="webp"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/5 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>