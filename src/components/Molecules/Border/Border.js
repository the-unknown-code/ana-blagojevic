// Vue @component
import { defineComponent } from 'vue'
import VueTypes from 'vue-types'
import { gsap } from 'gsap/all'
import AbstractComponent from '@/components/AbstractComponent'

export default defineComponent({
  name: 'Border',
  extends: AbstractComponent,
  props: {
    label: VueTypes.string,
    delay: VueTypes.number.def(0),
    hover: VueTypes.bool.def(false)
  },
  watch: {
    hover() {
      const { foreground } = this.$refs
      gsap.to(foreground, {
        x: this.hover ? 0 : '-100%',
        ease: this.Ease.BEZIER_IN_OUT,
        duration: 1
      })
    }
  },
  async mounted() {
    await this.$nextTick()
    const { delay } = this
    this.timeline = gsap.timeline({
      scrollTrigger: {
        ...this.scrollTriggerDefault,
        trigger: this.$el
        // markers: true
      }
    })

    const { background } = this.$refs
    this.timeline.from([background], {
      delay,
      xPercent: -100,
      ease: this.Ease.BEZIER_IN_OUT,
      duration: 2,
      stagger: 0.5
    })
  }
})
