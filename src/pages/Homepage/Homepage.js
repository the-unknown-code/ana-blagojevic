import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import { gsap } from 'gsap/all'
import { Lethargy } from 'lethargy'
import Hammer from 'hammerjs'
// import Draggable from 'gsap/Draggable'
import AbstractPage from '@/pages/AbstractPage'
import ImageAnimation from '@/components/Utils/ImageAnimation/ImageAnimation.vue'
import { SET_LOADING_STATE } from '@/store/modules/Application'

const lethargy = new Lethargy()
export default defineComponent({
  name: 'Homepage',
  extends: AbstractPage,
  components: { ImageAnimation },
  data() {
    return {
      previous: -1,
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
      const { index } = this
      const { content } = this.$refs

      this.$eventBus.$emit(this.Events.TOGGLE_HEADER, index === 0)

      gsap.to(content, {
        duration: 1.5,
        ease: this.Ease.BEZIER_IN_OUT,
        y: `-${100 * index}%`
      })

      this.setProjectPosition()
    }
  },
  async mounted() {
    await this.$nextTick()
    this.initialize()
  },
  beforeUnmount() {
    window.removeEventListener('mousewheel', this.onMouseWheel)
    window.removeEventListener('DOMMouseScroll', this.onMouseWheel)
    window.removeEventListener('wheel', this.onMouseWheel)
    window.removeEventListener('MozMousePixelScroll', this.onMouseWheel)
  },
  methods: {
    ...mapMutations({
      setLoadingState: SET_LOADING_STATE
    }),
    initialize() {
      this.setProjectPosition()
      this.addListeners()
    },
    async openProject() {
      this.$routerClick.active = true
      this.setLoadingState(true)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      this.$router.push({ name: this.RouteNames.PROJECT, params: { id: 'id', lang: 'en' } })
    },
    setProjectPosition() {
      const { previous, index } = this
      const { projects, skew } = this.$refs

      const $labels = this.$el.querySelectorAll('.project-label')
      let totalWidth = 0

      for (let i = 0; i <= index; i++) {
        totalWidth += $labels[i].getBoundingClientRect().width / (i === index ? 2 : 1)
        if (i !== index) totalWidth += 56
      }

      this.projectPosition = -totalWidth

      const timeline = new gsap.timeline()
      timeline.to(projects, {
        duration: 1.25,
        ease: this.Ease.BEZIER_IN_OUT,
        x: this.projectPosition
      })

      timeline.to(
        skew,
        {
          duration: 1,
          ease: 'expo.out',
          skewX: previous < index ? 20 : -20
        },
        '<'
      )

      timeline.to(
        skew,
        {
          duration: 0.5,
          ease: 'power2.out',
          skewX: 0
        },
        '-=.5'
      )
    },
    addListeners() {
      if (!this.$mobile) {
        window.addEventListener('wheel', this.onMouseWheel, { passive: false })
        window.addEventListener('mousewheel', this.onMouseWheel, { passive: false })
        window.addEventListener('DOMMouseScroll', this.onMouseWheel, { passive: false })
        window.addEventListener('MozMousePixelScroll', this.onMouseWheel, { passive: false })

        this.$el.addEventListener('touchstart', this.preventDefault, { passive: false })
      } else {
        const hammertime = new Hammer(this.$el)
        hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL })
        hammertime.on('swipe', ({ direction }) => {
          this.next(direction === Hammer.DIRECTION_UP ? 1 : -1)
        })
      }
    },
    preventDefault(e) {
      e.preventDefault()
      e.stopPropagation()
    },
    // Events
    async next(direction) {
      const next = this.index + direction

      // only if the value changes
      if (next !== this.index && next >= 0 && next < this.projects.length) {
        this.previous = this.index
        this.index = next < 0 ? 0 : next >= this.projects.length ? this.projects.length - 1 : next
        this.canScroll = false
        await new Promise((resolve) => setTimeout(resolve, 550))
        this.canScroll = true
      }
    },
    onMouseWheel(e) {
      e.preventDefault()
      e.stopPropagation()

      const inertia = lethargy.check(e)

      if (inertia !== false) {
        if (!this.canScroll) return
        const direction = e.wheelDelta < 0 ? 1 : -1
        this.next(direction)
      }
    }
  }
})
