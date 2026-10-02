


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
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxZoom = document.getElementById('lightbox-zoom');

let activeGalleryImages = [];
let activeGalleryIndex = 0;
let isZoomed = false;

function getGalleryImages() {
  return Array.from(document.querySelectorAll('.screenshot-card img'));
}

function updateLightboxContent() {
  const images = getGalleryImages();
  if (!images.length) return;

  if (activeGalleryIndex < 0) activeGalleryIndex = images.length - 1;
  if (activeGalleryIndex >= images.length) activeGalleryIndex = 0;

  const currentImg = images[activeGalleryIndex];
  if (!currentImg) return;

  lightboxImg.src = currentImg.src;
  lightboxImg.alt = currentImg.alt;
  lightboxCaption.textContent = currentImg.closest('.screenshot-card')?.querySelector('p')?.textContent || currentImg.alt;
  lightboxImg.classList.toggle('zoomed', isZoomed);
}

function openLightbox(img) {
  if (!img) return;

  const images = getGalleryImages();
  if (!images.length) return;

  activeGalleryImages = images;
  activeGalleryIndex = images.indexOf(img);
  if (activeGalleryIndex < 0) activeGalleryIndex = 0;

  updateLightboxContent();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightboxImg.classList.remove('zoomed');
  isZoomed = false;
  document.body.style.overflow = '';
  setTimeout(() => {
    lightboxImg.src = '';
  }, 300);
}

function goToLightboxImage(direction) {
  const images = getGalleryImages();
  if (!images.length) return;

  activeGalleryImages = images;
  activeGalleryIndex = (activeGalleryIndex + direction + images.length) % images.length;
  updateLightboxContent();
}

function toggleLightboxZoom() {
  isZoomed = !isZoomed;
  lightboxImg.classList.toggle('zoomed', isZoomed);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();

  if (lightbox.classList.contains('active')) {
    if (e.key === 'ArrowRight') goToLightboxImage(1);
    if (e.key === 'ArrowLeft') goToLightboxImage(-1);
    if (e.key === 'Enter' || e.key === ' ') {
      if (document.activeElement?.matches('.screenshot-card img')) {
        e.preventDefault();
        openLightbox(document.activeElement);
      }
    }
  }

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

if (lightboxPrev) {
  lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    goToLightboxImage(-1);
  });
}

if (lightboxNext) {
  lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    goToLightboxImage(1);
  });
}

if (lightboxZoom) {
  lightboxZoom.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleLightboxZoom();
  });
}

if (lightboxImg) {
  lightboxImg.addEventListener('click', e => e.stopPropagation());
  lightboxImg.addEventListener('dblclick', () => toggleLightboxZoom());
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
