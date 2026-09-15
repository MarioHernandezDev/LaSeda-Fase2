<template>
  <header v-reveal class="page-hero-root relative pt-24 md:pt-24">

    <div class="page-hero-panel-left bg-[#F5F2EE] flex flex-col justify-center py-12 md:py-0 relative">
      
      <div
        class="absolute inset-0 opacity-[0.018] pointer-events-none z-0"
        style="background-image: radial-gradient(circle, #27252B 1px, transparent 1px); background-size: 24px 24px;"
        aria-hidden="true"
      />
      <div
        class="absolute top-[-10%] left-[-20%] w-[480px] h-[480px] rounded-full bg-[#71B1A5]/5 blur-[100px] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div class="w-full relative z-10 px-6 md:px-12 lg:px-16 xl:px-20">
        
        <div class="flex items-center gap-3 mb-6 lg:mb-8">
          <span class="w-5 h-px bg-[#71B1A5]" aria-hidden="true"></span>
          <p class="text-[#71B1A5] text-[10px] md:text-[11px] tracking-[0.42em] uppercase font-bold m-0 p-0 leading-none">
            {{ label }}
          </p>
        </div>

        <h1
          class="font-serif italic font-medium leading-[1.12] tracking-tight text-[#27252B] mb-8 relative flex items-start md:items-center flex-wrap"
          style="font-size: clamp(2.1rem, 3.5vw, 3.8rem);"
        >
          <div class="relative z-10">
            {{ titleMain }}
            <span 
              v-if="titleAccent"
              class="not-italic font-normal text-[#71B1A5] block mt-2 font-sans"
              style="font-size: clamp(1.4rem, 2.4vw, 2.6rem); letter-spacing: 0.04em;"
            >
              {{ titleAccent }}
            </span>
          </div>
        </h1>

        <p
          class="text-stone-600/85 leading-[1.85] font-light mb-8 lg:mb-10 max-w-md hidden md:block"
          style="font-size: clamp(0.85rem, 1.1vw, 1rem);"
        >
          <slot name="description" />
        </p>

        <div class="flex flex-col sm:flex-row items-center gap-4 w-full relative z-20">
          
          <NuxtLink to="/contacto" class="group btn-primary">
            <span>Hablemos</span>
            <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center pointer-events-none">
              <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
              <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>
          </NuxtLink>

          <NuxtLink
            v-if="secondaryLink && secondaryLabel"
            :to="secondaryLink"
            @click="smoothScroll"
            class="group btn-secondary"
          >
            <span>{{ secondaryLabel }}</span>
            <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center text-[#71B1A5] pointer-events-none">
              <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
              <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute fill-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>
          </NuxtLink>
        </div>

      </div>

      <div
        class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[45%] w-px"
        style="background: linear-gradient(to bottom, transparent, rgba(113,177,165,0.35), transparent);"
        aria-hidden="true"
      ></div>

    </div>

    <div class="page-hero-panel-right relative h-[min(82vw,28rem)] md:h-auto">
      <div 
        class="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-[#F5F2EE] to-transparent z-10 pointer-events-none md:block hidden"
        aria-hidden="true"
      />
      <NuxtImg
        :src="image"
        :alt="imageAlt"
        class="w-full h-full object-cover object-center relative z-0"
        format="webp"
        fetchpriority="high"
        preload
      />
    </div>

  </header>
</template>

<script setup>
const props = defineProps({
  label:          { type: String, required: true },
  titleMain:      { type: String, required: true },
  titleAccent:    { type: String, default: '' },
  image:          { type: String, required: true },
  imageAlt:       { type: String, required: true },
  secondaryLink:  { type: String, default: '' },
  secondaryLabel: { type: String, default: '' },
})

const smoothScroll = (event) => {
  if (!props.secondaryLink.startsWith('#')) return

  event.preventDefault()
  document.getElementById(props.secondaryLink.slice(1))?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
@media (max-width: 767px) {
  .page-hero-root {
    display: flex !important;
    flex-direction: column !important;
    height: auto !important;
  }

  .page-hero-panel-left {
    position: relative !important;
    inset: auto !important;
    width: 100% !important;
    height: auto !important;
  }

  .page-hero-panel-right {
    position: relative !important;
    inset: auto !important;
    width: 100% !important;
    height: 280px !important;
  }
}

@media (min-width: 768px) {
  .page-hero-root {
    display: flex;
  }
  .page-hero-panel-left,
  .page-hero-panel-right {
    width: 50%;
    flex-shrink: 0;
  }
}
</style>