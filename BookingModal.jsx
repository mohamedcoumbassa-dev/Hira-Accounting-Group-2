/* BookingModal — Google Calendar appointment scheduling.
   With a BOOKING_URL set, embeds the scheduler in an iframe
   (Google appointment pages allow embedding) with an open-in-new-tab
   fallback. Without one, shows the call / message fallback. */
const BookingModal = ({ url, onClose, onMessage }) => {
  const [loaded, setLoaded] = React.useState(false);
  const hasUrl = !!url;

  // lock body scroll while open
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={"modal" + (hasUrl ? " modal-booking" : "")}
        style={{ position: "relative" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="btn btn-secondary modal-close"
          style={{ padding: "6px 10px", borderRadius: 8 }}
          onClick={onClose}
          aria-label="Close"
        >
          <Icon name="x" size={18} />
        </button>

        {hasUrl ? (
          <>
            <div className="booking-head">
              <p className="eyebrow" style={{ margin: 0 }}>Book a Free Consultation</p>
              <h3 style={{ margin: "6px 0 0" }}>Pick a time that works.</h3>
            </div>
            <div className="booking-frame">
              {!loaded && (
                <div className="booking-loading">
                  <span className="spinner" /> Loading calendar…
                </div>
              )}
              <iframe
                title="Book a consultation with Hira Accounting"
                src={url}
                onLoad={() => setLoaded(true)}
                style={{ opacity: loaded ? 1 : 0 }}
                frameBorder="0"
              />
            </div>
            <a className="booking-newtab" href={url} target="_blank" rel="noopener noreferrer">
              Open in a new tab <Icon name="arrowRight" size={15} stroke={2.2} />
            </a>
          </>
        ) : (
          <>
            <h3>Book a free consultation</h3>
            <p>
              Online scheduling is being connected. In the meantime, call or send a
              message and I'll find a time that works — I reply within one business day.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="tel:+16144329470">
                <Icon name="phone" size={16} stroke={2.2} />(614) 432-9470
              </a>
              <button className="btn btn-secondary" onClick={onMessage}>Send a Message</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
window.BookingModal = BookingModal;
