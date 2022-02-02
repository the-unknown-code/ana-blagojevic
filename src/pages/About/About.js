// Vue @component
import { defineComponent } from 'vue'
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
    await this.$nextTick()
    this.$refs.title.toggleAnimation(true, 1)
  }
})
