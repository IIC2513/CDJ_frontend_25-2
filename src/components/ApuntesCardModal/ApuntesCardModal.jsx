import React, { useEffect } from "react";
import "./ApuntesCardModal.css";
import iconoApunte from "../../assets/explora/apuntes2.png";

export default function ApuntesCardModal({ apunte, onClose }) {
  if (!apunte) return null;

  // Cerrar con ESC
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const precio =
    apunte.precio === 0
      ? "GRATIS"
      : apunte.precio.toLocaleString("es-CL", {
          style: "currency",
          currency: "CLP",
          maximumFractionDigits: 0,
        });

  return (
    <div className="acm-overlay" onClick={onClose}>
      <div
        className="acm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="acm-title"
        onClick={(e) => e.stopPropagation()} // evita cerrar si se hace click dentro
      >
        {/* Botón de cierre */}
        <button className="acm-close" aria-label="Cerrar" onClick={onClose}>
          ✕
        </button>

        {/* Header celeste */}
        <div className="acm-header">
          <div className="acm-header-left"></div>
        </div>

        {/* Cuerpo del modal */}
        <div className="acm-body">
          {/* Columna principal */}
          <div className="acm-main">
            <div className="image-card">
              <img
                src={iconoApunte}
                alt={apunte.titulo}
                className="acm-hero"
              />
            </div>

            {/* Texto con badge */}
            <div className="text-card">
              <span className="badge modal-badge">{apunte.meGusta}</span>

              <p>
                <strong>Autor:</strong> {apunte.autor}
              </p>
              <p>
                <strong>Ramo:</strong> {apunte.curso}
              </p>
              <p>
                <strong>Título:</strong> “{apunte.titulo}”
              </p>

              <p className="acm-desc">
                <strong>Descripción:</strong>{" "}
                En este apunte de clases se explican los temas principales, cómo
                se usan y ejemplos de ejercicios.
              </p>

              <p>
                <strong>Precio:</strong> {precio}
              </p>
              <button className="acm-cta">¡LO QUIERO!</button>
            </div>
          </div>

          {/* Panel de comentarios */}
          <aside className="acm-comments">
            <div className="acm-comments-card">
                <h4 className="acm-comments-title">C O M E N T A R I O S</h4>

                <div className="acm-comments-box">
                <div className="acm-comment">
                    <div className="acm-avatar" />
                    <div className="comment">
                    <p>De los mejores que hay hasta ahora :)</p>
                    </div>
                </div>

                <input
                    type="text"
                    className="acm-input"
                    placeholder="Redacta un comentario..."
                />
                </div>
            </div>
            </aside>

        </div>
      </div>
    </div>
  );
}
