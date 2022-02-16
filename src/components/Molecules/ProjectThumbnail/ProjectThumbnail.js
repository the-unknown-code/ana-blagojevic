// Vue @component
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import VueTypes from 'vue-types'
import AbstractComponent from '@/components/AbstractComponent'
import { SET_LOADING_STATE } from '@/store/modules/Application'

export default defineComponent({
  name: 'ProjectThumbnail',
  extends: AbstractComponent,
  props: {
    project: VueTypes.object.isRequired
  },
  methods: {
    ...mapMutations({
      setLoadingState: SET_LOADING_STATE
    }),
    async openProject() {
      this.$routerClick.active = true
      this.setLoadingState(true)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      this.$router.push({ name: this.RouteNames.PROJECT, params: { id: this.getSlug(this.project.name), lang: 'en' } })
    }
  }
})
