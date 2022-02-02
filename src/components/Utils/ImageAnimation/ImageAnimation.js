// Vue @component
import { defineComponent } from 'vue'
import gsap from 'gsap'
import VueTypes from 'vue-types'
import AbstractComponent from '@/components/AbstractComponent'

export default defineComponent({
  name: 'ImageAnimation',
  extends: AbstractComponent,
  props: {
    position: VueTypes.integer.isRequired
  },
  data() {
    return {
      image: null
    }
  },
  async mounted() {
    await this.$nextTick()
    this.image = this.$el.querySelector('img')
    gsap.set(this.image, { scale: this.getScale() })
  },
  watch: {
    position() {
      const { image, position } = this
      const duration = 1.5
      const ease = this.Ease.BEZIER_IN_OUT

      const yPos = this.$phone ? 15 : 45

      if (position <= 0) {
        gsap.to(this.$el, {
          duration,
          ease,
          y: `${-this.position * yPos}%`
        })

        gsap.to(image, {
          duration,
          ease,
          scale: 1,
          y: `${-this.position * 20}%`
        })
      } else {
        gsap.to(image, {
          duration,
          ease,
          scale: this.getScale(),
          y: 0
        })
      }
    }
  },
  methods: {
    getScale() {
      const { position } = this
      return position <= 0 ? 1 : 1 + 1 * position
    }
  }
})
