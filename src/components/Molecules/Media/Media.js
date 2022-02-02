// Vue @component
import { defineComponent } from 'vue'
import { bool, string, number } from 'vue-types'
import { gsap } from 'gsap/all'
import AbstractComponent from '@/components/AbstractComponent'
import { ImageFormat } from '@/config/globals'

export default defineComponent({
  name: 'Media',
  extends: AbstractComponent,
  props: {
    src: string().isRequired,
    format: string().def(ImageFormat.SQUARE),
    title: string(),
    delay: number().def(0),
    duration: number().def(1.35),
    parallax: bool().def(false),
    debug: bool().def(false)
  },
  watch: {
    scrollOffset() {
      this.setOffset()
    }
  },
  async mounted() {
    await this.$nextTick()

    const { duration, delay } = this
    const { holder, media } = this.$refs

    gsap.set(holder, { scale: 1.1 })
    gsap.set(media, { y: '100%' })
    const timeline = gsap.timeline({
      scrollTrigger: {
        ...this.scrollTriggerDefault,
        trigger: this.$el
      }
    })

    timeline.to([holder, media], {
      delay,
      duration,
      ease: this.Ease.BEZIER_IN_OUT,
      scale: 1,
      y: 0
    })

    setTimeout(this.setOffset, 150)
  },
  methods: {
    setOffset() {
      const { parallax, sh } = this
      if (!parallax) return

      const bb = this.$el.getBoundingClientRect()

      const max = sh + bb.height
      const position = -(bb.y - sh)
      if (this.debug) console.log(bb.height)

      if (position > 0) {
        const perc = position / max
        gsap.set(this.$refs.parallax, { y: `${perc * 50}%` })
      }
    }
  }
})
