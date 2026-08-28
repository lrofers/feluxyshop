// ===== Mobile menu toggle =====
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', (e) => {
  if (!mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
    mobileNav.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuToggle.classList.remove('open');
  });
});

// ===== Carousel: swipe / drag + dots + autoplay + arrows =====
const track = document.getElementById('carouselTrack');
const dotsWrap = document.getElementById('carouselDots');
const slides = Array.from(track.children);
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');

let activeIndex = 0;
let autoplayTimer = null;
const AUTOPLAY_MS = 4200;

// build dots
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', `Slide ${i + 1}`);
  dot.addEventListener('click', () => goToSlide(i));
  dotsWrap.appendChild(dot);
});
const dots = Array.from(dotsWrap.children);

function setActiveDot(i) {
  dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
  activeIndex = i;
}

function goToSlide(i) {
  const clamped = Math.max(0, Math.min(i, slides.length - 1));
  const slide = slides[clamped];
  track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  setActiveDot(clamped);
}

// detect which slide is centered while scrolling (covers swipe + drag + dot clicks)
let scrollRAF = null;
track.addEventListener('scroll', () => {
  if (scrollRAF) cancelAnimationFrame(scrollRAF);
  scrollRAF = requestAnimationFrame(() => {
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    slides.forEach((s, i) => {
      const center = s.offsetLeft - track.offsetLeft + s.clientWidth / 2 + track.scrollLeft - track.scrollLeft + s.offsetLeft;
      const dist = Math.abs((s.offsetLeft + s.clientWidth / 2) - trackCenter);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveDot(closest);
  });
});

prevArrow.addEventListener('click', () => goToSlide(activeIndex - 1));
nextArrow.addEventListener('click', () => goToSlide(activeIndex + 1));

// mouse drag support for desktop (native touch scroll already works on mobile)
let isDown = false;
let startX = 0;
let scrollStart = 0;

track.addEventListener('mousedown', (e) => {
  isDown = true;
  track.classList.add('dragging');
  startX = e.pageX;
  scrollStart = track.scrollLeft;
  pauseAutoplay();
});
window.addEventListener('mouseup', () => {
  isDown = false;
  track.classList.remove('dragging');
  resumeAutoplay();
});
window.addEventListener('mouseleave', () => { isDown = false; track.classList.remove('dragging'); });
track.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const walk = e.pageX - startX;
  track.scrollLeft = scrollStart - walk;
});

// pause autoplay while user is interacting via touch
track.addEventListener('touchstart', pauseAutoplay, { passive: true });
track.addEventListener('touchend', resumeAutoplay, { passive: true });

function startAutoplay() {
  autoplayTimer = setInterval(() => {
    const next = (activeIndex + 1) % slides.length;
    goToSlide(next);
  }, AUTOPLAY_MS);
}
function pauseAutoplay() { clearInterval(autoplayTimer); }
function resumeAutoplay() { pauseAutoplay(); startAutoplay(); }

startAutoplay();

// ===== Category filter =====
const catButtons = document.querySelectorAll('.cat-btn');
const productCards = document.querySelectorAll('.product-card');

catButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    catButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;

    productCards.forEach(card => {
      const cats = card.dataset.cat.split(' ');
      const show = cat === 'semua' || cats.includes(cat);
      card.style.display = show ? '' : 'none';
    });
  });
});
