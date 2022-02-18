// Vue @component
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import { gsap } from 'gsap/all'
import AbstractComponent from '@/components/AbstractComponent'
import { SET_MENU_STATE } from '@/store/modules/Application'

const FilterType = {
  ALL: 'all',
  PERSONAL: 'personal',
  ASSIGNMENTS: 'assignments'
}

export default defineComponent({
  name: 'Header',
  extends: AbstractComponent,
  data() {
    return {
      FilterType,
      selectedFilter: FilterType.ALL,
      selectModel: FilterType.ALL,
      isFilter: false,
      isProjects: false,
      canClick: true,
      previousToggle: true,
      toggle: true
    }
  },
  watch: {
    $route() {
      this.isFilter = false
      this.selectedFilter = FilterType.ALL
      this.isProjects = this.$route.name === this.RouteNames.PROJECTS
    },
    async selectedFilter(filter) {
      this.selectModel = filter
      await this.$nextTick()
      this.$eventBus.$emit(this.Events.FILTER_CHANGED, filter)
    },
    async selectModel(filter) {
      this.selectedFilter = filter
      await this.$nextTick()
      this.$eventBus.$emit(this.Events.FILTER_CHANGED, filter)
    },
    isFilter() {
      this.toggleFilters()
    },
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
    this.isProjects = this.$route.name === this.RouteNames.PROJECTS
    this.$eventBus.$on(this.Events.TOGGLE_HEADER, this.onToggleHeader)
    this.$eventBus.$on(this.Events.RESIZE, this.onResize)
  },
  methods: {
    ...mapMutations({
      setMenuState: SET_MENU_STATE
    }),
    onToggleHeader(toggle) {
      if (!this.menuState) this.toggle = toggle
      else this.previousToggle = toggle
    },
    toggleFilters() {
      const { isFilter } = this
      const { filterGroup, filterArea } = this.$refs
      const { width } = filterArea.getBoundingClientRect()

      gsap.to(filterGroup, {
        duration: 0.75,
        x: isFilter ? -width : 0,
        ease: this.Ease.BEZIER_IN_OUT
      })
    },
    onSelectClick() {},
    onResize() {
      this.isFilter = false
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
