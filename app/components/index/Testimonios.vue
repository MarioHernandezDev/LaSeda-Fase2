<template>
  <section v-reveal aria-labelledby="testimonios-titulo" class="py-28 md:py-40 overflow-hidden bg-[#FDFBF9] relative">
    <div class="absolute inset-0 opacity-[0.025]" style="background-image: radial-gradient(circle, #27252B 1px, transparent 1px); background-size: 32px 32px;" aria-hidden="true"></div>
    <div class="relative z-10">
      <div class="max-w-7xl mx-auto px-8 md:px-16 mb-20 text-center">
        <div class="flex items-center gap-4 mb-8 justify-center" aria-hidden="true">
          <div class="h-px w-8 bg-[#71B1A5]/50"></div>
          <div class="w-1 h-1 rounded-full bg-[#71B1A5]"></div>
          <span class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-medium">Experiencias</span>
          <div class="w-1 h-1 rounded-full bg-[#71B1A5]"></div>
          <div class="h-px w-8 bg-[#71B1A5]/50"></div>
        </div>
        <h2 id="testimonios-titulo" class="font-serif italic font-light text-[2rem] md:text-[2.6rem] leading-[1.2]">
          Lo que dicen quienes nos
          <span class="not-italic font-normal text-[#71B1A5]"> confían su bienestar</span>
        </h2>
      </div>

      <div class="marquee-wrapper mb-4" style="--duration: 55s;" role="region" aria-label="Testimonios de pacientes, fila 1">
        <div class="marquee-track">
          <template v-for="loop in 2" :key="`loop1-${loop}`">
            <figure v-for="t in testimoniosRow1" :key="`r1-${loop}-${t.id}`" class="testimonial-card group">
              <div class="flex gap-1 mb-4" aria-label="5 estrellas" role="img">
                <svg v-for="s in 5" :key="s" class="w-3 h-3 text-[#71B1A5]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>
              <span class="testimonial-quote" aria-hidden="true">"</span>
              <blockquote><p class="opacity-72 text-sm leading-[1.85] italic mb-5 font-light relative z-10">{{ t.text }}</p></blockquote>
              <figcaption class="flex items-center gap-3 pt-4 border-t border-[#27252B]/8">
                <div class="w-8 h-8 rounded-full bg-[#71B1A5]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#71B1A5]/30 transition-colors duration-500" aria-hidden="true">
                  <span class="text-[#71B1A5] text-xs font-semibold">{{ t.initials }}</span>
                </div>
                <div>
                  <span class="block text-xs font-semibold">{{ t.name }}</span>
                  <span class="block text-[10px] opacity-45 tracking-[0.2em] uppercase mt-0.5">{{ t.role }}</span>
                </div>
              </figcaption>
            </figure>
          </template>
        </div>
      </div>

      <div class="marquee-wrapper marquee-reverse" style="--duration: 65s;" role="region" aria-label="Testimonios de pacientes, fila 2">
        <div class="marquee-track">
          <template v-for="loop in 2" :key="`loop2-${loop}`">
            <figure v-for="t in testimoniosRow2" :key="`r2-${loop}-${t.id}`" class="testimonial-card testimonial-card--dark group">
              <div class="flex gap-1 mb-4" aria-label="5 estrellas" role="img">
                <svg v-for="s in 5" :key="s" class="w-3 h-3 text-[#71B1A5]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>
              <span class="testimonial-quote testimonial-quote--dark" aria-hidden="true">"</span>
              <blockquote><p class="text-white/65 text-sm leading-[1.85] italic mb-5 font-light relative z-10">{{ t.text }}</p></blockquote>
              <figcaption class="flex items-center gap-3 pt-4 border-t border-white/10">
                <div class="w-8 h-8 rounded-full bg-[#71B1A5]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#71B1A5]/35 transition-colors duration-500" aria-hidden="true">
                  <span class="text-[#71B1A5] text-xs font-semibold">{{ t.initials }}</span>
                </div>
                <div>
                  <span class="block text-xs font-semibold text-white/80">{{ t.name }}</span>
                  <span class="block text-[10px] text-white/35 tracking-[0.2em] uppercase mt-0.5">{{ t.role }}</span>
                </div>
              </figcaption>
            </figure>
          </template>
        </div>
      </div>
    </div>
    <div class="pointer-events-none absolute inset-y-0 left-0 w-32 z-20" style="background: linear-gradient(to right, #FDFBF9, transparent);" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-y-0 right-0 w-32 z-20" style="background: linear-gradient(to left, #FDFBF9, transparent);" aria-hidden="true"></div>
  </section>
</template>

<script setup>
const testimoniosRow1 = [
  { id: 1, text: 'Encontrar La Seda fue un punto de inflexión. Por fin un lugar en Granada donde te escuchan de verdad, sin prisas y con una profundidad que no había encontrado antes.', initials: 'M.L.', name: 'M. L.', role: 'Terapia Individual' },
  { id: 2, text: 'Como psicóloga, la formación de especialización ha sido la más completa que he realizado. Contenidos rigurosos, supervisión real y un enfoque humano que se nota en cada clase.', initials: 'C.M.', name: 'C. M.', role: 'Formación Profesional' },
  { id: 3, text: 'La atención infanto-juvenil que recibió mi hijo fue transformadora. Nos dieron herramientas como familia y vimos cambios reales en pocas semanas.', initials: 'P.G.', name: 'P. G.', role: 'Terapia Infanto-Juvenil' },
  { id: 4, text: 'Vine con mucho escepticismo y me fui con una perspectiva completamente nueva. El trabajo terapéutico es serio, cálido y muy profesional a la vez.', initials: 'J.V.', name: 'J. V.', role: 'Terapia Individual' },
  { id: 5, text: 'Después de años buscando apoyo, La Seda fue el primer centro donde sentí que realmente entendían lo que me pasaba. Un equipo extraordinario.', initials: 'R.B.', name: 'R. B.', role: 'Terapia de Pareja' },
]

const testimoniosRow2 = [
  { id: 6, text: 'El taller de Constelaciones Familiares me ayudó a comprender patrones que arrastraba desde la infancia. Una experiencia transformadora que recomiendo a cualquier persona.', initials: 'A.R.', name: 'A. R.', role: 'Talleres Vivenciales' },
  { id: 7, text: 'El espacio en sí mismo transmite calma. Desde el momento en que entras notas que es un lugar concebido para el bienestar. Eso también cura.', initials: 'L.F.', name: 'L. F.', role: 'Terapia Individual' },
  { id: 8, text: 'Gracias al trabajo con mi psicóloga de La Seda pude gestionar la ansiedad que me paralizaba. Ahora entiendo mis emociones en lugar de temerlos.', initials: 'S.P.', name: 'S. P.', role: 'Terapia Individual' },
  { id: 9, text: 'La terapia de pareja nos ayudó a comunicarnos de forma completamente diferente. Aprendimos a escucharnos de verdad por primera vez en años.', initials: 'E.T.', name: 'E. T.', role: 'Terapia de Pareja' },
  { id: 10, text: 'Asistí a la formación en mindfulness y cambió mi práctica clínica por completo. Los profesores son referencias reales en sus campos.', initials: 'N.O.', name: 'N. O.', role: 'Formación Profesional' },
]
</script>