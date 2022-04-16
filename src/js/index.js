import { setHeader } from './chunk/_header'
import { toTop } from './chunk/_toTop'
import { setMoreButton } from './chunk/_moreButton'
import { setScroll } from './chunk/_scroll'
import { setAccordion } from './chunk/_accordion'

window.addEventListener('DOMContentLoaded', () => {
  setHeader.init()
  toTop.init()
  setMoreButton.init()
  setScroll.init()
  setAccordion.init()
})
