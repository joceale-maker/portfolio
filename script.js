// ============================================================
//   CEL JULIEZA PORTFOLIO — JAVASCRIPT
//   Handles: scroll animations, mobile nav, smooth scroll
// ============================================================

// Scroll-triggered fade-in animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Mobile navigation toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Close mobile nav on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('nav')) {
    navLinks && navLinks.classList.remove('open');
  }
});
