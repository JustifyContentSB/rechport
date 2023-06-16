import $ from 'jquery';

export const getDuration = (el, property = 'all') => {
    const element = (el instanceof $) ? $(el)[0] : el;

    const string = window.getComputedStyle(element).getPropertyValue('transition');

    let transition;

    if (string.includes(',')) {
        transition = string.split(', ').find(item => item.includes(property)) || '';
    } else {
        transition = string;
    };

    const duration = transition.includes(' ') ? transition.split(' ')[1] : null;

    return duration ? duration.replace(/[^0-9|.]/g, '') * 1000 : 0;
};
