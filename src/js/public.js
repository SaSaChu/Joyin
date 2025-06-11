$(document).ready(function () {
  // 範例：點擊 email 自動複製
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
});
