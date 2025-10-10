import React, { useState } from "react";
import "./TeamCard.css";

/**
 * Props:
 * - name, role, bio, imgSrc, imgAlt
 * - accent: "lilac" | "teal" | "amber" | "purple"
 */
export default function TeamCard({
  name,
  role,
  bio,
  imgSrc,
  imgAlt = "Foto integrante",
  accent = "lilac",
}) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((v) => !v);
  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <article
      className={`card accent-${accent} ${flipped ? "flipped" : ""}`}
      role="button"
      tabIndex={0}
      aria-expanded={flipped}
      aria-label={`Perfil de ${name}`}
      onClick={toggle}
      onKeyDown={onKey}
    >
      {/* Cara principal */}
      <div className="card-face front" aria-hidden={flipped}>
        <img src={imgSrc} alt={imgAlt} loading="lazy" />
        <h3 className="card-title">{name}</h3>
        <p className="card-role">{role}</p>
      </div>

      {/* Cara con la bio */}
      <div className="card-face back" aria-hidden={!flipped}>
        <p className="card-bio">{bio}</p>
      </div>
    </article>
  );
}
