/* ============ PRODUCT DATA ============ */
const PRODUCTS = [
  { id:1, name:"Netflix Premium 1 Bulan (Sharing)", cats:["streaming"], icon:"play", price:35000, old:60000, disc:42, rating:4.9, sold:"1,2rb+ terjual", stock:"Sisa 40" },
  { id:2, name:"Disney+ Hotstar 1 Bulan", cats:["streaming"], icon:"cloudStream", price:25000, old:39000, disc:36, rating:4.8, sold:"620 terjual", stock:"Sisa 55" },
  { id:3, name:"Spotify Premium 1 Bulan", cats:["musik"], icon:"music", price:15000, old:54999, disc:73, rating:4.9, sold:"3rb+ terjual", stock:"Sisa 100", badge:"PALING LARIS" },
  { id:4, name:"YouTube Premium 1 Bulan", cats:["streaming","musik"], icon:"play", price:18000, old:35000, disc:49, rating:4.8, sold:"980 terjual", stock:"Sisa 70" },
  { id:5, name:"CapCut Pro 1 Bulan", cats:["editing"], icon:"scissors", price:20000, old:45000, disc:56, rating:4.8, sold:"740 terjual", stock:"Sisa 33" },
  { id:6, name:"Canva Pro 1 Bulan", cats:["editing","produktivitas"], icon:"canvas", price:12000, old:25000, disc:52, rating:4.9, sold:"1,5rb+ terjual", stock:"Sisa 90" },
  { id:7, name:"ChatGPT Plus 1 Bulan", cats:["produktivitas"], icon:"chatBot", price:145000, old:220000, disc:34, rating:4.7, sold:"210 terjual", stock:"Sisa 15" },
  { id:8, name:"Mobile Legends 172 Diamonds", cats:["game"], icon:"diamond", price:42000, old:52000, disc:19, rating:4.8, sold:"2rb+ terjual", stock:"Sisa 200" },
  { id:9, name:"Free Fire 100 Diamonds", cats:["game"], icon:"gem", price:15000, old:18000, disc:17, rating:4.9, sold:"3,4rb+ terjual", stock:"Sisa 300" },
  { id:10, name:"PUBG Mobile 60 UC", cats:["game"], icon:"gameController", price:14000, old:17000, disc:18, rating:4.8, sold:"1,8rb+ terjual", stock:"Sisa 150" },
  { id:11, name:"Genshin Impact 60 Genesis Crystals", cats:["game"], icon:"crown", price:16000, old:20000, disc:20, rating:4.7, sold:"890 terjual", stock:"Sisa 80" },
  { id:12, name:"Microsoft 365 Personal 1 Tahun", cats:["produktivitas"], icon:"card", price:99000, old:180000, disc:45, rating:4.6, sold:"120 terjual", stock:"Sisa 20" },
  { id:13, name:"Vidio Platinum 1 Bulan", cats:["streaming"], icon:"bolt", price:19000, old:29000, disc:34, rating:4.6, sold:"310 terjual", stock:"Sisa 45" },
];

function formatRupiah(n){ return "Rp" + n.toLocaleString("id-ID"); }

function productCard(p){
  const badge = p.badge ? `<span class="badge-laris">🏆 ${p.badge}</span>` : (p.stock && parseInt(p.stock.replace(/\D/g,"")) <= 20 ? `<span class="badge-limited">STOK TERBATAS</span>` : "");
  const catClass = p.cats[0];
  const catLabel = { streaming:"Streaming", musik:"Musik", editing:"Edit & Desain", game:"Top Up Game", produktivitas:"Produktivitas" }[catClass] || catClass;
  const icon = (typeof iconSvg === 'function') ? iconSvg(p.icon) : "";
  return `
  <article class="product-card" data-cat="${p.cats.join(' ')}">
    <div class="product-thumb">
      ${badge}
      ${icon}
    </div>
    <span class="cat-pill ${catClass}">${catLabel}</span>
    <div class="product-body">
      <h3>${p.name}</h3>
      <div class="product-meta">
        <span class="proses">⚡ PROSES INSTAN</span>
        <span>·</span>
        <span class="rating">★ ${p.rating}</span>
        <span>·</span>
        <span>${p.sold}</span>
      </div>
      <div class="price-row">
        <span class="price-old">${formatRupiah(p.old)}</span>
        <span class="price-discount">-${p.disc}%</span>
      </div>
      <div class="price-now-row">
        <span class="price-now">${formatRupiah(p.price)}</span>
        <span class="stock-pill">${p.stock}</span>
      </div>
      <a href="https://wa.me/6285349391484?text=Halo%20Admin%20feluxyshop%2C%20saya%20mau%20beli%20${encodeURIComponent(p.name)}" target="_blank" rel="noopener" class="btn-beli">Beli Sekarang</a>
    </div>
  </article>`;
}

const productsWrap = document.getElementById('produk');
function renderProducts(filter){
  const list = filter === 'semua' ? PRODUCTS : PRODUCTS.filter(p => p.cats.includes(filter));
  productsWrap.innerHTML = list.map(productCard).join('');
}
renderProducts('semua');

/* ============ BANNER ART (icon injection) ============ */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof iconSvg !== 'function') return;
  const map = {
    '.banner-art-corner': 'bolt',
    '.banner-art-bolt': 'gem',
    '.banner-art-crown': 'crown',
    '.banner-art-shield': 'shield',
  };
  Object.entries(map).forEach(([sel, icon]) => {
    document.querySelectorAll(sel).forEach(el => { el.innerHTML = iconSvg(icon); });
  });
});

/* ============ SKELETON REVEAL ============ */
window.addEventListener('load', () => {
  setTimeout(() => { document.body.classList.remove('skeleton-active'); }, 900);
});

/* ============ HEADER SCROLL STATE ============ */
const siteHeader = document.getElementById('siteHeader');
function onScroll(){ siteHeader.classList.toggle('scrolled', window.scrollY > 360); }
window.addEventListener('scroll', onScroll, { passive:true });
onScroll();

/* ============ DROPDOWN NAV ============ */
const menuToggle = document.getElementById('menuToggle');
const dropdownNav = document.getElementById('dropdownNav');
const navBackdrop = document.getElementById('navBackdrop');

function closeMenu(){
  dropdownNav.classList.remove('open');
  menuToggle.classList.remove('open');
  navBackdrop.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}
function toggleMenu(){
  const isOpen = dropdownNav.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  navBackdrop.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
}
menuToggle.addEventListener('click', toggleMenu);
navBackdrop.addEventListener('click', closeMenu);

/* ============ VIEW SWITCHING ============ */
const views = {
  home: document.getElementById('viewHome'),
  pesanan: document.getElementById('viewPesanan'),
  bantuan: document.getElementById('viewBantuan'),
};
function goTo(name){
  Object.entries(views).forEach(([key, el]) => el.classList.toggle('view-hidden', key !== name));
  document.querySelectorAll('.nav-item').forEach(a => a.classList.toggle('active', a.dataset.nav === name));
  window.scrollTo({ top:0 });
  closeMenu();
}
document.querySelectorAll('[data-nav]').forEach(el => {
  el.addEventListener('click', (e) => {
    const target = el.dataset.nav;
    if (!target) return;
    e.preventDefault();
    goTo(target);
  });
});

/* ============ CAROUSEL ============ */
const track = document.getElementById('carouselTrack');
const dotsWrap = document.getElementById('carouselDots');
const slides = Array.from(track.children);
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');

let activeIndex = 0;
let autoplayTimer = null;
const AUTOPLAY_MS = 4200;

slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', `Slide ${i + 1}`);
  dot.addEventListener('click', () => goToSlide(i));
  dotsWrap.appendChild(dot);
});
const dots = Array.from(dotsWrap.children);

function setActiveDot(i){ dots.forEach((d, idx) => d.classList.toggle('active', idx === i)); activeIndex = i; }
function goToSlide(i){
  const clamped = Math.max(0, Math.min(i, slides.length - 1));
  const slide = slides[clamped];
  track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  setActiveDot(clamped);
}

let scrollRAF = null;
track.addEventListener('scroll', () => {
  if (scrollRAF) cancelAnimationFrame(scrollRAF);
  scrollRAF = requestAnimationFrame(() => {
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closest = 0, minDist = Infinity;
    slides.forEach((s, i) => {
      const dist = Math.abs((s.offsetLeft + s.clientWidth / 2) - trackCenter);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveDot(closest);
  });
});

prevArrow.addEventListener('click', () => goToSlide(activeIndex - 1));
nextArrow.addEventListener('click', () => goToSlide(activeIndex + 1));

let isDown = false, startX = 0, scrollStart = 0;
track.addEventListener('mousedown', (e) => { isDown = true; track.classList.add('dragging'); startX = e.pageX; scrollStart = track.scrollLeft; pauseAutoplay(); });
window.addEventListener('mouseup', () => { isDown = false; track.classList.remove('dragging'); resumeAutoplay(); });
window.addEventListener('mouseleave', () => { isDown = false; track.classList.remove('dragging'); });
track.addEventListener('mousemove', (e) => { if (!isDown) return; e.preventDefault(); track.scrollLeft = scrollStart - (e.pageX - startX); });
track.addEventListener('touchstart', pauseAutoplay, { passive: true });
track.addEventListener('touchend', resumeAutoplay, { passive: true });

function startAutoplay(){ autoplayTimer = setInterval(() => goToSlide((activeIndex + 1) % slides.length), AUTOPLAY_MS); }
function pauseAutoplay(){ clearInterval(autoplayTimer); }
function resumeAutoplay(){ pauseAutoplay(); startAutoplay(); }
startAutoplay();

/* ============ CATEGORY FILTER ============ */
const catButtons = document.querySelectorAll('.cat-btn');
catButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    catButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    productsWrap.classList.add('filtering');
    setTimeout(() => {
      renderProducts(btn.dataset.cat);
      productsWrap.classList.remove('filtering');
    }, 220);
  });
});

/* ============ CHAR COUNTER (Bantuan form) ============ */
const complaintText = document.getElementById('complaintText');
const charCount = document.getElementById('charCount');
if (complaintText && charCount) {
  complaintText.addEventListener('input', () => { charCount.textContent = complaintText.value.length; });
}

/* ============ PURCHASE TOAST LOOP ============ */
const toastData = [
  { name:"Rian S.", item:"Netflix Premium 1 Bulan", price:"Rp 35.000" },
  { name:"Nadia F.", item:"Spotify Premium 1 Bulan", price:"Rp 15.000" },
  { name:"Bagus P.", item:"CapCut Pro 1 Bulan", price:"Rp 20.000" },
  { name:"Yoga W.", item:"Mobile Legends 172 Diamonds", price:"Rp 42.000" },
  { name:"Salsa D.", item:"Canva Pro 1 Bulan", price:"Rp 12.000" },
];
const toast = document.getElementById('purchaseToast');
const toastName = document.getElementById('toastName');
const toastItem = document.getElementById('toastItem');
const toastPrice = document.getElementById('toastPrice');
const toastClose = document.getElementById('toastClose');

let toastIdx = 0;
let toastHideTimer = null;
let toastCycleTimer = null;
let toastDismissedManually = false;

function showToast(){
  if (toastDismissedManually) return;
  const d = toastData[toastIdx % toastData.length];
  toastName.textContent = d.name;
  toastItem.textContent = d.item;
  toastPrice.textContent = d.price;
  toast.classList.add('show');
  toastIdx++;
  clearTimeout(toastHideTimer);
  toastHideTimer = setTimeout(() => toast.classList.remove('show'), 5000);
}
toastClose.addEventListener('click', () => {
  toast.classList.remove('show');
  toastDismissedManually = true;
  clearTimeout(toastHideTimer);
  clearInterval(toastCycleTimer);
});

setTimeout(() => {
  showToast();
  toastCycleTimer = setInterval(showToast, 7000);
}, 2200);
