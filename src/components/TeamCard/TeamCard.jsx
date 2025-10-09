import "./TeamCard.css";

export default function TeamCard({
  name, role, imgSrc, imgAlt = "Foto integrante",
  accent = "lilac",
  onSelect, // <-- nuevo
}) {
  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect?.();
    }
  };

  return (
    <article
      className={`card accent-${accent}`}
      tabIndex={0}
      aria-label={`Perfil de ${name}`}
      role="button"
      onClick={onSelect}
      onKeyDown={handleKey}
    >
      <img src={imgSrc} alt={imgAlt} loading="lazy" />
      <h3 className="card-title">{name}</h3>
      <p className="card-role">{role}</p>
    </article>
  );
}
