import { defineComponent } from 'vue'
import { mapActions, mapMutations } from 'vuex'
import { SET_STAGE, CHANGE_LOCALE } from '@/store/modules/Application'
import Navigation from '@/components/Navigation/Navigation.vue'
import Header from '@/components/Atoms/Header/Header.vue'
import Footer from '@/components/Atoms/Footer/Footer.vue'
import MouseTrail from '@/components/Atoms/MouseTrail/MouseTrail.vue'

export default defineComponent({
  name: 'App',
  components: { Navigation, Header, Footer, MouseTrail },
  created() {
    // window.addEventListener(this.Events.RESIZE, this.onResizeHandler)
    // this.onResizeHandler()
  },
  methods: {
    ...mapActions({
      changeLanguage: CHANGE_LOCALE
    }),
    ...mapMutations({
      setStage: SET_STAGE
    }),
    onResizeHandler() {
      const { innerWidth, innerHeight } = window
      this.setStage({ sw: innerWidth, sh: innerHeight })
      this.$eventBus.$emit(this.Events.RESIZE)
    }
  }
})
