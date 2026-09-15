// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  
  devtools: { enabled: true },
  
  css: [
    '@/assets/css/main.css'
  ],
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  
  router: {
    options: {
      // Fuerza al navegador a subir arriba del todo en cada cambio de ruta
      scrollBehaviorType: 'smooth' 
    }
  },
  
  tailwindcss: {
    exposeConfig: true,
    viewer: false,
    config: {
      content: [
        "./app/**/*.{vue,js,ts,jsx,tsx}",
        "./app.vue"
      ],
      theme: {
        extend: {
          fontFamily: {
            'mofiwe': ['Mofiwe', 'monospace'],
          },
          fontSize: {
            'sm':   ['0.95rem',  { lineHeight: '1.75' }],
            'base': ['1.125rem', { lineHeight: '1.85' }],
            'lg':   ['1.25rem',  { lineHeight: '1.8'  }],
            'xl':   ['1.5rem',   { lineHeight: '1.7'  }],
          },
        },
      },
    }
  },
  
  app: {
    // Transición sutil y elegante entre páginas
    pageTransition: { 
      name: 'page', 
    }
  }
})