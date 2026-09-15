<template>
  <main>
    <IndexHero :ready="heroReady" />
    <IndexFilosofia />
    <IndexServicios />
        <IndexGaleria />
    <IndexSocialMedia />

    <IndexTestimonios />
    <IndexCtaFinal />

    <IndexAnuncioRefinado />
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// ─── SEO & METADATOS ULTRA-OPTIMIZADOS (LOCAL & TEMÁTICO) ────────────────────
useSeoMeta({
  title: 'Centro de Psicología en Granada | Psicólogos y Terapia Gestalt La Seda',
  description: '¿Buscas psicólogos en Granada? En Centro La Seda somos especialistas en psicoterapia individual, de pareja, terapia Gestalt, talleres y formación. ¡Consúltanos!',
  ogTitle: 'La Seda · Centro de Psicología en Granada y Psicoterapia',
  ogDescription: 'Tu centro de psicología en Granada. Expertos en terapia Gestalt, crecimiento personal, terapia infanto-juvenil y formaciones especializadas.',
  ogImage: '/images/hero-consulta-laseda.jpg',
  ogType: 'website',
  ogUrl: 'https://www.laseda.es',
  ogLocale: 'es_ES',
  twitterCard: 'summary_large_image',
  twitterTitle: 'La Seda | Centro de Psicología en Granada',
  twitterDescription: 'Especialistas en psicoterapia clínica, psicología integrativa, terapia de pareja y talleres vivenciales en Granada.',
  twitterImage: '/images/hero-consulta-laseda.jpg',
  robots: 'index, follow, max-image-preview:large',
  canonical: 'https://www.laseda.es',
})

useHead({
  htmlAttrs: { lang: 'es' },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,500;1,9..40,300&display=swap',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        '@id': 'https://www.laseda.es/#business',
        name: 'La Seda · Centro de Psicología en Granada',
        alternateName: 'Centro de Psicología La Seda',
        description: 'Centro de psicología, psicoterapia integrativa y crecimiento personal en Granada. Especializados en terapia individual para adultos, terapia Gestalt, terapia de pareja, talleres vivenciales y formación para profesionales de la salud mental.',
        url: 'https://www.laseda.es',
        telephone: '+34-679-571-977',
        email: 'hola@laseda.es',
        priceRange: '€€',
        image: 'https://www.laseda.es/images/hero-consulta-laseda.jpg',
        knowsAbout: [
          'Psicología Clínica',
          'Psicoterapia',
          'Terapia Gestalt',
          'Terapia de Pareja',
          'Crecimiento Personal',
          'Gestión Emocional',
          'Ansiedad y Autoestima',
          'Formación para Psicólogos'
        ],
        address: { 
          '@type': 'PostalAddress', 
          streetAddress: 'Dirección del Centro', 
          addressLocality: 'Granada', 
          addressRegion: 'Andalucía', 
          postalCode: '18001', 
          addressCountry: 'ES' 
        },
        geo: { 
          '@type': 'GeoCoordinates', 
          latitude: 37.1773, 
          longitude: -3.5986 
        },
        openingHoursSpecification: [
          { 
            '@type': 'OpeningHoursSpecification', 
            dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], 
            opens: '09:00', 
            closes: '20:00' 
          }
        ],
        sameAs: [
          'https://www.instagram.com/centrolaseda', 
          'https://www.facebook.com/CentroLaSeda',
          'https://www.tiktok.com/@centro.la.seda'
        ],
        aggregateRating: { 
          '@type': 'AggregateRating', 
          ratingValue: '5', 
          reviewCount: '15', 
          bestRating: '5', 
          worstRating: '1' 
        }
      }),
    },
  ],
})

const heroReady = ref(false)

onMounted(() => {
  document.body.style.overflow = 'hidden'
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      heroReady.value = true
      setTimeout(() => { document.body.style.overflow = '' }, 1550)
    })
  })
})

onUnmounted(() => {
  document.body.style.overflow = ''
})

const valores = [
  {
    title: 'Trato Humano',
    desc: 'Sin prisas, con escucha genuina y profunda.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>',
  },
  {
    title: 'Basado en Evidencia',
    desc: 'Métodos con respaldo científico actualizado.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>',
  },
  {
    title: 'Confidencialidad',
    desc: 'Tu privacidad, protegida en todo momento.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
  },
  {
    title: 'Equipo Experto',
    desc: 'Psicólogos colegiados y en formación continua.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>',
  },
]
</script>