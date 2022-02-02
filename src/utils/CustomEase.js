import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
gsap.registerPlugin(CustomEase)

export const Ease = {
  BEZIER_IN_OUT: CustomEase.create('custom', 'M0,0 C0.566,0.05 0.346,1 1,1'),
  BEZIER_SLOW: CustomEase.create('custom', 'M0,0 C0.638,0.472 0.308,0.976 1,1')
}
