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
      isContacts: false,
      canClick: true,
      hover: false,
      selected: 0,
      nav: [
        {
          route: 'homepage',
          label: this.$global.resources.home,
          image: this.getAsset(this.$global.resources.homeImage.url)
        },
        {
          route: 'about',
          label: this.$global.resources.about,
          image: this.getAsset(this.$global.resources.aboutImage.url)
        },
        {
          route: 'projects',
          label: this.$global.resources.projects,
          image: this.getAsset(this.$global.resources.projectsImage.url)
        },
        {
          action: 'contact',
          label: this.$global.resources.contact,
          image: this.getAsset(this.$global.resources.contactImage.url)
        }
      ]
    }
  },
  watch: {
    isContacts() {
      const { isContacts } = this
      const { nav, contacts } = this.$refs

      gsap.to(nav, {
        duration: 1.15,
        ease: this.Ease.BEZIER_IN_OUT,
        y: isContacts ? '-100%' : 0
      })

      gsap.to(contacts, {
        duration: 1.15,
        ease: this.Ease.BEZIER_IN_OUT,
        y: isContacts ? 0 : '100%'
      })
    },
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
        y: this.menuState ? 0 : '-100%',
        onComplete: () => {
          this.isContacts = false
        }
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
