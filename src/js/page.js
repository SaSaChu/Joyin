// page範例共用區
document.addEventListener("DOMContentLoaded", function () {
  const caseSwiper = new Swiper(".case-swiper", {
    loop: true,
    navigation: {
      nextEl: ".case-button-next",
      prevEl: ".case-button-prev",
    },
    spaceBetween: 30,
  });
});

// game-cent01
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mockupSwiper", {
    slidesPerView: 4,
    spaceBetween: 32,
    allowTouchMove: true,
    loop: false,
    speed: 750,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    // 兩張半的RWD
    breakpoints: {
      1200: { slidesPerView: 4, spaceBetween: 32 },
      900: { slidesPerView: 2.5, spaceBetween: 20 },
      0: { slidesPerView: 2.5, spaceBetween: 12 },
    },
  });
});
