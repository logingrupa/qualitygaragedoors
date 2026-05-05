/* Quality Garage Doors — Design 1 — Industrial Brutalist
   Vanilla JS. No deps. */

(function () {
  'use strict';

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.querySelector('[data-menu-open]');
  const menuClose = document.querySelector('[data-menu-close]');
  const menu = document.querySelector('.mobile-menu');

  function openMenu() {
    if (!menu) return;
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
  }
  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (menuClose) menuClose.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* ---------- Design switcher (preserves filename) ---------- */
  const sw = document.querySelector('.design-switcher');
  if (sw) {
    const path = window.location.pathname;
    let file = path.split('/').filter(Boolean).pop() || 'index.html';
    if (!file.endsWith('.html')) file = 'index.html';
    const m = path.match(/\/([1-5])\//);
    const active = m ? m[1] : '0';
    sw.querySelectorAll('a').forEach(function (a) {
      const n = a.dataset.design;
      a.href = n === '0' ? '/' + file : '/' + n + '/' + file;
      if (n === active) a.classList.add('is-active');
    });
  }

  /* ---------- Reveal-on-scroll (IntersectionObserver) ---------- */
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Marquee duplicate (for seamless infinite loop) ---------- */
  document.querySelectorAll('.marquee__track').forEach(function (track) {
    const inner = track.innerHTML;
    track.innerHTML = inner + inner;
  });

  /* ---------- Contact form validation ---------- */
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    const fields = form.querySelectorAll('[data-required]');
    const success = form.querySelector('.form__success');

    function validateField(field) {
      const wrap = field.closest('.field');
      const val = (field.value || '').trim();
      let valid = val.length > 0;
      if (valid && field.type === 'email') {
        valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      }
      if (valid && field.type === 'tel') {
        valid = val.replace(/\D/g, '').length >= 7;
      }
      if (wrap) wrap.classList.toggle('field--error', !valid);
      return valid;
    }

    fields.forEach(function (f) {
      f.addEventListener('blur', function () { validateField(f); });
      f.addEventListener('input', function () {
        const wrap = f.closest('.field');
        if (wrap && wrap.classList.contains('field--error')) validateField(f);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let allValid = true;
      fields.forEach(function (f) {
        if (!validateField(f)) allValid = false;
      });
      if (!allValid) {
        const firstErr = form.querySelector('.field--error input, .field--error textarea, .field--error select');
        if (firstErr) firstErr.focus();
        return;
      }
      if (success) {
        success.classList.add('is-shown');
        success.setAttribute('role', 'status');
      }
      form.reset();
      window.scrollTo({ top: form.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
    });
  }
})();
