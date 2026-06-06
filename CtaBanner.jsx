/* Mid-page CTA banner — navy band, inverted buttons */
const CtaBanner = ({ onBook, onMessage }) => (
  <section className="cta-banner">
    <div className="container">
      <h2 className="h2">Every month you wait costs you <em>clarity</em>.</h2>
      <p className="sub">Start with a free consultation. I'll show you exactly where your books stand.</p>
      <div className="hero-cta">
        <button className="btn btn-inverted" onClick={onBook}>Book a Free Consultation</button>
        <button className="btn btn-ghost-light" onClick={onMessage}>Send a Message</button>
      </div>
    </div>
  </section>
);
window.CtaBanner = CtaBanner;
