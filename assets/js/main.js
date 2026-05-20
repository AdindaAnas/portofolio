// =============================================
// ADINDA ANAS QOLBU — PORTFOLIO JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- NAV SCROLL ----
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ---- SCROLL REVEAL ----
  const revealTargets = document.querySelectorAll(
    '.project-card, .skill-group, .publication-card, ' +
    '.contact-item, .about-text, .about-skills, .stat-strip, .reveal'
  );

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const siblings = entry.target.parentElement
          ? [...entry.target.parentElement.children]
          : [];
        const idx = siblings.indexOf(entry.target);
        const delay = (idx >= 0 && idx < 6) ? idx * 90 : 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

    revealTargets.forEach(el => {
      el.classList.add('reveal');
      io.observe(el);
    });
  } else {
    // fallback: show everything
    revealTargets.forEach(el => el.classList.add('reveal', 'visible'));
  }

});
