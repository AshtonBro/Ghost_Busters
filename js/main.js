$(document).ready(function () {
    let tabsItem = $('.info-tabs__item');

    tabsItem.on('click', function (event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.info-tabs__item-active').toggleClass('info-tabs__item-active');
        $(this).toggleClass('info-tabs__item-active');
    });
    
});