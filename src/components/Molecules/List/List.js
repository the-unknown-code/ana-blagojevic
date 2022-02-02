// Vue @component
import { defineComponent } from 'vue'
import VueTypes from 'vue-types'
import AbstractComponent from '@/components/AbstractComponent'

export default defineComponent({
  name: 'List',
  extends: AbstractComponent,
  props: {
    title: VueTypes.string.isRequired,
    list: VueTypes.array.isRequired
  }
})
