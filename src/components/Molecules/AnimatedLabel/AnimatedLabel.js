// Vue @component
import { defineComponent } from 'vue'
import VueTypes from 'vue-types'
import { gsap } from 'gsap/all'
import AbstractComponent from '@/components/AbstractComponent'

export default defineComponent({
  name: 'AnimatedLabel',
  extends: AbstractComponent,
  props: {
    label: VueTypes.string.isRequired,
    rollover: VueTypes.bool.def(false)
  },
  data() {
    return {
      over: false,
      $labels: []
    }
  },
  computed: {
    parsedLabel() {
      return this.label.split('')
    }
  },
  watch: {
    over() {
      if (this.$mobile) return

      const { $labels, over } = this
      gsap.killTweensOf($labels)
      gsap.to($labels, {
        duration: 0.55,
        ease: this.Ease.BEZIER_SLOW,
        y: over ? '-100%' : 0,
        stagger: {
          from: over ? 'start' : 'end',
          each: 0.025
        }
      })
    }
  },
  async mounted() {
    await this.$nextTick()
    this.$labels = this.$el.querySelectorAll('.label')
  },
  methods: {
    toggleAnimation(toggle, duration = 0.5) {
      const { $labels } = this
      gsap.killTweensOf($labels)
      gsap.to($labels, {
        duration,
        ease: this.Ease.BEZIER_SLOW,
        y: toggle ? 0 : '100%',
        stagger: {
          from: 'start',
          each: 0.025
        }
      })
    }
  }
})
