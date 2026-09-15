<template>
  <div class="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 font-sans antialiased text-[#27252B]">
    
    <!-- Botón Flotante para Abrir Chat -->
    <div v-if="!isOpen" class="flex items-center gap-4 group cursor-pointer justify-end">
      <span class="hidden md:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#FDFBF9] border border-[#27252B]/10 text-[#27252B]/80 text-[11px] tracking-[0.2em] uppercase font-medium px-4 py-2 rounded-full shadow-sm whitespace-nowrap">
        ¿Te ayudamos?
      </span>
      
      <button
        @click="isOpen = true"
        class="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-[#71B1A5] hover:bg-[#5a9388] text-white rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
        aria-label="Abrir asistente de ayuda"
      >
        <svg class="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      </button>
    </div>

    <!-- Ventana del Chat -->
    <div
      v-else
      class="fixed inset-0 w-full h-full md:relative md:inset-auto md:w-[50vw] md:max-w-[550px] md:min-h-[520px] bg-[#FDFBF9] md:rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-out animate-fadeIn"
    >
      <!-- Cabecera del Chat -->
      <div class="bg-[#71B1A5] text-white p-6 md:p-8 flex items-center justify-between border-b border-white/10 flex-shrink-0 relative overflow-hidden">
        <div class="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex items-center gap-4 relative z-10">
          <button 
            v-if="currentStep !== 'inicio'"
            @click="goToStep('inicio')"
            class="text-white/80 hover:text-white p-2 -ml-2 transition-all rounded-full hover:bg-white/10 flex items-center justify-center group/back"
            aria-label="Volver al menú anterior"
          >
            <svg class="w-6 h-6 transition-transform group-hover/back:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <div class="flex flex-col justify-center">
            <div class="flex items-center gap-2.5">
              <h2 class="font-serif italic text-3xl md:text-4xl tracking-tight text-white drop-shadow-sm">
                Chat Binn
              </h2>
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-300"></span>
              </span>
            </div>
            <p class="text-[10px] uppercase tracking-[0.4em] text-white/70 font-medium mt-1.5 flex items-center gap-2">
              <span class="w-4 h-px bg-white/30"></span>
              Asistente La Seda
            </p>
          </div>
        </div>
        
        <button @click="closeChat" class="text-white/70 hover:text-white p-2 transition-colors rounded-full hover:bg-white/10 relative z-10" aria-label="Cerrar asistente">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Cuerpo del Chat -->
      <div class="p-6 md:p-10 flex-grow overflow-y-auto bg-gradient-to-b from-transparent to-[#27252B]/[0.01] flex flex-col justify-between space-y-6">
        
        <div class="space-y-6 flex-grow">
          <!-- Saludo general -->
          <div class="flex items-start max-w-[95%] md:max-w-[90%]">
            <div class="bg-[#27252B]/[0.03] text-[#27252B]/90 rounded-2xl p-4 md:p-5 text-sm md:text-lg font-light leading-relaxed border border-[#27252B]/5">
              Hola. Te damos la bienvenida a nuestro centro. Hemos diseñado este asistente para guiarte hacia lo que necesitas. ¿En qué te podemos acompañar hoy?
            </div>
          </div>

          <!-- Paso: INICIO -->
          <div v-if="currentStep === 'inicio'" class="space-y-3 pt-1 flex flex-col">
            
            <button @click="goToStep('cita')" class="w-full text-left bg-white border border-[#27252B]/10 hover:border-[#71B1A5] hover:bg-[#71B1A5]/5 p-4 rounded-xl text-sm md:text-base text-stone-600 hover:text-[#27252B] transition-colors duration-200 flex items-center justify-between group">
              <span>Solicitar <strong class="font-bold text-[#27252B] underline decoration-[#27252B]/30 decoration-2">Cita o Terapias</strong></span>
              <svg class="w-4 h-4 text-[#71B1A5]/70 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 5l7 7-7 7"/></svg>
            </button>

            <button @click="goToStep('info-profesional')" class="w-full text-left bg-white border border-[#27252B]/10 hover:border-[#71B1A5] hover:bg-[#71B1A5]/5 p-4 rounded-xl text-sm md:text-base text-stone-600 hover:text-[#27252B] transition-colors duration-200 flex items-center justify-between group">
              <span>Información sobre <strong class="font-bold text-[#27252B] underline decoration-[#27252B]/30 decoration-2">Talleres y Formaciones</strong></span>
              <svg class="w-4 h-4 text-[#71B1A5]/70 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 5l7 7-7 7"/></svg>
            </button>

            <button @click="goToStep('acceso-video')" class="w-full text-left bg-white border border-[#27252B]/10 hover:border-[#71B1A5] hover:bg-[#71B1A5]/5 p-4 rounded-xl text-sm md:text-base text-stone-600 hover:text-[#27252B] transition-colors duration-200 flex items-center justify-between group">
              <span>¿No sabes cómo <strong class="font-bold text-[#27252B] underline decoration-[#27252B]/30 decoration-2">acceder o llegar al centro</strong>?</span>
              <svg class="w-4 h-4 text-[#71B1A5]/70 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>

          <!-- Paso: CITA O TERAPIAS -->
          <div v-if="currentStep === 'cita'" class="space-y-4 animate-fadeIn">
            <div class="bg-[#27252B]/[0.03] text-[#27252B]/90 rounded-xl p-4 md:p-5 text-sm md:text-base font-light leading-relaxed border border-[#27252B]/5">
              Para solicitar información sobre sesiones individuales o comenzar un proceso terapéutico, por favor <strong class="font-bold text-[#27252B] underline decoration-[#27252B]/30 decoration-2">rellena nuestro formulario</strong>. Nos pondremos en contacto contigo en seguida.
            </div>
            <div class="space-y-3 flex flex-col">
              <NuxtLink to="/contacto" @click="closeChat" class="w-full text-center bg-[#27252B] hover:bg-[#3c3a41] text-white p-3.5 md:p-4 rounded-xl text-sm md:text-base font-medium transition-colors">
                Rellenar Formulario de Contacto
              </NuxtLink>

              
            </div>
          </div>

          <!-- Paso: TALLERES Y FORMACIONES -->
          <div v-if="currentStep === 'info-profesional'" class="space-y-4 animate-fadeIn">
            <div class="bg-[#27252B]/[0.03] text-[#27252B]/90 rounded-xl p-4 md:p-5 text-sm md:text-base font-light leading-relaxed border border-[#27252B]/5">
              Puedes explorar nuestras actividades de desarrollo personal y programas de formación. Para cualquier consulta o reserva, te recomendamos <strong class="font-bold text-[#27252B] underline decoration-[#27252B]/30 decoration-2">rellenar el formulario</strong> y te atenderemos en seguida.
            </div>
            
            <div class="space-y-2.5 flex flex-col">
              <NuxtLink to="/talleres" @click="closeChat" class="w-full text-left bg-white border border-[#27252B]/10 hover:border-[#71B1A5] hover:bg-[#71B1A5]/5 p-4 rounded-xl text-sm md:text-base font-light text-stone-600 hover:text-[#27252B] transition-all flex items-center justify-between group">
                <span>Ver <strong class="font-bold text-[#27252B] underline decoration-[#27252B]/30 decoration-2">Talleres Vivenciales</strong> y Grupales</span>
                <svg class="w-4 h-4 text-[#71B1A5]/70 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              
              <NuxtLink to="/formaciones" @click="closeChat" class="w-full text-left bg-white border border-[#27252B]/10 hover:border-[#71B1A5] hover:bg-[#71B1A5]/5 p-4 rounded-xl text-sm md:text-base font-light text-stone-600 hover:text-[#27252B] transition-all flex items-center justify-between group">
                <span>Ver <strong class="font-bold text-[#27252B] underline decoration-[#27252B]/30 decoration-2">Formaciones Especializadas</strong></span>
                <svg class="w-4 h-4 text-[#71B1A5]/70 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>

            </div>
          </div>

          <!-- Paso: CÓMO LLEGAR / ACCESO (RECORRIDO EN VÍDEO) -->
          <div v-if="currentStep === 'acceso-video'" class="space-y-4 animate-fadeIn">
            <div class="bg-[#27252B]/[0.03] text-[#27252B]/90 rounded-xl p-4 md:p-5 text-sm md:text-base font-light leading-relaxed border border-[#27252B]/5">
              Hemos preparado un <strong class="font-bold text-[#27252B] underline decoration-[#27252B]/30 decoration-2">recorrido virtual en vídeo</strong> para que puedas ver cómo acceder fácilmente a nuestras instalaciones.
            </div>
            
            <div class="space-y-3 flex flex-col">
              <NuxtLink 
                to="/video" 
                @click="closeChat" 
                class="w-full text-center bg-[#71B1A5] hover:bg-[#5a9388] text-white p-3.5 md:p-4 rounded-xl text-sm md:text-base font-medium transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Ver Vídeo del Recorrido
              </NuxtLink>

              <NuxtLink 
                to="/contacto" 
                @click="closeChat" 
                class="w-full text-center bg-white border border-[#27252B]/10 text-[#27252B] hover:bg-[#27252B]/5 p-3.5 md:p-4 rounded-xl text-sm md:text-base font-medium transition-colors"
              >
                Ver Dirección y Ubicación en Mapa
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Botón Inferior: Volver al Inicio -->
        <div v-if="currentStep !== 'inicio'" class="pt-4 border-t border-[#27252B]/5 flex justify-center flex-shrink-0">
          <button @click="goToStep('inicio')" class="text-xs text-[#27252B]/40 hover:text-[#27252B] transition-colors flex items-center gap-1.5 uppercase tracking-widest font-medium">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l-7-7 7-7"/></svg>
            Volver al inicio
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
type Step = 'inicio' | 'cita' | 'info-profesional' | 'acceso-video'
const currentStep = ref<Step>('inicio')

const goToStep = (step: Step) => {
  currentStep.value = step
}

const closeChat = () => {
  isOpen.value = false
  currentStep.value = 'inicio'
}
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px) scale(0.99);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>