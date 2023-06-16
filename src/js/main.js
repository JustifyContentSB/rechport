import $ from 'jquery';
import './polyfills';
import Preload from './components/preload';
import Fancybox from './components/fancybox';
import LazyLoad from './components/lazyLoad';
import Scrollbar from './components/scrollbar';
import Swiper from './components/swiper';
import Phone from './components/phone';
import Select from './components/select';
import Topper from './components/topper';
import Hamburger from './components/hamburger';
import YandexMap from "./components/yandexMap";

import buildHeaderLayout from "./dom/header";
import buildHeroScrollLayout from './dom/hero';
import buildStatsLayout from './dom/stats';
import buildNavbarLayout from './dom/navbar';
import buildMenuLayout from './dom/menu';

window.$ = window.jQuery = $;

$(function () {
  buildHeaderLayout();
  buildHeroScrollLayout();
  buildStatsLayout();
  buildNavbarLayout();
  buildMenuLayout();

  const preload = new Preload('[data-preload]');

  const fancybox = new Fancybox('[data-fancybox]');

  $.fn.modal = fancybox.open;
  $.fn.modalClose = fancybox.close;

  const lazyLoad = new LazyLoad('[data-src], [data-background-image]');

  const scrollbar = new Scrollbar('[data-scrollbar]');

  const swiper = new Swiper('[data-swiper]', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  const phone = new Phone('[data-phone]');

  const select = new Select('[data-select]');

  const hamburger = new Hamburger("[data-hamburger]");

  const map = new YandexMap("[data-map]");

  const topper = new Topper('[data-topper]', {
    direction: 'up'
  });
});



