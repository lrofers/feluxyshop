/* ============ ORIGINAL SVG ICON LIBRARY (feluxyshop) ============
   Generic flat icons representing app categories (streaming, music,
   editing, productivity, games). These are simplified original shapes,
   not reproductions of any specific brand's trademarked logo.
*/
const ICONS = {
  play: `<svg viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#141414"/><polygon points="24,18 48,32 24,46" fill="#e63946"/></svg>`,

  music: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="#1db954"/><circle cx="32" cy="32" r="17" fill="none" stroke="#0b3d1f" stroke-width="3"/><path d="M22 26 C30 22 38 24 42 30" fill="none" stroke="#0b3d1f" stroke-width="3" stroke-linecap="round"/><path d="M22 34 C29 31 37 33 40 37" fill="none" stroke="#0b3d1f" stroke-width="2.5" stroke-linecap="round"/></svg>`,

  scissors: `<svg viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#0f0f0f"/><path d="M18 20 L46 44 M46 20 L18 44" stroke="#fff" stroke-width="5" stroke-linecap="round"/><circle cx="16" cy="18" r="5" fill="#fff"/><circle cx="16" cy="46" r="5" fill="#fff"/></svg>`,

  canvas: `<svg viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#00c4cc"/><circle cx="26" cy="26" r="12" fill="#fff" opacity="0.9"/><circle cx="40" cy="40" r="9" fill="#fff" opacity="0.6"/></svg>`,

  cloudStream: `<svg viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#1f2a3d"/><path d="M18 38 C12 38 12 28 20 28 C21 20 34 18 38 26 C46 24 50 32 45 38 Z" fill="#63c7ff"/></svg>`,

  chatBot: `<svg viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#10a37f"/><rect x="16" y="20" width="32" height="20" rx="6" fill="#fff"/><circle cx="25" cy="30" r="3" fill="#10a37f"/><circle cx="39" cy="30" r="3" fill="#10a37f"/><rect x="26" y="40" width="12" height="6" rx="2" fill="#fff"/></svg>`,

  gameController: `<svg viewBox="0 0 64 64"><rect x="8" y="24" width="48" height="22" rx="11" fill="#a375ec"/><rect x="16" y="30" width="4" height="10" fill="#fff"/><rect x="12" y="33" width="12" height="4" fill="#fff"/><circle cx="42" cy="32" r="3" fill="#fff"/><circle cx="48" cy="38" r="3" fill="#fff"/></svg>`,

  diamond: `<svg viewBox="0 0 64 64"><polygon points="32,6 54,24 32,58 10,24" fill="#63c7ff" stroke="#12508a" stroke-width="3"/><polygon points="10,24 32,32 54,24" fill="#8fdcff"/></svg>`,

  crown: `<svg viewBox="0 0 64 64"><path d="M8 46 L14 20 L26 34 L32 14 L38 34 L50 20 L56 46 Z" fill="#ffd25c" stroke="#a06a00" stroke-width="3" stroke-linejoin="round"/><rect x="8" y="46" width="48" height="8" rx="2" fill="#c98a1f"/></svg>`,

  shield: `<svg viewBox="0 0 64 64"><path d="M32 6 L52 14 V30 C52 44 44 53 32 58 C20 53 12 44 12 30 V14 Z" fill="#1db954" stroke="#0b3d1f" stroke-width="3"/><path d="M23 32 L29 38 L42 24" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  bolt: `<svg viewBox="0 0 64 64"><polygon points="36,4 14,36 28,36 24,60 50,26 34,26" fill="#ffd25c" stroke="#a06a00" stroke-width="2"/></svg>`,

  card: `<svg viewBox="0 0 64 64"><rect x="6" y="16" width="52" height="34" rx="5" fill="#1db954" stroke="#0b3d1f" stroke-width="3"/><rect x="6" y="24" width="52" height="7" fill="#0b3d1f"/><rect x="14" y="38" width="20" height="4" rx="2" fill="#fff"/></svg>`,

  gem: `<svg viewBox="0 0 64 64"><polygon points="32,6 54,20 54,40 32,58 10,40 10,20" fill="#1db954" stroke="#0b3d1f" stroke-width="3"/><polygon points="10,20 32,30 54,20" fill="#5fe08e" stroke="#0b3d1f" stroke-width="2"/><line x1="32" y1="30" x2="32" y2="58" stroke="#0b3d1f" stroke-width="2"/></svg>`,
};
function iconSvg(name){ return ICONS[name] || ""; }
