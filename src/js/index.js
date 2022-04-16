import { setHeader } from './chunk/_header'
import { toTop } from './chunk/_toTop'
import { setMoreButton } from './chunk/_moreButton'


window.addEventListener('DOMContentLoaded', () => {
  setHeader.init()
  toTop.init()
  setMoreButton.init()
})
