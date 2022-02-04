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
          route: 'homepage',
          label: 'HOME',
          image: this.getVersioned('placeholders/menu-01.jpg')
        },
        {
          route: 'about',
          label: 'ABOUT',
          image: this.getVersioned('placeholders/menu-02.jpg')
        },
        {
          route: 'projects',
          label: 'PROJECTS',
          image: this.getVersioned('placeholders/menu-03.jpg')
        },
        {
          route: 'contact',
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

      if (this.menuState) this.$el.classList.remove('invisible')

      gsap.to(this.$el, {
        duration: 1,
        delay: this.menuState ? 0 : 0.35,
        ease: this.Ease.BEZIER_IN_OUT,
        y: this.menuState ? 0 : '-100%'
      })

      gsap.to(this.$items, {
        delay: this.menuState ? 0.05 : 0,
        duration: this.menuState ? 1.5 : 1,
        ease: this.Ease.BEZIER_SLOW,
        y: this.menuState ? 0 : '-100%',
        stagger: {
          from: 'start',
          amount: this.menuState ? 0.2 : 0.1
        }
      })
    }
  },
  mounted() {
    this.$items = this.$el.querySelectorAll('.li')
  },
  methods: {
    onRouteClick() {
      this.$routerClick.active = true
    },
    onMouseMove({ clientY, clientX }) {
      if (this.$mobile) return

      const { sw } = this
      const { thumb, image, ul } = this.$refs
      const { left } = ul.getBoundingClientRect()

      const percX = Math.round((clientX / sw - 0.5) * 2 * -30)

      gsap.to(image, {
        duration: 6,
        ease: 'expo.out',
        x: `${percX}%`
      })

      gsap.to(thumb, {
        delay: 0.15,
        duration: 2,
        ease: 'power4.out',
        y: clientY,
        x: (clientX - left) / 2
      })
    }
  }
})
