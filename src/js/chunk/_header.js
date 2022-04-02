export const setHeader = {

  init: () => {
    const breakpoint = 768
    setHeader.setSpSideNavi(".js-trigger[data-sidenavi-toggle]", breakpoint)
    setHeader.setTopMenuToggle(".js-trigger[data-type='top-menu']", breakpoint)
    setHeader.setCloseMenuEvent(breakpoint)
    setHeader.checkResizeEvent(breakpoint)
    setHeader.checkScrollEvent()
  },

  setSpSideNavi: (toggle, breakpoint) => {
    const $toggle = $(toggle);
    const $toggleWrap = $(".js-triggerWrapper[data-sidenavi-status]")

    $toggle.on('click', (e) => {
      const winWidth = $(window).width()
      if (winWidth >= breakpoint) {
        return
      }
      const winHeight = $(window).scrollTop()
      const event = $(e.currentTarget).data('sidenavi-toggle')
      const sideNaviId = $(e.currentTarget).data('trigger-target')
      const $sideNav = $(`#${sideNaviId}`)

      if (event === 'open') {
        $toggleWrap.attr('data-sidenavi-status', 'show')
        $sideNav.attr('aria-modal', 'true').slideToggle();
      } else if (event === 'close') {
        $toggleWrap.attr('data-sidenavi-status', 'hide')
        $sideNav.removeAttr('aria-modal').slideToggle();
        window.scrollTo(0, winHeight)
      }
    }
    )
  },
  setTopMenuToggle: (toggle, breakpoint) => {
    const $toggle = $(toggle);
    $toggle.on('click', (e) => {
      const target = $(e.currentTarget)
      const winWidth = $(window).width()
      const targetMenu = target.next()
      const hideTargetMenu = targetMenu.attr('aria-hidden')
      if (hideTargetMenu === 'true') {
        if (winWidth < breakpoint) {
          targetMenu.stop().slideDown(200, () => {
            target.css('height', '')
          })
        } else {
          $toggle.not(target).removeClass('is-active').next().attr('aria-hidden', 'true')
        }
        target.addClass('is-active')
        targetMenu.attr('aria-hidden', 'false')

      } else {
        if (winWidth < breakpoint) {
          targetMenu.stop().slideUp(200)
        }
        target.removeClass('is-active')
        targetMenu.attr('aria-hidden', 'true')
      }
    })
  },
  setCloseMenuEvent: (breakpoint) => {
    $(document).on('click', (e) => {
      const winWidth = $(window).width()
      const winHeight = $(window).scrollTop()
      const $pcTargetBtn = $('.js-trigger[data-type="top-menu"]')
      const $pcTargetArea = $pcTargetBtn.parent()
      const $spToggleWrap = $('.js-triggerWrapper[data-sidenavi-status]')
      const $spTargetArea = $('#side-navi')

      if (!$(e.target).closest($pcTargetArea).length && winWidth >= breakpoint) {
        $pcTargetBtn.removeClass('is-active').next().attr('aria-hidden', 'true')
      }

      if (!$(e.target).closest($('header')).length && winWidth < breakpoint && $spToggleWrap.attr('data-sidenavi-status') ==='show') {
        $spToggleWrap.attr('data-sidenavi-status', 'hide')
        $spTargetArea.removeAttr('aria-modal').slideToggle();
        window.scrollTo(0, winHeight)
      }
    })
  },
  checkResizeEvent: (breakpoint) => {
    let wasPcView = ''
    $(window).on("orientationchange resize", () => {
      const currentWinWidth = $(window).width()
      const isPcView = currentWinWidth >= breakpoint
      if (wasPcView === false && isPcView === true) {
        $('#side-navi').css('display', '')
        $(".js-trigger[data-type='top-menu']").removeClass('is-active').next().css('display', '').attr('aria-hidden', 'true')
        $('.js-triggerWrapper[data-sidenavi-status]').attr('data-sidenavi-status', 'hide')
      } else if (wasPcView === true && isPcView === false) {
        $(".js-trigger[data-type='top-menu']").removeClass('is-active').next().attr('aria-hidden', 'true')
      }
      wasPcView = isPcView
    })
  },
  checkScrollEvent: () => {
    let beforePos = 0;
    function ScrollAnime() {
      const elemTop = 2000;
      const scroll = $(window).scrollTop();
        //ヘッダーの出し入れをする
        if(elemTop > scroll || 0 > scroll - beforePos){
          $('header').removeClass('UpMove');
          $('header').addClass('DownMove');
        } else {
          $('header').removeClass('DownMove');
          $('header').addClass('UpMove');
        }
        beforePos = scroll;
    }
    $(window).scroll(() => {
      ScrollAnime();
    });
    $(window).on('load', () => {
      ScrollAnime();
    });
  }
}
