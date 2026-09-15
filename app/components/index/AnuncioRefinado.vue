<template>
  <Transition name="fade-slide">
    <div 
      v-if="isOpen" 
      @click="closeBanner"
      :class="[
        'fixed z-[90] bg-[#FDFBF9] border border-[#27252B]/12 rounded-2xl shadow-xl shadow-[#27252B]/6 backdrop-blur-md transition-all duration-500 ease-in-out cursor-pointer hover:border-[#71B1A5]/40',
        // Comportamiento de posición según si las cookies están visibles o no en escritorio
        cookiesActivas 
          ? 'bottom-[330px] md:bottom-[340px] right-6 md:right-8' 
          : 'bottom-6 right-6 md:right-8',
        // Tamaños adaptativos: píldora en móvil, tarjeta completa en escritorio
        'left-6 md:left-auto max-w-none md:max-w-lg p-4 md:p-8'
      ]"
    >
      <button 
        @click.stop="closeBanner" 
        class="absolute top-3 right-3 md:top-4 md:right-4 text-[#27252B]/40 hover:text-[#27252B] transition-colors p-1"
        aria-label="Cerrar aviso"
      >
        <svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <div class="flex md:hidden items-center gap-3 pr-6 select-none">
        <span class="flex h-2 w-2 relative flex-shrink-0">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#71B1A5] opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-[#71B1A5]"></span>
        </span>
        <p class="text-[11px] tracking-[0.15em] uppercase font-bold text-[#27252B]">
          Centro La Seda: <span class="text-[#71B1A5]">Abiertos en Agosto</span>
        </p>
      </div>

      <div class="hidden md:flex flex-col gap-5 select-none">
        <div class="flex items-center gap-3">
          <span class="flex h-2 w-2 relative flex-shrink-0">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#71B1A5] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#71B1A5]"></span>
          </span>
          <h3 class="font-serif text-lg md:text-xl font-normal text-[#27252B] tracking-wide">
            Atención Continuada <span class="italic">en Verano</span>
          </h3>
        </div>

        <p class="text-xs md:text-sm text-[#27252B]/75 font-light leading-relaxed md:leading-loose pr-2">
          Le recordamos que nuestros procesos terapéuticos <span class="font-medium text-[#27252B]">no se interrumpen por vacaciones</span> :)
        </p>
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const cookiesActivas = ref(false)
let intervalId: any = null

const verificarCookies = () => {
  if (typeof window !== 'undefined') {
    const consent = localStorage.getItem('cookie-consent')
    // Si no hay consentimiento guardado, asumimos que el banner de cookies está en pantalla
    cookiesActivas.value = !consent
  }
}

const closeBanner = () => {
  isOpen.value = false
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('laseda_agosto_banner', 'closed')
  }
}

onMounted(() => {
  verificarCookies()
  
  // Escuchamos de forma reactiva si el usuario acepta las cookies para recolocar este banner
  intervalId = setInterval(verificarCookies, 400)

  // Aparece un pelín antes o a la vez para coordinar el stack visual
  setTimeout(() => {
    if (sessionStorage.getItem('laseda_agosto_banner') !== 'closed') {
      isOpen.value = true
    }
  }, 1000)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}
</style>