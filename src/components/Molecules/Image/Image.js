// Vue @component
import { defineComponent } from 'vue'
import { bool, string } from 'vue-types'
import AbstractComponent from '@/components/AbstractComponent'
import { ImageFormat } from '@/config/globals'

export default defineComponent({
  name: 'Image',
  extends: AbstractComponent,
  props: {
    lazy: bool().def(false),
    src: string().isRequired,
    format: string().def(ImageFormat.SQUARE)
  },
  data() {
    return {
      loaded: false,
      width: 0,
      height: 0,
      ratio: 1
    }
  },
  beforeCreate() {
    const image = new Image()
    image.onload = () => {
      this.loaded = true
      this.width = image.naturalWidth
      this.height = image.naturalHeight
      this.ratio = image.naturalWidth / image.naturalHeight
      image.src = ''
    }
    image.src = this.src
  }
})
