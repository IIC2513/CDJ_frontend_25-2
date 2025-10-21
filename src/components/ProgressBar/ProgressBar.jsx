import "./ProgressBar.css"

export default function ProgressBar({ value=0, title="PROGRESO" }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="progress-card">
      <div className="card-title">{title}</div>
      <div className="bar">
        <div className="bar-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="bar-meta">
        <span>0%</span>
        <span className="bar-percent">{pct}%</span>
        <span>100%</span>
      </div>
    </div>
  );
}
