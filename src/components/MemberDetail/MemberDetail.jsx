import { useEffect, useRef } from "react";
import "./MemberDetail.css";

export default function MemberDetail({ member, onClose }) {
  const ref = useRef(null);

  // Esc para cerrar + foco accesible
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    ref.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!member) return null;

  return (
    <section
      className="member-detail"
      aria-live="polite"
      aria-label={`Detalle de ${member.name}`}
    >
      <div
        className={`detail-card wing-left-${member.leftWing} wing-right-${member.rightWing}`}
        tabIndex={-1}
        ref={ref}
      >
        <header className="detail-header">
          <h3>{member.name}</h3>
        </header>
        <p className="detail-bio">{member.bio}</p>

        <div className="detail-actions">
          <button className="outline" onClick={onClose} aria-label="Cerrar">
            Cerrar
          </button>
        </div>
      </div>
    </section>
  );
}
