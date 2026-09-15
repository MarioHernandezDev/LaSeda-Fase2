<template>
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-400 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div
      v-if="isOpen"
      class="md:hidden fixed inset-0 w-screen h-screen bg-[#FDFBF9] z-40 flex flex-col justify-between px-8 pt-32 pb-12 overflow-y-auto"
    >
      <div class="w-full flex justify-center items-center transition-all duration-500">
        <NuxtImg
          src="/images/logo-centro-la-seda-psicologia-granada.png"
          alt="Logo Centro La Seda"
          format="webp"
          class="h-10 w-auto"
        />
      </div>

      <nav aria-label="Navegación móvil" class="flex flex-col items-center justify-center space-y-7 my-auto">
        <div
          v-for="link in mobileNavLinks"
          :key="link.to"
          class="w-full text-center transition-all duration-300"
        >
          <NuxtLink
            :to="link.to"
            class="text-sm tracking-[0.35em] uppercase font-semibold text-[#27252B]/60 hover:text-[#27252B] transition-colors duration-300 relative group block text-center py-2"
            :class="{ 'text-[#71B1A5] font-bold': currentPath === link.to }"
            :aria-current="currentPath === link.to ? 'page' : undefined"
            @click="$emit('close')"
          >
            {{ link.label }}
            <span
              class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#71B1A5] opacity-0 transition-opacity duration-300"
              :class="{ 'opacity-100': currentPath === link.to }"
            ></span>
          </NuxtLink>
        </div>
      </nav>

      <div class="w-full max-w-sm mx-auto flex flex-col items-center gap-5">
        <NuxtLink
          to="/contacto"
          class="w-full inline-flex items-center justify-center gap-3 bg-[#71B1A5] text-white text-xs tracking-[0.25em] uppercase font-bold py-4 rounded-full hover:bg-[#5a9a8e] transition-all duration-300 shadow-xl shadow-[#71B1A5]/15 active:scale-[0.98]"
          @click="$emit('close')"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Contacto
        </NuxtLink>

        <p class="text-[9px] tracking-[0.2em] uppercase text-[#27252B]/40 text-center font-light">
          Centro de Psicología La Seda
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
  currentPath: String
})
defineEmits(['close'])

const mobileNavLinks = [
  { label: 'Inicio',      to: '/'            },
  { label: 'Terapias',    to: '/terapias'    },
  { label: 'Talleres',    to: '/talleres'    },
  { label: 'Formaciones', to: '/formaciones' },
  { label: 'Conócenos',   to: '/conocenos'   },
]
</script>