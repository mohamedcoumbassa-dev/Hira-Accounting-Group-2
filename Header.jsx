/* Header — sticky single row, cream/blur on scroll, mobile menu */
const Header = ({ onBook, onMessage }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const go = (id) => (e) => {
    e.preventDefault(); setOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  };
  const links = [["Services","services"],["Pricing","pricing"],["About","about"],["Contact","contact"]];
  return (
    <header className={"header" + (scrolled ? " scrolled" : "")}>
      <div className="container header-inner">
        <a href="#top" onClick={go("top")}><img className="header-logo" src="assets/logo-horizontal-trans.png" alt="Hira Accounting Group"/></a>
        <nav className="nav">
          {links.map(([t,id]) => <a key={id} href={"#"+id} onClick={go(id)}>{t}</a>)}
        </nav>
        <div style={{display:"flex",alignItems:"center",gap:14}}>
          <a className="header-phone" href="tel:+16144329470"><Icon name="phone" size={16} stroke={2.2}/>(614) 432-9470</a>
          <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(o => !o)}>
            <Icon name={open ? "x" : "menu"} size={26}/>
          </button>
        </div>
      </div>
      <div className={"mobile-menu" + (open ? " open" : "")}>
        {links.map(([t,id]) => <a key={id} href={"#"+id} onClick={go(id)}>{t}</a>)}
        <a href="tel:+16144329470">(614) 432-9470</a>
      </div>
    </header>
  );
};
window.Header = Header;
