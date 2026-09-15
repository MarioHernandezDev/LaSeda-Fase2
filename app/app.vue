<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <CookieBanner v-if="$route.path !== '/video'" />
</template>