// Vue @component
import { defineComponent } from 'vue'
import VueTypes from 'vue-types'
import gsap from 'gsap'
import AbstractComponent from '@/components/AbstractComponent'

export default defineComponent({
  name: 'Loading',
  extends: AbstractComponent,
  props: {
    active: VueTypes.bool.isRequired
  },
  watch: {
    active() {
      const { loadingBG, loadingText } = this.$refs
      const params = { duration: 1.5, ease: 'power2.inOut' }

      if (this.active) {
        this.$eventBus.$emit(this.Events.TOGGLE_HEADER, true)
        gsap.set(loadingBG, { y: '100%' })
        gsap.set(loadingText, { x: '100%' })
      }

      gsap.to(loadingBG, {
        ...params,
        y: this.active ? 0 : '-100%'
      })

      gsap.to(loadingText, {
        ...params,
        x: this.active ? 0 : '-100%'
      })
    }
  }
})
