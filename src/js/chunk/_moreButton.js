export const setMoreButton = {
  init: () => {
    setMoreButton.hideItem()
    setMoreButton.setEvent()
  },
  hideItem: () => {
    const $target = $('.js-moreButtonTarget')
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
  setEvent: () => {
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
