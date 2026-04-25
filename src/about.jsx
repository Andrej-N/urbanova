/* global React, window */
const { Tri, Icon } = window;

const TEAM = [
  { n: "Marko Petrović", r: "Direktor agencije · Co-founder", e: "marko@urbanova.rs", p: "+381 63 234 5001", bio: "18 godina u nekretninama, specijalizovan za ekskluzivne rezidencijalne nekretnine na Dedinju i Vračaru.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop" },
  { n: "Ana Jovanović", r: "Šef prodaje · Luxury segment", e: "ana@urbanova.rs", p: "+381 63 234 5002", bio: "Prethodno 8 godina u Sotheby's International Realty. MSc arhitekture, licencirani agent PKS.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop" },
  { n: "Jelena Đurić", r: "Senior agent · Izdavanje", e: "jelena@urbanova.rs", p: "+381 63 234 5003", bio: "Specijalizovana za Novi Beograd, West 65 i korporativno izdavanje. Engleski, nemački.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop" },
  { n: "Nikola Stanković", r: "Pravni savetnik", e: "nikola@urbanova.rs", p: "+381 63 234 5004", bio: "Diplomirani pravnik, 12 godina u nekretninskom pravu. Vodi sve ugovore i due diligence.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop" },
  { n: "Milica Vasić", r: "Agent · Novi projekti", e: "milica@urbanova.rs", p: "+381 63 234 5005", bio: "Sarađuje sa 12 investitora u Beogradu. Prati sve nove projekte od faze temelja.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80&auto=format&fit=crop" },
  { n: "Stefan Ilić", r: "Marketing i sinhronizacija", e: "stefan@urbanova.rs", p: "+381 63 234 5006", bio: "Upravlja estate.rs sistemom, fotografijom i digitalnim oglašavanjem.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80&auto=format&fit=crop" },
];

const AboutPage = ({ navigate }) => (
  <>
    <section style={{padding:"64px 0 32px"}}>
      <div className="wrap">
        <div className="breadcrumb">
          <a href="#" onClick={(e)=>{e.preventDefault(); navigate("home");}}>Početna</a>
          <span>/</span><span style={{color:"var(--ink)"}}>O nama</span>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:64, alignItems:"end", marginTop:20}}>
          <div>
            <span className="eyebrow"><Tri size={8} className="dot" color="#1E6FD9" /> Urbanova · od 2014</span>
            <h1 style={{fontFamily:"DM Sans", fontSize:"clamp(44px, 5vw, 72px)", fontWeight:600, letterSpacing:"-0.03em", lineHeight:1.02, margin:"20px 0 0"}}>
              Dvanaest ljudi.<br/>Jedna <span style={{color:"var(--blue)", fontStyle:"italic"}}>opsesija</span>:<br/>
              pravi dom za svakog klijenta.
            </h1>
          </div>
          <p style={{color:"var(--muted)", fontSize:16, lineHeight:1.6, maxWidth:420}}>
            Urbanova je osnovana 2014. godine u Beogradu. Radimo sa manjim brojem klijenata,
            ali dublje — svaka transakcija prolazi kroz pravni tim kuće i svaki agent vodi maksimalno
            12 otvorenih slučajeva istovremeno.
          </p>
        </div>
      </div>
    </section>

    {/* Big image */}
    <section className="wrap" style={{marginBottom:80}}>
      <div style={{
        height:480, borderRadius:2, overflow:"hidden", position:"relative",
        backgroundImage:"url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=80&auto=format&fit=crop')",
        backgroundSize:"cover", backgroundPosition:"center"
      }}>
        <div style={{position:"absolute", bottom:24, left:24, right:24, color:"#fff", display:"flex", justifyContent:"space-between", alignItems:"end"}}>
          <div>
            <div style={{fontFamily:"ui-monospace, monospace", fontSize:11, letterSpacing:"0.14em", opacity:0.8}}>HQ · KNEZ MIHAILOVA 24</div>
            <div style={{fontFamily:"DM Sans", fontSize:24, fontWeight:500, marginTop:4}}>Naša kancelarija u centru Beograda</div>
          </div>
          <div style={{fontFamily:"ui-monospace, monospace", fontSize:11, letterSpacing:"0.1em", opacity:0.8}}>44°49′N · 20°27′E</div>
        </div>
      </div>
    </section>

    {/* Numbers */}
    <section className="section" style={{paddingTop:0, paddingBottom:40}}>
      <div className="wrap">
        <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:32, paddingTop:32, borderTop:"1px solid var(--line)"}}>
          {[
            { n:"1 840", suf:"+", l:"Zatvorenih transakcija" },
            { n:"98", suf:"%", l:"Klijenti koji preporučuju" },
            { n:"18", l:"Godina iskustva" },
            { n:"49", suf:" mlrd", l:"RSD promet u 2025" },
          ].map((s,i)=>(
            <div key={i}>
              <div style={{fontFamily:"DM Sans", fontSize:56, fontWeight:500, letterSpacing:"-0.025em", lineHeight:1}}>
                {s.n}<sup style={{color:"var(--blue)", fontSize:"0.35em", top:"-1.4em"}}>{s.suf}</sup>
              </div>
              <div style={{fontSize:13, color:"var(--muted)", marginTop:8}}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section" style={{background:"var(--bg-soft)"}}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow"><Tri size={8} className="dot" color="#1E6FD9" /> 01 — Vrednosti</span>
            <h2>Kako razmišljamo<br/>o svakoj transakciji.</h2>
          </div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:0, borderLeft:"1px solid var(--line)"}}>
          {[
            { t:"Transparentnost", d:"Cena, provizija, rokovi i uslovi — sve jasno, u pisanom obliku, pre nego što potpišete išta. Bez skrivenih troškova." },
            { t:"Due diligence", d:"Katastarska provera, pravni status, tereti i hipoteke — uradimo to pre nego što vam preporučimo nekretninu." },
            { t:"Selektivnost", d:"Radimo sa manjim brojem klijenata dublje. Svaki agent vodi maksimalno 12 otvorenih slučajeva." },
          ].map((v,i)=>(
            <div key={i} style={{padding:"32px 28px", borderRight:"1px solid var(--line)"}}>
              <div style={{fontFamily:"DM Sans", fontSize:13, color:"var(--blue)", fontWeight:600, letterSpacing:"0.1em", display:"flex", alignItems:"center", gap:8}}>
                <Tri size={9} className="tri" /> 0{i+1}
              </div>
              <h4 style={{fontFamily:"DM Sans", fontSize:22, fontWeight:500, letterSpacing:"-0.015em", margin:"18px 0 12px"}}>{v.t}</h4>
              <p style={{color:"var(--muted)", fontSize:14, margin:0, lineHeight:1.6}}>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow"><Tri size={8} className="dot" color="#1E6FD9" /> 02 — Tim</span>
            <h2>Ljudi iza<br/>svake transakcije.</h2>
          </div>
          <p>Svi naši agenti imaju licencu Privredne komore Srbije i prosečno 9+ godina iskustva.</p>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:24}}>
          {TEAM.map((m,i)=>(
            <div key={i}>
              <div style={{
                aspectRatio:"4/5", borderRadius:2, overflow:"hidden", marginBottom:18, position:"relative",
                backgroundImage:`url(${m.img})`, backgroundSize:"cover", backgroundPosition:"center top", backgroundColor:"#dde3ea"
              }}>
                <div style={{position:"absolute", top:14, left:14, background:"rgba(255,255,255,0.95)", padding:"4px 8px", borderRadius:2, fontSize:10, letterSpacing:"0.12em", fontWeight:600, textTransform:"uppercase", fontFamily:"ui-monospace, monospace"}}>
                  0{i+1} / 0{TEAM.length}
                </div>
              </div>
              <div style={{fontFamily:"DM Sans", fontSize:19, fontWeight:500, letterSpacing:"-0.01em"}}>{m.n}</div>
              <div style={{fontSize:12, color:"var(--blue)", marginTop:3, letterSpacing:"0.04em", fontWeight:500}}>{m.r}</div>
              <p style={{color:"var(--muted)", fontSize:13.5, lineHeight:1.55, margin:"12px 0 14px"}}>{m.bio}</p>
              <div style={{display:"flex", gap:16, fontSize:12.5, color:"var(--ink-2)", paddingTop:12, borderTop:"1px solid var(--line-2)"}}>
                <a href={`mailto:${m.e}`} style={{display:"inline-flex", alignItems:"center", gap:6}}><Icon name="mail" size={13} /> {m.e}</a>
                <a href={`tel:${m.p.replace(/\s/g,"")}`} style={{display:"inline-flex", alignItems:"center", gap:6}}><Icon name="phone" size={13} /> {m.p}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Licenses / trust */}
    <section className="section" style={{background:"var(--ink)", color:"#fff"}}>
      <div className="wrap">
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center"}}>
          <div>
            <span className="eyebrow" style={{color:"rgba(255,255,255,0.5)"}}><Tri size={8} className="dot" color="#1E6FD9" /> 03 — Licence i članstva</span>
            <h2 style={{fontFamily:"DM Sans", fontSize:"clamp(32px, 3vw, 44px)", fontWeight:500, letterSpacing:"-0.025em", lineHeight:1.1, margin:"16px 0 20px"}}>
              Registrovani pri PKS,<br/>osigurani za <span style={{color:"var(--blue)", fontStyle:"italic"}}>€1M</span> po transakciji.
            </h2>
            <p style={{color:"rgba(255,255,255,0.7)", lineHeight:1.6, maxWidth:480}}>
              Urbanova Realty d.o.o. je član Privredne komore Srbije (reg. 2014/08442), i Udruženja
              posrednika u prometu nepokretnosti. Profesionalna odgovornost osigurana kod Generali.
            </p>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
            {["PKS 2014/08442","Licenca br. 0812","ISO 9001:2015","Generali — €1M","Udruženje posrednika","RGZ ovlašćenje"].map((b,i)=>(
              <div key={i} style={{padding:"20px 18px", border:"1px solid rgba(255,255,255,0.15)", borderRadius:2, fontFamily:"DM Sans", fontSize:13, display:"flex", alignItems:"center", gap:10}}>
                <Tri size={10} color="#1E6FD9" /> {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

window.AboutPage = AboutPage;
