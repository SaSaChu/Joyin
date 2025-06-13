// 首頁01 背景＋數字動畫-開始
function updateBeigeRange() {
  var $main = $(".why-joyin-main");
  var $counter = $(".counter-bar");
  var $beige = $(".bg-beige-range");
  var $section = $(".why-joyin-section");

  if ($main.length && $counter.length && $beige.length && $section.length) {
    var mainOffset = $main.offset().top;
    var mainHeight = $main.outerHeight();
    var mainMiddle = mainOffset + mainHeight / 2;

    var counterOffset = $counter.offset().top;
    var counterHeight = $counter.outerHeight();
    var counterMiddle = counterOffset + counterHeight / 2;

    var sectionOffset = $section.offset().top;

    // 讓米色背景正好蓋在「主內容中間」到「統計區中間」之間
    var top = mainMiddle - sectionOffset;
    var height = counterMiddle - mainMiddle;

    // 限制最小高度，避免內容過少時看不到
    if (height < 80) height = 80;

    $beige.css({
      top: top + "px",
      height: height + "px",
      display: "block",
    });
  }
}

// 數字動畫
function animateCounters() {
  $(".count-number").each(function () {
    const $this = $(this);
    const target = parseInt($this.attr("data-target"), 10);
    const duration = 1200;
    const increment = Math.max(1, Math.ceil(target / (duration / 16)));
    let current = 0;

    function update() {
      current += increment;
      if (current >= target) {
        $this.text(target.toLocaleString() + (target >= 1000 ? "+" : ""));
      } else {
        $this.text(current.toLocaleString());
        requestAnimationFrame(update);
      }
    }
    update();
  });
}

$(function () {
  // 若內容圖有 lazy load，請視情況改用 onload
  setTimeout(updateBeigeRange, 120); // 等圖片載入
  $(window).on("resize scroll", updateBeigeRange);

  // 數字動畫只跑一次
  let counted = false;
  $(window).on("scroll", function () {
    const bar = $(".counter-bar");
    if (
      bar.length &&
      !counted &&
      $(window).scrollTop() > bar.offset().top - window.innerHeight + 80
    ) {
      animateCounters();
      counted = true;
    }
  });
  // 若一進頁面就露出，也要跑一次
  if (
    $(".counter-bar").length &&
    $(window).scrollTop() >
      $(".counter-bar").offset().top - window.innerHeight + 80
  ) {
    animateCounters();
  }
});
// 首頁01 背景＋數字動畫-結束

// 首頁08 - 開始

const lbsData = [
  {
    title: "LBS定位推薦附近好康",
    desc: "透過LBS定位技術，自動偵測使用者所在位置，即時推播鄰近店家的優惠資訊，強化區域性行銷效益，吸引周邊客群轉化為實際來店人潮。",
  },
  {
    title: "手機互動集點",
    desc: "手機即時推播優惠券、集點、任務，吸引會員常回店消費。可結合線上任務、消費累點，讓回購更輕鬆！",
  },
  {
    title: "會員消費歷程追蹤",
    desc: "完整記錄會員到店行為與消費足跡，利於後續精準推播與分眾行銷，提高回流與會員活躍度。",
  },
];
let currentIdx = 0;

function showLBS(idx) {
  // 保護
  if (idx < 0) idx = 0;
  if (idx >= lbsData.length) idx = lbsData.length - 1;
  currentIdx = idx;
  $(".img-item").removeClass("active").eq(idx).addClass("active");
  $("#lbs-title").text(lbsData[idx].title);
  $("#lbs-desc").text(lbsData[idx].desc);
}

$(function () {
  // 點圖片
  $(".img-item").on("click keydown", function (e) {
    if (e.type === "click" || e.key === "Enter" || e.keyCode === 13) {
      const idx = parseInt($(this).data("index"));
      showLBS(idx);
    }
  });
  // 左右鍵
  $(".btn-lbs-prev").on("click", function () {
    showLBS((currentIdx + lbsData.length - 1) % lbsData.length);
  });
  $(".btn-lbs-next").on("click", function () {
    showLBS((currentIdx + 1) % lbsData.length);
  });
  // 預設載入
  showLBS(0);
});

// 首頁08 - 結束

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
