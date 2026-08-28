/* ============ PRODUCT DATA ============ */
const PRODUCTS = [
  { id:1, name:"Akun Sultan Minecraft Java & Bedrock + 3 Capes Random", cats:["premium"], thumb:"linear-gradient(135deg,#8a5a12,#c98a1f)", label:"AKUN SULTAN", price:239000, old:469000, disc:49, rating:4.8, sold:"229 terjual", stock:"Sisa 10" },
  { id:2, name:"Bundle Akun Minecraft Java + Skin Standar", cats:["premium","skins"], thumb:"linear-gradient(135deg,#2fa8ff,#63c7ff)", label:"JAVA + SKIN BUNDLE", price:211000, old:470000, disc:55, rating:4.9, sold:"1rb+ terjual", stock:"Sisa 30" },
  { id:3, name:"Account Minecraft Java & Bedrock", cats:["premium"], thumb:"linear-gradient(135deg,#3a7d31,#63c060)", label:"PREMIUM ACCOUNT", price:99000, old:180000, disc:45, rating:4.9, sold:"5rb+ terjual", stock:"Sisa 50", badge:"PALING LARIS" },
  { id:4, name:"Redeem Code Minecoins Bedrock", cats:["premium","minecoins"], thumb:"linear-gradient(135deg,#1a2740,#2c4370)", label:"MINECOINS REDEEM", price:45000, old:90000, disc:50, rating:4.7, sold:"800+ terjual", stock:"Sisa 25" },
  { id:5, name:"Realms Plus 1 Bulan", cats:["realms"], thumb:"linear-gradient(135deg,#7a3fd9,#a375ec)", label:"REALMS PLUS", price:30000, old:129000, disc:77, rating:4.8, sold:"17rb+ terjual", stock:"Sisa 11" },
  { id:6, name:"Happy Ghast Pilot Coat", cats:["cosmetics"], thumb:"linear-gradient(135deg,#8fb8d9,#c8dcec)", label:"PILOT COAT", price:34999, old:60000, disc:42, rating:4.8, sold:"68 terjual", stock:"Sisa 5" },
  { id:7, name:"Parched Hoodie", cats:["cosmetics"], thumb:"linear-gradient(135deg,#c9a15a,#e8cf9e)", label:"PARCHED HOODIE", price:15000, old:25000, disc:40, rating:4.9, sold:"172 terjual", stock:"Sisa 99" },
  { id:8, name:"Time Well Played Skin", cats:["cosmetics","skins"], thumb:"linear-gradient(135deg,#4c9d6f,#7fd6a3)", label:"TIME WELL PLAYED", price:12000, old:20000, disc:40, rating:4.7, sold:"90 terjual", stock:"Sisa 40" },
  { id:9, name:"Golem Hoodie", cats:["cosmetics"], thumb:"linear-gradient(135deg,#8a8f96,#c3c8ce)", label:"GOLEM HOODIE", price:22000, old:30000, disc:27, rating:4.8, sold:"196 terjual", stock:"Sisa 3" },
  { id:10, name:"Focus Retention Helmet", cats:["cosmetics"], thumb:"linear-gradient(135deg,#7a4a2f,#b17847)", label:"FOCUS HELMET", price:15000, old:30000, disc:50, rating:4.8, sold:"34 terjual", stock:"Sisa 10" },
  { id:11, name:"Builder Cape", cats:["capes"], thumb:"linear-gradient(135deg,#c92f4f,#e8708b)", label:"BUILDER CAPE", price:15402, old:28000, disc:45, rating:4.8, sold:"310 terjual", stock:"Sisa 18" },
  { id:12, name:"Skin Pack Eksklusif (10 Skins)", cats:["skins"], thumb:"linear-gradient(135deg,#2c4370,#4f6fa3)", label:"SKIN PACK", price:18000, old:32000, disc:44, rating:4.7, sold:"540 terjual", stock:"Sisa 60" },
  { id:13, name:"Cape Legacy Java Edition", cats:["capes"], thumb:"linear-gradient(135deg,#c0392b,#e07a6c)", label:"CAPE LEGACY", price:75000, old:120000, disc:38, rating:4.6, sold:"45 terjual", stock:"Sisa 7" },
];

function formatRupiah(n){ return "Rp" + n.toLocaleString("id-ID"); }

function productCard(p){
  const badge = p.badge ? `<span class="badge-laris">🏆 ${p.badge}</span>` : (p.stock && parseInt(p.stock.replace(/\D/g,"")) <= 5 ? `<span class="badge-limited">STOK TERBATAS</span>` : "");
  const catClass = p.cats[0];
  const catLabel = { premium:"Minecraft Premium", skins:"Skins", capes:"Capes", realms:"Realms", minecoins:"Minecoins", cosmetics:"Cosmetics" }[catClass] || catClass;
  return `
  <article class="product-card" data-cat="${p.cats.join(' ')}">
    <div class="product-thumb" style="background:${p.thumb}">
      ${badge}
      <span class="thumb-label">${p.label}</span>
    </div>
    <span class="cat-pill ${catClass}">${catLabel}</span>
    <div class="product-body">
      <h3>${p.name}</h3>
      <div class="product-meta">
        <span class="proses">⚡ PROSES INSTANT</span>
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
      <a href="https://wa.me/6282122246350?text=Halo%20Admin%2C%20saya%20mau%20beli%20${encodeURIComponent(p.name)}" target="_blank" rel="noopener" class="btn-beli">Beli Sekarang</a>
    </div>
  </article>`;
}

const productsWrap = document.getElementById('produk');
function renderProducts(filter){
  const list = filter === 'semua' ? PRODUCTS : PRODUCTS.filter(p => p.cats.includes(filter));
  productsWrap.innerHTML = list.map(productCard).join('');
}
renderProducts('semua');

/* ============ SKELETON REVEAL ============ */
window.addEventListener('load', () => {
  setTimeout(() => { document.body.classList.remove('skeleton-active'); }, 900);
});

/* ============ HEADER SCROLL STATE ============ */
const siteHeader = document.getElementById('siteHeader');
function onScroll(){
  siteHeader.classList.toggle('scrolled', window.scrollY > 420);
}
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
  window.scrollTo({ top:0, behavior:'instant' in window ? 'instant' : 'auto' });
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

/* ============ CATEGORY FILTER (with fade transition) ============ */
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

/* ============ PURCHASE TOAST LOOP ============ */
const toastData = [
  { name:"Jo Stecu", item:"Builder Cape", price:"Rp 15.402" },
  { name:"Rafi P.", item:"Realms Plus 1 Bulan", price:"Rp 30.000" },
  { name:"Dinda A.", item:"Golem Hoodie", price:"Rp 22.000" },
  { name:"Bagas W.", item:"Akun Sultan Minecraft", price:"Rp 239.000" },
  { name:"Nabila S.", item:"Redeem Code Minecoins", price:"Rp 45.000" },
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
