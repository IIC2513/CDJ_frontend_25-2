import "./AlertLists.css"

/* Listas las alertas */
export default function AlertsList({ items=[] }) {
  return (
    <div className="alerts-card">
      <div className="card-title">ALERTAS</div>
      <div className="alerts-list">
        {items.length
          ? items.map((a,i)=>(
              <div key={i} className="alert"><b>{a.user}</b> {a.text} <i>{a.meta}</i></div>
            ))
          : <p className="muted">Sin alertas por ahora.</p>}
      </div>
    </div>
  );
}
