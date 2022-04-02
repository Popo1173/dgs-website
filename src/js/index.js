import { setHeader } from './chunk/_header'
import { toTop } from './chunk/_toTop'

window.addEventListener('DOMContentLoaded', () => {
  setHeader.init()
  toTop.init()
})
