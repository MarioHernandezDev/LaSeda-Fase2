
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  AppFooter: typeof import("../../app/components/AppFooter.vue")['default']
  AppHeader: typeof import("../../app/components/AppHeader.vue")['default']
  AppMobileMenu: typeof import("../../app/components/AppMobileMenu.vue")['default']
  ChatGuiado: typeof import("../../app/components/ChatGuiado.vue")['default']
  CookieBanner: typeof import("../../app/components/CookieBanner.vue")['default']
  CustomCursor: typeof import("../../app/components/CustomCursor.vue")['default']
  PageHero: typeof import("../../app/components/PageHero.vue")['default']
  SeccionIntro: typeof import("../../app/components/SeccionIntro.vue")['default']
  TeamCard: typeof import("../../app/components/TeamCard.vue")['default']
  ConocenosAcademic: typeof import("../../app/components/conocenos/ConocenosAcademic.vue")['default']
  ConocenosBiography: typeof import("../../app/components/conocenos/ConocenosBiography.vue")['default']
  ConocenosMiniHero: typeof import("../../app/components/conocenos/ConocenosMiniHero.vue")['default']
  ConocenosSpecialties: typeof import("../../app/components/conocenos/ConocenosSpecialties.vue")['default']
  FormationEstructure: typeof import("../../app/components/formation/FormationEstructure.vue")['default']
  FormationOverview: typeof import("../../app/components/formation/FormationOverview.vue")['default']
  FormationProcess: typeof import("../../app/components/formation/FormationProcess.vue")['default']
  FormationRelated: typeof import("../../app/components/formation/FormationRelated.vue")['default']
  FormationTeam: typeof import("../../app/components/formation/FormationTeam.vue")['default']
  IndexAnuncioRefinado: typeof import("../../app/components/index/AnuncioRefinado.vue")['default']
  IndexCtaFinal: typeof import("../../app/components/index/CtaFinal.vue")['default']
  IndexFilosofia: typeof import("../../app/components/index/Filosofia.vue")['default']
  IndexGaleria: typeof import("../../app/components/index/Galeria.vue")['default']
  IndexHero: typeof import("../../app/components/index/Hero.vue")['default']
  IndexServicios: typeof import("../../app/components/index/Servicios.vue")['default']
  IndexSocialMedia: typeof import("../../app/components/index/SocialMedia.vue")['default']
  IndexTestimonios: typeof import("../../app/components/index/Testimonios.vue")['default']
  TalleresWorkshopBenefits: typeof import("../../app/components/talleres/WorkshopBenefits.vue")['default']
  TalleresWorkshopDates: typeof import("../../app/components/talleres/WorkshopDates.vue")['default']
  TalleresWorkshopFaqs: typeof import("../../app/components/talleres/WorkshopFaqs.vue")['default']
  TalleresWorkshopIntro: typeof import("../../app/components/talleres/WorkshopIntro.vue")['default']
  TherapyFAQ: typeof import("../../app/components/therapy/TherapyFAQ.vue")['default']
  TherapyHero: typeof import("../../app/components/therapy/TherapyHero.vue")['default']
  TherapyOverview: typeof import("../../app/components/therapy/TherapyOverview.vue")['default']
  TherapyProcess: typeof import("../../app/components/therapy/TherapyProcess.vue")['default']
  TherapyRelated: typeof import("../../app/components/therapy/TherapyRelated.vue")['default']
  TherapyTeam: typeof import("../../app/components/therapy/TherapyTeam.vue")['default']
  TherapyWorkAreas: typeof import("../../app/components/therapy/TherapyWorkAreas.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
  NuxtImg: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
  NuxtPicture: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAppFooter: LazyComponent<typeof import("../../app/components/AppFooter.vue")['default']>
  LazyAppHeader: LazyComponent<typeof import("../../app/components/AppHeader.vue")['default']>
  LazyAppMobileMenu: LazyComponent<typeof import("../../app/components/AppMobileMenu.vue")['default']>
  LazyChatGuiado: LazyComponent<typeof import("../../app/components/ChatGuiado.vue")['default']>
  LazyCookieBanner: LazyComponent<typeof import("../../app/components/CookieBanner.vue")['default']>
  LazyCustomCursor: LazyComponent<typeof import("../../app/components/CustomCursor.vue")['default']>
  LazyPageHero: LazyComponent<typeof import("../../app/components/PageHero.vue")['default']>
  LazySeccionIntro: LazyComponent<typeof import("../../app/components/SeccionIntro.vue")['default']>
  LazyTeamCard: LazyComponent<typeof import("../../app/components/TeamCard.vue")['default']>
  LazyConocenosAcademic: LazyComponent<typeof import("../../app/components/conocenos/ConocenosAcademic.vue")['default']>
  LazyConocenosBiography: LazyComponent<typeof import("../../app/components/conocenos/ConocenosBiography.vue")['default']>
  LazyConocenosMiniHero: LazyComponent<typeof import("../../app/components/conocenos/ConocenosMiniHero.vue")['default']>
  LazyConocenosSpecialties: LazyComponent<typeof import("../../app/components/conocenos/ConocenosSpecialties.vue")['default']>
  LazyFormationEstructure: LazyComponent<typeof import("../../app/components/formation/FormationEstructure.vue")['default']>
  LazyFormationOverview: LazyComponent<typeof import("../../app/components/formation/FormationOverview.vue")['default']>
  LazyFormationProcess: LazyComponent<typeof import("../../app/components/formation/FormationProcess.vue")['default']>
  LazyFormationRelated: LazyComponent<typeof import("../../app/components/formation/FormationRelated.vue")['default']>
  LazyFormationTeam: LazyComponent<typeof import("../../app/components/formation/FormationTeam.vue")['default']>
  LazyIndexAnuncioRefinado: LazyComponent<typeof import("../../app/components/index/AnuncioRefinado.vue")['default']>
  LazyIndexCtaFinal: LazyComponent<typeof import("../../app/components/index/CtaFinal.vue")['default']>
  LazyIndexFilosofia: LazyComponent<typeof import("../../app/components/index/Filosofia.vue")['default']>
  LazyIndexGaleria: LazyComponent<typeof import("../../app/components/index/Galeria.vue")['default']>
  LazyIndexHero: LazyComponent<typeof import("../../app/components/index/Hero.vue")['default']>
  LazyIndexServicios: LazyComponent<typeof import("../../app/components/index/Servicios.vue")['default']>
  LazyIndexSocialMedia: LazyComponent<typeof import("../../app/components/index/SocialMedia.vue")['default']>
  LazyIndexTestimonios: LazyComponent<typeof import("../../app/components/index/Testimonios.vue")['default']>
  LazyTalleresWorkshopBenefits: LazyComponent<typeof import("../../app/components/talleres/WorkshopBenefits.vue")['default']>
  LazyTalleresWorkshopDates: LazyComponent<typeof import("../../app/components/talleres/WorkshopDates.vue")['default']>
  LazyTalleresWorkshopFaqs: LazyComponent<typeof import("../../app/components/talleres/WorkshopFaqs.vue")['default']>
  LazyTalleresWorkshopIntro: LazyComponent<typeof import("../../app/components/talleres/WorkshopIntro.vue")['default']>
  LazyTherapyFAQ: LazyComponent<typeof import("../../app/components/therapy/TherapyFAQ.vue")['default']>
  LazyTherapyHero: LazyComponent<typeof import("../../app/components/therapy/TherapyHero.vue")['default']>
  LazyTherapyOverview: LazyComponent<typeof import("../../app/components/therapy/TherapyOverview.vue")['default']>
  LazyTherapyProcess: LazyComponent<typeof import("../../app/components/therapy/TherapyProcess.vue")['default']>
  LazyTherapyRelated: LazyComponent<typeof import("../../app/components/therapy/TherapyRelated.vue")['default']>
  LazyTherapyTeam: LazyComponent<typeof import("../../app/components/therapy/TherapyTeam.vue")['default']>
  LazyTherapyWorkAreas: LazyComponent<typeof import("../../app/components/therapy/TherapyWorkAreas.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
