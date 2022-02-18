// Vue @component
import { defineComponent } from 'vue'
import { gsap } from 'gsap/all'
import AbstractPage from '@/pages/AbstractPage'
import cv from './cv.json'
import exhibitions from './cv.json'
import education from './cv.json'

export default defineComponent({
  name: 'About',
  extends: AbstractPage,
  data() {
    return {
      cv,
      exhibitions,
      education
    }
  },
  async mounted() {
    this.$eventBus.$on(this.Events.SCROLL, this.onScroll)
    await this.$nextTick()
    this.$refs.title.toggleAnimation(true, 1)
  },
  methods: {
    onScroll({ y }) {
      const { bio } = this.$refs
      gsap.set(bio, { y: y / 1.5 })
    }
  }
})
