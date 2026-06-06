/* App — composes the page, handles funnel CTAs + scroll reveal */

/* ──────────────────────────────────────────────────────────────
   GOOGLE CALENDAR BOOKING
   Paste your Google Appointment Scheduling link below.
   Get it from: Google Calendar → Create → "Appointment schedule"
   → Share → copy the booking page link (looks like
   https://calendar.app.google/XXXXXXXXXXXX).
   Leave as "" to fall back to the call/message modal.
   ────────────────────────────────────────────────────────────── */
const BOOKING_URL = "";

const App = () => {
  const [modal, setModal] = React.useState(false);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  };
  const onBook = () => setModal(true);
  const onMessage = () => scrollTo("contact");
  const onStart = () => scrollTo("contact");

  return (
    <>
      <Header onBook={onBook} onMessage={onMessage}/>
      <Hero onBook={onBook} onMessage={onMessage}/>
      <Services/>
      <Pricing onStart={onStart}/>
      <About/>
      <CtaBanner onBook={onBook} onMessage={onMessage}/>
      <Contact/>
      <Footer onMessage={onMessage}/>
      {modal && (
        <BookingModal
          url={BOOKING_URL}
          onClose={() => setModal(false)}
          onMessage={() => { setModal(false); scrollTo("contact"); }}
        />
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
