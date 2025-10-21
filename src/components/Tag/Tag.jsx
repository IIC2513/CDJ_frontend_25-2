import "./Tag.css"

export default function Tag({ text, active=false }) {
  return <span className={`mp-tag ${active ? "active" : ""}`}>{text}</span>;
}
