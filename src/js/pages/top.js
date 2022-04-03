$(function () {
  const carousel = {
    init: () => {
      const $selector = $('[data-toggle="hero-carousel"]')
      const options = {
        infinite: $selector.attr('data-infinite') == 'true' ? true : false,
        arrows: $selector.attr('data-arrows') == 'true' ? true : false,
        swipe: $selector.attr('data-swipe') == 'true' ? true : false,
        autoplay: $selector.attr('data-autoplay') == 'true' ? true : false,
        autoplaySpeed: $selector.attr('data-autoplay-speed') ? Number($selector.attr('data-autoplay-speed')) : 3000,
        fade: $selector.attr('data-fade') == 'true' ? true : false,
        speed: $selector.attr('data-fade-speed') ? Number($selector.attr('data-fade-speed')) : 300,
        centerMode: $selector.attr('data-center') == 'true' ? true : false,
        dots: $selector.attr('data-dots') == 'true' ? true : false,
        slidesToShow: $selector.attr('data-show') ? Number($selector.attr('data-show')) : 1,
        slidesToScroll: $selector.attr('data-scroll') ? Number($selector.attr('data-scroll')) : 1,
        prevArrow: '<button type="button" class="slick-prev"><span class="hero-icon chevron-left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="hero-icon chevron-right"></span></button>'
      }
      $selector.slick(options);
    }
  }

  carousel.init()
})
