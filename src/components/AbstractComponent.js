import { mapState } from 'vuex'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AbstractComponent',
  data() {
    return {
      scrollTriggerDefault: {
        start: 'top 96%',
        toggleActions: 'play none none none'
      }
    }
  },
  computed: {
    ...mapState({
      sw: (state) => state.Application.sw,
      sh: (state) => state.Application.sh,
      menuState: (state) => state.Application.menuState,
      scrollOffset: (state) => state.Application.scrollOffset
    })
  },
  methods: {
    onLinkOver() {
      this.$eventBus.$emit(this.TOGGLE_LINK, true)
    },
    onLinkOut() {
      this.$eventBus.$emit(this.TOGGLE_LINK, false)
    }
  }
})
