/* global React, window */
const { Tri, Icon, ListingCard } = window;
const { LISTINGS } = window;

const ListingsPage = ({ navigate, openDetail, tweaks }) => {
  const [view, setView] = React.useState("grid");
  const [sort, setSort] = React.useState("Najnovije");
  const [hoverPin, setHoverPin] = React.useState(null);
  const [filters, setFilters] = React.useState({
    deal: "Prodaja", type: "Svi tipovi", rooms: "Bilo koji", price: "Bilo koja", city: "Sve oblasti"
  });

  const showMap = tweaks.map !== false;

  // filter logic — loosely matches deal + type if set
  const filtered = LISTINGS.filter(l => {
    if (filters.deal !== "Sve" && l.deal !== filters.deal) return false;
    if (filters.type !== "Svi tipovi" && l.type !== filters.type) return false;
    return true;
  });

  const sorted = [...filtered].sort((a,b) => {
    if (sort === "Cena ↑") return a.price - b.price;
    if (sort === "Cena ↓") return b.price - a.price;
    if (sort === "Najveće") return b.sqm - a.sqm;
    return 0;
  });

  const FilterChip = ({ label, value, options, onChange }) => {
    const [open, setOpen] = React.useState(false);
    const on = value && value !== "Svi tipovi" && value !== "Bilo koji" && value !== "Bilo koja" && value !== "Sve oblasti" && value !== "Sve";
    return (
      <div style={{position:"relative"}}>
        <button className={`filter-chip ${on?"on":""}`} onClick={()=>setOpen(!open)}>
          {label}: <strong style={{fontWeight:600}}>{value}</strong>
          <Icon name="chev-down" size={13} className="chev" />
        </button>
        {open && (
          <div style={{
            position:"absolute", top:"calc(100% + 6px)", left:0, zIndex:30,
            background:"#fff", border:"1px solid var(--line)", borderRadius:2,
            minWidth:200, boxShadow:"0 10px 30px rgba(16,24,40,0.1)", padding:"6px 0"
          }}>
            {options.map(o => (
              <button key={o} style={{
                display:"block", width:"100%", textAlign:"left", padding:"10px 14px", fontSize:13,
                color: o===value ? "var(--blue)" : "var(--ink)", fontWeight: o===value?600:500
              }} onClick={()=>{onChange(o); setOpen(false);}}>{o}</button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <section className="listings-head">
        <div className="wrap">
          <div className="breadcrumb">
            <a href="#" onClick={(e)=>{e.preventDefault(); navigate("home");}}>Početna</a>
            <span>/</span><span>Nekretnine</span>
            <span>/</span><span style={{color:"var(--ink)"}}>Sve ponude</span>
          </div>
          <div className="listings-title-row">
            <div>
              <h1>Sve nekretnine</h1>
              <div style={{marginTop:6}} className="count">{sorted.length} rezultata · ažurirano pre 3 min iz estate.rs</div>
            </div>
            <div style={{display:"flex", alignItems:"center", gap:18}}>
              <div className="sort">
                Sortiraj: <select value={sort} onChange={(e)=>setSort(e.target.value)}>
                  <option>Najnovije</option><option>Cena ↑</option><option>Cena ↓</option><option>Najveće</option>
                </select>
              </div>
              <div className="view-toggle">
                <button className={view==="grid"?"on":""} onClick={()=>setView("grid")}><Icon name="grid" size={13} /></button>
                <button className={view==="list"?"on":""} onClick={()=>setView("list")}><Icon name="list" size={13} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="filter-bar">
          <FilterChip label="Ponuda" value={filters.deal} options={["Sve","Prodaja","Izdavanje"]} onChange={(v)=>setFilters({...filters, deal:v})} />
          <FilterChip label="Tip" value={filters.type} options={["Svi tipovi","Stan","Kuća","Poslovni"]} onChange={(v)=>setFilters({...filters, type:v})} />
          <FilterChip label="Oblast" value={filters.city} options={["Sve oblasti","Vračar","Dedinje","Novi Beograd","Stari grad","Zemun","Dorćol","Savski venac","Čukarica"]} onChange={(v)=>setFilters({...filters, city:v})} />
          <FilterChip label="Sobe" value={filters.rooms} options={["Bilo koji","1","2","3","4+"]} onChange={(v)=>setFilters({...filters, rooms:v})} />
          <FilterChip label="Cena" value={filters.price} options={["Bilo koja","do 18M RSD","18M — 35M RSD","35M — 60M RSD","60M+ RSD"]} onChange={(v)=>setFilters({...filters, price:v})} />
          <button className="filter-chip">Kvadratura<Icon name="chev-down" size={13} className="chev" /></button>
          <button className="filter-chip">Više filtera<Icon name="chev-down" size={13} className="chev" /></button>
          <div className="filter-spacer" />
          <button className="filter-chip" style={{color:"var(--muted)", borderStyle:"dashed"}}>
            <Icon name="x" size={12} /> Obriši
          </button>
        </div>
      </div>

      <div className={`listings-layout ${showMap ? "" : "no-map"}`}>
        <div className={`listings-main ${showMap ? "" : "no-map"}`}>
          <div className={view==="grid" ? "cards" : "cards"} style={view==="grid" ? {gridTemplateColumns: showMap ? "repeat(2, 1fr)" : "repeat(3, 1fr)"} : {}}>
            {sorted.map(item => (
              <div key={item.id} onMouseEnter={()=>setHoverPin(item.id)} onMouseLeave={()=>setHoverPin(null)}>
                <ListingCard item={item} onOpen={openDetail} view={view} />
              </div>
            ))}
          </div>

          <div style={{display:"flex", justifyContent:"center", marginTop:56, gap:8}}>
            <button className="btn btn-ghost">← Prethodna</button>
            {[1,2,3,4].map(n => (
              <button key={n} className="btn btn-ghost" style={n===1?{background:"var(--ink)", color:"#fff", borderColor:"var(--ink)"}:{}}>{n}</button>
            ))}
            <button className="btn btn-ghost">Sledeća →</button>
          </div>
        </div>

        {showMap && (
          <aside className="listings-map-col">
            <div className="map">
              <div className="map-lines" />
              {sorted.map((item) => (
                <div
                  key={item.id}
                  className={`map-pin ${hoverPin===item.id?"active":""}`}
                  style={{ left: `${item.lng}%`, top: `${item.lat}%` }}
                  onMouseEnter={()=>setHoverPin(item.id)}
                  onMouseLeave={()=>setHoverPin(null)}
                  onClick={()=>openDetail(item)}
                >
                  <Tri size={8} />
                  {item.deal==="Izdavanje" ? (item.price*117/1000).toFixed(0)+"k" : Math.round(item.price*117/1000000*10)/10+"M"} RSD
                </div>
              ))}
              <div style={{position:"absolute", top:16, left:16, background:"rgba(255,255,255,0.95)", padding:"10px 14px", borderRadius:2, fontSize:12, fontFamily:"DM Sans", fontWeight:500, display:"flex", alignItems:"center", gap:8}}>
                <Tri size={9} color="#1E6FD9" /> {sorted.length} nekretnina na mapi
              </div>
              <div style={{position:"absolute", top:16, right:16, background:"#fff", padding:"6px", borderRadius:2, display:"flex", flexDirection:"column", gap:4, boxShadow:"0 2px 6px rgba(0,0,0,0.08)"}}>
                <button style={{width:28, height:28, fontSize:16, fontWeight:500}}>+</button>
                <button style={{width:28, height:28, fontSize:16, fontWeight:500}}>−</button>
              </div>
              <div className="map-attrib">© Urbanova Maps · OSM</div>
            </div>
          </aside>
        )}
      </div>
    </>
  );
};

window.ListingsPage = ListingsPage;
