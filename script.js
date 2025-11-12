const toggle = document.getElementById('themeToggle');
const html = document.documentElement;
toggle.addEventListener('click', () => {
  const isLight = html.getAttribute('data-theme') === 'light';
  html.setAttribute('data-theme', isLight ? 'dark' : 'light');
  toggle.querySelector('i').classList.toggle('fa-sun', !isLight);
  toggle.querySelector('i').classList.toggle('fa-moon', isLight);
  localStorage.setItem('theme', isLight ? 'dark' : 'light');
});
if (localStorage.getItem('theme') === 'light') {
  html.setAttribute('data-theme', 'light');
  toggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 300);
});
scrollBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible'))), {threshold:0.1});
sections.forEach(s => observer.observe(s));
