// Vue @component
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import AbstractComponent from '@/components/AbstractComponent'
import { SET_MENU_STATE } from '@/store/modules/Application'

export default defineComponent({
  name: 'Header',
  extends: AbstractComponent,
  data() {
    return {
      canClick: true
    }
  },
  methods: {
    ...mapMutations({
      setMenuState: SET_MENU_STATE
    }),
    async onMenuClick() {
      if (!this.canClick) return
      this.canClick = false
      this.setMenuState()

      await new Promise((resolve) => setTimeout(resolve, 1000))
      this.canClick = true
    }
  }
})
