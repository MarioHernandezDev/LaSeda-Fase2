<template>
  <div class="flex flex-col min-h-screen bg-[#FDFBF9] font-sans text-[#27252B]">
    
    <AppHeader 
      :scrolled="scrolled" 
      :current-path="currentPath" 
      @toggle-menu="mobileMenuOpen = !mobileMenuOpen" 
    />

    <AppMobileMenu 
      :is-open="mobileMenuOpen" 
      :current-path="currentPath" 
      @close="mobileMenuOpen = false" 
    />

    <main class="flex-grow relative z-10">
      <slot />
    </main>

    <CustomCursor />

    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        aria-label="Volver al inicio de la página"
        class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-11 h-11 md:w-14 md:h-14 flex items-center justify-center bg-[#FDFBF9] border border-[#27252B]/12 rounded-full shadow-lg shadow-[#27252B]/8 hover:shadow-xl hover:shadow-[#27252B]/12 hover:-translate-y-1 hover:border-[#71B1A5]/50 transition-all duration-300 group"
      >
        <svg
          class="w-4 h-4 md:w-5 md:h-5 text-[#27252B]/50 group-hover:text-[#71B1A5] transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
        </svg>
      </button>
    </Transition>

    <ChatGuiado />

    <AppFooter />

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const mobileMenuOpen = ref(false)
const scrolled      = ref(false)
const showScrollTop = ref(false)

const handleScroll = () => {
  const y = window.scrollY
  scrolled.value      = y > 30
  showScrollTop.value = y > 400
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const handleResize = () => {
  if (window.innerWidth >= 768) mobileMenuOpen.value = false
}
onMounted(() => window.addEventListener('resize', handleResize, { passive: true }))
onUnmounted(() => window.removeEventListener('resize', handleResize))

const currentPath = computed(() => route.path)

watch(mobileMenuOpen, (menuOpen) => {
  if (menuOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style>
@media (min-width: 1024px) {
  body, a, button, input, textarea, [role="button"] {
    cursor: none !important;
  }
}
</style>