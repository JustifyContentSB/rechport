import $ from 'jquery';
import lozad from 'lozad';

export default () => {
  const observer = lozad('.about__row--bottom', {
    rootMargin: '-100px 0px',
    threshold: 0.3,
    loaded: function(el) {
      $(el).find('.stats__value').each(function() {
        const text = $(this).attr('data-value').replace(/\s/g, '');
        const initial = Number(text) || 0;
        const value = $(this).attr('data-value');

        $(this).prop('Counter', 0).animate({
            Counter: text
        }, {
            duration: 800,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    })}
  });

  observer.observe();
}
