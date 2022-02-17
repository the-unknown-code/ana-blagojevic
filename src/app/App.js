import { defineComponent } from 'vue'
import { mapState, mapActions, mapMutations } from 'vuex'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { gsap } from 'gsap/all'
import { SET_STAGE, SET_SCROLL_OFFSET, SET_LOADING_STATE, CHANGE_LOCALE, SET_MENU_STATE } from '@/store/modules/Application'
import Navigation from '@/components/Navigation/Navigation.vue'
import Header from '@/components/Atoms/Header/Header.vue'
import Footer from '@/components/Atoms/Footer/Footer.vue'
import MouseTrail from '@/components/Atoms/MouseTrail/MouseTrail.vue'
import Loading from '@/components/Atoms/Loading/Loading.vue'

export default defineComponent({
  name: 'App',
  components: { Navigation, Header, Footer, MouseTrail, Loading },
  computed: {
    ...mapState({
      loadingState: (state) => state.Application.loadingState
    })
  },
  watch: {
    $route() {
      this.setMenuState(false)
      this.setLoadingState(false)
    }
  },
  created() {
    window.addEventListener(this.Events.SCROLL, this.onScrollHandler)
    window.addEventListener(this.Events.RESIZE, this.onResizeHandler)
    this.onResizeHandler()
  },
  methods: {
    ...mapActions({
      changeLanguage: CHANGE_LOCALE
    }),
    ...mapMutations({
      setMenuState: SET_MENU_STATE,
      setStage: SET_STAGE,
      setScrollOffset: SET_SCROLL_OFFSET,
      setLoadingState: SET_LOADING_STATE
    }),
    beforeEnter($el) {
      window.scrollTo(0, 0)
      if (this.$route.name === this.RouteNames.HOMEPAGE) {
        gsap.set($el, { opacity: 0 })
        return
      }

      if (this.$routerClick.active) gsap.set($el, { position: 'fixed', force3D: true, y: '100%' })
      else gsap.set($el, { opacity: 0 })
    },
    enter($el) {
      gsap.to($el, {
        delay: this.$route.name === this.RouteNames.PROJECT && this.$routerClick.active ? 0.35 : 0,
        duration: 1.5,
        ease: this.Ease.BEZIER_SLOW,
        opacity: 1,
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

      this.$routerClick.active = false
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
      ScrollTrigger.refresh()
      ScrollTrigger.update()
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
