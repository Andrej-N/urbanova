/* global React, window */
const Tri = ({ size = 10, color = "currentColor", className = "tri", style }) => (
  <svg viewBox="0 0 10 9" width={size} height={size*0.9} className={className} style={style} aria-hidden="true">
    <polygon points="5,0 10,9 0,9" fill={color} />
  </svg>
);

const Icon = ({ name, size = 16, stroke = "currentColor" }) => {
  const s = size;
  const props = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "search": return <svg {...props}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case "pin": return <svg {...props}><path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>;
    case "bed": return <svg {...props}><path d="M3 18v-6h18v6"/><path d="M3 18v3"/><path d="M21 18v3"/><path d="M7 12V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"/></svg>;
    case "bath": return <svg {...props}><path d="M4 12h16v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-4z"/><path d="M7 12V6a2 2 0 0 1 4 0"/><path d="M5 19l-1 2"/><path d="M19 19l1 2"/></svg>;
    case "square": return <svg {...props}><rect x="4" y="4" width="16" height="16"/><path d="M9 4v16"/><path d="M4 9h16"/></svg>;
    case "heart": return <svg {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
    case "heart-fill": return <svg {...props} fill={stroke}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
    case "image": return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="1"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>;
    case "arrow-right": return <svg {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
    case "arrow-up-right": return <svg {...props}><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>;
    case "arrow-down": return <svg {...props}><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>;
    case "check": return <svg {...props}><path d="M20 6 9 17l-5-5"/></svg>;
    case "phone": return <svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.96.7 2.88a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.2-1.27a2 2 0 0 1 2.11-.45c.92.33 1.88.57 2.88.7A2 2 0 0 1 22 16.92z"/></svg>;
    case "mail": return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 7 9 6 9-6"/></svg>;
    case "whatsapp": return <svg {...props}><path d="M3 21l1.9-5.2A9 9 0 1 1 12 21a9 9 0 0 1-4.5-1.2L3 21z"/><path d="M8 10.5c.3 1.5 1.5 3 3 3.5"/></svg>;
    case "grid": return <svg {...props}><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></svg>;
    case "list": return <svg {...props}><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/></svg>;
    case "map": return <svg {...props}><path d="M3 6v15l6-3 6 3 6-3V3l-6 3-6-3-6 3z"/><path d="M9 3v15"/><path d="M15 6v15"/></svg>;
    case "chev-down": return <svg {...props}><path d="m6 9 6 6 6-6"/></svg>;
    case "x": return <svg {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
    case "car": return <svg {...props}><path d="M5 17h14l-1-7H6l-1 7z"/><circle cx="8" cy="17" r="1.5"/><circle cx="16" cy="17" r="1.5"/><path d="M7 10l1-4h8l1 4"/></svg>;
    case "year": return <svg {...props}><rect x="3" y="5" width="18" height="16" rx="1"/><path d="M8 3v4"/><path d="M16 3v4"/><path d="M3 10h18"/></svg>;
    case "flame": return <svg {...props}><path d="M12 2s5 5 5 10a5 5 0 1 1-10 0c0-2 1-3 2-4-1 2 0 3 1 3 0-3 2-6 2-9z"/></svg>;
    case "shield": return <svg {...props}><path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3z"/></svg>;
    default: return null;
  }
};

window.Tri = Tri;
window.Icon = Icon;
