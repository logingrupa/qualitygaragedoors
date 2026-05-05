/* =========================================================
   QUALITY GARAGE DOORS — DESIGN 05 — MAIN JS
   Vanilla. No deps.
   ========================================================= */
(function () {
  'use strict';

  /* ----- 1. DESIGN SWITCHER (subpath-aware) ----- */
  (function designSwitcher() {
    const sw = document.querySelector('.design-switcher');
    if (!sw) return;
    const path = window.location.pathname;
    let file = path.split('/').filter(Boolean).pop() || 'index.html';
    if (!file.endsWith('.html')) file = 'index.html';
    const m = path.match(/^(.*?)\/([1-5])\//);
    const base = m ? m[1] : path.replace(/\/[^/]*$/, '').replace(/\/$/, '');
    const active = m ? m[2] : '0';
    sw.querySelectorAll('a').forEach(function (a) {
      const n = a.dataset.design;
      a.href = n === '0' ? base + '/' + file : base + '/' + n + '/' + file;
      if (n === active) a.classList.add('is-active');
    });
  })();

  /* ----- 2. MOBILE MENU ----- */
  (function mobileMenu() {
    const toggle = document.querySelector('[data-menu-toggle]');
    const close = document.querySelector('[data-menu-close]');
    const menu = document.querySelector('[data-menu]');
    if (!toggle || !menu) return;

    const open = function () {
      menu.classList.add('is-open');
      menu.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      const first = menu.querySelector('a, button');
      if (first) first.focus();
    };
    const shut = function () {
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggle.focus();
    };
    toggle.addEventListener('click', open);
    if (close) close.addEventListener('click', shut);
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', shut);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) shut();
    });
  })();

  /* ----- 3. CONTACT FORM ----- */
  (function contactForm() {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;
    const success = form.querySelector('[data-form-success]');

    const setError = function (field, on) {
      if (on) field.classList.add('has-error');
      else field.classList.remove('has-error');
    };

    const validate = function () {
      let ok = true;
      form.querySelectorAll('[required]').forEach(function (input) {
        const field = input.closest('.field');
        if (!field) return;
        const val = (input.value || '').trim();
        if (!val) {
          setError(field, true);
          ok = false;
          return;
        }
        if (input.type === 'email') {
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            setError(field, true);
            ok = false;
            return;
          }
        }
        if (input.type === 'tel') {
          const digits = val.replace(/\D/g, '');
          if (digits.length < 10) {
            setError(field, true);
            ok = false;
            return;
          }
        }
        setError(field, false);
      });
      return ok;
    };

    form.addEventListener('input', function (e) {
      const t = e.target;
      if (!t || !t.closest) return;
      const field = t.closest('.field');
      if (field && field.classList.contains('has-error')) {
        const val = (t.value || '').trim();
        if (val) setError(field, false);
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validate()) {
        const firstErr = form.querySelector('.field.has-error input, .field.has-error select, .field.has-error textarea');
        if (firstErr) firstErr.focus();
        return;
      }
      if (success) success.classList.add('is-on');
      form.reset();
      if (success) {
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  })();

  /* ----- 4. CURRENT YEAR ----- */
  (function year() {
    const el = document.querySelector('[data-year]');
    if (el) el.textContent = String(new Date().getFullYear());
  })();

})();
