export const setScrollTop = {
  init: () => {
    setScrollTop.getCurrentHeight()
  },
  getCurrentHeight: () => {
    $(window).on('scroll load', (e) => {
      const $toggle = $('.js-scroll-top')
      const $contact = $('#contact')
      const winTopY = $(window).scrollTop()
      // id指定ページ遷移・リロードに対応
      if (e.type === 'load') {
        $toggle.addClass('is-hidden')
        return
      }
      setScrollTop.contactPositionY = $contact.offset().top
      setScrollTop.winBottomY = winTopY + $(window).innerHeight()
      if (winTopY === 0 || setScrollTop.contactPositionY < setScrollTop.winBottomY) {
        $toggle.addClass('is-hidden')
      } else {
        $toggle.removeClass('is-hidden')
      }
    });
  }
}
