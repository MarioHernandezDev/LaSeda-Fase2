<script setup lang="ts">
withDefaults(defineProps<{
  descripcion: string
  descripcion2: string
  cita: string
  beneficios: string[]
  label?: string
  titulo?: string
  subtitulo?: string
}>(), {
  label: '',
  titulo: '',
  subtitulo: ''
})
</script>

<template>
  <section id="sobre-la-terapia" class="bg-[#FDFBF9] py-20 md:py-28 relative scroll-mt-12">
    <div class="page-container max-w-4xl mx-auto">
      
      <div class="space-y-12">
        <div v-if="label || titulo || subtitulo">
          <p class="section-label mb-3">{{ label }}</p>
          <h2 class="font-serif italic text-3xl md:text-4xl text-[#27252B] leading-[1.15]">
            {{ titulo }}
            <span class="text-[#27252B]/40 not-italic font-sans font-light text-2xl md:text-3xl block mt-2">
              {{ subtitulo }}
            </span>
          </h2>
        </div>

        <div v-if="(label || titulo || subtitulo) && (descripcion || descripcion2)" class="space-y-6 text-[#27252B]/70 text-base md:text-lg leading-[1.85] font-light">
          <p>{{ descripcion }}</p>
          <p>{{ descripcion2 }}</p>
        </div>

        <div class="py-10 my-6 border-t border-b border-[#27252B]/10 relative">
          <blockquote class="text-center max-w-2xl mx-auto">
            <p class="text-[#27252B]/80 font-serif italic text-lg md:text-xl leading-[1.85]">
              “{{ cita }}”
            </p>
          </blockquote>
        </div>

      </div>

    </div>
  </section>
</template>