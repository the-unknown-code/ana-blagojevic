// Vue @component
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { gsap } from 'gsap/all'
import filter from 'lodash/filter'
import AbstractPage from '@/pages/AbstractPage'
import { SET_LOADING_STATE } from '@/store/modules/Application'

const FilterType = {
  ALL: 'all',
  PERSONAL: 'personal',
  ASSIGNMENTS: 'assignments'
}

const ProjectType = {
  PERSONAL: 'PERSONAL',
  ASSIGNMENTS: 'COMMISSION'
}

export default defineComponent({
  name: 'Projects',
  extends: AbstractPage,
  data() {
    return {
      isLoading: false,
      currentFilter: null,
      projects: this.getProjects()
    }
  },
  watch: {
    async currentFilter() {
      this.projects = this.getProjects()
      await this.$nextTick()

      ScrollTrigger.update()
      ScrollTrigger.refresh()
    }
  },
  created() {
    this.$eventBus.$on(this.Events.FILTER_CHANGED, this.onFilterChanged)
  },
  async mounted() {
    await this.$nextTick()
    this.$refs.title.toggleAnimation(true, 1)
  },
  methods: {
    ...mapMutations({
      setLoadingState: SET_LOADING_STATE
    }),
    getProjects() {
      if (!this.currentFilter) {
        const projects = []
        this.$global.projects.forEach((project) => {
          projects.push(project)
          if (project.focus) {
            projects.push({
              spacer: true
            })
          }
        })
        console.log(projects)
        return projects
      }
      return filter(this.$global.projects, ({ category }) => category.name === this.currentFilter)
    },
    onFilterChanged(filter) {
      switch (filter) {
        case FilterType.ALL:
          this.currentFilter = null
          break
        case FilterType.PERSONAL:
          this.currentFilter = ProjectType.PERSONAL
          break
        case FilterType.ASSIGNMENTS:
          this.currentFilter = ProjectType.ASSIGNMENTS
          break
      }
    },
    async openProject(index) {
      this.$routerClick.active = true
      gsap.to(this.$refs.h1, {
        duration: 1.5,
        ease: 'power2.inOut',
        x: '-100%'
      })
      this.setLoadingState(true)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const slug = this.getSlug(this.$global.projects[index].name)
      this.$router.push({ name: this.RouteNames.PROJECT, params: { id: slug, lang: 'en' } })
    }
  }
})
