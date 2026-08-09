/* ─────────────────────────────────────────
   PORTFOLIO — Ahmat Abakar Beguele
   Interactions : navigation, animations, filtres, contact
───────────────────────────────────────── */

// Adresse de réception du formulaire de contact
const CONTACT_EMAIL = 'ahmatabakarbeguele@gmail.com';

// Rôles affichés en machine à écrire dans le hero
const ROLES = [
  'Sites web rapides et responsives',
  'HTML · CSS · JavaScript',
  'Administration réseau & sécurité système',
  'Basé à N\'Djamena, disponible à distance'
];

/* ── TOAST ── */
const toast = document.getElementById('toast');
let toastTimer;

function showToast(message, isError = false) {
  toast.textContent = message;
  toast.classList.toggle('error', isError);
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3600);
}

/* ── NAVBAR : ombre au scroll + lien actif ── */
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const links = [...document.querySelectorAll('.nav-link')];
const sections = links
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

function onScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  toTop.classList.toggle('show', window.scrollY > 500);

  const pos = window.scrollY + 120;
  let current = sections[0];
  sections.forEach(section => { if (section.offsetTop <= pos) current = section; });
  links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + current.id));
}
window.addEventListener('scroll', onScroll, { passive: true });

/* ── MENU MOBILE ── */
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
});
links.forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}));

/* ── RETOUR EN HAUT ── */
const toTop = document.getElementById('toTop');
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── EFFET MACHINE À ÉCRIRE ── */
const typedRole = document.getElementById('typedRole');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  const text = ROLES[roleIndex];
  charIndex += deleting ? -1 : 1;
  typedRole.textContent = text.slice(0, charIndex);

  let delay = deleting ? 40 : 75;
  if (!deleting && charIndex === text.length) { deleting = true; delay = 1900; }
  else if (deleting && charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % ROLES.length; delay = 350; }

  setTimeout(typeLoop, delay);
}
typeLoop();

/* ── APPARITION AU SCROLL ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: .12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  revealObserver.observe(el);
});

/* ── COMPTEURS DU HERO ── */
function animateCounter(el) {
  const target = Number(el.dataset.target);
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    animateCounter(entry.target);
    statObserver.unobserve(entry.target);
  });
}, { threshold: .6 });

document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));

/* ── BARRES DE COMPÉTENCES ── */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.width = entry.target.dataset.level + '%';
    skillObserver.unobserve(entry.target);
  });
}, { threshold: .4 });

document.querySelectorAll('.skill-fill').forEach(el => skillObserver.observe(el));

/* ── FILTRES DE PROJETS ── */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const match = filter === 'all' || card.dataset.cat.split(' ').includes(filter);
      card.classList.toggle('hide', !match);
    });
  });
});

/* ── FORMULAIRE DE CONTACT (mailto) ── */
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('cfName');
  const email = document.getElementById('cfEmail');
  const subject = document.getElementById('cfSubject');
  const message = document.getElementById('cfMessage');
  const fields = [name, email, subject, message];

  let valid = true;
  fields.forEach(field => {
    const empty = !field.value.trim();
    field.classList.toggle('error', empty);
    if (empty) valid = false;
  });

  if (!valid) { showToast('Merci de remplir tous les champs.', true); return; }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) {
    email.classList.add('error');
    showToast('Adresse email invalide.', true);
    return;
  }

  const body = `Nom : ${name.value.trim()}\nEmail : ${email.value.trim()}\n\n${message.value.trim()}`;
  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject.value.trim())}&body=${encodeURIComponent(body)}`;

  showToast('Ton application mail va s\'ouvrir avec le message pré-rempli.');
  contactForm.reset();
});

contactForm.querySelectorAll('input, textarea').forEach(field => {
  field.addEventListener('input', () => field.classList.remove('error'));
});

/* ── DIVERS ── */
document.getElementById('year').textContent = new Date().getFullYear();
onScroll();
