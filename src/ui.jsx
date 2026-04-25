/* global React, window */
const { Tri, Icon } = window;
const { fmtPrice, fmtPriceSqm } = window;

// ───────── Topbar ─────────
const Topbar = ({ page, navigate }) => (
  <header className="topbar">
    <div className="topbar-inner">
      <a className="brand" href="#" onClick={(e)=>{e.preventDefault(); navigate("home");}}>
        <div style={{display:"flex", flexDirection:"column", lineHeight:1}}>
          <div style={{display:"flex", alignItems:"center", gap:2}}>
            URB<Tri size={14} color="#1E6FD9" style={{margin:"0 1px"}} />NOVA
          </div>
          <div className="sub" style={{marginTop:3}}>Realty</div>
        </div>
      </a>
      <nav className="nav">
        <a href="#" className={page==="home"?"active":""} onClick={(e)=>{e.preventDefault(); navigate("home");}}>Početna</a>
        <a href="#" className={page==="listings"?"active":""} onClick={(e)=>{e.preventDefault(); navigate("listings");}}>Nekretnine</a>
        <a href="#" className={page==="about"?"active":""} onClick={(e)=>{e.preventDefault(); navigate("about");}}>O nama</a>
        <a href="#" className={page==="contact"?"active":""} onClick={(e)=>{e.preventDefault(); navigate("contact");}}>Kontakt</a>
      </nav>
      <div className="topbar-spacer" />
      <div className="topbar-cta">
        <div className="lang-switch"><span className="on">SR</span><span>/</span><span>EN</span></div>
        <a href="tel:+381112345678" style={{display:"inline-flex", alignItems:"center", gap:8, fontSize:13, fontWeight:500}}>
          <Icon name="phone" size={14} /> +381 11 234 5678
        </a>
        <button className="btn btn-primary btn-sm"><Icon name="arrow-up-right" size={14} /> Prijavi nekretninu</button>
      </div>
    </div>
  </header>
);

// ───────── Listing Card ─────────
const ListingCard = ({ item, onOpen, view = "grid", variant = "a" }) => {
  const [fav, setFav] = React.useState(false);
  const priceTxt = fmtPrice(item.price, item.deal);
  const sqmTxt = fmtPriceSqm(item.price, item.sqm, item.deal);

  if (view === "list") {
    return (
      <div className="card list" onClick={()=>onOpen(item)}>
        <div className="card-img-wrap">
          <div className="card-img" style={item.img ? {backgroundImage:`url(${item.img})`, backgroundSize:"cover", backgroundPosition:"center"} : undefined} />
          {item.new && <span className="card-badge new"><Tri size={7} color="#fff" /> Novo</span>}
          {!item.new && <span className="card-badge"><Tri size={7} /> {item.status}</span>}
          <button className={`card-fav ${fav?"on":""}`} onClick={(e)=>{e.stopPropagation(); setFav(!fav);}}>
            <Icon name={fav?"heart-fill":"heart"} size={15} />
          </button>
          <span className="card-gallery-count"><Icon name="image" size={11} /> 24</span>
        </div>
        <div className="card-body">
          <div className="card-row1">
            <div className="card-title">{item.title}</div>
          </div>
          <div className="card-loc"><Icon name="pin" size={13} /> {item.address} · {item.city}</div>
          <div className="muted" style={{fontSize:13, lineHeight:1.5, maxWidth:520, marginBottom:12}}>
            {item.desc.slice(0, 180)}…
          </div>
          <div className="card-stats" style={{borderTop:"none", padding:0}}>
            <span className="s"><Icon name="bed" size={14} /> {item.rooms} sobe</span>
            <span className="s"><Icon name="bath" size={14} /> {item.bathrooms}</span>
            <span className="s"><Icon name="square" size={14} /> {item.sqm} m²</span>
            <span className="s"><Icon name="year" size={14} /> {item.year}</span>
          </div>
        </div>
        <div className="card-side">
          <div style={{textAlign:"right"}}>
            <div className="card-price" style={{fontSize:22}}>{priceTxt}</div>
            {sqmTxt && <div className="muted" style={{fontSize:12, marginTop:2}}>{sqmTxt}</div>}
          </div>
          <button className="btn btn-ghost btn-sm">Detalji <Icon name="arrow-right" size={13} /></button>
        </div>
      </div>
    );
  }

  return (
    <div className="card" onClick={()=>onOpen(item)}>
      <div className="card-img-wrap">
        <div className="card-img" style={item.img ? {backgroundImage:`url(${item.img})`, backgroundSize:"cover", backgroundPosition:"center"} : undefined} />
        {item.new && <span className="card-badge new"><Tri size={7} color="#fff" /> Novo</span>}
        {!item.new && <span className="card-badge"><Tri size={7} /> {item.status}</span>}
        <button className={`card-fav ${fav?"on":""}`} onClick={(e)=>{e.stopPropagation(); setFav(!fav);}}>
          <Icon name={fav?"heart-fill":"heart"} size={15} />
        </button>
        <span className="card-gallery-count"><Icon name="image" size={11} /> 24</span>
      </div>
      <div className="card-body">
        <div className="card-row1">
          <div className="card-title">{item.title}</div>
          <div className="card-price">{priceTxt}</div>
        </div>
        <div className="card-loc"><Icon name="pin" size={13} /> {item.address}</div>
        <div className="card-stats">
          <span className="s"><Icon name="bed" size={14} /> {item.rooms}</span>
          <span className="s"><Icon name="bath" size={14} /> {item.bathrooms}</span>
          <span className="s"><Icon name="square" size={14} /> {item.sqm} m²</span>
        </div>
      </div>
    </div>
  );
};

// ───────── Footer ─────────
const Footer = () => (
  <footer className="footer">
    <div className="wrap">
      <div className="footer-grid">
        <div>
          <div style={{display:"flex", alignItems:"center", gap:2, color:"#fff", fontFamily:"DM Sans", fontWeight:700, fontSize:20}}>
            URB<Tri size={15} color="#1E6FD9" style={{margin:"0 1px"}} />NOVA
          </div>
          <div className="tag">Nekretnine koje<br/>nose <span style={{color:"#1E6FD9", fontStyle:"italic"}}>priču</span>.</div>
          <div style={{fontSize:13, lineHeight:1.7, color:"rgba(255,255,255,0.55)"}}>
            Knez Mihailova 24/III<br/>
            11000 Beograd, Srbija<br/>
            PIB 112 345 678 · MB 21987654
          </div>
        </div>
        <div>
          <h5>Navigacija</h5>
          <ul>
            <li><a href="#">Nekretnine</a></li>
            <li><a href="#">Prodaja</a></li>
            <li><a href="#">Izdavanje</a></li>
            <li><a href="#">Novi projekti</a></li>
            <li><a href="#">Usluge</a></li>
          </ul>
        </div>
        <div>
          <h5>Kompanija</h5>
          <ul>
            <li><a href="#">O nama</a></li>
            <li><a href="#">Tim</a></li>
            <li><a href="#">Karijera</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
        </div>
        <div>
          <h5>Kontakt</h5>
          <ul>
            <li>+381 11 234 5678</li>
            <li>kontakt@urbanova.rs</li>
            <li>Pon — Pet · 09 — 19h</li>
            <li>Sub · 10 — 15h</li>
          </ul>
          <div style={{display:"flex", gap:8, marginTop:16}}>
            <a href="#" className="btn btn-sm" style={{background:"rgba(255,255,255,0.08)", color:"#fff"}}><Icon name="whatsapp" size={14} /> WhatsApp</a>
            <a href="#" className="btn btn-sm" style={{background:"rgba(255,255,255,0.08)", color:"#fff"}}>Viber</a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Urbanova Realty. Sva prava zadržana.</span>
      <span>Podaci sinhronizovani sa estate.rs · ažurirano pre 3 min</span>
    </div>
  </footer>
);

// ───────── Tweaks panel ─────────
const TweaksPanel = ({ tweaks, setTweaks, show }) => {
  if (!show) return null;
  const set = (k, v) => setTweaks({ ...tweaks, [k]: v });
  return (
    <div className="tweaks">
      <h5><Tri size={9} /> Tweaks</h5>
      <div className="tweak">
        <label>Intenzitet plave</label>
        <div className="tweak-options">
          {["Tiho","Umereno","Izraženo"].map(o => (
            <button key={o} className={tweaks.blue===o?"on":""} onClick={()=>set("blue", o)}>{o}</button>
          ))}
        </div>
      </div>
      <div className="tweak">
        <label>Mapa u listingu</label>
        <div className="tweak-options">
          <button className={tweaks.map===true?"on":""} onClick={()=>set("map", true)}>Prikaži</button>
          <button className={tweaks.map===false?"on":""} onClick={()=>set("map", false)}>Sakrij</button>
        </div>
      </div>
      <div className="tweak">
        <label>Pretraga na home</label>
        <div className="tweak-options">
          <button className={tweaks.heroSearch==="bar"?"on":""} onClick={()=>set("heroSearch","bar")}>Bar</button>
          <button className={tweaks.heroSearch==="tabs"?"on":""} onClick={()=>set("heroSearch","tabs")}>Tabs</button>
        </div>
      </div>
      <div className="tweak" style={{marginBottom:0}}>
        <label>Density</label>
        <div className="tweak-options">
          <button className={tweaks.density==="air"?"on":""} onClick={()=>set("density","air")}>Prozračno</button>
          <button className={tweaks.density==="tight"?"on":""} onClick={()=>set("density","tight")}>Kompaktno</button>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { Topbar, ListingCard, Footer, TweaksPanel });
