// Vue @component
import { defineComponent } from 'vue'
import AbstractComponent from '@/components/AbstractComponent'

export default defineComponent({
  name: 'DebugInfo',
  extends: AbstractComponent,
  setup() {
    return {
      version: `vers. ${process.env.PACKAGE_VERSION}`
    }
  }
})
