import '../style/tailwind.scss'
import '../style/main.scss'

import { createApp } from 'vue'
import MobileDetect from 'mobile-detect'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
// import { Draggable } from 'gsap/Draggable'
// import { InertiaPlugin } from 'gsap/InertiaPlugin'
import router from '@/router'
import { RouteNames } from '@/router/routes'
import getStore from '@/store'
import i18nSetup, { loadLocale } from '@/plugins/i18n'
import vueHead from '@/plugins/vue-head'
import InstallPlugin from '@/utils/InstallPlugin'
import RegisterPlugin from '@/utils/RegisterPlugin'
import WaitForStylesheetsLoaded from '@/utils/WaitForStylesheetsLoaded'
import createPath from '@/utils/RouteUtils'
import { getVersioned, getStatic } from '@/utils/AssetPath'
import { Ease } from '@/utils/CustomEase'
import config, { Property, Variable, Environment, Theme } from '@/config'
import { ImageFormat } from '@/config/globals'
import $eventBus, { Events } from '@/events'
import { SET_LOCALE, SET_THEME_MODE } from '@/store/modules/Application'
import directives from '@/directives'
import components from '@/components'
import App from './app/App.vue'

// Service worker (works only in production mode)
require('@/utils/ServiceWorker')
gsap.registerPlugin(SplitText, ScrollTrigger)

const md = new MobileDetect(window.navigator.userAgent)
const store = getStore()
const app = createApp(App)

const isIOS = () => {
  if (/iPad|iPhone|iPod/.test(navigator.platform)) {
    return true
  } else {
    return navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)
  }
}

const isIpadOS = () => {
  return navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)
}

const $mobile = md.mobile() || isIOS() || isIpadOS()
const $phone = md.phone() !== null

// Register global directives and components
RegisterPlugin.registerDirectives(app, directives)
RegisterPlugin.registerComponents(app, components)

const $devMode = process.env.NODE_ENV === Environment.DEVELOPMENT
const startup = async () => {
  // store theme mode
  store.commit(SET_THEME_MODE, config.variables[Variable.THEME_MODE])

  // store the current locale
  store.commit(SET_LOCALE, config.properties[Property.DEFAULT_LOCALE])

  app.use(vueHead)
  app.use(InstallPlugin, {
    $vRoot: config.variables[Variable.VERSIONED_STATIC_ROOT],
    $sRoot: config.variables[Variable.STATIC_ROOT],
    $eventBus,
    $devMode,
    $mobile,
    $phone,
    Events,
    Ease,
    ImageFormat,
    RouteNames,
    createPath,
    getVersioned,
    getStatic
  })

  if ($devMode) await WaitForStylesheetsLoaded(document)
  app.use(store).use(router).mount('#app')
}

i18nSetup().then((i18n) => {
  app.use(i18n)
  loadLocale(config.properties[Property.DEFAULT_LOCALE]).then(startup)
})
