// Плашка-переключатель вариантов прототипа
(function () {
  var items = [['../', '←'], ['../v1/', '1'], ['../v2/', '2'], ['../v3/', 'WOW']];
  var path = location.pathname;
  var dark = document.documentElement.getAttribute('data-switcher') === 'dark';
  var bar = document.createElement('nav');
  bar.setAttribute('aria-label', 'Варианты прототипа');
  bar.style.cssText = 'position:fixed;left:16px;bottom:16px;z-index:9999;display:flex;gap:4px;padding:4px;border-radius:999px;font:600 13px/1 Manrope,system-ui,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.18);' +
    (dark ? 'background:rgba(20,20,22,.88);border:1px solid rgba(255,255,255,.14)' : 'background:rgba(255,255,255,.92);border:1px solid rgba(0,0,0,.08)') + ';backdrop-filter:blur(8px)';
  items.forEach(function (it) {
    var a = document.createElement('a');
    a.href = it[0];
    a.textContent = it[1];
    var key = it[0].replace('../', '');
    var active = key && path.indexOf('/' + key) !== -1;
    a.style.cssText = 'display:block;padding:9px 13px;border-radius:999px;text-decoration:none;' +
      (active ? 'background:#f5c400;color:#1f1f1e' : (dark ? 'color:#e8e8e6' : 'color:#1f1f1e'));
    bar.appendChild(a);
  });
  document.addEventListener('DOMContentLoaded', function () { document.body.appendChild(bar); });
})();
