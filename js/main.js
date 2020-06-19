$(document).ready(function () {
    const mMenuButton = $('.m-menu-button');
    const mMneu = $('.m-menu');

    mMenuButton.on('click', function () {
        mMneu.toggleClass('active');
        $('body').toggleClass('no-scroll')
    });
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        spaceBetween: 25,
        slidesPerView: 4,
        loop: true,
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
                slidesOffsetAfter: 50,
                navigation: {
                    nextEl: ".button-next",
                }
            },
        }
    })
});