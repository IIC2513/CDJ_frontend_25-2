import "./Tag.css"

/* Implementa etiqueta de suscripciones */
export default function Tag({ text, active=false }) {
  return <span className={`mp-tag ${active ? "active" : ""}`}>{text}</span>;
}
