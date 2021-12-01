'use strict'

const swiperProjects = new Swiper('.swiper--projects', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.slider__arrow-right',
        prevEl: '.slider__arrow-left',
    }

});

const swiperWorkWithStaff = new Swiper('.swiper-slider--work-with-staff', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.slider__arrow-right',
        prevEl: '.slider__arrow-left',
    }

});

const swiperOffersToEmployees = new Swiper('.swiper-slider--offers-to-employees', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.slider__arrow-right',
        prevEl: '.slider__arrow-left',
    }

});