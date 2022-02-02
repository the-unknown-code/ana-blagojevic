// Vue @component
import { defineComponent } from 'vue'
import ScrollTrigger from 'gsap/ScrollTrigger'
import AbstractComponent from '@/components/AbstractComponent'

export default defineComponent({
  name: 'Section',
  extends: AbstractComponent,
  data() {
    return {
      isActive: true
    }
  },
  async mounted() {
    ScrollTrigger.create({
      ...this.scrollerTriggerDefault,
      trigger: this.$el,
      onToggle: ({ isActive }) => {
        this.isActive = isActive
      }
    })
  }
})
