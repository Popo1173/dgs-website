export const setMoreButton = {
  init: () => {
    const breakpoint = 768
    if ($(window).width() < breakpoint) {
      setMoreButton.hideItem()
    }
    setMoreButton.setEvent(breakpoint)
  },
  hideItem: () => {
    const $targetElement = $('.js-moreButton')
    const $target = $('.js-moreButtonTarget')
    $targetElement.show()

    $target.each((i, element) => {
      const targetBorder = $(element).data('border')
      const targetItem = $(element).children()

      targetItem.each((i, target) => {
        if (i + 1 > targetBorder) {
          $(target).addClass('more-hidden')
        }
      })
    })
  },
  showAllItem: () => {
    $('.js-moreButtonTarget').children().removeClass('more-hidden')
  },
  setEvent: (breakpoint) => {
    let wasPcView = ''
    $(window).on('resize', () => {
      const currentWinWidth = $(window).width()
      const isPcView = currentWinWidth >= breakpoint
      if (wasPcView === false && isPcView === true) {
        setMoreButton.showAllItem()
      } else if (wasPcView === true && isPcView === false) {
        setMoreButton.hideItem()
      }
      wasPcView = isPcView
    })

    const $targetElement = $('.js-moreButton')
    $targetElement.click((e) => {
      const $targetWrap = $(e.target).closest('.js-moreButtonTargetWrap')
      const $target = $targetWrap.find('.js-moreButtonTarget')
      const $targetItem = $target.children()
      $targetItem.removeClass('more-hidden')
      $(e.target).css('display', 'none')
    })
  }
}
