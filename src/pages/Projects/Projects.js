// Vue @component
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import { gsap } from 'gsap/all'
import AbstractPage from '@/pages/AbstractPage'
import { SET_LOADING_STATE } from '@/store/modules/Application'

export default defineComponent({
  name: 'Projects',
  extends: AbstractPage,
  data() {
    return {
      isLoading: false,
      projects: this.$global.projects,
      oldprojects: [
        {
          format: this.ImageFormat.PORTRAIT,
          src: this.getVersioned('placeholders/portrait.jpg'),
          title: 'Lorem Ipsum'
        },
        {
          format: this.ImageFormat.LANDSCAPE,
          src: this.getVersioned('placeholders/landscape.jpg'),
          title: 'Lorem Ipsum'
        },
        {
          format: this.ImageFormat.SQUARE,
          src: this.getVersioned('placeholders/square.jpg'),
          title: 'Lorem Ipsum'
        },
        {
          format: this.ImageFormat.PORTRAIT,
          src: this.getVersioned('placeholders/portrait.jpg'),
          title: 'Lorem Ipsum'
        },

        {
          spacer: true
        },
        {
          format: this.ImageFormat.PORTRAIT,
          src: this.getVersioned('placeholders/portrait.jpg'),
          title: 'Lorem Ipsum'
        },
        {
          spacer: true
        },

        {
          format: this.ImageFormat.LANDSCAPE,
          src: this.getVersioned('placeholders/landscape.jpg'),
          title: 'Lorem Ipsum'
        },

        {
          format: this.ImageFormat.PORTRAIT,
          src: this.getVersioned('placeholders/portrait.jpg'),
          title: 'Lorem Ipsum'
        },
        {
          format: this.ImageFormat.LANDSCAPE,
          src: this.getVersioned('placeholders/landscape.jpg'),
          title: 'Lorem Ipsum'
        },
        {
          spacer: true
        },
        {
          format: this.ImageFormat.PORTRAIT,
          src: this.getVersioned('placeholders/portrait.jpg'),
          title: 'Lorem Ipsum'
        },

        {
          format: this.ImageFormat.PORTRAIT,
          src: this.getVersioned('placeholders/portrait.jpg'),
          title: 'Lorem Ipsum'
        },
        {
          spacer: true
        },
        {
          format: this.ImageFormat.PORTRAIT,
          src: this.getVersioned('placeholders/portrait.jpg'),
          title: 'Lorem Ipsum'
        },
        {
          spacer: true
        },
        {
          format: this.ImageFormat.PORTRAIT,
          src: this.getVersioned('placeholders/portrait.jpg'),
          title: 'Lorem Ipsum'
        }
      ]
    }
  },
  async mounted() {
    await this.$nextTick()
    this.$refs.title.toggleAnimation(true, 1)
  },
  methods: {
    ...mapMutations({
      setLoadingState: SET_LOADING_STATE
    }),
    async openProject() {
      this.$routerClick.active = true
      gsap.to(this.$refs.h1, {
        duration: 1.5,
        ease: 'power2.inOut',
        x: '-100%'
      })
      this.setLoadingState(true)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      this.$router.push({ name: this.RouteNames.PROJECT, params: { id: 'id', lang: 'en' } })
    }
  }
})
