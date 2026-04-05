/* ========================================
   LOULIA Recruit — main.js
   ======================================== */

// LINE公式アカウントURL
const LINE_RECRUIT_URL = 'https://lin.ee/YBbycnJ';

// ---------- LINE リンク設定 ----------
document.querySelectorAll('.js-line-link').forEach(function (el) {
  el.href = LINE_RECRUIT_URL;
  el.target = '_blank';
  el.rel = 'noopener noreferrer';
});

// ---------- ヘッダースクロール ----------
var header = document.getElementById('header');

window.addEventListener('scroll', function () {
  if (window.scrollY > 60) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
});

// ---------- スクロールアニメーション（Intersection Observer） ----------
var revealElements = document.querySelectorAll('.reveal');

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(function (el) {
  observer.observe(el);
});

// ---------- 募集要項タブ切り替え ----------
var tabs = document.querySelectorAll('.requirements__tab');
var panels = document.querySelectorAll('.requirements__panel');

tabs.forEach(function (tab) {
  tab.addEventListener('click', function () {
    var target = tab.getAttribute('data-tab');

    tabs.forEach(function (t) { t.classList.remove('is-active'); });
    panels.forEach(function (p) { p.classList.remove('is-active'); });

    tab.classList.add('is-active');
    document.getElementById('panel-' + target).classList.add('is-active');
  });
});
