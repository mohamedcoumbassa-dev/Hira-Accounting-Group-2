/* Pricing — 3 tiers (from glenhold.com), Core highlighted, guarantee line */
const TIERS = [
  { name: "Essential", price: "349", popular: false,
    desc: "For small businesses with simple accounting needs who want clean books at tax time.",
    features: [
      "Expense categorization",
      "Monthly bank & card reconciliation",
      "Monthly financial statements",
      "Clean books for tax season",
    ] },
  { name: "Core", price: "649", popular: true,
    desc: "For larger growing businesses that need clear financials to guide decisions.",
    features: [
      "Expense categorization",
      "Monthly bank & card reconciliation",
      "Monthly financial statements",
      "Clean books for tax season",
      "Invoice & bill tracking (AR/AP)",
      "Quarterly performance summary",
      "Priority support",
    ] },
  { name: "Strategic", price: "1,899", popular: false,
    desc: "For established businesses needing custom reporting and hands-on support.",
    features: [
      "Everything in Core, plus:",
      "Custom reports & KPI dashboards",
      "Accrual accounting & payroll journal entries",
      "Loan tracking",
      "Monthly video call",
    ] },
];
const Tier = ({ t, onStart }) => (
  <div className={"tier reveal" + (t.popular ? " popular" : "")}>
    {t.popular && <span className="tier-pill">Most Popular</span>}
    <div className="tier-name">{t.name}</div>
    <p className="tier-desc">{t.desc}</p>
    <p className="tier-price">Starting at <b>${t.price}</b> / mo</p>
    <hr className="gold-rule left"/>
    <ul className="feature-list">
      {t.features.map(f => <li key={f}><Icon name="check" size={16} stroke={2.4}/>{f}</li>)}
    </ul>
    <button className={"btn " + (t.popular ? "btn-gold" : "btn-primary")} onClick={onStart}>Get Started</button>
  </div>
);
const Pricing = ({ onStart }) => (
  <section className="section section-warm" id="pricing">
    <div className="container center">
      <p className="eyebrow">Pricing</p>
      <h2 className="h2">Straightforward monthly pricing.</h2>
      <hr className="gold-rule"/>
      <span className="guarantee"><span className="star">★</span> Love your first month of books, or it's free.</span>
    </div>
    <div className="container">
      <div className="tier-grid">
        {TIERS.map(t => <Tier key={t.name} t={t} onStart={onStart}/>)}
      </div>
    </div>
  </section>
);
window.Pricing = Pricing;
