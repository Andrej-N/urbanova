/* global React, window */
const { Tri, Icon } = window;

const ContactPage = ({ navigate }) => {
  const [form, setForm] = React.useState({
    intent: "Kupujem nekretninu", firstName: "", lastName: "", email: "", phone: "", preferredContact: "Email",
    city: "Beograd", districts: [], propertyType: [], deal: "Prodaja",
    rooms: "", sqmMin: "", sqmMax: "", budgetMin: "", budgetMax: "",
    timeline: "1 — 3 meseca", financing: "Kredit", newOnly: false, hasKids: false,
    hasPets: false, hasParking: false, firstTime: false, currentProperty: "",
    message: "", heardFrom: "Google", consent: false, newsletter: false
  });
  const [step, setStep] = React.useState(1);
  const [sent, setSent] = React.useState(false);

  const set = (k, v) => setForm({ ...form, [k]: v });
  const toggleArr = (k, v) => {
    const a = form[k].includes(v) ? form[k].filter(x => x !== v) : [...form[k], v];
    setForm({ ...form, [k]: a });
  };

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Chip = ({ label, on, onClick }) => (
    <button type="button" onClick={onClick} style={{
      padding:"9px 14px", border:"1px solid " + (on ? "var(--ink)" : "var(--line)"),
      background: on ? "var(--ink)" : "#fff", color: on ? "#fff" : "var(--ink)",
      borderRadius:2, fontSize:13, fontWeight:500, fontFamily:"inherit", cursor:"pointer",
      transition:"all 0.15s"
    }}>{label}</button>
  );

  const Section = ({ num, title, children }) => (
    <div style={{padding:"32px 0", borderTop:"1px solid var(--line)"}}>
      <div style={{display:"flex", alignItems:"baseline", gap:14, marginBottom:22}}>
        <span style={{fontFamily:"ui-monospace, monospace", fontSize:11, color:"var(--blue)", letterSpacing:"0.1em", fontWeight:600}}>0{num} /</span>
        <h3 style={{fontFamily:"DM Sans", fontSize:22, fontWeight:500, letterSpacing:"-0.015em", margin:0}}>{title}</h3>
      </div>
      {children}
    </div>
  );

  const Label = ({ children }) => (
    <label style={{fontSize:11, letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--muted)", fontWeight:600, marginBottom:6, display:"block"}}>{children}</label>
  );

  const Input = (props) => (
    <input {...props} style={{
      border:"1px solid var(--line)", padding:"12px 14px", fontSize:14, fontFamily:"inherit",
      borderRadius:2, background:"#fff", width:"100%", outline:"none", color:"var(--ink)"
    }} />
  );

  if (sent) {
    return (
      <section className="section">
        <div className="wrap" style={{maxWidth:680, textAlign:"center", padding:"80px 32px"}}>
          <Tri size={28} color="#1E6FD9" />
          <h1 style={{fontFamily:"DM Sans", fontSize:44, fontWeight:600, letterSpacing:"-0.025em", margin:"24px 0 12px"}}>
            Hvala, {form.firstName || "javićemo se"}.
          </h1>
          <p style={{color:"var(--muted)", fontSize:17, lineHeight:1.6}}>
            Vaš upit je poslat našem timu. Agent će vam se javiti na <strong style={{color:"var(--ink)"}}>{form.preferredContact === "Email" ? form.email : form.phone}</strong> u
            roku od 24 sata (radnim danima obično za 2 — 4h).
          </p>
          <div style={{marginTop:32, padding:24, background:"var(--bg-soft)", borderRadius:2, textAlign:"left", fontSize:13, color:"var(--ink-2)", lineHeight:1.7}}>
            <div style={{fontFamily:"DM Sans", fontWeight:600, marginBottom:8, display:"flex", alignItems:"center", gap:8}}>
              <Tri size={9} color="#1E6FD9" /> Referenca upita
            </div>
            <div style={{fontFamily:"ui-monospace, monospace", fontSize:12}}>URB-2026-{Math.floor(Math.random()*90000)+10000}</div>
          </div>
          <button className="btn btn-dark btn-lg" style={{marginTop:32}} onClick={()=>navigate("home")}>
            Nazad na početnu <Icon name="arrow-right" size={14} />
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section style={{padding:"64px 0 32px"}}>
        <div className="wrap">
          <div className="breadcrumb">
            <a href="#" onClick={(e)=>{e.preventDefault(); navigate("home");}}>Početna</a>
            <span>/</span><span style={{color:"var(--ink)"}}>Kontakt</span>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:64, alignItems:"end", marginTop:20}}>
            <div>
              <span className="eyebrow"><Tri size={8} className="dot" color="#1E6FD9" /> Razgovarajmo</span>
              <h1 style={{fontFamily:"DM Sans", fontSize:"clamp(44px, 5vw, 72px)", fontWeight:600, letterSpacing:"-0.03em", lineHeight:1.02, margin:"20px 0 0"}}>
                Recite nam tačno šta<br/>tražite. Odgovor<br/><span style={{color:"var(--blue)", fontStyle:"italic"}}>za 24h.</span>
              </h1>
            </div>
            <p style={{color:"var(--muted)", fontSize:16, lineHeight:1.6, maxWidth:420}}>
              Što više detalja nam date, to je naša selekcija preciznija. Forma ispod nam daje sve što treba da vam pošaljemo konkretne predloge već u prvom razgovoru.
            </p>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="wrap" style={{marginBottom:40}}>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:12}}>
          {[
            { i:"phone", t:"Pozovite", v:"+381 11 234 5678", s:"Pon — Pet · 09 — 19h" },
            { i:"whatsapp", t:"WhatsApp / Viber", v:"+381 63 234 5000", s:"Svaki dan · 08 — 22h" },
            { i:"mail", t:"Pošaljite mail", v:"kontakt@urbanova.rs", s:"Odgovor za 24h" },
            { i:"pin", t:"Dođite kod nas", v:"Knez Mihailova 24 / III", s:"11000 Beograd" },
          ].map((c,i)=>(
            <a key={i} href="#" onClick={(e)=>e.preventDefault()} style={{
              padding:"22px 20px", border:"1px solid var(--line)", borderRadius:2, background:"#fff",
              transition:"all 0.15s", display:"block"
            }} onMouseEnter={(e)=>{e.currentTarget.style.borderColor="var(--blue)";}} onMouseLeave={(e)=>{e.currentTarget.style.borderColor="var(--line)";}}>
              <Icon name={c.i} size={18} stroke="#1E6FD9" />
              <div style={{fontFamily:"DM Sans", fontSize:15, fontWeight:500, marginTop:12}}>{c.t}</div>
              <div style={{fontSize:14, color:"var(--ink)", fontWeight:500, marginTop:6, letterSpacing:"-0.01em"}}>{c.v}</div>
              <div style={{fontSize:12, color:"var(--muted)", marginTop:4}}>{c.s}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Big form */}
      <section className="section" style={{paddingTop:40}}>
        <div className="wrap" style={{maxWidth:900}}>
          <form onSubmit={submit} style={{background:"#fff"}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0 0 8px"}}>
              <div style={{fontFamily:"ui-monospace, monospace", fontSize:11, color:"var(--muted)", letterSpacing:"0.1em"}}>
                URBANOVA · OBRAZAC UPITA · V.4
              </div>
              <div style={{fontFamily:"ui-monospace, monospace", fontSize:11, color:"var(--muted)", letterSpacing:"0.1em"}}>
                ~5 MIN · ŠIFROVANO
              </div>
            </div>

            <Section num={1} title="Šta nas čeka?">
              <Label>Razlog za kontakt</Label>
              <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
                {["Kupujem nekretninu","Prodajem nekretninu","Izdajem","Tražim za iznajmljivanje","Procena","Konsultacija","Drugo"].map(o => (
                  <Chip key={o} label={o} on={form.intent === o} onClick={()=>set("intent", o)} />
                ))}
              </div>
            </Section>

            <Section num={2} title="Lični podaci">
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16}}>
                <div><Label>Ime</Label><Input required value={form.firstName} onChange={(e)=>set("firstName", e.target.value)} placeholder="Marko" /></div>
                <div><Label>Prezime</Label><Input required value={form.lastName} onChange={(e)=>set("lastName", e.target.value)} placeholder="Marković" /></div>
              </div>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16}}>
                <div><Label>Email</Label><Input required type="email" value={form.email} onChange={(e)=>set("email", e.target.value)} placeholder="marko@email.rs" /></div>
                <div><Label>Telefon</Label><Input required value={form.phone} onChange={(e)=>set("phone", e.target.value)} placeholder="+381 63 123 4567" /></div>
              </div>
              <Label>Preferirani način kontakta</Label>
              <div style={{display:"flex", gap:8}}>
                {["Email","Telefon","WhatsApp","Viber","SMS"].map(o => (
                  <Chip key={o} label={o} on={form.preferredContact === o} onClick={()=>set("preferredContact", o)} />
                ))}
              </div>
            </Section>

            {(form.intent === "Kupujem nekretninu" || form.intent === "Tražim za iznajmljivanje") && (
              <>
                <Section num={3} title="Tip nekretnine">
                  <Label>Tip prostora (možete izabrati više)</Label>
                  <div style={{display:"flex", gap:8, flexWrap:"wrap", marginBottom:20}}>
                    {["Stan","Kuća","Vila","Penthouse","Dupleks","Poslovni prostor","Plac"].map(o => (
                      <Chip key={o} label={o} on={form.propertyType.includes(o)} onClick={()=>toggleArr("propertyType", o)} />
                    ))}
                  </div>
                  <Label>Samo nove izgradnje?</Label>
                  <div style={{display:"flex", gap:8}}>
                    <Chip label="Sve" on={!form.newOnly} onClick={()=>set("newOnly", false)} />
                    <Chip label="Samo novogradnja" on={form.newOnly} onClick={()=>set("newOnly", true)} />
                  </div>
                </Section>

                <Section num={4} title="Lokacija">
                  <Label>Grad</Label>
                  <div style={{display:"flex", gap:8, flexWrap:"wrap", marginBottom:20}}>
                    {["Beograd","Novi Sad","Niš","Kragujevac","Subotica","Drugo"].map(o => (
                      <Chip key={o} label={o} on={form.city === o} onClick={()=>set("city", o)} />
                    ))}
                  </div>
                  <Label>Oblast / opština (možete izabrati više)</Label>
                  <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
                    {["Vračar","Dedinje","Novi Beograd","Stari grad","Zemun","Dorćol","Savski venac","Čukarica","Zvezdara","Palilula","Voždovac","Bilo gde"].map(o => (
                      <Chip key={o} label={o} on={form.districts.includes(o)} onClick={()=>toggleArr("districts", o)} />
                    ))}
                  </div>
                </Section>

                <Section num={5} title="Veličina i sobe">
                  <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16, marginBottom:20}}>
                    <div><Label>Broj soba</Label>
                      <select value={form.rooms} onChange={(e)=>set("rooms", e.target.value)} style={{border:"1px solid var(--line)", padding:"12px 14px", fontSize:14, borderRadius:2, width:"100%", fontFamily:"inherit", background:"#fff"}}>
                        <option value="">Bilo koji</option>
                        <option>Garsonjera</option><option>1.0</option><option>1.5</option><option>2.0</option><option>2.5</option><option>3.0</option><option>3.5</option><option>4+</option>
                      </select>
                    </div>
                    <div><Label>Kvadratura od (m²)</Label><Input type="number" value={form.sqmMin} onChange={(e)=>set("sqmMin", e.target.value)} placeholder="60" /></div>
                    <div><Label>Kvadratura do (m²)</Label><Input type="number" value={form.sqmMax} onChange={(e)=>set("sqmMax", e.target.value)} placeholder="120" /></div>
                  </div>
                </Section>

                <Section num={6} title="Budžet (RSD)">
                  <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:16}}>
                    <div><Label>Minimum</Label><Input value={form.budgetMin} onChange={(e)=>set("budgetMin", e.target.value)} placeholder="15.000.000" /></div>
                    <div><Label>Maksimum</Label><Input value={form.budgetMax} onChange={(e)=>set("budgetMax", e.target.value)} placeholder="35.000.000" /></div>
                  </div>
                  <Label>Način plaćanja</Label>
                  <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
                    {["Kredit","Keš","Kombinovano","Razmena nekretnina","Još ne znam"].map(o => (
                      <Chip key={o} label={o} on={form.financing === o} onClick={()=>set("financing", o)} />
                    ))}
                  </div>
                </Section>

                <Section num={7} title="Obavezno mora da ima">
                  <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10}}>
                    {[
                      { k:"hasParking", t:"Parking mesto ili garažu" },
                      { k:"hasKids", t:"Prostor pogodan za decu" },
                      { k:"hasPets", t:"Dozvoljeni kućni ljubimci" },
                      { k:"firstTime", t:"Prvi put kupujem nekretninu" },
                    ].map(c => (
                      <label key={c.k} style={{display:"flex", alignItems:"center", gap:10, padding:"12px 14px", border:"1px solid var(--line)", borderRadius:2, cursor:"pointer", fontSize:14}}>
                        <input type="checkbox" checked={form[c.k]} onChange={(e)=>set(c.k, e.target.checked)} style={{accentColor:"var(--blue)"}} />
                        {c.t}
                      </label>
                    ))}
                  </div>
                </Section>

                <Section num={8} title="Vremenski okvir">
                  <Label>Kada planirate da završite proces?</Label>
                  <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
                    {["Što pre","1 — 3 meseca","3 — 6 meseci","6 — 12 meseci","Neodređeno"].map(o => (
                      <Chip key={o} label={o} on={form.timeline === o} onClick={()=>set("timeline", o)} />
                    ))}
                  </div>
                </Section>
              </>
            )}

            {(form.intent === "Prodajem nekretninu" || form.intent === "Izdajem" || form.intent === "Procena") && (
              <Section num={3} title="O vašoj nekretnini">
                <Label>Kratak opis (tip, lokacija, kvadratura, sprat)</Label>
                <textarea value={form.currentProperty} onChange={(e)=>set("currentProperty", e.target.value)} placeholder="Npr. dvosoban stan 62m², Vračar, 4/6, renoviran 2022." style={{
                  border:"1px solid var(--line)", padding:"12px 14px", fontSize:14, fontFamily:"inherit",
                  borderRadius:2, background:"#fff", width:"100%", outline:"none", minHeight:100, resize:"vertical"
                }} />
              </Section>
            )}

            <Section num={9} title="Vaša poruka">
              <Label>Dodatne informacije</Label>
              <textarea value={form.message} onChange={(e)=>set("message", e.target.value)} placeholder="Napišite sve što mislite da nam može pomoći da vam ponudimo pravu nekretninu…" style={{
                border:"1px solid var(--line)", padding:"12px 14px", fontSize:14, fontFamily:"inherit",
                borderRadius:2, background:"#fff", width:"100%", outline:"none", minHeight:120, resize:"vertical"
              }} />

              <div style={{marginTop:20}}>
                <Label>Gde ste čuli za nas?</Label>
                <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
                  {["Google","Instagram","Preporuka","estate.rs","HaloOglasi","Nekretnine.rs","Drugo"].map(o => (
                    <Chip key={o} label={o} on={form.heardFrom === o} onClick={()=>set("heardFrom", o)} />
                  ))}
                </div>
              </div>
            </Section>

            <Section num={10} title="Saglasnost">
              <label style={{display:"flex", alignItems:"start", gap:10, marginBottom:12, fontSize:14, lineHeight:1.5, cursor:"pointer"}}>
                <input type="checkbox" required checked={form.consent} onChange={(e)=>set("consent", e.target.checked)} style={{marginTop:4, accentColor:"var(--blue)"}} />
                <span>Saglasan/na sam sa <a href="#" style={{color:"var(--blue)", textDecoration:"underline"}}>politikom privatnosti</a> i obradom ličnih podataka u skladu sa Zakonom o zaštiti podataka o ličnosti.</span>
              </label>
              <label style={{display:"flex", alignItems:"start", gap:10, fontSize:14, lineHeight:1.5, cursor:"pointer"}}>
                <input type="checkbox" checked={form.newsletter} onChange={(e)=>set("newsletter", e.target.checked)} style={{marginTop:4, accentColor:"var(--blue)"}} />
                <span>Želim da primam obaveštenja o novim nekretninama koje odgovaraju mojim kriterijumima.</span>
              </label>
            </Section>

            <div style={{padding:"32px 0 0", borderTop:"1px solid var(--line)", display:"flex", justifyContent:"space-between", alignItems:"center", gap:16, flexWrap:"wrap"}}>
              <div style={{fontSize:12, color:"var(--muted)", maxWidth:420, lineHeight:1.5}}>
                <Tri size={8} color="#1E6FD9" /> Vaš upit se šalje direktno agentu, bez preprodaje podataka. Odgovor u roku od 24h (radnim danima obično 2 — 4h).
              </div>
              <button type="submit" className="btn btn-dark btn-lg">
                Pošalji upit <Icon name="arrow-right" size={16} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Office map */}
      <section className="section" style={{background:"var(--bg-soft)", paddingTop:64, paddingBottom:64}}>
        <div className="wrap">
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"stretch"}}>
            <div>
              <span className="eyebrow"><Tri size={8} className="dot" color="#1E6FD9" /> Naša kancelarija</span>
              <h2 style={{fontFamily:"DM Sans", fontSize:"clamp(28px, 2.4vw, 40px)", fontWeight:600, letterSpacing:"-0.025em", lineHeight:1.1, margin:"14px 0 20px"}}>
                Knez Mihailova 24<br/>III sprat, Beograd
              </h2>
              <div style={{fontSize:14, lineHeight:1.8, color:"var(--ink-2)"}}>
                <div>Pon — Pet · 09:00 — 19:00</div>
                <div>Subotom · 10:00 — 15:00</div>
                <div>Nedeljom · zatvoreno</div>
              </div>
              <div style={{display:"flex", gap:10, marginTop:24}}>
                <button className="btn btn-dark btn-sm"><Icon name="pin" size={13} /> Otvori u mapama</button>
                <button className="btn btn-ghost btn-sm">Zakaži posetu</button>
              </div>
            </div>
            <div style={{minHeight:320, border:"1px solid var(--line)", borderRadius:2, overflow:"hidden"}}>
              <div className="map" style={{height:"100%"}}>
                <div className="map-lines" />
                <div className="map-pin active" style={{left:"50%", top:"55%"}}>
                  <Tri size={8} /> Urbanova HQ
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

window.ContactPage = ContactPage;
