// Vue @component
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import AbstractComponent from '@/components/AbstractComponent'
import { SET_LOADING_STATE } from '@/store/modules/Application'

export default defineComponent({
  name: 'ProjectThumbnail',
  extends: AbstractComponent,
  methods: {
    ...mapMutations({
      setLoadingState: SET_LOADING_STATE
    }),
    async openProject() {
      this.$routerClick.active = true
      this.setLoadingState(true)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const id = this.$route.params.id === 'id' ? 'next' : 'id'
      this.$router.push({ name: this.RouteNames.PROJECT, params: { id, lang: 'en' } })
    }
  }
})
