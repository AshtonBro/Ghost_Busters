$(document).ready(function () {
    const mMenuButton = $('.m-menu-button');
    const mMneu = $('.m-menu');

    mMenuButton.on('click', function () {
        mMneu.toggleClass('active');
        $('body').toggleClass('no-scroll')
    });
});