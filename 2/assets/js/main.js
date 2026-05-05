/* ============================================================
   Quality Garage Doors — Design 2: Premium Residential
   Vanilla JS only. Mobile menu, scroll-reveal, sticky header,
   design switcher, contact form validation.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Mobile menu ---------- */
  const menu = document.getElementById('mobileMenu');
  const open = document.getElementById('menuOpen');
  const close = document.getElementById('menuClose');
  function setMenu(show) {
    if (!menu) return;
    menu.classList.toggle('is-open', show);
    menu.setAttribute('aria-hidden', show ? 'false' : 'true');
    if (open) open.setAttribute('aria-expanded', show ? 'true' : 'false');
    document.body.style.overflow = show ? 'hidden' : '';
  }
  if (open) open.addEventListener('click', () => setMenu(true));
  if (close) close.addEventListener('click', () => setMenu(false));
  if (menu) {
    menu.querySelectorAll('a[href]').forEach(a => {
      a.addEventListener('click', () => setMenu(false));
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });

  /* ---------- Sticky header scroll state ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Scroll reveal ---------- */
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-in'));
  }

  /* ---------- Design switcher (subpath-aware) ---------- */
  const sw = document.querySelector('.design-switcher');
  if (sw) {
    const path = window.location.pathname;
    let file = path.split('/').filter(Boolean).pop() || 'index.html';
    if (!file.endsWith('.html')) file = 'index.html';
    const m = path.match(/^(.*?)\/([1-5])\//);
    const base = m ? m[1] : path.replace(/\/[^/]*$/, '').replace(/\/$/, '');
    const active = m ? m[2] : '0';
    sw.querySelectorAll('a').forEach(a => {
      const n = a.dataset.design;
      a.href = n === '0' ? `${base}/${file}` : `${base}/${n}/${file}`;
      if (n === active) a.classList.add('is-active');
    });
  }

  /* ---------- Year stamp ---------- */
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------- Contact form validation ---------- */
  const form = document.getElementById('contactForm');
  if (form) {
    const setErr = (name, msg) => {
      const err = form.querySelector(`[data-err="${name}"]`);
      if (err) err.textContent = msg || '';
    };
    const validators = {
      name: (v) => v.trim().length >= 2 ? '' : 'Please enter your full name.',
      phone: (v) => /^[\d\s().+-]{10,}$/.test(v.trim()) ? '' : 'Please enter a valid phone number.',
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email.',
      service: (v) => v.trim() ? '' : 'Please choose a service.',
      message: (v) => v.trim().length >= 8 ? '' : 'Please add a few details (8+ characters).',
    };
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let ok = true;
      Object.keys(validators).forEach(key => {
        const field = form.elements.namedItem(key);
        if (!field) return;
        const msg = validators[key](field.value);
        setErr(key, msg);
        if (msg) ok = false;
      });
      if (ok) {
        const success = document.getElementById('formSuccess');
        if (success) success.classList.add('is-shown');
        form.reset();
        Object.keys(validators).forEach(k => setErr(k, ''));
        success && success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    form.querySelectorAll('input, textarea, select').forEach(input => {
      input.addEventListener('blur', () => {
        const v = validators[input.name];
        if (v) setErr(input.name, v(input.value));
      });
    });
  }
})();
