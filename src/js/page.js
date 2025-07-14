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

// cupont-02
$(function() {
  // 預設第一個展開，第一張圖片沒遮罩
  $('.coupon-types-list li').removeClass('active').eq(0).addClass('active');
  $('.coupon-types-img-wrap').removeClass('active').eq(0).addClass('active');

  // 滑鼠進入左側選單，展開細節 + 解除對應右圖遮罩
  $('.coupon-types-list li').on('mouseenter focus', function() {
    let idx = $(this).data('index');
    $('.coupon-types-list li').removeClass('active');
    $(this).addClass('active');
    $('.coupon-types-img-wrap').removeClass('active');
    $('.coupon-types-img-wrap[data-index="' + idx + '"]').addClass('active');
  });

  // 手機點擊也可以展開
  $('.coupon-types-list li').on('click', function() {
    let idx = $(this).data('index');
    $('.coupon-types-list li').removeClass('active');
    $(this).addClass('active');
    $('.coupon-types-img-wrap').removeClass('active');
    $('.coupon-types-img-wrap[data-index="' + idx + '"]').addClass('active');
  });
});

// about照片
document.addEventListener("DOMContentLoaded", function () {
  const slider1310 = new Swiper('.slider1310-swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next.slider1310-arrow',
      prevEl: '.swiper-button-prev.slider1310-arrow'
    },
    grabCursor: true
  });
});

// 成員照片
document.addEventListener("DOMContentLoaded", function () {
  const memberSwiper = new Swiper('.memberintro-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    grabCursor: true,
    centeredSlides: false,
    slidesOffsetAfter: 0,
    navigation: {
      nextEl: '.memberintro-arrow-next',
      prevEl: '.memberintro-arrow-prev'
    }
  });

  $('.memberintro-arrow-next').on('click', function() {
    memberSwiper.slideNext();
  });
  $('.memberintro-arrow-prev').on('click', function() {
    memberSwiper.slidePrev();
  });

});

