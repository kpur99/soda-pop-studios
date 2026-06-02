/* ============================================
   SODA POP STUDIOS — script.js
   ============================================ */

   document.addEventListener('DOMContentLoaded', () => {

    // ── SMOOTH SCROLL for nav links ──
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // ── SCROLL ANIMATIONS ──
    const fadeEls = document.querySelectorAll(
      '.pil, .scard, .ncard, .litem, .eitem, .sec-title, .body-p'
    );
  
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
  
    fadeEls.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.5s ease ${i % 4 * 0.08}s, transform 0.5s ease ${i % 4 * 0.08}s`;
      observer.observe(el);
    });
  
    const style = document.createElement('style');
    style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);
  
  });