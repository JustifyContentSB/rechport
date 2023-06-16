import $ from 'jquery';

export default () => {
  $('.menu__item.has-submenu .menu__link').on('click', function(e) {
    e.preventDefault();
  });

  if ($(window).width() < 1200) {
    $('.menu__item.has-submenu .menu__link').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('is-active');
      $(this).next().slideToggle(300);
    });
  }
}
