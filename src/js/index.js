import { setHeader } from './chunk/_header'
import { setMoreButton } from './chunk/_moreButton'
import { setScroll } from './chunk/_scroll'
import { setAccordion } from './chunk/_accordion'

window.addEventListener('DOMContentLoaded', () => {
  setHeader.init()
  setMoreButton.init()
  setScroll.init()
  setAccordion.init()
})
