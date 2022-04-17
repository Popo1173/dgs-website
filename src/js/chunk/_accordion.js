export const setAccordion = {

  init: () => {
    setAccordion.setParameters()
    for(let i = 0, len = $('[data-toggle="accordion"]').length; i < len; i++) {
      const $trigger = $('[data-toggle="accordion"]').eq(i)
      const $target = $($trigger.attr('data-target'))

      if($trigger.hasClass(setAccordion.COLLAPSED_CLASS)) {
        $target.addClass(setAccordion.COLLAPSED_CLASS).hide()
      } else {
        $trigger.addClass(setAccordion.EXPANDED_CLASS)
        $target.addClass(setAccordion.EXPANDED_CLASS)
      }
    }
    setAccordion.setEvent()
  },
  setParameters: () => {
    setAccordion.EXPANDED_CLASS = 'is-opened';
    setAccordion.COLLAPSED_CLASS = 'is-closed';
  },
  setEvent: () => {
    $('[data-toggle="accordion"]').on('click', (e) => {
      let state = 'is-closed';
      if($(e.target).hasClass(setAccordion.COLLAPSED_CLASS)) {
        state = 'is-closed';
      } else {
        state = 'is-opened';
      }
      setAccordion.toggleClass(state, $(e.target), $($(e.target).attr('data-target')));
      setAccordion.toggleContent(state, $($(e.target).attr('data-target')));
    })

    $($('[data-toggle="accordion"][data-accordion-status="internalToggle"]').attr('data-target')).find('a').on('click', (e) => {
      const targetId = $(e.target).closest('[data-accordion-status="internalTarget"]').attr('id')
      const targetToggle = $(`[data-target='#${targetId}']`)
      setAccordion.toggleClass('is-opened', targetToggle, $(targetToggle.attr('data-target')));
      setAccordion.toggleContent('is-opened', $(targetToggle.attr('data-target')));
    })
  },
  toggleClass: (state, $trigger, $target) => {
    if(state === setAccordion.COLLAPSED_CLASS) {
      $trigger.addClass(setAccordion.EXPANDED_CLASS).removeClass(setAccordion.COLLAPSED_CLASS);
      $target.addClass(setAccordion.EXPANDED_CLASS).removeClass(setAccordion.COLLAPSED_CLASS);
    } else {
      $trigger.addClass(setAccordion.COLLAPSED_CLASS).removeClass(setAccordion.EXPANDED_CLASS);
      $target.addClass(setAccordion.COLLAPSED_CLASS).removeClass(setAccordion.EXPANDED_CLASS);
    }
  },
  toggleContent: (state, $target) => {
    if(state === setAccordion.COLLAPSED_CLASS) {
      $target.stop().slideDown();
    } else {
      $target.stop().slideUp();
    }
  }
}
