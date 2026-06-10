/* ─────────────────────────────────────────
   CEENASTIC — Interactions
───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAVBAR SCROLL EFFECT ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  /* ── MOBILE MENU ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  /* ── ACTIVE NAV LINK ON SCROLL ── */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    navItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('href') === `#${current}`);
    });
  });

  /* ── ANIMATED STAT COUNTERS ── */
  const statNums = document.querySelectorAll('.stat-num');
  const animateStats = () => {
    statNums.forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      const duration = 1400;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target;
      };
      requestAnimationFrame(step);
    });
  };
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats();
        heroObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });
  heroObserver.observe(document.querySelector('.hero-stats'));

  /* ── SCROLL REVEAL ── */
  const revealTargets = document.querySelectorAll(
    '.news-card, .feature-card, .event-item, .resource-card, .forum-cat, .job-card, .gallery-item, .forum-thread'
  );
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.style.cssText += 'opacity:1;transform:translateY(0);', i % 6 * 60);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealTargets.forEach(el => {
    el.style.cssText += 'opacity:0;transform:translateY(20px);transition:opacity .5s ease,transform .5s ease;';
    revealObserver.observe(el);
  });

  /* ── TOAST NOTIFICATION ── */
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
  }

  /* ── AUTH MODAL ── */
  const authModal = document.getElementById('authModal');
  const closeAuth = document.getElementById('closeAuth');
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const heroJoin = document.getElementById('heroJoin');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const modalTabs = document.querySelectorAll('.modal-tab');

  function openModal(tab = 'login') {
    authModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    switchTab(tab);
  }
  function closeModal() {
    authModal.classList.remove('open');
    document.body.style.overflow = '';
  }
  function switchTab(tab) {
    modalTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    if (tab === 'login') {
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
    } else {
      signupForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
    }
  }

  loginBtn.addEventListener('click', () => openModal('login'));
  signupBtn.addEventListener('click', () => openModal('signup'));
  heroJoin.addEventListener('click', () => openModal('signup'));
  closeAuth.addEventListener('click', closeModal);
  authModal.addEventListener('click', (e) => { if (e.target === authModal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  modalTabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });
  document.querySelectorAll('.switch-tab').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab(link.dataset.target);
    });
  });

  /* ── DISCOVER BUTTON ── */
  document.getElementById('heroDiscover').addEventListener('click', () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  });

  /* ── FORM SUBMISSIONS (DEMO) ── */
  document.getElementById('doLogin').addEventListener('click', () => {
    closeModal();
    showToast('✓ Connexion réussie. Bienvenue sur CEENASTIC !');
  });
  document.getElementById('doSignup').addEventListener('click', () => {
    closeModal();
    showToast('✓ Compte créé avec succès. Bienvenue au club !');
  });

  /* ── EVENT REGISTRATION ── */
  document.querySelectorAll('.event-register-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const eventName = btn.dataset.event;
      showToast(`✓ Inscription confirmée : ${eventName}`);
      btn.textContent = '✓ Inscrit';
      btn.disabled = true;
      btn.style.opacity = '.6';
      btn.style.cursor = 'default';
    });
  });

  /* ── RESOURCES FILTER ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const resourceCards = document.querySelectorAll('.resource-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      resourceCards.forEach(card => {
        const show = filter === 'all' || card.dataset.year === filter;
        card.style.display = show ? 'flex' : 'none';
      });
    });
  });

  /* ── DOWNLOAD BUTTONS (DEMO) ── */
  document.querySelectorAll('.dl-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.closest('.resource-card').querySelector('h4').textContent;
      showToast(`📥 Téléchargement : ${title}`);
    });
  });

  /* ── UPLOAD COURSE (DEMO) ── */
  document.getElementById('uploadBtn').addEventListener('click', () => {
    showToast('Connecte-toi d\'abord pour partager un cours.');
    openModal('login');
  });

  /* ── FORUM CATEGORY CLICK (DEMO) ── */
  document.querySelectorAll('.forum-cat').forEach(cat => {
    cat.addEventListener('click', () => {
      const title = cat.querySelector('h4').textContent;
      showToast(`Ouverture de la catégorie : ${title}`);
    });
  });
  document.getElementById('forumBtn').addEventListener('click', () => {
    showToast('Le forum complet sera bientôt disponible !');
  });

  /* ── JOB APPLY (DEMO) ── */
  document.querySelectorAll('.job-card .btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
      const job = btn.closest('.job-card').querySelector('h4').textContent;
      showToast(`Candidature envoyée : ${job}`);
    });
  });

  /* ── GALLERY ITEM CLICK (DEMO) ── */
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const label = item.querySelector('.gallery-label').textContent;
      showToast(`Album : ${label}`);
    });
  });

  /* ── NEWSLETTER ── */
  document.getElementById('newsletterBtn').addEventListener('click', () => {
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value.trim();
    if (!email || !email.includes('@')) {
      showToast('Merci d\'entrer une adresse email valide.');
      return;
    }
    showToast(`✓ Inscription confirmée pour ${email}`);
    emailInput.value = '';
  });

});
