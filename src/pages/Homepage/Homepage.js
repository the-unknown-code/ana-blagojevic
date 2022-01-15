import { defineComponent } from 'vue'
import Draggable from 'gsap/Draggable'
import AbstractPage from '@/pages/AbstractPage'
import ImageAnimation from '@/components/Utils/ImageAnimation/ImageAnimation.vue'

export default defineComponent({
  name: 'Homepage',
  extends: AbstractPage,
  components: { ImageAnimation },
  data() {
    return {
      sectionHeight: this.sh,
      points: [0, -800],
      projects: [
        {
          format: this.ImageFormat.LANDSCAPE,
          src: this.getVersioned('placeholders/01.jpg')
        },
        {
          format: this.ImageFormat.PORTRAIT,
          src: this.getVersioned('placeholders/01.jpg')
        },
        {
          format: this.ImageFormat.SQUARE,
          src: this.getVersioned('placeholders/01.jpg')
        }
      ]
    }
  },
  async mounted() {
    await this.$nextTick()
    this.initialize()
  },
  methods: {
    initialize() {
      const { sh } = this
      const { draggable } = this.$refs
      Draggable.create(draggable, {
        type: 'y',
        edgeResistance: 0.75,
        dragResistance: 0.2,
        minDuration: 0.4,
        maxDuration: 0.8,
        bounds: window,
        throwProps: true,
        inertia: true,
        minimumMovement: 0.1,
        dragClickables: true,
        snap: (endValue) => {
          return Math.round(endValue / sh) * sh
        }
      })
    }
  }
})
