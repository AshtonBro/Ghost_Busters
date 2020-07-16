"use strict";

$(document).ready(() => {
  const mMenuButton = $(".m-menu-button");
  const mMneu = $(".m-menu");
  const tab = $(".tab");

  mMenuButton.on("click", function () {
    mMneu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });

  tab.on("click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    const activeTabContante = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    $(activeTabContante).toggleClass("visible");
  });

  //*initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
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
        },
      },
    },
  });
});
