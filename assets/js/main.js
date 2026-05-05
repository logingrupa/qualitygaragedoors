/* ============================================================
   Quality Garage Doors — Main JS
   ============================================================ */

'use strict';

// ── Mobile Menu ──────────────────────────────────────────────
(function () {
  const toggle   = document.getElementById('navToggle');
  const menu     = document.getElementById('mobileMenu');
  const overlay  = document.getElementById('mobileOverlay');
  const closeBtn = document.getElementById('mobileClose');

  function openMenu() {
    menu.classList.add('open');
    overlay.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (toggle) toggle.addEventListener('click', openMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
})();

// ── Scroll Animations ────────────────────────────────────────
(function () {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.animate-fade-up').forEach(function (el) {
    observer.observe(el);
  });
})();

// ── Sticky Header Shadow ─────────────────────────────────────
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
    } else {
      header.style.boxShadow = '';
    }
  }, { passive: true });
})();

// ── Active Nav Link ──────────────────────────────────────────
(function () {
  const current = window.location.pathname.split('/').filter(Boolean).pop() || 'index.html';
  document.querySelectorAll('.nav-menu a, .mobile-menu a').forEach(function (link) {
    const href = link.getAttribute('href') || '';
    if (href === current || href.replace('.html', '') === current.replace('.html', '')) {
      link.classList.add('active');
    }
  });
})();

// ── Contact Form Submission ──────────────────────────────────
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Message Sent!';
    btn.disabled = true;
    btn.style.background = '#22c55e';

    setTimeout(function () {
      btn.textContent = original;
      btn.disabled = false;
      btn.style.background = '';
      form.reset();
    }, 3500);
  });
})();

// ── Coupon Print ─────────────────────────────────────────────
(function () {
  document.querySelectorAll('.coupon-print-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      window.print();
    });
  });
})();

// ── Smooth Anchor Scroll ─────────────────────────────────────
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

// ── Counter Animation ────────────────────────────────────────
(function () {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1600;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(function (el) { observer.observe(el); });
})();

// ── Design Switcher (preserves filename across slots) ─────────
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
