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
      canClick: true,
      previousToggle: true,
      toggle: true
    }
  },
  watch: {
    menuState() {
      if (this.menuState) {
        this.previousToggle = this.toggle
        this.toggle = true
      } else {
        this.toggle = this.previousToggle
      }
    }
  },
  created() {
    this.$eventBus.$on(this.Events.TOGGLE_HEADER, this.onToggleHeader)
  },
  methods: {
    ...mapMutations({
      setMenuState: SET_MENU_STATE
    }),
    onToggleHeader(toggle) {
      if (!this.menuState) this.toggle = toggle
      else this.previousToggle = toggle
    },
    async onMenuClick() {
      if (!this.canClick) return
      this.canClick = false
      this.setMenuState()

      await new Promise((resolve) => setTimeout(resolve, 1000))
      this.canClick = true
    }
  }
})
