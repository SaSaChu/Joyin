$(document).ready(function () {
  $(".open-map-btn").on("click", function () {
    window.open(
      "https://maps.google.com?q=235+台灣中和區連城路168-2號6樓",
      "_blank"
    );
  });
});

$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    const target = $($(this).attr("href"));
    if (target.length) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 80, // 若有 header 高度，微調一下
        },
        600
      );
    }
  });
});

$(document).ready(function () {
  // top menu
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });

  // 表單：點擊 email 自動複製
  $('.footer-section a[href^="mailto"]').click(function (e) {
    e.preventDefault();
    const email = $(this).text();
    navigator.clipboard.writeText(email).then(() => {
      alert("Email 已複製到剪貼簿");
    });
  });

  // 表單
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    alert("感謝您的填寫，我們會盡快與您聯繫！");
    this.reset();
  });

  // 表單-選擇檔案
  $(document).ready(function () {
    $('.custom-file-wrapper input[type="file"]').on("change", function () {
      const fileName = $(this).prop("files")[0]?.name || "";
      $(this).closest(".custom-file-wrapper").find(".fake-input").val(fileName);
    });
  });
});
