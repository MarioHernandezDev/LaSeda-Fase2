<template>
  <footer class="bg-[#1e1c21] text-stone-300" aria-label="Pie de página">
    <div class="h-px bg-gradient-to-r from-transparent via-[#71B1A5]/50 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-8 md:px-16 pt-16 md:pt-20 pb-14">
      <div class="grid md:grid-cols-12 gap-12 md:gap-10">

        <!-- Columna 1: Branding y RRSS -->
        <div class="md:col-span-4">
          <NuxtLink to="/" class="inline-flex items-center gap-3 group mb-6" aria-label="Ir a inicio">
            <NuxtImg
              src="/images/logo-centro-la-seda-psicologia-granada.png"
              alt="Logo Centro La Seda — Psicología y Talleres en Granada"
              format="webp"
              loading="lazy"
              class="h-9 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
            />
          </NuxtLink>

          <div class="border-l border-[#71B1A5]/60 pl-4">
            <p class="font-serif text-sm italic text-stone-400 leading-relaxed">
              Un espacio para comprender, cuidar y <br/>crecer desde una perspectiva humanista e integrativa.
            </p>
          </div>

          <div class="flex items-center gap-3 mt-8">
            <a href="https://www.instagram.com/centrolaseda/" target="_blank" rel="noopener noreferrer" class="text-stone-400 hover:text-[#71B1A5] transition-colors duration-300" aria-label="Instagram de Centro La Seda">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.facebook.com/CentroLaSeda/?locale=es_ES" target="_blank" rel="noopener noreferrer" class="text-stone-400 hover:text-[#71B1A5] transition-colors duration-300" aria-label="Facebook de Centro La Seda">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h4v-9h3l.5-3H13V6c0-.5.5-1 1-1h2V1H13a5 5 0 00-5 5v2z"/></svg>
            </a>
          </div>
        </div>

        <!-- Columna 2: Navegación -->
        <div class="md:col-span-3 md:col-start-6">
          <h3 class="text-[#71B1A5] text-[11px] tracking-[0.3em] uppercase mb-6 font-semibold">Explora</h3>
          <ul class="space-y-3" role="list">
            <li v-for="link in footerNavLinks" :key="link.to">
              <NuxtLink :to="link.to" class="group inline-flex items-center gap-2 text-sm text-stone-300 hover:text-white transition-colors duration-300">
                <span class="w-0 group-hover:w-3 h-px bg-[#71B1A5] transition-all duration-300 overflow-hidden"></span>
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Columna 3: Contacto (Destacado y Máxima Legibilidad) -->
        <div class="md:col-span-4 md:col-start-9">
          <h3 class="text-[#71B1A5] text-[11px] tracking-[0.3em] uppercase mb-4 font-bold flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#71B1A5]"></span>
            Contacto
          </h3>
          
          <!-- Tarjeta contenedora para máximo contraste -->
          <address class="not-italic bg-white/[0.03] border border-[#71B1A5]/30 rounded-2xl p-5 space-y-5 shadow-lg backdrop-blur-sm">
            
            <div class="flex items-start gap-3.5">
              <div class="p-2.5 rounded-xl bg-[#71B1A5]/20 border border-[#71B1A5]/40 text-white flex-shrink-0 mt-0.5 shadow-sm">
                <svg class="w-5 h-5 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <p class="text-base text-white leading-relaxed font-normal">
                <strong class="font-semibold text-white block text-base mb-0.5">Centro La Seda</strong>
                C. Horno de Haza, 29, Bajo 1<br/>
                <span class="text-[#71B1A5] text-xs font-semibold block my-0.5">(Se accede por el portal)</span>
                <span class="text-stone-300 text-xs">Centro, 18002 Granada</span>
              </p>
            </div>

            <div class="pt-3 border-t border-white/10 flex items-center gap-3.5">
              <div class="p-2.5 rounded-xl bg-[#71B1A5]/20 border border-[#71B1A5]/40 text-white flex-shrink-0 shadow-sm">
                <svg class="w-5 h-5 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <a href="tel:+34679571977" class="text-base font-semibold text-white hover:text-[#71B1A5] transition-colors duration-300 tracking-wide">
                +34 679 571 977
              </a>
            </div>

          </address>
        </div>

      </div>
    </div>

    <!-- Barra Inferior Legal -->
    <div class="max-w-7xl mx-auto px-8 md:px-16 py-6 border-t border-white/10 text-[10px] tracking-widest uppercase">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <span class="text-stone-400">© {{ currentYear }} Centro La Seda · Granada</span>
        <nav aria-label="Navegación legal" class="flex items-center gap-6">
          <NuxtLink to="/aviso-legal" class="text-stone-400 hover:text-[#71B1A5] transition-colors duration-300">Aviso Legal</NuxtLink>
          <NuxtLink to="/privacidad" class="text-stone-400 hover:text-[#71B1A5] transition-colors duration-300">Privacidad</NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = 2026

const footerNavLinks = [
  { label: 'Inicio',      to: '/' },
  { label: 'Terapias',    to: '/terapias' },
  { label: 'Talleres',    to: '/talleres' },
  { label: 'Formaciones', to: '/formaciones' },
  { label: 'Conócenos',  to: '/conocenos' },
  { label: 'Contacto',   to: '/contacto' },
]
</script>