// Vue @component
import { defineComponent } from 'vue'
import VueTypes from 'vue-types'
import { gsap } from 'gsap/all'
import SplitText from 'gsap/SplitText'
import AbstractComponent from '@/components/AbstractComponent'

export default defineComponent({
  name: 'LineText',
  extends: AbstractComponent,
  props: {
    label: VueTypes.string.isRequired,
    duration: VueTypes.number.def(1.5),
    autoplay: VueTypes.bool.def(false)
  },
  data() {
    return {
      key: 0
    }
  },
  async mounted() {
    await this.$nextTick()
    const splitText = new SplitText(this.$el, { type: 'words' })
    const { words } = splitText

    const { duration, autoplay } = this

    const wordTimeline = gsap.timeline({ paused: autoplay })
    wordTimeline.from(words, {
      duration,
      opacity: 0,
      y: '300%',
      ease: 'power4.out',
      stagger: 0.002
    })

    gsap.timeline(
      autoplay
        ? {
            scrollTrigger: {
              ...this.scrollTriggerDefault,
              trigger: this.$el,
              onEnter: () => {
                wordTimeline.play()
              },
              onLeaveBack: () => {
                wordTimeline.reverse()
              }
            }
          }
        : {}
    )
  }
})
