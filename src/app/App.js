import { defineComponent } from 'vue'
import { mapActions, mapMutations } from 'vuex'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { gsap } from 'gsap/all'
import { SET_STAGE, SET_SCROLL_OFFSET, CHANGE_LOCALE, SET_MENU_STATE } from '@/store/modules/Application'
import Navigation from '@/components/Navigation/Navigation.vue'
import Header from '@/components/Atoms/Header/Header.vue'
import Footer from '@/components/Atoms/Footer/Footer.vue'
import MouseTrail from '@/components/Atoms/MouseTrail/MouseTrail.vue'

export default defineComponent({
  name: 'App',
  components: { Navigation, Header, Footer, MouseTrail },
  created() {
    window.addEventListener(this.Events.SCROLL, this.onScrollHandler)
    window.addEventListener(this.Events.RESIZE, this.onResizeHandler)
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
      setStage: SET_STAGE,
      setScrollOffset: SET_SCROLL_OFFSET
    }),
    beforeEnter($el) {
      window.scrollTo(0, 0)
      if (this.$route.name === this.RouteNames.HOMEPAGE) return
      if (this.$routerClick.active) gsap.set($el, { position: 'fixed', force3D: true, y: '100%' })
    },
    enter($el) {
      this.$routerClick.active = false
      if (this.$route.name === this.RouteNames.HOMEPAGE) return

      gsap.to($el, {
        duration: 1.5,
        ease: this.Ease.BEZIER_SLOW,
        y: 0,
        clearProps: true,
        onUpdate: () => {
          ScrollTrigger.refresh()
        },
        onComplete: () => {
          const position = $el.getAttribute('data-position') || 'relative'
          gsap.set($el, { position })
        }
      })
    },
    beforeLeave(e) {},
    leave(e) {},
    onScrollHandler() {
      const y = window.pageYOffset || document.documentElement.scrollTop
      this.setScrollOffset({ x: 0, y })

      this.$eventBus.$emit(this.Events.TOGGLE_HEADER, y <= 0)
      this.$eventBus.$emit(this.Events.SCROLL, { x: 0, y })
    },
    onResizeHandler() {
      const { innerWidth, innerHeight } = window
      this.setStage({ sw: innerWidth, sh: innerHeight })
      this.$eventBus.$emit(this.Events.RESIZE)

      const vh = innerHeight * 0.01
      document.documentElement.style.setProperty('--landscapeWidth', `${innerHeight * (16 / 9)}px`)
      document.documentElement.style.setProperty('--portraitWidth', `${innerHeight * (9 / 16)}px`)
      document.documentElement.style.setProperty('--squareWidth', `${innerHeight * (1 / 1)}px`)
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      this.onScrollHandler()
    }
  }
})
