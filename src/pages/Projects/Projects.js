// Vue @component
import { defineComponent } from 'vue'
import AbstractPage from '@/pages/AbstractPage'

export default defineComponent({
  name: 'Projects',
  extends: AbstractPage,
  data() {
    return {
      projects: [
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
          spacer: true
        },

        {
          format: this.ImageFormat.SQUARE,
          src: this.getVersioned('placeholders/square.jpg'),
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
          spacer: true
        },
        {
          format: this.ImageFormat.PORTRAIT,
          src: this.getVersioned('placeholders/portrait.jpg'),
          title: 'Lorem Ipsum'
        },

        {
          format: this.ImageFormat.SQUARE,
          src: this.getVersioned('placeholders/square.jpg'),
          title: 'Lorem Ipsum'
        }
      ]
    }
  },
  async mounted() {
    await this.$nextTick()
    this.$refs.title.toggleAnimation(true, 1)
  }
})
