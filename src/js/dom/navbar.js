import $ from 'jquery';

export default () => {
    const $navbarMenu = $('<nav class="menu menu--vertical menu--main"><ul class="menu__list"></ul></nav>');

    $('.header .menu__item').each(function() {
        $(this).clone().appendTo($navbarMenu.find('.menu__list'));
    });

    $navbarMenu.appendTo('.navbar__nav');
    $('.header .phone').clone().appendTo('.navbar__phone');
};
