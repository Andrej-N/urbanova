/* global React, window */
const { Tri, Icon, ListingCard } = window;
const { LISTINGS } = window;

const HomePage = ({ navigate, openDetail, tweaks }) => {
  const featured = LISTINGS.filter(l => l.featured || l.new).slice(0, 6);
  const [searchTab, setSearchTab] = React.useState("Prodaja");

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:40}}>
            <span className="eyebrow"><Tri size={8} className="dot" color="#1E6FD9" /> Agencija za nekretnine · od 2014</span>
            <span className="mono" style={{fontSize:11, color:"var(--muted)", letterSpacing:"0.1em"}}>№ 001 / BEOGRAD</span>
          </div>

          <div className="hero-inner">
            <div>
              <h1>
                Nađi dom<br/>
                koji nosi<br/>
                <span className="accent">tvoju priču<Tri size={44} color="#1E6FD9" className="tri-inline" style={{marginLeft:8}} /></span>
              </h1>
              <p className="lead">
                Kurirana selekcija nekretnina u Srbiji i regionu. Radimo sa 12 najvećih
                investitora i sinhronizujemo oglase sa celokupnom estate.rs mrežom u realnom vremenu.
              </p>
              <div style={{display:"flex", gap:10}}>
                <button className="btn btn-dark btn-lg" onClick={()=>navigate("listings")}>
                  Pregledaj nekretnine <Icon name="arrow-right" size={16} />
                </button>
                <button className="btn btn-ghost btn-lg">Zakaži konsultaciju</button>
              </div>

              <div className="hero-meta">
                <div className="stat"><div className="n">1 248<sup>+</sup></div><div className="l">Aktivnih oglasa</div></div>
                <div className="stat"><div className="n">€420M</div><div className="l">Ukupna vrednost 2025</div></div>
                <div className="stat"><div className="n">18</div><div className="l">Godina iskustva</div></div>
              </div>
            </div>

            <div className="hero-image-wrap">
              <div className="hero-image" style={{backgroundImage:"url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80&auto=format&fit=crop')", backgroundSize:"cover", backgroundPosition:"center"}}>
                <span className="hero-image-chip"><Tri size={9} /> Istaknuto · 001</span>
                <div className="hero-image-label">
                  <div>
                    <div style={{fontSize:10, letterSpacing:"0.12em", opacity:0.8, marginBottom:4}}>PENTHOUSE · VRAČAR</div>
                    <div className="addr">Krunska 58 — 142m², 4 sobe</div>
                  </div>
                  <div className="price">56,7M RSD</div>
                </div>
              </div>
              <div style={{fontFamily:"ui-monospace, monospace", fontSize:10, color:"var(--muted)", letterSpacing:"0.1em", marginTop:12, display:"flex", justifyContent:"space-between"}}>
                <span>[ fotografija — exterior ]</span>
                <span>44°48′N · 20°28′E</span>
              </div>
            </div>
          </div>

          {/* Search bar */}
          {tweaks.heroSearch === "tabs" ? (
            <div style={{marginTop:64}}>
              <div style={{display:"flex", gap:0, borderBottom:"1px solid var(--line)", marginBottom:0}}>
                {["Prodaja","Izdavanje","Novi projekti","Komercijalno"].map(t => (
                  <button key={t} onClick={()=>setSearchTab(t)} style={{
                    padding:"14px 22px", fontFamily:"DM Sans", fontSize:14, fontWeight:500,
                    color: searchTab===t ? "var(--ink)" : "var(--muted)",
                    borderBottom: searchTab===t ? "2px solid var(--blue)" : "2px solid transparent",
                    marginBottom:-1
                  }}>{t}</button>
                ))}
              </div>
              <div className="hero-search" style={{marginTop:0, borderTopLeftRadius:0, borderTopRightRadius:0}}>
                <div className="cell"><label>Lokacija</label><input placeholder="Beograd, Novi Sad…" /></div>
                <div className="cell"><label>Tip</label><select><option>Stan</option><option>Kuća</option><option>Poslovni</option></select></div>
                <div className="cell"><label>Sobe</label><select><option>Bilo koji</option><option>1 — 2</option><option>3 — 4</option><option>5+</option></select></div>
                <div className="cell"><label>Cena do</label><select><option>Bilo koja</option><option>18M RSD</option><option>35M RSD</option><option>60M+ RSD</option></select></div>
                <button className="search-btn"><Icon name="search" size={15} stroke="#fff" /> Pretraži</button>
              </div>
            </div>
          ) : (
            <div className="hero-search">
              <div className="cell"><label>Lokacija</label><input placeholder="Beograd, Vračar…" /></div>
              <div className="cell"><label>Tip nekretnine</label><select><option>Stan</option><option>Kuća</option><option>Poslovni</option><option>Plac</option></select></div>
              <div className="cell"><label>Ponuda</label><select><option>Prodaja</option><option>Izdavanje</option></select></div>
              <div className="cell"><label>Cena do</label><select><option>Bilo koja</option><option>18M RSD</option><option>35M RSD</option><option>60M+ RSD</option></select></div>
              <button className="search-btn" onClick={()=>navigate("listings")}><Icon name="search" size={15} stroke="#fff" /> Pretraži</button>
            </div>
          )}
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" style={{marginTop:80}}>
        <div className="marquee-track">
          {[...Array(2)].map((_,i)=>(
            <React.Fragment key={i}>
              <span>Sinhronizovano sa estate.rs <Tri size={9} color="#1E6FD9" className="tri" /></span>
              <span>HaloOglasi <Tri size={9} color="#1E6FD9" className="tri" /></span>
              <span>Nekretnine.rs <Tri size={9} color="#1E6FD9" className="tri" /></span>
              <span>4zida <Tri size={9} color="#1E6FD9" className="tri" /></span>
              <span>CityExpert <Tri size={9} color="#1E6FD9" className="tri" /></span>
              <span>Oglasi.rs <Tri size={9} color="#1E6FD9" className="tri" /></span>
              <span>Sasomange <Tri size={9} color="#1E6FD9" className="tri" /></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow"><Tri size={8} className="dot" color="#1E6FD9" /> 01 — Kategorije</span>
              <h2>Pronađi po<br/>tipu prostora.</h2>
            </div>
            <p>Svaka kategorija ima sopstveni kurator. Filtri, mape i analiza tržišta su u osnovi pretrage.</p>
          </div>
          <div className="cats">
            {[
              { n: "Stanovi", c: "842 oglasa", i: "01" },
              { n: "Kuće i vile", c: "186 oglasa", i: "02" },
              { n: "Novi projekti", c: "24 razvoja", i: "03" },
              { n: "Primorje", c: "96 oglasa", i: "04" },
            ].map((c, i) => (
              <div key={i} className="cat" onClick={()=>navigate("listings")}>
                <span className="cat-index">{c.i} / 04</span>
                <div className="cat-info">
                  <div className="n"><Tri size={11} color="#1E6FD9" className="tri" /> {c.n}</div>
                  <div className="c">{c.c}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow"><Tri size={8} className="dot" color="#1E6FD9" /> 02 — Izdvojeno</span>
              <h2>Nekretnine ovog<br/>meseca.</h2>
            </div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"end", gap:12}}>
              <p style={{margin:0}}>Ručno izabrano od strane naših agenata. Cene direktno od vlasnika.</p>
              <button className="btn btn-ghost" onClick={()=>navigate("listings")}>Sve nekretnine <Icon name="arrow-right" size={14} /></button>
            </div>
          </div>
          <div className="cards">
            {featured.map(item => (
              <ListingCard key={item.id} item={item} onOpen={openDetail} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" style={{background:"var(--bg-soft)"}}>
        <div className="wrap">
          <div className="about-split">
            <div className="img">
              <div style={{position:"absolute", top:20, left:20, background:"rgba(255,255,255,0.95)", padding:"8px 12px", borderRadius:2, fontSize:11, letterSpacing:"0.1em", fontFamily:"ui-monospace, monospace"}}>
                URBANOVA · HQ
              </div>
              <div style={{position:"absolute", bottom:20, left:20, right:20, color:"#fff", fontFamily:"DM Sans", fontSize:14}}>
                Knez Mihailova 24 / Beograd
              </div>
            </div>
            <div>
              <span className="eyebrow"><Tri size={8} className="dot" color="#1E6FD9" /> O nama</span>
              <h2>Ne prodajemo zidove,<br/>prodajemo <span style={{color:"var(--blue)", fontStyle:"italic"}}>kontekst</span>.</h2>
              <p>
                Urbanova Realty je osnovana 2014. godine kao agencija koja insistira na dubinskom razumevanju
                lokacije, pravnog statusa i investicionog potencijala svake nekretnine. Ne radimo sa masom —
                radimo sa ljudima koji traže specifično.
              </p>
              <p style={{marginTop:16}}>
                Naši agenti su registrovani pri Privrednoj komori Srbije i svaka transakcija ide kroz
                pravni tim kuće. Uvid u katastar, teret, dozvole — sve pre nego što potpišete.
              </p>
              <div className="about-numbers">
                <div><div className="n">1 840<sup>+</sup></div><div className="l">Zatvorenih transakcija</div></div>
                <div><div className="n">98%</div><div className="l">Klijenti koji nas preporučuju</div></div>
                <div><div className="n">12</div><div className="l">Licenciranih agenata</div></div>
                <div><div className="n">24h</div><div className="l">Prosečno vreme odgovora</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow"><Tri size={8} className="dot" color="#1E6FD9" /> 03 — Proces</span>
              <h2>Kako radimo.</h2>
            </div>
            <p>Transparentno od prvog poziva do overe kod notara. Bez skrivenih provizija.</p>
          </div>
          <div className="process-grid">
            {[
              { n:"Korak 01", t:"Razgovor", d:"Razumevanje potreba, budžeta i vremenskog okvira. Obično 45 minuta, u kancelariji ili video poziv." },
              { n:"Korak 02", t:"Selekcija", d:"Predlog od 5—8 nekretnina koje odgovaraju kriterijumima. Svaka sa kompletnim pravnim dosijeom." },
              { n:"Korak 03", t:"Obilasci", d:"Organizovane posete u terminima koji vam odgovaraju. Agent ide sa vama, odgovara na pitanja." },
              { n:"Korak 04", t:"Zatvaranje", d:"Pregovori, predugovor, overa. Naš pravni tim vodi proces do uknjižbe." },
            ].map((s,i)=>(
              <div key={i} className="process-step">
                <div className="num"><Tri size={9} color="#1E6FD9" className="tri" /> {s.n}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="wrap">
          <div>
            <span className="eyebrow"><Tri size={8} className="dot" color="#1E6FD9" /> Sledeći korak</span>
            <h2>Prodajete ili<br/>kupujete? Razgovarajmo<br/><span className="blue">ovog meseca.</span></h2>
            <p style={{marginTop:24}}>
              Prvi razgovor je bez obaveza. Reći ćemo vam realnu tržišnu cenu,
              vremenski okvir i sve što treba da znate pre nego što donesete odluku.
            </p>
          </div>
          <div className="actions">
            <a href="#" className="cta-btn">
              <div><div className="t">Prodajem nekretninu</div><div className="s">Besplatna procena · odgovor za 24h</div></div>
              <Icon name="arrow-right" size={18} stroke="#1E6FD9" />
            </a>
            <a href="#" className="cta-btn">
              <div><div className="t">Kupujem nekretninu</div><div className="s">Konsultacija sa agentom</div></div>
              <Icon name="arrow-right" size={18} stroke="#1E6FD9" />
            </a>
            <a href="#" className="cta-btn">
              <div><div className="t">Primam obaveštenja</div><div className="s">Novi oglasi u vašem delu grada</div></div>
              <Icon name="arrow-right" size={18} stroke="#1E6FD9" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

window.HomePage = HomePage;
