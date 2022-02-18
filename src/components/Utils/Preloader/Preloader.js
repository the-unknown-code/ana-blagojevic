// Vue @component
import { defineComponent } from 'vue'
import AbstractComponent from '@/components/AbstractComponent'

export default defineComponent({
  name: 'Preloader',
  extends: AbstractComponent,
  data() {
    return {
      loaded: false
    }
  },
  created() {
    const { projects } = this.$global
    const images = []
    projects.forEach(({ cover }) => {
      images.push(cover.image.url)
    })

    this.startPreload(images).then(() => {
      this.loaded = true
    })
  },
  methods: {
    startPreload(images) {
      const promises = []
      images.forEach((src) => {
        promises.push(
          new Promise((resolve) => {
            const image = new Image()
            image.onload = resolve
            image.src = this.getAsset(src)
          })
        )
      })

      return Promise.all(promises)
    }
  }
})
