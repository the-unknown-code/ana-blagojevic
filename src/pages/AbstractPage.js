import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SmoothScrollbar from 'smooth-scrollbar'

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
  mounted() {
    document.dispatchEvent(new Event(this.Events.PAGE_CREATED))
    this.initPage()
  },
  beforeUnmount() {
    // SmoothScrollbar.destroyAll()
  },
  methods: {
    async initPage() {
      const { scroller } = this.$refs
      return

      if (scroller) {
        this.scrollerInstance = SmoothScrollbar.init(scroller, {
          damping: 0.089,
          renderByPixels: false,
          continuousScrolling: false,
          delegateTo: document
        })

        const { scrollerInstance } = this
        ScrollTrigger.scrollerProxy(scroller, {
          scrollTop(value) {
            if (arguments.length) {
              scrollerInstance.scrollTop = value
            }

            return scrollerInstance.scrollTop
          }
        })

        this.scrollerInstance.setPosition(0, 0)
        this.scrollerInstance.track.xAxis.element.remove()
        this.scrollerInstance.track.yAxis.element.remove()

        this.scrollerInstance.addListener(({ offset }) => {
          ScrollTrigger.update()
          this.$eventBus.$emit(this.Events.SCROLL, offset)
        })
      }
    }
  }
})
