/* Hira UI kit — icon set. Lucide-derived paths (2px stroke, round caps/joins).
   Keeps the kit self-contained while matching Lucide's stroke register. */
const Icon = ({ name, size = 22, stroke = 2, className = "", style = {} }) => {
  const P = {
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
    eraser: <><path d="m7 21-4.3-4.3a2 2 0 0 1 0-2.8l9-9a2 2 0 0 1 2.8 0l4.3 4.3a2 2 0 0 1 0 2.8L13 21"/><path d="M22 21H7M5 12l5 5"/></>,
    graduation: <><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></>,
    mapPin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
    check: <path d="M20 6 9 17l-5-5"/>,
    arrowRight: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    menu: <><path d="M4 12h16M4 6h16M4 18h16"/></>,
    x: <><path d="M18 6 6 18M6 6l12 12"/></>,
    quote: <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2H4c-1.24 0-2 .75-2 2v6c0 1.25.76 2 2 2h2c0 1-1 3-3 3v3Zm12 0c3 0 7-1 7-8V5c0-1.25-.76-2-2-2h-4c-1.24 0-2 .75-2 2v6c0 1.25.76 2 2 2h2c0 1-1 3-3 3v3Z"/>,
    trending: <><path d="M22 7 13.5 15.5l-5-5L2 17"/><path d="M16 7h6v6"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></>,
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round"
      strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      {P[name]}
    </svg>
  );
};
const Stars = ({ n = 5 }) => <span className="stars">{"★".repeat(n)}</span>;

window.Icon = Icon;
window.Stars = Stars;
