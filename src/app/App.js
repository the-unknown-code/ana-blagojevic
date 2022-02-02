import { defineComponent } from 'vue'
import { mapActions, mapMutations } from 'vuex'
import { SET_STAGE, CHANGE_LOCALE, SET_MENU_STATE } from '@/store/modules/Application'
import Navigation from '@/components/Navigation/Navigation.vue'
import Header from '@/components/Atoms/Header/Header.vue'
import Footer from '@/components/Atoms/Footer/Footer.vue'
import MouseTrail from '@/components/Atoms/MouseTrail/MouseTrail.vue'

export default defineComponent({
  name: 'App',
  components: { Navigation, Header, Footer, MouseTrail },
  created() {
    // window.addEventListener(this.Events.RESIZE, this.onResizeHandler)
    this.onResizeHandler()
  },
  watch: {
    $route() {
      this.setMenuState(false)
    }
  },
  methods: {
    ...mapActions({
      changeLanguage: CHANGE_LOCALE
    }),
    ...mapMutations({
      setMenuState: SET_MENU_STATE,
      setStage: SET_STAGE
    }),
    onResizeHandler() {
      const { innerWidth, innerHeight } = window
      this.setStage({ sw: innerWidth, sh: innerHeight })
      this.$eventBus.$emit(this.Events.RESIZE)

      const vh = innerHeight * 0.01
      document.documentElement.style.setProperty('--landscapeWidth', `${innerHeight * (16 / 9)}px`)
      document.documentElement.style.setProperty('--portraitWidth', `${innerHeight * (9 / 16)}px`)
      document.documentElement.style.setProperty('--squareWidth', `${innerHeight * (1 / 1)}px`)
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
  }
})
