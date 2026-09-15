<template>
  <section v-reveal aria-labelledby="galeria-titulo" class="py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-8 md:px-16 mb-12 text-center">
      <div class="flex items-center gap-4 mb-6 justify-center" aria-hidden="true">
        <div class="h-px w-8 bg-[#71B1A5]/50"></div>
        <div class="w-1 h-1 rounded-full bg-[#71B1A5]"></div>
        <span class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-medium">Nuestro Espacio</span>
        <div class="w-1 h-1 rounded-full bg-[#71B1A5]"></div>
        <div class="h-px w-8 bg-[#71B1A5]/50"></div>
      </div>
      <h2 id="galeria-titulo" class="font-serif italic font-light text-[2rem] md:text-[2.6rem] leading-[1.15]">
        Un lugar pensado para
        <span class="not-italic font-normal text-[#71B1A5]"> poder ser</span>
      </h2>
    </div>

    <div class="gallery-grid">
      <button
        v-for="(foto, idx) in galeriaFotos"
        :key="foto.src"
        class="gallery-item group"
        type="button"
        :aria-label="`Ver imagen ampliada: ${foto.alt}`"
        @click="abrirLightbox(idx)"
      >
        <NuxtImg
          :src="foto.src"
          :alt="foto.alt"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          format="webp"
          loading="lazy"
          width="480"
          height="360"
        />
        <div class="gallery-overlay" aria-hidden="true">
          <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
          </svg>
        </div>
      </button>
    </div>

    <Teleport to="body">
      <div
        v-if="lightboxAbierto"
        class="lightbox-backdrop"
        role="dialog"
        aria-modal="true"
        :aria-label="`Imagen ${lightboxIdx + 1} de ${galeriaFotos.length}: ${galeriaFotos[lightboxIdx]?.alt}`"
        @click.self="cerrarLightbox"
        @keydown.escape="cerrarLightbox"
        @keydown.arrow-left="lightboxPrev"
        @keydown.arrow-right="lightboxNext"
      >
        <button class="lightbox-close" type="button" aria-label="Cerrar imagen" @click="cerrarLightbox">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <button class="lightbox-nav lightbox-nav--prev" type="button" aria-label="Imagen anterior" @click="lightboxPrev">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <div class="lightbox-img-wrap">
          <NuxtImg
            :src="galeriaFotos[lightboxIdx]?.src"
            :alt="galeriaFotos[lightboxIdx]?.alt"
            class="lightbox-img"
            format="webp"
          />
          <p class="lightbox-caption">{{ galeriaFotos[lightboxIdx]?.caption }}</p>
        </div>

        <button class="lightbox-nav lightbox-nav--next" type="button" aria-label="Imagen siguiente" @click="lightboxNext">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <div class="lightbox-counter" aria-live="polite">
          {{ lightboxIdx + 1 }} / {{ galeriaFotos.length }}
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const galeriaFotos = [
  { src: '/images/galeria-sala-espera-centro-psicologia-la-seda-granada.jpg',       alt: 'Sala de espera acogedora del Centro de Psicología La Seda en Granada',                      caption: 'Sala de espera' },
  { src: '/images/galeria-sala-talleres-grupales-psicologia-granada-la-seda.jpg',   alt: 'Sala de talleres grupales y terapia grupal en el Centro La Seda Granada',                  caption: 'Sala de talleres' },
  { src: '/images/galeria-recepcion-centro-la-seda-granada.jpg',               alt: 'Recepción y bienvenida del Centro de Psicología La Seda Granada',                  caption: 'Recepción' },
  { src: '/images/galeria-despacho-psicologia-infantil-granada-la-seda.jpg',         alt: 'Despacho de psicología infantil en el Centro La Seda Granada',                              caption: 'Despacho infantil' },
  { src: '/images/galeria-espacio-bienestar-relajacion-centro-la-seda-granada.jpg', alt: 'Espacio de bienestar y relajación en el Centro La Seda Granada',                          caption: 'Espacio de bienestar' },
  { src: '/images/galeria-sala-formacion-profesionales-psicologia-granada.jpg',     alt: 'Sala de formación para profesionales de psicología en el Centro La Seda Granada',         caption: 'Sala de formación' },
  { src: '/images/galeria-ambiente-consulta-psicoterapia-granada-la-seda.jpg',      alt: 'Ambiente cálido de consulta de psicoterapia en Granada — Centro La Seda',                 caption: 'Ambiente consulta' },
  { src: '/images/galeria-detalle-decoracion-centro-psicologia-la-seda.jpg',        alt: 'Detalle de decoración y diseño interior del Centro La Seda Granada',                      caption: 'Detalle interior' },
  { src: '/images/galeria-pasillo-centro-psicologia-la-seda-granada.jpg',           alt: 'Pasillo interior del Centro de Psicología La Seda en Granada',                           caption: 'Accesos interiores' },
]

const lightboxAbierto = ref(false)
const lightboxIdx = ref(0)

function abrirLightbox(idx) {
  lightboxIdx.value = idx
  lightboxAbierto.value = true
  document.body.style.overflow = 'hidden'
}

function cerrarLightbox() {
  lightboxAbierto.value = false
  document.body.style.overflow = ''
}

function lightboxNext() {
  lightboxIdx.value = (lightboxIdx.value + 1) % galeriaFotos.length
}

function lightboxPrev() {
  lightboxIdx.value = (lightboxIdx.value - 1 + galeriaFotos.length) % galeriaFotos.length
}
</script>

<style scoped>
/* ════════════════════════════════════════════════════════════
   GALERÍA DEL LOCAL
   ════════════════════════════════════════════════════════════ */
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
}

@media (min-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.gallery-item {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  cursor: zoom-in;
  display: block;
  border: none;
  padding: 0;
  background: #27252B;
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(39, 37, 43, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.4s ease;
}

.gallery-item:hover .gallery-overlay {
  background: rgba(39, 37, 43, 0.45);
}

.gallery-overlay svg {
  opacity: 0;
  transform: scale(0.85);
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.gallery-item:hover .gallery-overlay svg {
  opacity: 1;
  transform: scale(1);
}

/* ════════════════════════════════════════════════════════════
   LIGHTBOX
   ════════════════════════════════════════════════════════════ */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(13, 12, 15, 0.96);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: fadeIn 0.25s ease;
}

.lightbox-img-wrap {
  max-width: min(90vw, 1100px);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.lightbox-img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 2px;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.7);
}

.lightbox-caption {
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 500;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 24px;
  color: rgba(255, 255, 255, 0.6);
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  transition: color 0.2s;
  z-index: 10;
}

.lightbox-close:hover { color: #fff; }

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 14px;
  transition: background 0.2s, color 0.2s;
  z-index: 10;
}

.lightbox-nav:hover {
  background: rgba(113, 177, 165, 0.25);
  color: #fff;
}

.lightbox-nav--prev { left: 20px; }
.lightbox-nav--next { right: 20px; }

.lightbox-counter {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.70rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

@media (prefers-reduced-motion: reduce) {
  .gallery-item img,
  .lightbox-backdrop {
    transition: none !important;
    animation: none !important;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
</style>