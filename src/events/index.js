import mitt from 'mitt'

const emitter = mitt()

export default {
  $on: (...args) => emitter.on(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args),
  $clear: () => emitter.all.clear()
}

export const Events = {
  PAGE_CREATED: 'page-created',
  CLICK: 'click',
  RESIZE: 'resize',
  MOUSEMOVE: 'mousemove',
  SCROLL: 'scroll',
  TOGGLE_HEADER: 'toggle-header',
  TOGGLE_LINK: 'toggle-link',
  FILTER_CHANGED: 'filter-changed'
}
