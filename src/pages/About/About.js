// Vue @component
import { defineComponent } from 'vue'
import AbstractPage from '@/pages/AbstractPage'

export default defineComponent({
  name: 'About',
  extends: AbstractPage,
  async mounted() {
    await this.$nextTick()
    this.$refs.title.toggleAnimation(true, 1)
  }
})
