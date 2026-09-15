import type { ObjectDirective } from 'vue'

const revealDirective: ObjectDirective<HTMLElement> = {
  getSSRProps() {
    return { class: 'reveal-on-scroll' }
  },
  mounted(element) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add('is-revealed')
      return
    }

    element.classList.add('reveal-on-scroll')

    const observer = new IntersectionObserver(
      ([entry]) => {
        element.classList.toggle('is-revealed', entry.isIntersecting)
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(element)
    element._revealObserver = observer
  },
  beforeUnmount(element) {
    element._revealObserver?.disconnect()
  }
}

declare global {
  interface HTMLElement {
    _revealObserver?: IntersectionObserver
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', revealDirective)
})