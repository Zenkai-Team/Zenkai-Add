


const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});


const hamburger = document.getElementById('nav-hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const icon = hamburger.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});


document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const icon = hamburger.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  });
});


const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function setActiveNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navAnchors.forEach(a => {
    a.style.color = '';
    a.style.background = '';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = 'var(--primary)';
      a.style.background = 'var(--primary-dim)';
    }
  });
}

window.addEventListener('scroll', setActiveNav, { passive: true });


const fadeEls = document.querySelectorAll(
  '.info-card, .feature-item, .tech-card, .content-type-card, .step, .screenshot-card, .option-card, .bp-card'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${(i % 4) * 60}ms`;
  observer.observe(el);
});


function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre');
  const text = pre.innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.innerHTML = '<i class="fa-solid fa-check"></i>';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = '<i class="fa-solid fa-copy"></i>';
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {

    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.innerHTML = '<i class="fa-solid fa-check"></i>';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = '<i class="fa-solid fa-copy"></i>';
      btn.classList.remove('copied');
    }, 2000);
  });
}


const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

function openLightbox(img) {
  if (!img) return;
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = img.closest('.screenshot-card')?.querySelector('p')?.textContent || img.alt;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => {
    lightboxImg.src = '';
  }, 300);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();

  if ((e.key === 'Enter' || e.key === ' ') && document.activeElement?.matches('.screenshot-card img')) {
    e.preventDefault();
    openLightbox(document.activeElement);
  }
});

const screenshotImages = document.querySelectorAll('.screenshot-card img');
screenshotImages.forEach(img => {
  img.setAttribute('tabindex', '0');
  img.setAttribute('role', 'button');
  img.setAttribute('aria-label', 'Ampliar imagem de explicação');
  img.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(img);
    }
  });
  img.addEventListener('click', () => openLightbox(img));
});

if (lightboxImg) {
  lightboxImg.addEventListener('click', e => e.stopPropagation());
}


const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
const progressBar = document.getElementById('progress-bar');
const progressLabel = document.getElementById('progress-label');
const total = checkboxes.length;

function updateProgress() {
  const checked = document.querySelectorAll('.checklist-item input:checked').length;
  const pct = total > 0 ? (checked / total) * 100 : 0;
  progressBar.style.setProperty('--progress', pct + '%');
  progressLabel.textContent = `${checked} / ${total}`;
  if (checked === total && total > 0) {
    progressLabel.style.color = '#00e676';
  } else {
    progressLabel.style.color = '';
  }
}

checkboxes.forEach(cb => cb.addEventListener('change', updateProgress));
updateProgress();
