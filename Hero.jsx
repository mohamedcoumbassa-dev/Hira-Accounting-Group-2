/* Hero — eyebrow, serif headline w/ italic, pillars, dual CTA, portrait, proof */
const Hero = ({ onBook, onMessage }) => (
  <section className="hero" id="top">
    <div className="container hero-grid">
      <div className="reveal in">
        <p className="eyebrow">Bookkeeping for Small Business</p>
        <h1 className="display">Clear books. <em>Confident</em> decisions.</h1>
        <div className="hero-pillars">
          <span className="pillar">Clarity<span className="dot">·</span></span>
          <span className="pillar">Integrity<span className="dot">·</span></span>
          <span className="pillar">Growth</span>
        </div>
        <p className="lead muted" style={{maxWidth:"46ch",marginBottom:30}}>
          Clean books. Accurate numbers. Real communication. I close the month on schedule so you can run the business.
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={onBook}>Book a Free Consultation</button>
          <button className="btn btn-secondary" onClick={onMessage}>Send a Message</button>
        </div>
        <div className="hero-proof">
          <span className="review-badge"><span className="stars">★</span> <b>Love your first month, or it's free.</b></span>
        </div>
        <div className="trust-pills">
          <span className="trust-pill"><Icon name="check" size={15} stroke={2.4}/>Licensed CPA</span>
          <span className="trust-pill"><Icon name="check" size={15} stroke={2.4}/>Fund Accounting Background</span>
          <span className="trust-pill"><Icon name="check" size={15} stroke={2.4}/>Small-Business Focused</span>
        </div>
      </div>
      <div className="portrait reveal in">
        <div className="portrait-frame">
          <img src="headshot.png" alt="Mohamed Coumbassa, CPA — founder of Hira Accounting"/>
        </div>
        <div className="portrait-badge">
          <div><b>Mohamed Coumbassa, CPA</b><div className="sub">Founder &amp; Bookkeeper</div></div>
        </div>
      </div>
    </div>
  </section>
);
window.Hero = Hero;
