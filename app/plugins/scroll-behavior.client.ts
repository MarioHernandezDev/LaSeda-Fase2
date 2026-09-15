// app/plugins/scroll-behavior.client.ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.afterEach((to, from) => {
    if (to.path === from.path && to.hash) return

    // Dejamos un ligerísimo margen para que elDOM se asiente antes de deslizar
    setTimeout(() => {
      // 1. Subida fluida de la ventana global
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

      // 2. Por si acaso el scroll está contenido en una etiqueta interna
      const siteContainer = document.querySelector('main') || document.querySelector('#__nuxt')
      if (siteContainer) {
        siteContainer.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 50) 
  })
})