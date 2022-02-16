/* eslint-disable no-param-reassign */
import { get } from 'axios'
import { loadLocale, setI18nLanguage } from '@/plugins/i18n'
import config, { Variable, Theme } from '@/config'
import { getGlobalThis } from '@vue/shared'

const namespace = 'Application'

// Mutations
export const SET_LOCALE = `${namespace}/setLocale`
export const SET_STAGE = `${namespace}/setStage`
export const SET_SCROLL_OFFSET = `${namespace}/setStage`
export const SET_MEDIA_STATE = `${namespace}/setMediaState`
export const SET_THEME_MODE = `${namespace}/setThemeMode`
export const SET_MENU_STATE = `${namespace}/setMenuState`
export const SET_LOADING_STATE = `${namespace}/setLoadingState`
export const SET_RESOURCES = `${namespace}/setResources`
export const SET_CATEGORIES = `${namespace}/setCategories`
export const SET_PROJECTS = `${namespace}/setProjects`
export const SET_ABOUT = `${namespace}/setAbout`
export const GET_RESOURCES = `${namespace}/getResources`
export const GET_CATEGORIES = `${namespace}/getCategories`
export const GET_PROJECTS = `${namespace}/getProjects`
export const GET_ABOUT = `${namespace}/getAbout`

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
    loadingState: false,
    scrollOffset: { x: 0, y: 0 },
    sw: window.innerWidth,
    sh: window.innerHeight,
    menuState: false,
    resources: null,
    categories: null,
    projects: null,
    about: null
  },
  getters: {},
  mutations: {
    [SET_STAGE](state, { sw, sh }) {
      state.sw = sw
      state.sh = sh
    },
    [SET_LOADING_STATE](state, loadingState) {
      state.loadingState = loadingState
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
    },
    [SET_RESOURCES](state, data) {
      console.log(data)
      state.resources = data
    },
    [SET_PROJECTS](state, data) {
      console.log(data)
      state.projects = data
    },
    [SET_CATEGORIES](state, data) {
      state.categories = data
    },
    [SET_ABOUT](state, data) {
      state.about = data
    }
  },
  actions: {
    async [GET_RESOURCES]({ commit }) {
      return new Promise((resolve) => {
        get(RESOURCES_API).then(({ data }) => {
          commit(SET_RESOURCES, data)
          resolve(data)
        })
      })
    },
    async [GET_CATEGORIES]({ commit }) {
      return new Promise((resolve) => {
        get(CATEGORIES_API).then(({ data }) => {
          commit(SET_CATEGORIES, data)
          resolve(data)
        })
      })
    },
    async [GET_PROJECTS]({ commit }) {
      return new Promise((resolve) => {
        get(PROJECTS_API).then(({ data }) => {
          commit(SET_PROJECTS, data)
          resolve(data)
        })
      })
    },
    async [GET_ABOUT]({ commit }) {
      return new Promise((resolve) => {
        get(ABOUT_API).then(({ data }) => {
          commit(SET_ABOUT, data)
          resolve(data)
        })
      })
    },
    async [CHANGE_LOCALE]({ commit }, locale) {
      await loadLocale(locale)
      setI18nLanguage(locale)
      commit(SET_LOCALE, locale)
    }
  }
}
