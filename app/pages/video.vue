<template>
  <main class="min-h-screen bg-[#27252B] flex items-center justify-center p-4 sm:p-8 md:p-12 !cursor-default">
    <button
      type="button"
      aria-label="Volver a la página anterior"
      class="fixed top-5 left-5 sm:top-8 sm:left-8 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#FDFBF9]/90 text-[#27252B] shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#71B1A5]"
      @click="goBack"
    >
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M19 12H5" />
        <path d="m12 19-7-7 7-7" />
      </svg>
    </button>

    <video
      autoplay
      loop
      muted
      playsinline
      preload="metadata"
      controls
      aria-label="Recorrido virtual por el centro La Seda"
      class="w-full max-w-5xl lg:max-w-7xl max-h-[calc(100vh-3rem)] sm:max-h-[calc(100vh-5rem)] rounded-2xl object-contain shadow-2xl shadow-black/30 !cursor-default"
    >
      <source src="/video/recorrido-edificio.webm" type="video/webm" />
      Tu navegador no soporta el formato de vídeo.
    </video>

    <CustomCursor />
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'

definePageMeta({
  layout: false,
})

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}

useSeoMeta({
  title: 'Recorrido virtual | Centro La Seda',
  description: 'Conoce las instalaciones del Centro La Seda mediante un recorrido virtual.',
  ogTitle: 'Recorrido virtual por Centro La Seda',
  ogDescription: 'Conoce las instalaciones del Centro La Seda.',
  ogType: 'video.other',
})
</script>

<style scoped>
/* Asegura que los navegadores respeten la visibilidad del cursor sobre el elemento de vídeo nativo */
video {
  cursor: default !important;
}
</style>