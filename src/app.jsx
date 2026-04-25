/* global React, ReactDOM, window */
const { Topbar, Footer, TweaksPanel, HomePage, ListingsPage, DetailPage, AboutPage, ContactPage } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "blue": "Umereno",
  "map": true,
  "heroSearch": "bar",
  "density": "air"
}/*EDITMODE-END*/;

function App() {
  const [page, setPage] = React.useState(() => localStorage.getItem("urb-page") || "home");
  const [detail, setDetail] = React.useState(() => {
    const id = localStorage.getItem("urb-detail");
    return id ? window.LISTINGS.find(l => l.id === id) : null;
  });
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);
  const [editMode, setEditMode] = React.useState(false);

  React.useEffect(() => { localStorage.setItem("urb-page", page); }, [page]);
  React.useEffect(() => {
    if (detail) localStorage.setItem("urb-detail", detail.id);
    else localStorage.removeItem("urb-detail");
  }, [detail]);

  // Apply blue intensity as CSS var
  React.useEffect(() => {
    const root = document.documentElement;
    if (tweaks.blue === "Tiho") root.style.setProperty("--blue", "#2a5fb8");
    else if (tweaks.blue === "Izraženo") root.style.setProperty("--blue", "#0f68e6");
    else root.style.setProperty("--blue", "#1e6fd9");
  }, [tweaks.blue]);

  // Edit mode protocol
  React.useEffect(() => {
    const handler = (e) => {
      if (!e.data || !e.data.type) return;
      if (e.data.type === "__activate_edit_mode") setEditMode(true);
      if (e.data.type === "__deactivate_edit_mode") setEditMode(false);
    };
    window.addEventListener("message", handler);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);

  React.useEffect(() => {
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: tweaks }, "*");
  }, [tweaks]);

  const navigate = (p) => { setPage(p); setDetail(null); window.scrollTo(0, 0); };
  const openDetail = (item) => { setDetail(item); setPage("detail"); window.scrollTo(0, 0); };

  return (
    <div data-screen-label={page === "home" ? "01 Home" : page === "listings" ? "02 Listings" : page === "detail" ? "03 Detail" : page === "about" ? "04 About" : "05 Contact"}>
      <Topbar page={page} navigate={navigate} />
      {page === "home" && <HomePage navigate={navigate} openDetail={openDetail} tweaks={tweaks} />}
      {page === "listings" && <ListingsPage navigate={navigate} openDetail={openDetail} tweaks={tweaks} />}
      {page === "detail" && detail && <DetailPage item={detail} navigate={navigate} openDetail={openDetail} />}
      {page === "about" && <AboutPage navigate={navigate} />}
      {page === "contact" && <ContactPage navigate={navigate} />}
      <Footer />
      <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} show={editMode} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
