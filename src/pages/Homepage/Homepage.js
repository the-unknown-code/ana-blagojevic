import { defineComponent } from 'vue'
import { gsap } from 'gsap/all'
import { Lethargy } from 'lethargy'
// import Draggable from 'gsap/Draggable'
import AbstractPage from '@/pages/AbstractPage'
import ImageAnimation from '@/components/Utils/ImageAnimation/ImageAnimation.vue'

const lethargy = new Lethargy()
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
          format: this.ImageFormat.LANDSCAPE,
          src: this.getVersioned('placeholders/landscape.jpg')
        },

        {
          format: this.ImageFormat.PORTRAIT,
          src: this.getVersioned('placeholders/portrait.jpg')
        },

        {
          format: this.ImageFormat.SQUARE,
          src: this.getVersioned('placeholders/square.jpg')
        }
      ]
    }
  },
  watch: {
    index() {
      const { index, sh } = this
      const { content } = this.$refs
      gsap.to(content, {
        duration: 1.5,
        ease: this.Ease.BEZIER_IN_OUT,
        y: `-${sh * index}`,
        onComplete: () => {
          this.canScroll = true
        }
      })
    }
  },
  async mounted() {
    await this.$nextTick()
    this.initialize()
  },
  beforeUnmount() {
    this.$el.removeEventListener('mousewheel', this.onMouseWheel)
    this.$el.removeEventListener('DOMMouseScroll', this.onMouseWheel)
    this.$el.removeEventListener('wheel', this.onMouseWheel)
    this.$el.removeEventListener('MozMousePixelScroll', this.onMouseWheel)
  },
  methods: {
    initialize() {
      this.addListeners()
    },
    addListeners() {
      this.$el.addEventListener('wheel', this.onMouseWheel, { passive: false })
    },
    // Events
    onMouseWheel(e) {
      e.preventDefault()
      e.stopPropagation()

      if (!this.canScroll) return

      const inertia = lethargy.check(e)

      if (inertia !== false) {
        const direction = e.wheelDelta < 0 ? 1 : -1
        const next = this.index + direction

        // only if the value changes
        if (next !== this.index) {
          this.index = next < 0 ? 0 : next >= this.projects.length ? this.projects.length - 1 : next
          this.canScroll = false
          console.log(this.index)
        }
      }
    }
  }
})
