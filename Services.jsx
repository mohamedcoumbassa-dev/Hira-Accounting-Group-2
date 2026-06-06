/* Services — 3-up cards, no prices */
const SERVICES = [
  { icon: "calendar", title: "Monthly Bookkeeping",
    promise: "Books closed on schedule, with a clean P&L by the 15th.",
    features: ["Reconciliations & categorization", "Monthly financial statements", "Year-end ready for your CPA"] },
  { icon: "eraser", title: "Cleanup & Catch-Up",
    promise: "Behind on the books? I'll bring them current and keep them that way.",
    features: ["Multi-month or multi-year cleanup", "Corrected categorization rules", "A clear path back on schedule"] },
  { icon: "graduation", title: "Consulting & Training",
    promise: "Straight answers and hands-on QuickBooks help when you need it.",
    features: ["QuickBooks setup & training", "Process & workflow review", "On-call advisory sessions"] },
];
const ServiceCard = ({ s }) => (
  <div className="card reveal">
    <div className="card-icon"><Icon name={s.icon} size={24} stroke={1.8}/></div>
    <h3>{s.title}</h3>
    <p className="promise">{s.promise}</p>
    <ul className="feature-list">
      {s.features.map(f => <li key={f}><Icon name="check" size={16} stroke={2.4}/>{f}</li>)}
    </ul>
  </div>
);
const Services = () => (
  <section className="section" id="services">
    <div className="container center">
      <p className="eyebrow">What We Do</p>
      <h2 className="h2">Three ways I keep you <em>clear</em>.</h2>
      <hr className="gold-rule"/>
    </div>
    <div className="container">
      <div className="card-grid">
        {SERVICES.map(s => <ServiceCard key={s.title} s={s}/>)}
      </div>
    </div>
  </section>
);
window.Services = Services;
