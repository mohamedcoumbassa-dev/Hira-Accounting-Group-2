/* Contact — contact rows + form with success state */
const Contact = React.forwardRef((props, ref) => {
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };
  const rows = [
    { icon: "phone", label: "(614) 432-9470", val: "Mon–Fri, 9am–5pm ET" },
    { icon: "mail", label: "mohamed.coumbassa@hiraaccounting.com", val: "Reply within one business day" },
    { icon: "mapPin", label: "Greater Cleveland Area", val: "Remote bookkeeping for U.S. small businesses" },
  ];
  return (
    <section className="section section-warm" id="contact" ref={ref}>
      <div className="container center">
        <p className="eyebrow">Contact</p>
        <h2 className="h2">Let's get your books <em>clear</em>.</h2>
        <hr className="gold-rule"/>
      </div>
      <div className="container contact-grid" style={{marginTop:24}}>
        <div>
          {rows.map(r => (
            <div className="contact-row" key={r.label}>
              <div className="contact-ic"><Icon name={r.icon} size={20} stroke={2}/></div>
              <div><div className="label">{r.label}</div><div className="val">{r.val}</div></div>
            </div>
          ))}
        </div>
        <div className="form">
          {sent ? (
            <div className="form-success">
              <div className="check"><Icon name="check" size={28} stroke={2.5}/></div>
              <h3 style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:26,color:"var(--navy)",margin:"0 0 8px"}}>Message sent.</h3>
              <p className="muted" style={{margin:0}}>Thanks — we'll reply within one business day.</p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="field row2">
                <div><label>Name</label><input required placeholder="Jordan Avery"/></div>
                <div><label>Email</label><input required type="email" placeholder="you@company.com"/></div>
              </div>
              <div className="field row2">
                <div><label>Phone</label><input placeholder="(805) 555-0123"/></div>
                <div><label>Service</label>
                  <select defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Monthly Bookkeeping</option>
                    <option>Cleanup & Catch-Up</option>
                    <option>Consulting & Training</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="field"><label>Anything else?</label><textarea placeholder="Tell us where your books stand today."></textarea></div>
              <button className="btn btn-primary" type="submit">Send Message <Icon name="arrowRight" size={18} stroke={2.2}/></button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
});
window.Contact = Contact;
