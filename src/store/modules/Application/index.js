/* eslint-disable no-param-reassign */
import { loadLocale, setI18nLanguage } from '@/plugins/i18n'
import config, { Variable, Theme } from '@/config'

const namespace = 'Application'

// Mutations
export const SET_LOCALE = `${namespace}/setLocale`
export const SET_STAGE = `${namespace}/setStage`
export const SET_SCROLL_OFFSET = `${namespace}/setStage`
export const SET_MEDIA_STATE = `${namespace}/setMediaState`
export const SET_THEME_MODE = `${namespace}/setThemeMode`
export const SET_MENU_STATE = `${namespace}/setMenuState`

const ABOUT_API = 'https://back.anablagojevic.com/about'
const PROJECTS_API = 'https://back.anablagojevic.com/projects'
const CATEGORIES_API = 'https://back.anablagojevic.com/categories'
const RESOURCES_API = 'https://back.anablagojevic.com/resources'

// Actions
export const CHANGE_LOCALE = `${namespace}/changeLocale`

export default {
  state: {
    themeMode: null,
    locale: null,
    mediaState: null,
    scrollOffset: { x: 0, y: 0 },
    sw: window.innerWidth,
    sh: window.innerHeight,
    menuState: false
  },
  getters: {},
  mutations: {
    [SET_STAGE](state, { sw, sh }) {
      state.sw = sw
      state.sh = sh
    },
    [SET_SCROLL_OFFSET](state, { x, y }) {
      state.scrollOffset = { x, y }
    },
    [SET_LOCALE](state, locale) {
      state.locale = locale
    },
    [SET_MEDIA_STATE](state, mediaState) {
      state.mediaState = mediaState
    },
    [SET_THEME_MODE](state, themeMode) {
      state.themeMode = themeMode
      if (config.variables[Variable.THEME_MODE_ENABLED]) {
        document.documentElement.classList.remove(Theme.LIGHT)
        document.documentElement.classList.remove(Theme.DARK)
        document.documentElement.classList.add(themeMode)
      }
    },
    [SET_MENU_STATE](state, menuState) {
      state.menuState = menuState === undefined ? !state.menuState : menuState
    }
  },
  actions: {
    async [CHANGE_LOCALE]({ commit }, locale) {
      await loadLocale(locale)
      setI18nLanguage(locale)
      commit(SET_LOCALE, locale)
    }
  }
}
