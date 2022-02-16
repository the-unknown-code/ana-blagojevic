// Vue @component
import { defineComponent } from 'vue'
import find from 'lodash/find'
import findIndex from 'lodash/findIndex'
import AbstractPage from '@/pages/AbstractPage'

const RowType = {
  LANDSCAPE: 'project-components.row-landscape-composer',
  PORTRAIT: 'project-components.row-portrait-composer',
  TEXT: 'project-components.row-text-composer',
  VIDEO: 'project-components.row-video-composer'
}

export default defineComponent({
  name: 'Project',
  extends: AbstractPage,
  data() {
    return {
      RowType,
      project: this.getProject(),
      nextProject: this.getNextProject()
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
    },
    getNextProject() {
      const project = this.getProject()
      const projectSlug = this.getSlug(project.name)
      const index = findIndex(this.$global.projects, ({ name }) => {
        const slug = this.getSlug(name)
        return projectSlug === slug
      })

      let nextIndex = index + 1
      if (nextIndex === this.$global.projects.length) nextIndex = 0
      return this.$global.projects[nextIndex]
    },
    getPadding(position) {
      switch (position.toLowerCase()) {
        case 'left':
          return 'pr-8 md:pr-32'
        case 'right':
          return 'pl-8 md:pl-32'
        case 'center':
          return 'px-4 md:px-16'
        case 'fullscreen':
          return ''
      }
    },
    getVideoId(link) {
      const split = link.split('/')
      return split[split.length - 1]
    }
  }
})
