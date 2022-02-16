// Vue @component
import { defineComponent } from 'vue'
import find from 'lodash/find'
import AbstractPage from '@/pages/AbstractPage'

export default defineComponent({
  name: 'Project',
  extends: AbstractPage,
  data() {
    return {
      project: this.getProject()
    }
  },
  methods: {
    getProject() {
      const { params } = this.$route
      const project = find(this.$global.projects, ({ name }) => {
        const slug = this.getSlug(name)
        return params.id === slug
      })

      return project
    }
  }
})
