import $ from 'jquery';

export default () => {
  const header = document.querySelector('.header');

  document.querySelectorAll('[data-hero-scroll]').forEach(scroll => {
    scroll.addEventListener('click', function(e) {
        e.preventDefault();

        const parentElement = this.closest('.section--hero');

        const scrollTarget = parentElement.nextElementSibling;
        let topOffset = header.offsetHeight;

        if ($(window).width() > 1200) {
          topOffset = 0;
        }

        $('html, body').animate({
          scrollTop: $(scrollTarget).offset().top - topOffset
        }, {
            duration: 400,
            easing: "linear"
        });
    });
  })
}

