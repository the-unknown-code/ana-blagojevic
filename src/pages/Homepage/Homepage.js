import { defineComponent } from 'vue'
import { gsap } from 'gsap/all'
// import Draggable from 'gsap/Draggable'
import AbstractPage from '@/pages/AbstractPage'
import ImageAnimation from '@/components/Utils/ImageAnimation/ImageAnimation.vue'

export default defineComponent({
  name: 'Homepage',
  extends: AbstractPage,
  components: { ImageAnimation },
  data() {
    return {
      index: 0,
      canScroll: true,
      projects: [
        {
          format: this.ImageFormat.PORTRAIT,
          src: this.getVersioned('placeholders/portrait.jpg')
        },

        {
          format: this.ImageFormat.SQUARE,
          src: this.getVersioned('placeholders/square.jpg')
        },

        {
          format: this.ImageFormat.LANDSCAPE,
          src: this.getVersioned('placeholders/landscape.jpg')
        }
      ]
    }
  },
  watch: {
    index() {
      const { index, sh } = this
      const { scroller } = this.$refs
      gsap.to(scroller, {
        duration: 1.5,
        ease: this.Ease.BEZIER_IN_OUT,
        y: `-${sh * index}`
      })
    }
  },
  async mounted() {
    await this.$nextTick()
    this.initialize()
  },
  methods: {
    initialize() {
      this.addListeners()
    },
    addListeners() {
      window.addEventListener('mousewheel', this.onMouseWheel, false)
    },
    // Events
    async onMouseWheel(e) {
      if (!this.canScroll) return

      this.canScroll = false
      const direction = e.wheelDelta < 0 ? 1 : -1
      const next = this.index + direction

      // only if the value changes
      if (next !== this.index) {
        this.index = next < 0 ? 0 : next >= this.projects.length ? this.projects.length - 1 : next
        await new Promise((resolve) => setTimeout(resolve, 1000))
        this.canScroll = true
      }
    }
  }
})
