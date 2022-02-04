import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import ScrollTrigger from 'gsap/ScrollTrigger'
// import SmoothScrollbar from 'smooth-scrollbar'

export default defineComponent({
  name: 'AbstractPage',
  data() {
    return {
      scrollerInstance: null
    }
  },
  computed: {
    ...mapState({
      sw: (state) => state.Application.sw,
      sh: (state) => state.Application.sh
    })
  },
  beforeCreate() {
    window.scrollTo(0, 0)
  },
  async mounted() {
    document.dispatchEvent(new Event(this.Events.PAGE_CREATED))
    this.initPage()
    await this.$nextTick()
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
  },
  beforeUnmount() {
    // SmoothScrollbar.destroyAll()
  },
  methods: {
    async initPage() {},
    onLinkOver() {
      this.$eventBus.$emit(this.TOGGLE_LINK, true)
    },
    onLinkOut() {
      this.$eventBus.$emit(this.TOGGLE_LINK, false)
    }
  }
})
