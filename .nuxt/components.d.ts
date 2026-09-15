
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


export const AppFooter: typeof import("../app/components/AppFooter.vue")['default']
export const AppHeader: typeof import("../app/components/AppHeader.vue")['default']
export const AppMobileMenu: typeof import("../app/components/AppMobileMenu.vue")['default']
export const ChatGuiado: typeof import("../app/components/ChatGuiado.vue")['default']
export const CookieBanner: typeof import("../app/components/CookieBanner.vue")['default']
export const CustomCursor: typeof import("../app/components/CustomCursor.vue")['default']
export const PageHero: typeof import("../app/components/PageHero.vue")['default']
export const SeccionIntro: typeof import("../app/components/SeccionIntro.vue")['default']
export const TeamCard: typeof import("../app/components/TeamCard.vue")['default']
export const ConocenosAcademic: typeof import("../app/components/conocenos/ConocenosAcademic.vue")['default']
export const ConocenosBiography: typeof import("../app/components/conocenos/ConocenosBiography.vue")['default']
export const ConocenosMiniHero: typeof import("../app/components/conocenos/ConocenosMiniHero.vue")['default']
export const ConocenosSpecialties: typeof import("../app/components/conocenos/ConocenosSpecialties.vue")['default']
export const FormationEstructure: typeof import("../app/components/formation/FormationEstructure.vue")['default']
export const FormationOverview: typeof import("../app/components/formation/FormationOverview.vue")['default']
export const FormationProcess: typeof import("../app/components/formation/FormationProcess.vue")['default']
export const FormationRelated: typeof import("../app/components/formation/FormationRelated.vue")['default']
export const FormationTeam: typeof import("../app/components/formation/FormationTeam.vue")['default']
export const IndexAnuncioRefinado: typeof import("../app/components/index/AnuncioRefinado.vue")['default']
export const IndexCtaFinal: typeof import("../app/components/index/CtaFinal.vue")['default']
export const IndexFilosofia: typeof import("../app/components/index/Filosofia.vue")['default']
export const IndexGaleria: typeof import("../app/components/index/Galeria.vue")['default']
export const IndexHero: typeof import("../app/components/index/Hero.vue")['default']
export const IndexServicios: typeof import("../app/components/index/Servicios.vue")['default']
export const IndexSocialMedia: typeof import("../app/components/index/SocialMedia.vue")['default']
export const IndexTestimonios: typeof import("../app/components/index/Testimonios.vue")['default']
export const TalleresWorkshopBenefits: typeof import("../app/components/talleres/WorkshopBenefits.vue")['default']
export const TalleresWorkshopDates: typeof import("../app/components/talleres/WorkshopDates.vue")['default']
export const TalleresWorkshopFaqs: typeof import("../app/components/talleres/WorkshopFaqs.vue")['default']
export const TalleresWorkshopIntro: typeof import("../app/components/talleres/WorkshopIntro.vue")['default']
export const TherapyFAQ: typeof import("../app/components/therapy/TherapyFAQ.vue")['default']
export const TherapyHero: typeof import("../app/components/therapy/TherapyHero.vue")['default']
export const TherapyOverview: typeof import("../app/components/therapy/TherapyOverview.vue")['default']
export const TherapyProcess: typeof import("../app/components/therapy/TherapyProcess.vue")['default']
export const TherapyRelated: typeof import("../app/components/therapy/TherapyRelated.vue")['default']
export const TherapyTeam: typeof import("../app/components/therapy/TherapyTeam.vue")['default']
export const TherapyWorkAreas: typeof import("../app/components/therapy/TherapyWorkAreas.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAppFooter: LazyComponent<typeof import("../app/components/AppFooter.vue")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../app/components/AppHeader.vue")['default']>
export const LazyAppMobileMenu: LazyComponent<typeof import("../app/components/AppMobileMenu.vue")['default']>
export const LazyChatGuiado: LazyComponent<typeof import("../app/components/ChatGuiado.vue")['default']>
export const LazyCookieBanner: LazyComponent<typeof import("../app/components/CookieBanner.vue")['default']>
export const LazyCustomCursor: LazyComponent<typeof import("../app/components/CustomCursor.vue")['default']>
export const LazyPageHero: LazyComponent<typeof import("../app/components/PageHero.vue")['default']>
export const LazySeccionIntro: LazyComponent<typeof import("../app/components/SeccionIntro.vue")['default']>
export const LazyTeamCard: LazyComponent<typeof import("../app/components/TeamCard.vue")['default']>
export const LazyConocenosAcademic: LazyComponent<typeof import("../app/components/conocenos/ConocenosAcademic.vue")['default']>
export const LazyConocenosBiography: LazyComponent<typeof import("../app/components/conocenos/ConocenosBiography.vue")['default']>
export const LazyConocenosMiniHero: LazyComponent<typeof import("../app/components/conocenos/ConocenosMiniHero.vue")['default']>
export const LazyConocenosSpecialties: LazyComponent<typeof import("../app/components/conocenos/ConocenosSpecialties.vue")['default']>
export const LazyFormationEstructure: LazyComponent<typeof import("../app/components/formation/FormationEstructure.vue")['default']>
export const LazyFormationOverview: LazyComponent<typeof import("../app/components/formation/FormationOverview.vue")['default']>
export const LazyFormationProcess: LazyComponent<typeof import("../app/components/formation/FormationProcess.vue")['default']>
export const LazyFormationRelated: LazyComponent<typeof import("../app/components/formation/FormationRelated.vue")['default']>
export const LazyFormationTeam: LazyComponent<typeof import("../app/components/formation/FormationTeam.vue")['default']>
export const LazyIndexAnuncioRefinado: LazyComponent<typeof import("../app/components/index/AnuncioRefinado.vue")['default']>
export const LazyIndexCtaFinal: LazyComponent<typeof import("../app/components/index/CtaFinal.vue")['default']>
export const LazyIndexFilosofia: LazyComponent<typeof import("../app/components/index/Filosofia.vue")['default']>
export const LazyIndexGaleria: LazyComponent<typeof import("../app/components/index/Galeria.vue")['default']>
export const LazyIndexHero: LazyComponent<typeof import("../app/components/index/Hero.vue")['default']>
export const LazyIndexServicios: LazyComponent<typeof import("../app/components/index/Servicios.vue")['default']>
export const LazyIndexSocialMedia: LazyComponent<typeof import("../app/components/index/SocialMedia.vue")['default']>
export const LazyIndexTestimonios: LazyComponent<typeof import("../app/components/index/Testimonios.vue")['default']>
export const LazyTalleresWorkshopBenefits: LazyComponent<typeof import("../app/components/talleres/WorkshopBenefits.vue")['default']>
export const LazyTalleresWorkshopDates: LazyComponent<typeof import("../app/components/talleres/WorkshopDates.vue")['default']>
export const LazyTalleresWorkshopFaqs: LazyComponent<typeof import("../app/components/talleres/WorkshopFaqs.vue")['default']>
export const LazyTalleresWorkshopIntro: LazyComponent<typeof import("../app/components/talleres/WorkshopIntro.vue")['default']>
export const LazyTherapyFAQ: LazyComponent<typeof import("../app/components/therapy/TherapyFAQ.vue")['default']>
export const LazyTherapyHero: LazyComponent<typeof import("../app/components/therapy/TherapyHero.vue")['default']>
export const LazyTherapyOverview: LazyComponent<typeof import("../app/components/therapy/TherapyOverview.vue")['default']>
export const LazyTherapyProcess: LazyComponent<typeof import("../app/components/therapy/TherapyProcess.vue")['default']>
export const LazyTherapyRelated: LazyComponent<typeof import("../app/components/therapy/TherapyRelated.vue")['default']>
export const LazyTherapyTeam: LazyComponent<typeof import("../app/components/therapy/TherapyTeam.vue")['default']>
export const LazyTherapyWorkAreas: LazyComponent<typeof import("../app/components/therapy/TherapyWorkAreas.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
