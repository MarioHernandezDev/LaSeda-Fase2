<template>
  <Transition
    enter-active-class="transition-all duration-700 ease-out"
    enter-from-class="opacity-0 translate-y-10 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition-all duration-400 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-10"
  >
    <div 
      v-if="isOpen" 
      class="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-lg z-[100] bg-[#FDFBF9] border border-[#27252B]/12 rounded-2xl p-7 md:p-8 shadow-xl shadow-[#27252B]/8 backdrop-blur-md group"
    >
      <div class="flex flex-col gap-5">
        
        <div class="flex items-center gap-5 select-none">
          
          <div class="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
            <div class="absolute inset-0 bg-[#71B1A5]/10 rounded-full blur-md group-hover:bg-[#71B1A5]/20 transition-colors duration-500"></div>
            
            <div class="cookie-element w-8 h-8 bg-[#D2B48C] rounded-full relative shadow-sm border border-[#bfa37e] transition-all duration-500 group-hover:scale-110">
              <div class="absolute w-1.5 h-1.5 bg-[#5C4033] rounded-full top-1.5 left-2"></div>
              <div class="absolute w-1 h-1 bg-[#5C4033] rounded-full top-4 left-1.5"></div>
              <div class="absolute w-1.5 h-1.5 bg-[#5C4033] rounded-full top-2 right-2"></div>
              <div class="absolute w-1 h-1 bg-[#5C4033] rounded-full bottom-2 left-3"></div>
              <div class="absolute w-1.5 h-1.5 bg-[#5C4033] rounded-full bottom-1.5 right-2.5"></div>
              
              <div class="bite-mark absolute -top-1 -right-1 w-4 h-4 bg-[#FDFBF9] rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          </div>

          <h3 class="font-serif text-lg md:text-xl font-normal text-[#27252B] tracking-wide">
            Aviso de <span class="italic">Cookies</span>
          </h3>
        </div>

        <p class="text-xs md:text-sm text-[#27252B]/75 font-light leading-relaxed md:leading-loose pr-2">
          Utilizamos cookies propias para recordar sus preferencias y analíticas de terceros (Google Analytics) para comprender cómo interactúa con nuestra web. Puede aceptar todas o leer los detalles en nuestra 
          <NuxtLink to="/cookies" class="text-[#71B1A5] font-medium underline underline-offset-2 hover:text-[#5a9a8e] transition-colors">
            Política de Cookies
          </NuxtLink>.
        </p>

        <div class="flex items-center justify-end gap-5 mt-2">
          <button 
            @click="rechazarCookies" 
            class="text-[11px] tracking-[0.2em] uppercase font-bold text-[#27252B]/50 hover:text-[#27252B] transition-colors py-2 px-1"
          >
            Rechazar
          </button>
          
          <button 
            @click="aceptarCookies" 
            class="bg-[#71B1A5] hover:bg-[#5a9a8e] text-white text-[11px] tracking-[0.2em] uppercase font-bold px-6 py-3 rounded-xl shadow-md shadow-[#71B1A5]/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Aceptar todas
          </button>
        </div>

      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isOpen = ref(false)

onMounted(() => {
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) {
    setTimeout(() => {
      isOpen.value = true
    }, 1500)
  } else if (consent === 'accepted') {
    activarAnalytics()
  }
})

const aceptarCookies = () => {
  localStorage.setItem('cookie-consent', 'accepted')
  isOpen.value = false
  activarAnalytics()
}

const rechazarCookies = () => {
  localStorage.setItem('cookie-consent', 'rejected')
  isOpen.value = false
}

const activarAnalytics = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      'analytics_storage': 'granted'
    })
  }
}
</script>

<style scoped>
/* Animación de entrada: la galleta gira sobre su eje al aparecer el banner */
.cookie-element {
  animation: cookieIntro 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes cookieIntro {
  0% {
    transform: rotate(-180deg) scale(0.3);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}

/* Ajuste del mordisco en hover para que cuadre con el borde redondo de la galleta */
.group:hover .bite-mark {
  box-shadow: inset 1px -1px 0px rgba(39, 37, 43, 0.12);
}
</style>