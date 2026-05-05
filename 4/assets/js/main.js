/* Quality Garage Doors — Design 4 "Neighborhood Warm" — main.js */
(function () {
  'use strict';

  // ---- Mobile drawer ----
  const drawer = document.getElementById('drawer');
  const menuBtn = document.getElementById('menuBtn');
  const drawerClose = document.getElementById('drawerClose');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawer) {
    drawer.addEventListener('click', function (e) {
      if (e.target === drawer) closeDrawer();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  // ---- Design switcher (preserves filename) ----
  (function () {
    const sw = document.querySelector('.design-switcher');
    if (!sw) return;
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
  })();

  // ---- Fade-up on scroll ----
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.fade-up').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.fade-up').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ---- Contact form validation ----
  const form = document.getElementById('contactForm');
  if (form) {
    const success = document.getElementById('formSuccess');

    function validateField(field) {
      const wrap = field.closest('.field');
      if (!wrap) return true;
      let valid = true;
      const value = (field.value || '').trim();

      if (field.hasAttribute('required') && !value) valid = false;
      if (field.type === 'email' && value) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) valid = false;
      }
      if (field.type === 'tel' && value) {
        const digits = value.replace(/\D/g, '');
        if (digits.length < 10) valid = false;
      }
      wrap.classList.toggle('has-error', !valid);
      return valid;
    }

    form.querySelectorAll('input, select, textarea').forEach(function (f) {
      f.addEventListener('blur', function () { validateField(f); });
      f.addEventListener('input', function () {
        const wrap = f.closest('.field');
        if (wrap && wrap.classList.contains('has-error')) validateField(f);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let allValid = true;
      form.querySelectorAll('input, select, textarea').forEach(function (f) {
        if (!validateField(f)) allValid = false;
      });
      if (!allValid) {
        const firstErr = form.querySelector('.field.has-error input, .field.has-error select, .field.has-error textarea');
        if (firstErr) firstErr.focus();
        return;
      }
      if (success) {
        success.classList.add('is-shown');
        success.setAttribute('tabindex', '-1');
        success.focus();
      }
      form.reset();
      setTimeout(function () {
        if (success) success.classList.remove('is-shown');
      }, 8000);
    });
  }

  // ---- Coupon print button ----
  const printBtn = document.getElementById('printCoupons');
  if (printBtn) {
    printBtn.addEventListener('click', function () { window.print(); });
  }

  // ---- Sticker wobble on hover (intermittent) ----
  document.querySelectorAll('.sticker').forEach(function (s) {
    s.addEventListener('mouseenter', function () {
      s.style.transition = 'transform 0.25s cubic-bezier(.4,1.6,.6,1)';
    });
  });
})();
