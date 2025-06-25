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

// 03
$(document).ready(function () {
  // 對應每張圖的標題＋說明資料
  const promoautoData = [
    {
      title: '專案建置平台租賃',
      desc: '小字說明：提供「平台建置」與「平台租賃」兩種方案，企業可依據預算、時程與功能需求彈性選擇。'
    },
    {
      title: '多樣券種彈性設計',
      desc: '可依行銷需求設計不同券種，支援多規格整合，行銷策略更具彈性。'
    },
    {
      title: '快速上架、即時核銷',
      desc: '即時整合門市系統、快速核銷回報，操作簡單效率高。'
    },
    {
      title: '即時數據，效果可追',
      desc: '平台具備即時數據追蹤、成效分析功能，讓每一分預算都看得見。'
    }
  ];

  // 預設第一張 active
  $('.promoauto-photo-item').removeClass('active').eq(0).addClass('active');

  // 點擊圖片時，切換 active 並改變上方右側內容
  $('.promoauto-photo-item').on('mouseenter click', function() {
    var idx = $(this).data('index');
    $('.promoauto-photo-item').removeClass('active');
    $(this).addClass('active');
    $('.promoauto-feature-title-text').text(promoautoData[idx].title);
    $('.promoauto-feature-desc').text(promoautoData[idx].desc);
  });
});

// 04
$(document).ready(function () {
  // 內容資料
  const storematchData = [
    {
      title: "精準媒合行銷需求",
      desc: "依據品牌屬性與受眾輪廓，推薦合適的異業合作對象，節省尋找成本。",
      mainImg: "../img/0401.png",
      smallImg: "../img/0402.png"
    },
    {
      title: "多元通路資源整合",
      desc: "串聯線上/線下多元通路，擴大推廣能見度。",
      mainImg: "../img/0403.png",
      smallImg: "../img/0404.png"
    },
    {
      title: "即時數據追蹤",
      desc: "分析推廣成效，提供即時數據報告，優化行銷決策。",
      mainImg: "../img/0401.png",
      smallImg: "../img/0402.png"
    },
    {
      title: "靈活專案執行",
      desc: "彈性調整合作內容，因應多變市場需求。",
      mainImg: "../img/0403.png",
      smallImg: "../img/0404.png"
    }
  ];

  let nowIdx = 0;
  let timer = null;

  function switchTab(idx) {
    nowIdx = idx;
    $('.storematch-tab').removeClass('active').eq(idx).addClass('active');
    $('.storematch-info-title').text(storematchData[idx].title);
    $('.storematch-info-desc').text(storematchData[idx].desc);
    $('.storematch-mainimg').attr('src', storematchData[idx].mainImg);
    $('.storematch-smallimg').attr('src', storematchData[idx].smallImg);
  }

  $('.storematch-tab').on('click', function(){
    switchTab($(this).data('idx'));
    resetTimer();
  });

  // 自動輪播
  function autoSwitch(){
    nowIdx = (nowIdx+1)%storematchData.length;
    switchTab(nowIdx);
    timer = setTimeout(autoSwitch, 4000);
  }
  function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(autoSwitch, 4000);
  }
  switchTab(0);
  timer = setTimeout(autoSwitch, 4000);
});

// 06
$(document).ready(function () {
  const featureData = [
    {
      title: "會員分級管理更靈活",
      desc: "可依照會員消費金額、參與頻率或任務完成度設定等級，提供專屬優惠、兌換資格與回饋內容，強化用戶的品牌歸屬感與忠誠度。",
      img: "../img/4151017.png"
    },
    {
      title: "行為資料即時回傳",
      desc: "會員每一次互動資料即時上傳，精準建檔，有效追蹤會員行為路徑與偏好。",
      img: "../img/4151017.png"
    },
    {
      title: "精準優惠推播再行銷",
      desc: "根據會員輪廓，自動推播個人化優惠與再行銷訊息，有效提升轉換率。",
      img: "../img/4151017.png"
    },
    {
      title: "積分兌換機制強化回購",
      desc: "設計多元積分兌換制度，刺激消費者持續消費，提升品牌忠誠度與回購率。",
      img: "../img/4151017.png"
    }
  ];

  function switchFeature(idx){
    $('.memberfeature-box').removeClass('active').eq(idx).addClass('active');
    $('.memberfeature-detail-title').text(featureData[idx].title);
    $('.memberfeature-detail-desc').text(featureData[idx].desc);
    $('.memberfeature-mainimg').attr('src', featureData[idx].img);
    $('.memberfeature-detail-bar').removeClass('active').eq(idx).addClass('active');
    // 同步 select 下拉
    $('.memberfeature-select').val(idx);
  }
  $('.memberfeature-box').on('click', function(){
    switchFeature($(this).data('idx'));
  });
  $('.memberfeature-select').on('change', function(){
    switchFeature($(this).val());
  });

  // 預設第一個
  switchFeature(0);
});

// 05
$(document).ready(function () {
  const videoprodData = [
    {
      title: "創意腳本設計",
      desc: [
        "由專業團隊量身打造影片腳本，確保故事內容貼近品牌調性與受眾期待。",
        "從品牌理念、產品亮點到活動資訊，都能透過精準腳本轉化為具吸引力的影像內容。"
      ],
      icon: "../img/icon01.svg",
      mainImg: "../img/0501.png",
      smallImg: "../img/0502.png"
    },
    {
      title: "專業影像製作團隊",
      desc: [
        "內建導演、攝影師、美術與後製剪輯等專業人員，一站式整合拍攝資源。",
        "支援實景拍攝、動畫製作與創意視覺呈現，提升影片品質與品牌專業度。"
      ],
      icon: "../img/icon02.svg",
      mainImg: "../img/0503.png",
      smallImg: "../img/0504.png"
    },
    {
      title: "跨平台投放應用",
      desc: [
        "影片可用多種比特例格式，無論是Facebook、Instagram、YouTube或LINE都能輕鬆上稿。",
        "適用於品牌官網、活動現場、電視螢幕多元載體，提升內容曝光頻率與延伸效益。"
      ],
      icon: "../img/icon03.svg",
      mainImg: "../img/0501.png",
      smallImg: "../img/0502.png"
    },
    {
      title: "成效追蹤優化內容",
      desc: [
        "提供影片播映數據、點擊率、觀看秒數等數據分析，協助評估行銷成效。",
        "透過數據進行為調整，優化腳本、剪輯與投放策略，持續提升轉換與用戶黏著度。"
      ],
      icon: "../img/icon04.svg",
      mainImg: "../img/0503.png",
      smallImg: "../img/0504.png"
    }
  ];

  // 共用切換函式
  function switchVideoProd(idx){
    // 桌機
    $('.videoprod-feature-card').removeClass('active').eq(idx).addClass('active');
    // 手機
    $('.videoprod-feature-card-m').removeClass('active').eq(idx).addClass('active');
    // 主要圖
    $('.videoprod-mainimg').attr('src', videoprodData[idx].mainImg);
    $('.videoprod-smallimg').attr('src', videoprodData[idx].smallImg);

    // 手機內容
    let descHtml = "";
    videoprodData[idx].desc.forEach(function(d){
      descHtml += "<li>"+d+"</li>";
    });
    $('.videoprod-feature-mobiledesc ul').html(descHtml);

    // 桌機內容（卡片內li自帶，僅換 active 樣式即可，若需要動態渲染可做同手機）
  }

  // 卡片選單點擊
  $('.videoprod-feature-card').on('click', function(){
    switchVideoProd($(this).data('idx'));
  });
  $('.videoprod-feature-card-m').on('click', function(){
    switchVideoProd($(this).data('idx'));
  });

  // 預設第一個
  switchVideoProd(0);
});


// 07
$(document).ready(function () {
  // 你的四組內容
const missiongameData = [
  {
    title: "任務遊戲與模擬互動",
    subtitle: "多元任務模組彈性高",
    desc: "內建多款互動任務機組，如疊疊樂、轉轉樂、集章卡等，快速導入，免開發即可使用，適用各類促銷主題與品牌行銷活動。"
  },
  {
    title: "行動集章體驗",
    subtitle: "簡單掃碼累積任務",
    desc: "消費者透過行動集章掃碼參與互動任務，提升品牌黏著度與線下引流效果。"
  },
  {
    title: "好友揪團共玩",
    subtitle: "裂變傳播、社群互動",
    desc: "用戶可揪團組隊完成任務，社群互動遊戲化，增強活動傳播力。"
  },
  {
    title: "遊戲互動帶動轉單",
    subtitle: "提升參與率促進消費",
    desc: "互動遊戲結合優惠推播，提升用戶回購意願，有效帶動轉單。"
  }
];

function switchMission(idx){
  $('.missiongame-photo-cell').removeClass('active').eq(idx).addClass('active');
  $('.missiongame-title').text(missiongameData[idx].title);
  $('.missiongame-subtitle').text(missiongameData[idx].subtitle);
  $('.missiongame-desc').text(missiongameData[idx].desc);
}

// 圖片點選
$('.missiongame-photo-cell').on('click', function(){
  switchMission($(this).data('idx'));
});
// 左右箭頭
$('.missiongame-arrow-left').on('click', function(){
  let idx = $('.missiongame-photo-cell.active').data('idx');
  idx = (idx + 3) % 4;
  switchMission(idx);
});
$('.missiongame-arrow-right').on('click', function(){
  let idx = $('.missiongame-photo-cell.active').data('idx');
  idx = (idx + 1) % 4;
  switchMission(idx);
});

// 初始
switchMission(0);

});





