// src/components/ApuntesCardModal/ApuntesCardModal.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // <<< usa tu AuthContext
import "./ApuntesCardModal.css";
import iconoApunte from "../../assets/explora/apuntes2.png";

export default function ApuntesCardModal({ apunte, onClose }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (!apunte) return null;

  /* cerrar modal con ESC */
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

  // -------------------------
  // ACCIONES (comprar / like / comentarios)
  // -------------------------
  const goLogin = () => navigate("/login", { state: { from: location } });

  const handleComprar = () => {
    if (!user) return goLogin();
    // Mock sin backend
    alert("🛒 Compra simulada (no persistente).");
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    if (!user) return goLogin();
    // Mock sin backend
    alert("👍 Me gusta registrado localmente (no persistente).");
  };

  const [comentarios, setComentarios] = useState([
    { id: 1, autor: "Anónimo", texto: "De los mejores que hay hasta ahora :)" },
  ]);
  const [textoComentario, setTextoComentario] = useState("");

  const handleEnviarComentario = (e) => {
    e.preventDefault();
    if (!user) return goLogin();
    const txt = textoComentario.trim();
    if (!txt) return;
    setComentarios((xs) => [
      ...xs,
      { id: Date.now(), autor: user.username ?? "Usuario", texto: txt },
    ]);
    setTextoComentario("");
  };

  return (
    <div className="acm-overlay" onClick={onClose}>
      <div
        className="acm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="acm-title"
        onClick={(e) => e.stopPropagation()} /* evita cerrar si se hace click dentro */
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
              {/* LIKE: mantiene estilo de badge; ahora es clickeable */}
              <button
                type="button"
                className="badge modal-badge"
                onClick={handleLikeClick}
                title="Me gusta (requiere sesión)"
                aria-label="Dar me gusta"
              >
                {apunte.meGusta}
              </button>

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

              {/* COMPRAR: redirige a login si no hay sesión */}
              <button className="acm-cta" onClick={handleComprar}>
                ¡LO QUIERO!
              </button>
            </div>
          </div>

          {/* Panel de comentarios */}
          <aside className="acm-comments">
            <div className="acm-comments-card">
              <h4 className="acm-comments-title">C O M E N T A R I O S</h4>

              {/* Lista de comentarios (mock local) */}
              <div className="acm-comments-box">
                {comentarios.map((c) => (
                  <div className="acm-comment" key={c.id}>
                    <div className="acm-avatar" />
                    <div className="comment">
                      <p>
                        <strong>{c.autor}:</strong> {c.texto}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Formulario: si no hay sesión → login; con sesión agrega en memoria */}
                <form onSubmit={handleEnviarComentario} className="acm-comment-form">
                  <input
                    type="text"
                    className="acm-input"
                    placeholder={user ? "Redacta un comentario..." : "Inicia sesión para comentar"}
                    value={textoComentario}
                    onChange={(e) => setTextoComentario(e.target.value)}
                  />
                  {/* Botón invisible para mantener el layout original (Enter envía) */}
                  <button type="submit" style={{ position: "absolute", left: "-9999px" }}>
                    Enviar
                  </button>
                </form>

              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
