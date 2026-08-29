/* ============ ORIGINAL SVG ICON LIBRARY ============
   Simple flat/voxel-style icons built from basic shapes.
   Not based on any copyrighted game asset — generic silhouettes
   (coins, capes, helmets, gift boxes, shields, servers, people)
   used purely as decorative product/category art.
*/
const ICONS = {
  coin: `<svg viewBox="0 0 64 64"><circle cx="32" cy="34" r="18" fill="#ffd25c" stroke="#c98a1f" stroke-width="3"/><circle cx="32" cy="34" r="11" fill="none" stroke="#c98a1f" stroke-width="2.5"/><text x="32" y="40" font-family="Arial,sans-serif" font-weight="800" font-size="14" fill="#c98a1f" text-anchor="middle">M</text><ellipse cx="24" cy="24" rx="16" ry="8" fill="#fff0c2" opacity="0.35"/></svg>`,

  coinStack: `<svg viewBox="0 0 64 64"><ellipse cx="32" cy="46" rx="20" ry="7" fill="#c98a1f"/><ellipse cx="32" cy="41" rx="20" ry="7" fill="#ffd25c"/><ellipse cx="32" cy="33" rx="20" ry="7" fill="#c98a1f"/><ellipse cx="32" cy="28" rx="20" ry="7" fill="#ffd25c"/><ellipse cx="32" cy="20" rx="20" ry="7" fill="#ffe697"/><text x="32" y="24" font-family="Arial,sans-serif" font-weight="800" font-size="11" fill="#a06a00" text-anchor="middle">M</text></svg>`,

  shield: `<svg viewBox="0 0 64 64"><path d="M32 6 L52 14 V30 C52 44 44 53 32 58 C20 53 12 44 12 30 V14 Z" fill="#63c7ff" stroke="#12508a" stroke-width="3"/><path d="M23 32 L29 38 L42 24" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  gift: `<svg viewBox="0 0 64 64"><rect x="10" y="26" width="44" height="30" rx="3" fill="#a375ec" stroke="#5a2fa0" stroke-width="3"/><rect x="10" y="26" width="44" height="10" fill="#7a3fd9"/><rect x="28" y="10" width="8" height="46" fill="#ffd25c"/><path d="M32 22 C22 22 18 8 32 12 C46 8 42 22 32 22Z" fill="#ffd25c" stroke="#c98a1f" stroke-width="2"/></svg>`,

  people: `<svg viewBox="0 0 64 64"><circle cx="20" cy="22" r="8" fill="#ffe0c2"/><rect x="10" y="32" width="20" height="20" rx="6" fill="#a375ec"/><circle cx="44" cy="22" r="8" fill="#ffe0c2"/><rect x="34" y="32" width="20" height="20" rx="6" fill="#63c7ff"/></svg>`,

  gem: `<svg viewBox="0 0 64 64"><polygon points="32,6 54,20 54,40 32,58 10,40 10,20" fill="#63c7ff" stroke="#12508a" stroke-width="3"/><polygon points="10,20 32,30 54,20" fill="#8fdcff" stroke="#12508a" stroke-width="2"/><line x1="32" y1="30" x2="32" y2="58" stroke="#12508a" stroke-width="2"/></svg>`,

  mysteryBox: `<svg viewBox="0 0 64 64"><rect x="10" y="20" width="44" height="34" rx="4" fill="#2f6fd9" stroke="#123a6e" stroke-width="3"/><rect x="10" y="20" width="44" height="10" fill="#4a8ae8"/><text x="32" y="46" font-family="Arial,sans-serif" font-weight="800" font-size="20" fill="#fff" text-anchor="middle">?</text></svg>`,

  card: `<svg viewBox="0 0 64 64"><rect x="6" y="16" width="52" height="34" rx="5" fill="#63c060" stroke="#2f6e2a" stroke-width="3"/><circle cx="20" cy="33" r="7" fill="#fff"/><rect x="32" y="27" width="20" height="4" rx="2" fill="#fff"/><rect x="32" y="35" width="14" height="4" rx="2" fill="#fff" opacity="0.7"/></svg>`,

  tower: `<svg viewBox="0 0 64 64"><rect x="14" y="34" width="36" height="22" rx="3" fill="#8a5ff5" stroke="#4a2c9e" stroke-width="3"/><rect x="20" y="40" width="8" height="6" fill="#c9b6ff"/><rect x="36" y="40" width="8" height="6" fill="#c9b6ff"/><rect x="20" y="12" width="24" height="18" rx="3" fill="#a375ec" stroke="#4a2c9e" stroke-width="3"/><rect x="26" y="18" width="6" height="6" fill="#e4d8ff"/><rect x="34" y="18" width="6" height="6" fill="#e4d8ff"/></svg>`,

  shirt: `<svg viewBox="0 0 64 64"><path d="M22 12 L10 20 L16 30 L20 27 V54 H44 V27 L48 30 L54 20 L42 12 C42 18 22 18 22 12Z" fill="#4f6fa3" stroke="#1c3a63" stroke-width="3" stroke-linejoin="round"/></svg>`,

  cape: `<svg viewBox="0 0 64 64"><path d="M22 8 H42 L46 54 C42 58 22 58 18 54 Z" fill="#e8708b" stroke="#8a2f45" stroke-width="3" stroke-linejoin="round"/><rect x="22" y="8" width="20" height="8" fill="#c92f4f"/></svg>`,

  hoodie: `<svg viewBox="0 0 64 64"><path d="M32 8 C20 8 14 16 14 24 L10 30 L18 34 L18 54 H46 V34 L54 30 L50 24 C50 16 44 8 32 8Z" fill="#c8dcec" stroke="#5a7288" stroke-width="3" stroke-linejoin="round"/><circle cx="32" cy="24" r="7" fill="#8fb8d9"/></svg>`,

  helmet: `<svg viewBox="0 0 64 64"><path d="M12 38 C12 18 22 8 32 8 C42 8 52 18 52 38 V44 H12Z" fill="#b17847" stroke="#5c3a1f" stroke-width="3"/><rect x="12" y="44" width="40" height="8" rx="2" fill="#7a4a2f"/><rect x="24" y="24" width="16" height="8" rx="2" fill="#3a2414"/></svg>`,

  bundlePlus: `<svg viewBox="0 0 64 64"><rect x="6" y="14" width="24" height="36" rx="4" fill="#63c060" stroke="#2f6e2a" stroke-width="3"/><rect x="34" y="14" width="24" height="36" rx="4" fill="#63c7ff" stroke="#12508a" stroke-width="3"/><circle cx="18" cy="30" r="5" fill="#fff"/><circle cx="46" cy="30" r="5" fill="#fff"/><rect x="27" y="26" width="10" height="4" fill="#ffd25c"/><rect x="30" y="23" width="4" height="10" fill="#ffd25c"/></svg>`,

  sultanCrown: `<svg viewBox="0 0 64 64"><path d="M8 46 L14 20 L26 34 L32 14 L38 34 L50 20 L56 46 Z" fill="#ffd25c" stroke="#a06a00" stroke-width="3" stroke-linejoin="round"/><rect x="8" y="46" width="48" height="8" rx="2" fill="#c98a1f"/><circle cx="32" cy="20" r="3.5" fill="#e8708b"/></svg>`,
};

function iconSvg(name){ return ICONS[name] || ""; }
