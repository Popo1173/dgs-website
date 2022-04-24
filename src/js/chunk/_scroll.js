export const setScroll = {

  init: () => {
    setScroll.setEvent()
  },
  setEvent: () => {
    $('a[href^="#"]').on('click', (e) => {
      const HEADER_EXIST_BORDER = 2000;
      const SPEED = 400;
      const href = $(e.target).attr("href");
      const headerHeight = $('header').height()
      const target = $(href === "#" || href === "" ? 'html' : href);
      const targetHeight = target.offset().top
      let position;
      if (targetHeight < HEADER_EXIST_BORDER) {
        position = targetHeight - headerHeight;
      } else {
        position = targetHeight;
      }
      $('html,body').animate({scrollTop:position}, SPEED, 'swing');
      return false;
    });
  }
}
