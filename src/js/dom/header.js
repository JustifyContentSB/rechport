import $ from 'jquery';
import throttle from '../utils/throttle';

export default () => {
  const $header = $('.header');
  const headerHeight = $header.outerHeight();

  const fix = () => {
    $('body').addClass('header-fixed');
  };

  const unfix = () => {
    $('body').removeClass('header-fixed');
  };

  const toggle = () => {
    const top = $(window).scrollTop();

    if (top > headerHeight) {
      fix();
    } else {
      unfix();
    }
  };

  let scrollPrev = 0;

  const autoHide = () => {
    if ($(window).width() > 1200) {
      const scrolled = $(window).scrollTop();

      if ( scrolled > 100 && scrolled > scrollPrev ) {
        $('body').addClass('header-viewport');
      } else {
        $('body').removeClass('header-viewport');
      }

      scrollPrev = scrolled;
    }
  }

  autoHide();
  toggle();

  $(window).scroll(throttle(toggle));
  $(window).scroll(throttle(autoHide));
};
