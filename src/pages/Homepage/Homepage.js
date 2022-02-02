import { defineComponent } from 'vue'
import { gsap } from 'gsap/all'
import { Lethargy } from 'lethargy'
import { swipedetect } from '@/utils/SwipeDetect'
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
      projectPosition: 0,
      projects: [
        {
          title: 'Progetto Uno',
          year: "'19",
          format: this.ImageFormat.LANDSCAPE,
          src: this.getVersioned('placeholders/landscape.jpg')
        },

        {
          title: 'Lorem ipsum dolor amet',
          year: '2019 - 2021',
          format: this.ImageFormat.PORTRAIT,
          src: this.getVersioned('placeholders/portrait.jpg')
        },

        {
          title: 'Progetto 3',
          year: '2010',
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
        y: `-${100 * index}%`,
        onComplete: () => {
          this.canScroll = true
        }
      })

      this.setProjectPosition()
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
      this.setProjectPosition()
      this.addListeners()
    },
    setProjectPosition() {
      const { index } = this
      const $labels = this.$el.querySelectorAll('.project-label')
      let totalWidth = 0

      for (let i = 0; i <= index; i++) {
        totalWidth += $labels[i].getBoundingClientRect().width / (i === index ? 2 : 1)
        if (i !== index) totalWidth += 56
      }

      this.projectPosition = -totalWidth
    },
    addListeners() {
      if (!this.$mobile) {
        this.$el.addEventListener('wheel', this.onMouseWheel, { passive: false })
      } else {
        swipedetect(this.$el, (swipedir) => {
          if (!this.canScroll) return
          // swipedir contains either "none", "left", "right", "up", or "down"
          this.next(swipedir === 'up' ? 1 : -1)
        })
      }
    },
    // Events
    next(direction) {
      const next = this.index + direction

      // only if the value changes
      if (next !== this.index && next >= 0 && next < this.projects.length) {
        this.index = next < 0 ? 0 : next >= this.projects.length ? this.projects.length - 1 : next
        this.canScroll = false
      }
    },
    onMouseWheel(e) {
      e.preventDefault()
      e.stopPropagation()

      if (!this.canScroll) return

      const inertia = lethargy.check(e)

      if (inertia !== false) {
        const direction = e.wheelDelta < 0 ? 1 : -1
        this.next(direction)
      }
    }
  }
})
