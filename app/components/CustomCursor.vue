<template>
  <div class="hidden lg:block">
    <div 
      class="custom-cursor-dot"
      :style="{ transform: `translate3d(${dotX}px, ${dotY}px, 0)` }"
    />
    <div 
      class="custom-cursor-outline"
      :class="{ 'is-hovered': isHovered }"
      :style="{ transform: `translate3d(${outlineX}px, ${outlineY}px, 0)` }"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from '#app' // Asegura la importación correcta en Nuxt 3

// Inicializamos fuera de pantalla para evitar el parpadeo inicial en la esquina (0,0)
const dotX = ref(-100)
const dotY = ref(-100)
const outlineX = ref(-100)
const outlineY = ref(-100)
const isHovered = ref(false)

let animationFrameId = null

// Coordenadas reales del ratón
const mouse = { x: -100, y: -100 }

const onMouseMove = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
  
  // El punto central sigue al ratón de forma instantánea
  dotX.value = mouse.x
  dotY.value = mouse.y
}

// Función de animación para dar el efecto "Smooth" al aro exterior
const animateCursor = () => {
  // Evitamos animar si el ratón aún no se ha movido (está en -100)
  if (mouse.x !== -100) {
    outlineX.value += (mouse.x - outlineX.value) * 0.12
    outlineY.value += (mouse.y - outlineY.value) * 0.12
  }

  animationFrameId = requestAnimationFrame(animateCursor)
}

// Detectar si el ratón está encima de un elemento clickable
const addHoverEvents = () => {
  const clickables = document.querySelectorAll('a, button, [role="button"], .group, NuxtLink')
  clickables.forEach(el => {
    // Evitamos duplicar listeners limpios
    el.removeAttribute('data-cursor-hover') 
    el.setAttribute('data-cursor-hover', 'true')

    el.addEventListener('mouseenter', () => isHovered.value = true)
    el.addEventListener('mouseleave', () => isHovered.value = false)
  })
}

onMounted(() => {
  // Escuchamos el movimiento del ratón
  window.addEventListener('mousemove', onMouseMove)
  animateCursor()
  
  // Añadimos los eventos a los botones existentes
  setTimeout(addHoverEvents, 500)
  
  // Si cambias de página en Nuxt, volvemos a buscar enlaces nuevos
  try {
    const router = useRouter()
    if (router) {
      router.afterEach(() => {
        setTimeout(addHoverEvents, 600)
      })
    }
  } catch (error) {
    console.warn('Router no disponible en este ciclo:', error)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('mousemove', onMouseMove)
  }
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<style scoped>
/* Punto central */
.custom-cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  background-color: #000000ff; /* Color carbón de tu marca */
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  /* Centrar el pivote */
  margin-top: -3px;
  margin-left: -3px;
  will-change: transform;
}

/* Aro exterior */
.custom-cursor-outline {
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border: 2px solid rgba(113, 177, 165, 0.4); /* Verde #71B1A5 traslúcido */
  background-color: rgba(113, 177, 165, 0.02);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  margin-top: -15px;
  margin-left: -15px;
  transition: width 0.3s, height 0.3s, background-color 0.3s, opacity 0.3s;
  will-change: transform;
}

/* Efecto cuando pasa por encima de un botón o card */
.custom-cursor-outline.is-hovered {
  width: 50px;
  height: 50px;
  margin-top: -25px;
  margin-left: -25px;
  background-color: rgba(113, 177, 165, 0.1);
  border-color: rgba(113, 177, 165, 0.8);
}
</style>