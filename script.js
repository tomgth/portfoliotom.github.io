// === THEME TOGGLE ===
const toggle = document.getElementById('themeToggle');
const html = document.documentElement;

toggle.addEventListener('click', () => {
  const isLight = html.getAttribute('data-theme') === 'light';
  html.setAttribute('data-theme', isLight ? 'dark' : 'light');
  toggle.querySelector('i').classList.toggle('fa-sun', !isLight);
  toggle.querySelector('i').classList.toggle('fa-moon', isLight);
  localStorage.setItem('theme', isLight ? 'dark' : 'light');
});

// Appliquer le thème sauvegardé
if (localStorage.getItem('theme') === 'light') {
  html.setAttribute('data-theme', 'light');
  toggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

// === SCROLL TO TOP ===
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 300);
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === ANIMATION À L'APPARITION ===
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .card').forEach(el => observer.observe(el));

// === ANIMATION PROGRESS BARS ===
document.querySelectorAll('.progress-fill').forEach(bar => {
  const targetWidth = bar.style.width || '0%';
  bar.style.width = '0%';
  setTimeout(() => {
    bar.style.width = targetWidth;
  }, 300);
});
