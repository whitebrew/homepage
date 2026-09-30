(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll('[data-set-lang]');

  function setLang(lang, persist) {
    root.dataset.lang = lang;
    root.lang = lang;
    buttons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.setLang === lang));
    });
    if (persist) {
      try { localStorage.setItem('wb-lang', lang); } catch (e) {}
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.dataset.setLang, true);
    });
  });

  setLang(root.dataset.lang === 'en' ? 'en' : 'ko', false);
})();
