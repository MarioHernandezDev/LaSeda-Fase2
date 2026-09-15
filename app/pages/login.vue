<template>
  <div class="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-[#FDFBF9]">
    
    <div class="w-12 h-px bg-[#71B1A5] mb-8" />
    
    <p class="formation-label mb-4">Espacio Digital La Seda</p>
    
    <h1 class="font-serif italic text-[#27252B] text-4xl md:text-5xl leading-[1.2] max-w-2xl mb-6">
      El área privada para pacientes y profesionales está en camino
    </h1>
    
    <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/65 max-w-xl mb-12 font-light">
      Estamos construyendo una plataforma web segura y confidencial. Desde ella, nuestro equipo clínico podrá gestionar expedientes y las personas usuarias tendrán acceso directo a sus citas, un entorno de mensajería protegido y materiales exclusivos de nuestras formaciones.
    </p>

    <NuxtLink to="/" class="btn-primary">
      Volver al inicio
      <span class="w-6 h-px bg-white/60 inline-block" />
    </NuxtLink>
    
  </div>
</template>

<script setup>
// Puedes añadir lógica de meta tags para que Google no indexe temporalmente esta vista de espera
useHead({
  title: 'Área Privada (Próximamente) · Centro de Psicología La Seda',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>