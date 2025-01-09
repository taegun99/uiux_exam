$(document).ready(function(){
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


$(".btn_familysite").click(function () {
    if ($(".familysite").hasClass("active")) {
      $(".familysite").removeClass("active");
    } else {
      $(".familysite").addClass("active");
    }
  });



});
