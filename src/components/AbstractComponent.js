import { mapState } from 'vuex'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AbstractComponent',
  data() {
    return {
      scrollTriggerDefault: {
        start: 'top 97%',
        toggleActions: 'play none pause reverse'
      }
    }
  },
  computed: {
    ...mapState({
      sw: (state) => state.Application.sw,
      sh: (state) => state.Application.sh,
      menuState: (state) => state.Application.menuState
    })
  }
})
