// Vue @component
import { defineComponent } from 'vue'
import VueTypes from 'vue-types'
import AbstractComponent from '@/components/AbstractComponent'

export default defineComponent({
  name: 'List',
  extends: AbstractComponent,
  data() {
    return {
      hoverIndex: -1
    }
  },
  props: {
    title: VueTypes.string.isRequired,
    list: VueTypes.array.isRequired
  }
})
