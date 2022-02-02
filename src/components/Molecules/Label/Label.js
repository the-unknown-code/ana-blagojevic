// Vue @component
import { defineComponent } from 'vue'
import VueTypes from 'vue-types'
import { gsap } from 'gsap/all'
import AbstractComponent from '@/components/AbstractComponent'

export default defineComponent({
  name: 'Label',
  extends: AbstractComponent,
  props: {
    label: VueTypes.string.isRequired,
    delay: VueTypes.number.def(0)
  },
  async mounted() {
    await this.$nextTick()

    const { delay } = this
    const { label } = this.$refs
    this.timeline = gsap.timeline({
      scrollTrigger: {
        ...this.scrollTriggerDefault,
        trigger: this.$el
      }
    })

    this.timeline.to(label, {
      delay,
      duration: 1,
      ease: this.Ease.BEZIER_IN_OUT,
      y: 0
    })
  }
})
