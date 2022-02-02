// Vue @component
import { defineComponent } from 'vue'
import MouseSpeed from 'mouse-speed'
import { gsap } from 'gsap/all'
import AbstractComponent from '@/components/AbstractComponent'

export default defineComponent({
  name: 'MouseTrail',
  extends: AbstractComponent,
  mounted() {
    window.addEventListener(this.Events.MOUSEMOVE, this.onMouseMove, false)
    this.speed = new MouseSpeed()
    this.speed.init(this.onMouseSpeedCalculation)
  },
  methods: {
    onMouseSpeedCalculation() {
      const { speedX, speedY } = this.speed
      const speed = speedX + speedY
      const speedScale = Math.abs(100 + speed) / 100
      gsap.to(this.$refs.trail, {
        duration: 2,
        ease: 'expo.out',
        scale: speedScale
      })
    },
    onMouseMove({ clientX, clientY }) {
      gsap.to(this.$el, {
        duration: 1,
        ease: 'expo.out',
        x: clientX,
        y: clientY
      })
    }
  }
})
