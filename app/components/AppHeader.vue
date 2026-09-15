<template>
  <header
    class="fixed top-0 left-0 right-0 h-24 bg-[#FDFBF9] border-b border-[#27252B]/5 z-50 flex items-center shadow-sm"
  >
    <div class="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-full">
      <nav class="flex items-center justify-between h-full" aria-label="Navegación principal">

        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="group block" aria-label="Ir a inicio">
            <NuxtImg
              src="/images/logo-centro-la-seda-psicologia-granada.png"
              alt="Logo Centro La Seda — Psicología y Talleres en Granada"
              format="webp"
              fetchpriority="high"
              class="h-9 md:h-11 w-auto transition-transform duration-500 group-hover:scale-105"
            />
          </NuxtLink>
        </div>

        <ul class="hidden md:flex items-center h-full" role="list">
          <li v-for="link in navLinks" :key="link.to" class="h-full flex">
            <NuxtLink
              :to="link.to"
              class="relative px-6 xl:px-8 h-full flex items-center text-[13px] tracking-[0.25em] uppercase font-semibold text-[#27252B]/70 transition-all duration-300 group overflow-hidden"
              :class="{ 'text-[#27252B] bg-[#27252B]/4 font-bold': currentPath === link.to }"
              :aria-current="currentPath === link.to ? 'page' : undefined"
            >
              <span class="absolute inset-0 bg-[#71B1A5]/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
              
              <span class="relative z-10 group-hover:text-[#27252B] transition-colors duration-300">
                {{ link.label }}
              </span>

              <span
                class="absolute top-0 left-0 right-0 h-[2px] bg-[#71B1A5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"
                :class="{ 'scale-x-100': currentPath === link.to }"
              ></span>
            </NuxtLink>
          </li>
        </ul>

        <button
          class="md:hidden flex flex-col justify-center items-center w-11 h-11 rounded-full border border-[#27252B]/5 bg-[#FDFBF9]/60 backdrop-blur-sm ml-auto gap-1.5 transition-all duration-300 active:scale-[0.95] focus:outline-none z-50 relative"
          @click="$emit('toggleMenu')"
          :aria-expanded="mobileMenuOpen"
          aria-label="Abrir menú de navegación"
        >
          <span class="block w-5 h-px bg-[#27252B] transition-all duration-300 origin-center" :class="mobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''"></span>
          <span class="block w-3 h-px bg-[#27252B] transition-all duration-300" :class="mobileMenuOpen ? 'opacity-0 w-0' : ''"></span>
          <span class="block w-5 h-px bg-[#27252B] transition-all duration-300 origin-center" :class="mobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''"></span>
        </button>

      </nav>
    </div>
  </header>
</template>

<script setup>
defineProps({
  scrolled: Boolean,
  currentPath: String,
  mobileMenuOpen: Boolean
})
defineEmits(['toggleMenu'])

const navLinks = [
  { label: 'Inicio',      to: '/'            },
  { label: 'Terapias',    to: '/terapias'    },
  { label: 'Equipo',      to: '/conocenos'   },
  { label: 'Talleres',    to: '/talleres'    },
  { label: 'Formaciones', to: '/formaciones' },
  { label: 'Contacto',    to: '/contacto'    },
]
</script>

<style scoped>
header {
  will-change: transform;
}
</style>