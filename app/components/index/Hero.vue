<template>
  <header
    class="hero-root relative min-h-[90vh] bg-[#FDFBF9] overflow-hidden flex flex-col justify-center pt-24 md:pt-28"
    :class="{ 'hero-animated': ready }"
  >
    <div class="absolute inset-0 z-0 pointer-events-none select-none max-md:relative max-md:order-2 max-md:h-[45vh] max-md:mt-8">
      <div class="absolute inset-0 md:left-1/3 lg:left-[55%] transition-all duration-[2000ms] ease-out scale-105 hero-bg-image">
        <NuxtImg
          src="/images/hero-consulta-laseda.jpg"
          alt="Espacio de consulta y bienestar en Granada — Centro La Seda"
          class="w-full h-full object-cover object-center filter grayscale-[10%] contrast-[102%] brightness-[102%]"
          format="webp"
          fetchpriority="high"
          preload
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#FDFBF9] via-[#FDFBF9]/90 sm:via-[#FDFBF9]/60 to-transparent max-md:hidden"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#FDFBF9] via-transparent to-transparent max-md:hidden"></div>
      </div>
      
      <div class="absolute inset-0 opacity-[0.015] max-md:hidden" style="background-image: radial-gradient(#27252B 1px, transparent 1px); background-size: 40px 40px;" aria-hidden="true"></div>
      <div class="absolute top-12 right-12 w-[40vw] h-[40vw] rounded-full bg-[#71B1A5]/6 blur-[120px] max-md:hidden" aria-hidden="true"></div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 max-md:order-1">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div class="lg:col-span-9 max-w-3xl">
          <div class="hero-text-item flex items-center gap-4 mb-6" style="--i:1">
            <span class="w-12 h-px bg-[#71B1A5]/60"></span>
            <p class="text-[#71B1A5] text-[10px] md:text-[11px] tracking-[0.45em] uppercase font-bold">
              Centro La Seda
            </p>
          </div>

          <div class="hero-text-item mb-8" style="--i:2">

            <h1 class="text-[#27252B] font-serif italic font-light text-[3rem] sm:text-[4.2rem] lg:text-[5.2rem] leading-[1.1] mb-6">
              Psicología, terapia y formación en Granada
            </h1>
            <p class="text-stone-600/90 font-light text-base md:text-lg leading-relaxed max-w-2xl">
              Cuidamos procesos de cambio y formamos a profesionales desde una perspectiva humanista, integrativa y multidisciplinar.            </p>
          </div>

          <div class="hero-text-item flex flex-col sm:flex-row gap-4 items-center justify-start w-full" style="--i:4">
            <NuxtLink
              to="/terapias"
              class="group relative inline-flex items-center justify-center gap-3 bg-[#27252B] text-white px-8 py-4 md:min-w-[210px] text-[10.5px] tracking-[0.28em] uppercase font-bold rounded-full transition-all duration-500 hover:bg-[#71B1A5] w-full sm:w-auto shadow-lg shadow-[#27252B]/5 hover:shadow-xl hover:shadow-[#71B1A5]/20 transform hover:-translate-y-0.5 overflow-hidden border border-transparent"
            >
              <span> Ver terapias</span>
              <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center">
                <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
                <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/conocenos"
              class="group relative inline-flex items-center justify-center gap-3 border border-[#27252B]/30 bg-[#FDFBF9]/60 backdrop-blur-md text-[#27252B] px-8 py-4 md:min-w-[210px] text-[10.5px] tracking-[0.28em] uppercase font-bold rounded-full transition-all duration-500 hover:border-[#71B1A5] hover:text-[#71B1A5] hover:bg-white/90 w-full sm:w-auto shadow-sm hover:shadow-xl hover:shadow-[#71B1A5]/10 transform hover:-translate-y-0.5 overflow-hidden"
            >
              <span>Conócenos</span>
              <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center text-[#71B1A5]">
                <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
                <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </div>
            </NuxtLink>
          </div>
        </div>

        <div class="lg:col-span-3 flex justify-end max-md:hidden">
          <div class="hero-text-item relative w-40 h-40 bg-[#F5F2EE]/60 backdrop-blur-sm rounded-full border border-[#27252B]/5 shadow-sm group/butterfly overflow-hidden flex items-center justify-center" style="--i:5">
            <div class="absolute inset-0 m-auto w-12 h-12 bg-[#71B1A5]/10 rounded-full blur-lg transition-transform duration-700 group-hover/butterfly:scale-150 pointer-events-none"></div>
            
            <div class="scene-container scale-[0.55] transform translate-y-[-12px]">
              <div class="butterfly-3d">
                <div class="wing-3d">
                  <div class="bit-3d"></div>
                  <div class="bit-3d"></div>
                </div>
                <div class="wing-3d">
                  <div class="bit-3d"></div>
                  <div class="bit-3d"></div>
                </div>
              </div>
              <div class="shadow-3d"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  ready: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.hero-text-item { opacity: 0; transform: translateY(30px); will-change: transform, opacity; }
.hero-bg-image { opacity: 0; transform: scale(1.06); transition: transform 2.2s cubic-bezier(0.215, 0.610, 0.355, 1), opacity 1.6s ease-out; }
.hero-animated .hero-text-item { opacity: 1; transform: translateY(0); transition: opacity 1.2s cubic-bezier(0.215, 0.610, 0.355, 1), transform 1.2s cubic-bezier(0.215, 0.610, 0.355, 1); transition-delay: calc(0.15s + var(--i, 1) * 0.12s); }
.hero-animated .hero-bg-image { opacity: 1; transform: scale(1.01); }
.scene-container { perspective: 800px; perspective-origin: 50% 50%; position: relative; }
.butterfly-3d { animation: hoverButterfly 250ms cubic-bezier(.48,.01,.54,1) infinite; animation-direction: alternate; animation-fill-mode: reverse; position: relative; width: 30px; transform-style: preserve-3d; transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg) translateY(0px); z-index: 10; }
.butterfly-3d::before { content: ''; display: block; position: absolute; width: 8px; height: 75px; top: 10px; left: 50%; margin-left: -4px; border-radius: 50%; z-index: 2; background: #27252B; transform: rotateY(100deg); }
.shadow-3d { animation: shadowButterfly 250ms cubic-bezier(.48,.01,.54,1) infinite; animation-direction: alternate; animation-fill-mode: reverse; display: block; position: absolute; width: 80px; height: 8px; border-radius: 50%; opacity: 0.08; background: #27252B; transform-origin: 50% 50%; transform: translateX(-30px) translateY(85px); }
.wing-3d { display: block; opacity: 0.85; position: absolute; top: 0; }
.wing-3d:first-child { animation: leftFlap 250ms cubic-bezier(.48,.01,.54,1) infinite; animation-direction: alternate; animation-fill-mode: reverse; width: 1px; height: 1px; left: 0; z-index: 3; transform: rotateY(-20deg); transform-origin: 700% 50%; }
.wing-3d:last-child { animation: rightFlap 250ms cubic-bezier(.48,.01,.54,1) infinite; animation-direction: alternate; animation-fill-mode: reverse; width: 1px; height: 1px; right: 0; z-index: 1; transform: rotateY(200deg); }
.wing-3d .bit-3d { background: #71B1A5; }
.wing-3d .bit-3d::after { background: #8ec4bc; }
.wing-3d .bit-3d, .wing-3d .bit-3d::after { position: absolute; top: 0; right: 0; border-radius: 50%; overflow: hidden; transform-origin: 100% 50%; }
.wing-3d :first-child { width: 130px; height: 70px; top: 15px; text-align: center; transform: rotateZ(40deg); }
.wing-3d :first-child::after { content: ''; display: inline-block; width: 100px; height: 60px; top: 5px; left: -30px; }
.wing-3d :last-child { width: 100px; height: 55px; transform: rotateZ(-40deg); }
.wing-3d :last-child::after { content: ''; display: inline-block; width: 60px; height: 45px; top: 5px; left: -24px; z-index: 1; }
@keyframes hoverButterfly { 0% { transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg) translateZ(0px); } 100% { transform: rotateX(50deg) rotateY(20deg) rotateZ(-50deg) translateZ(-6px); } }
@keyframes shadowButterfly { 0% { transform: translateX(-30px) translateY(85px) scale(1,1); } 100% { transform: translateX(-30px) translateY(85px) scale(1.15, 1.15); } }
@keyframes leftFlap { 0% { transform: rotateY(-20deg); } 100% { transform: rotateY(90deg); } }
@keyframes rightFlap { 0% { transform: rotateY(200deg); } 100% { transform: rotateY(90deg); } }
@media (prefers-reduced-motion: reduce) {
  .hero-text-item, .hero-bg-image, .butterfly-3d, .wing-3d, .shadow-3d { transform: none !important; opacity: 1 !important; transition: none !important; animation: none !important; }
}
</style>