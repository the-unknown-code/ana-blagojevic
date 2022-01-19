// Vue @component
import { defineComponent } from 'vue'
import { gsap } from 'gsap/all'
import AbstractComponent from '@/components/AbstractComponent'

export default defineComponent({
  name: 'Navigation',
  extends: AbstractComponent,
  data() {
    return {
      $items: null,
      canClick: true,
      hover: false,
      selected: 0,
      nav: [
        {
          id: 'homepage',
          label: 'HOME',
          image: this.getVersioned('placeholders/menu-01.jpg')
        },
        {
          id: 'about',
          label: 'ABOUT',
          image: this.getVersioned('placeholders/menu-02.jpg')
        },
        {
          id: 'projects',
          label: 'PROJECTS',
          image: this.getVersioned('placeholders/menu-03.jpg')
        },
        {
          id: 'contact',
          label: 'CONTACT',
          image: this.getVersioned('placeholders/menu-04.jpg')
        }
      ]
    }
  },
  watch: {
    menuState() {
      gsap.killTweensOf(this.$el)
      gsap.killTweensOf(this.$items)
      gsap.set(this.$el, { y: this.menuState ? '100%' : 0 })
      gsap.set(this.$items, { y: this.menuState ? '150%' : 0 })

      gsap.to(this.$el, {
        duration: 1,
        ease: this.Ease.BEZIER_IN_OUT,
        y: this.menuState ? 0 : '-100%'
      })

      gsap.to(this.$items, {
        duration: 1.25,
        ease: this.Ease.BEZIER_IN_OUT,
        y: this.menuState ? 0 : '-50%',
        stagger: {
          from: this.menuState ? 'start' : 'end',
          amount: 0.1
        }
      })
    }
  },
  mounted() {
    this.$items = this.$el.querySelectorAll('li')
  },
  methods: {
    onMouseMove({ clientY }) {
      if (this.$mobile) return

      const { thumb } = this.$refs
      gsap.to(thumb, {
        duration: 1,
        ease: 'expo.out',
        y: clientY
      })
    }
  }
})
