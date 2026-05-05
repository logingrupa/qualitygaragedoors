/* Quality Garage Doors — Design 3 / Bold Service Brand
   Vanilla JS only. */

(function () {
  'use strict';

  // ---------- Mobile menu ----------
  const navToggle  = document.getElementById('navToggle');
  const navClose   = document.getElementById('mobileClose');
  const mobileMenu = document.getElementById('mobileMenu');

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    navToggle && navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    navToggle && navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  navToggle && navToggle.addEventListener('click', openMenu);
  navClose  && navClose.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  }

  // ---------- Design switcher ----------
  (function () {
    const sw = document.querySelector('.design-switcher');
    if (!sw) return;
    const path = window.location.pathname;
    let file = path.split('/').filter(Boolean).pop() || 'index.html';
    if (!file.endsWith('.html')) file = 'index.html';
    const m = path.match(/\/([1-5])\//);
    const active = m ? m[1] : '0';
    sw.querySelectorAll('a').forEach(a => {
      const n = a.dataset.design;
      a.href = n === '0' ? `/${file}` : `/${n}/${file}`;
      if (n === active) a.classList.add('is-active');
    });
  })();

  // ---------- Reveal on scroll ----------
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.04 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-in'));
  }

  // ---------- Contact form validation ----------
  const form = document.getElementById('contactForm');
  if (form) {
    const success = form.querySelector('.form-success');

    function setError(field, message) {
      const errEl = field.parentElement.querySelector('.err');
      if (errEl) errEl.textContent = message || '';
      field.setAttribute('aria-invalid', message ? 'true' : 'false');
    }

    function validate() {
      let ok = true;
      const name = form.querySelector('#name');
      const phone = form.querySelector('#phone');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');
      const service = form.querySelector('#service');

      if (!name.value.trim()) { setError(name, 'Please enter your name.'); ok = false; } else setError(name, '');

      const phoneDigits = phone.value.replace(/\D/g, '');
      if (phoneDigits.length < 10) { setError(phone, 'Please enter a valid phone number.'); ok = false; } else setError(phone, '');

      const emailVal = email.value.trim();
      if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        setError(email, 'Please enter a valid email.'); ok = false;
      } else setError(email, '');

      if (service && !service.value) { setError(service, 'Please choose a service.'); ok = false; } else if (service) setError(service, '');

      if (!message.value.trim()) { setError(message, 'Please add a short message.'); ok = false; } else setError(message, '');

      return ok;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validate()) {
        const firstErr = form.querySelector('[aria-invalid="true"]');
        firstErr && firstErr.focus();
        return;
      }
      if (success) {
        success.classList.add('is-on');
        success.setAttribute('role', 'status');
        success.textContent = 'Thanks — we got your request. We will call you shortly at the number you provided.';
      }
      form.reset();
      setTimeout(() => { success && success.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' }); }, 50);
    });
  }

  // ---------- Active nav highlight ----------
  (function () {
    const path = window.location.pathname.split('/').filter(Boolean).pop() || 'index.html';
    document.querySelectorAll('.nav-primary a, .mobile-menu nav a').forEach(a => {
      const href = a.getAttribute('href');
      if (href && href === path) a.classList.add('is-active');
    });
  })();

})();
