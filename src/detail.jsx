/* global React, window */
const { Tri, Icon, ListingCard } = window;
const { LISTINGS, fmtPrice, fmtPriceSqm } = window;

const DetailPage = ({ item, navigate, openDetail }) => {
  if (!item) return null;
  const priceTxt = fmtPrice(item.price, item.deal);
  const sqmTxt = fmtPriceSqm(item.price, item.sqm, item.deal);
  const similar = LISTINGS.filter(l => l.id !== item.id && l.type === item.type).slice(0, 3);

  return (
    <>
      <div className="wrap detail-top">
        <div className="breadcrumb">
          <a href="#" onClick={(e)=>{e.preventDefault(); navigate("home");}}>Početna</a>
          <span>/</span>
          <a href="#" onClick={(e)=>{e.preventDefault(); navigate("listings");}}>Nekretnine</a>
          <span>/</span><span style={{color:"var(--ink)"}}>{item.district}</span>
        </div>

        <div className="detail-head">
          <div>
            <div style={{display:"flex", gap:8, marginBottom:12}}>
              {item.new && <span className="card-badge new" style={{position:"static"}}><Tri size={7} color="#fff" /> Novo</span>}
              <span className="card-badge" style={{position:"static"}}><Tri size={7} /> {item.status}</span>
              <span className="card-badge" style={{position:"static", background:"var(--bg-soft)"}}>{item.deal}</span>
            </div>
            <h1>{item.title}</h1>
            <div className="loc"><Icon name="pin" size={15} /> {item.address} · {item.city}</div>
          </div>
          <div className="price-block">
            <div className="p">{priceTxt}</div>
            {sqmTxt && <div className="sq">{sqmTxt}</div>}
            <div style={{display:"flex", gap:6, justifyContent:"end", marginTop:14}}>
              <button className="btn btn-ghost btn-sm"><Icon name="heart" size={13} /> Sačuvaj</button>
              <button className="btn btn-ghost btn-sm">Podeli</button>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="gallery">
          {(() => {
            const imgs = [
              item.img,
              "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=75&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=75&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=75&auto=format&fit=crop",
            ];
            return (
              <>
                <div className="g g1" style={{backgroundImage:`url(${imgs[0]})`, backgroundSize:"cover", backgroundPosition:"center"}} />
                <div className="g" style={{backgroundImage:`url(${imgs[1]})`, backgroundSize:"cover", backgroundPosition:"center"}} />
                <div className="g" style={{backgroundImage:`url(${imgs[2]})`, backgroundSize:"cover", backgroundPosition:"center"}} />
                <div className="g" style={{backgroundImage:`url(${imgs[3]})`, backgroundSize:"cover", backgroundPosition:"center"}} />
              </>
            );
          })()}
          <div className="g g5-more">
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:6}}>
              <Icon name="image" size={20} stroke="#fff" />
              <span>+20 fotografija</span>
            </div>
          </div>
        </div>

        <div className="detail-grid">
          <div>
            <div className="spec-row">
              <div className="s"><span className="l">Kvadratura</span><span className="v">{item.sqm}<small>m²</small></span></div>
              <div className="s"><span className="l">Sobe</span><span className="v">{item.rooms}</span></div>
              <div className="s"><span className="l">Kupatila</span><span className="v">{item.bathrooms}</span></div>
              <div className="s"><span className="l">Sprat</span><span className="v">{item.floor}</span></div>
              <div className="s"><span className="l">Godina</span><span className="v">{item.year}</span></div>
              <div className="s"><span className="l">Grejanje</span><span className="v" style={{fontSize:15}}>{item.heating}</span></div>
              <div className="s"><span className="l">Parking</span><span className="v" style={{fontSize:15}}>{item.parking}</span></div>
              <div className="s"><span className="l">ID oglasa</span><span className="v" style={{fontSize:15}}>{item.id.toUpperCase()}</span></div>
            </div>

            <div className="detail-section">
              <h3><Tri size={11} color="#1E6FD9" className="tri" /> Opis nekretnine</h3>
              <p>{item.desc}</p>
              <p style={{marginTop:14}}>
                Nekretnina je uknjižena, bez tereta, svi papiri spremni za overu. Mogućnost brzog
                useljenja. Moguće je dogovoriti dodatne obilaske van radnog vremena.
              </p>
            </div>

            <div className="detail-section">
              <h3><Tri size={11} color="#1E6FD9" className="tri" /> Pogodnosti</h3>
              <ul className="feature-list">
                {item.features.map((f,i) => (
                  <li key={i}><Icon name="check" size={16} /> {f}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h3><Tri size={11} color="#1E6FD9" className="tri" /> Osnova</h3>
              <div className="floor-plan">
                <div className="floor-plan-img">
                  <div style={{textAlign:"center"}}>
                    <div style={{marginBottom:8}}>[ Floor plan ]</div>
                    <div style={{fontSize:11}}>Preuzimanje u PDF na zahtev agenta</div>
                  </div>
                </div>
                <div style={{display:"flex", gap:12, marginTop:16, fontSize:12, color:"var(--muted)"}}>
                  <span>■ 3D šetnja dostupna</span>
                  <span>■ Dimenzije u PDF-u</span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h3><Tri size={11} color="#1E6FD9" className="tri" /> Lokacija</h3>
              <div className="detail-map map">
                <div className="map-lines" />
                <div className="map-pin active" style={{left:"50%", top:"55%"}}>
                  <Tri size={8} /> {item.address}
                </div>
              </div>
              <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:16, marginTop:20}}>
                {[
                  { l:"Metro / Tramvaj", v:"3 min" },
                  { l:"Park", v:"5 min" },
                  { l:"Škola", v:"7 min" },
                  { l:"Centar grada", v:"12 min" },
                ].map((x,i)=>(
                  <div key={i} style={{padding:"14px 0", borderTop:"1px solid var(--line)"}}>
                    <div style={{fontSize:11, color:"var(--muted)", letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:600}}>{x.l}</div>
                    <div style={{fontFamily:"DM Sans", fontSize:18, fontWeight:500, marginTop:4}}>{x.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agent card */}
          <div>
            <div className="agent-card">
              <div className="agent-head">
                <div className="agent-avatar" />
                <div>
                  <div className="agent-name">{item.agent}</div>
                  <div className="agent-role">Licencirani agent · PKS broj 00{Math.floor(Math.random()*900)+100}</div>
                </div>
              </div>

              <div style={{padding:"12px 14px", background:"var(--bg-soft)", borderRadius:2, fontSize:12, lineHeight:1.5, color:"var(--ink-2)", marginBottom:6}}>
                <div style={{fontFamily:"DM Sans", fontSize:13, fontWeight:600, marginBottom:4, display:"flex", alignItems:"center", gap:8}}>
                  <Tri size={9} color="#1E6FD9" /> Zakaži obilazak
                </div>
                Odgovor u roku od 24h. Obilazak moguć radnim danima 09 — 19h.
              </div>

              <div className="agent-form">
                <div className="f"><label>Ime i prezime</label><input placeholder="Marko Marković" /></div>
                <div className="f"><label>Telefon</label><input placeholder="+381 6X XXX XXXX" /></div>
                <div className="f"><label>Email</label><input placeholder="vi@email.rs" type="email" /></div>
                <div className="f"><label>Poruka</label><textarea defaultValue={`Zdravo, zanima me ${item.title}. Možemo li zakazati obilazak ove nedelje?`} /></div>
              </div>

              <div className="agent-actions">
                <button className="btn btn-dark btn-sm">Pošalji poruku</button>
                <button className="btn btn-primary btn-sm">Zakaži obilazak</button>
              </div>

              <div className="agent-contact-direct">
                <a href="#" className="wa"><Icon name="whatsapp" size={14} /> WhatsApp</a>
                <a href="#"><Icon name="phone" size={13} /> Pozovi</a>
              </div>

              <div style={{marginTop:18, paddingTop:16, borderTop:"1px solid var(--line-2)", fontSize:11, color:"var(--muted)", lineHeight:1.5}}>
                Oglas sinhronizovan sa estate.rs sistemom · Urbanova Realty d.o.o. ·
                Posredovanje po provizi u skladu sa zakonom o posredovanju u prometu nepokretnosti.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar */}
      {similar.length > 0 && (
        <section className="similar">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow"><Tri size={8} className="dot" color="#1E6FD9" /> Slične nekretnine</span>
                <h2>Možda vas zanima<br/>i ovo.</h2>
              </div>
            </div>
            <div className="cards">
              {similar.map(l => <ListingCard key={l.id} item={l} onOpen={openDetail} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

window.DetailPage = DetailPage;
