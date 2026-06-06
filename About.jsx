/* About — portrait + first-person copy + credential pills */
const About = () => (
  <section className="section" id="about">
    <div className="container about-grid">
      <div className="portrait reveal">
        <div className="portrait-frame">
          <img src="headshot.png" alt="Mohamed Coumbassa, CPA"/>
        </div>
      </div>
      <div className="about-copy reveal">
        <p className="eyebrow">About the Firm</p>
        <h2 className="h2" style={{marginBottom:20}}>Fund-grade rigor. <em>Personal</em> attention.</h2>
        <p>I'm Mohamed Coumbassa, a CPA and the person behind Hira Accounting. I started Hira to give small-business owners something larger firms rarely deliver: clean books and a real person who picks up the phone.</p>
        <p>My background is fund accounting — I've worked as a Senior Fund Accountant across venture capital, real estate, and private equity, where the standard for accuracy is exact. That's the rigor I bring to your books.</p>
        <p>What I left behind is the runaround. You'll get accurate numbers on schedule and straight answers in plain language. No jargon ladder. No surprises at year-end.</p>
        <p>That's the climb I care about: from scattered records to a clear view of where your business stands, and where it's going, in shaa Allah.</p>
        <div className="cred-pills">
          <span className="trust-pill"><Icon name="check" size={15} stroke={2.4}/>Licensed CPA</span>
          <span className="trust-pill"><Icon name="check" size={15} stroke={2.4}/>Senior Fund Accountant</span>
          <span className="trust-pill"><Icon name="check" size={15} stroke={2.4}/>VC · Real Estate · Private Equity</span>
        </div>
      </div>
    </div>
  </section>
);
window.About = About;
