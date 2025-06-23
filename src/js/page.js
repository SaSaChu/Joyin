// page範例共用區
document.addEventListener("DOMContentLoaded", function () {
    const caseSwiper = new Swiper(".case-swiper", {
      loop: true,
      spaceBetween: 30,
      navigation: {
        nextEl: ".case-button-next",
        prevEl: ".case-button-prev"
      },
      autoplay: {
        delay: 5000, // 每 5 秒切換一次
        disableOnInteraction: false // 使用者操作後仍繼續自動播放
      }
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

// arround 02
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".recommendation-swiper", {
    loop: true,
    navigation: {
      nextEl: ".recommendation-next-btn",
      prevEl: ".recommendation-prev-btn",
    },
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    // 手機～平板（<992px）顯示 2.5 張、無留白
    slidesPerView: 2.5,
    slidesOffsetBefore: 0,
    breakpoints: {
      // 桌機（≥992px）顯示 3.5 張、左側留白 80px
      992: {
        slidesPerView: 3.5,
        slidesOffsetBefore: 0
      }
    }
  });
});

