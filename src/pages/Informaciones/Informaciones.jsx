import "./Informaciones.css";

export default function Informaciones() {
  const items = [
    {
      id: 1,
      titulo: "Reconocimiento",
      texto:
        "Felicitamos a Fernanda Silva por ser el usuario con más archivos adquiridos este mes 🎉",
    },
    {
      id: 2,
      titulo: "Sabías que…",
      texto:
        "compartir tus apuntes puede ayudar a más de 10 personas en una semana. ¡Tu conocimiento ilumina!",
    },
    {
      id: 3,
      titulo: "Actualización importante",
      texto:
        "Se agregaron nuevos cursos de la malla 2025. Ya puedes buscarlos y subir tus apuntes.",
    },
    {
      id: 4,
      titulo: "Nuevo ramo disponible",
      texto:
        "¡Ya está habilitado Cálculo IV en la plataforma! 📐",
    },
    {
      id: 5,
      titulo: "Frase del día",
      texto:
        "“Estudiar solo te lleva lejos. Estudiar acompañado te lleva mejor.” 💬",
    },
    {
      id: 6,
      titulo: "Encuesta abierta",
      texto:
        "¿Qué funcionalidades te gustaría ver en Lumen? Participa y ayúdanos a mejorar [link].",
    },
    {
      id: 7,
      titulo: "Recordatorio",
      texto:
        "Ya está disponible la Evaluación Temprana de Cursos. ¡Tu opinión importa! ••",
    },
  ];

  return (
    <main className="info-page">
      <header className="info-header">
        <h1 className="info-title">
          Informaciones <span className="info-badge" aria-label="información">i</span>
        </h1>
      </header>

      <ul className="info-list" role="list">
        {items.map((it) => (
          <li key={it.id} className="info-pill">
            <strong className="info-label">{it.titulo}:</strong>{" "}
            <span className="info-text">{it.texto}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
