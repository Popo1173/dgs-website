export const setScrollTop = {
  init: () => {
    setScrollTop.getCurrentHeight()
  },
  getCurrentHeight: () => {
    $(window).scroll(function () {
      const $toggle = $('.js-scroll-top')
      const $contact = $('#contact')
      const winTopY = $(window).scrollTop()
      setScrollTop.contactPositionY = $contact.offset().top
      setScrollTop.winBottomY = winTopY + $(window).innerHeight();

      if (winTopY === 0 || setScrollTop.contactPositionY < setScrollTop.winBottomY) {
        $toggle.addClass('is-hidden')
      } else {
        $toggle.removeClass('is-hidden')
      }
    });
  }
}
