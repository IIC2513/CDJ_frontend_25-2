import { useRef, useState, useEffect } from "react";
import TeamCard from "../../components/TeamCard/TeamCard";
import MemberDetail from "../../components/MemberDetail/MemberDetail";
import "./AboutUs.css";

import constanzaImg from "../../assets/team/constanza-vera.webp";
import danielaImg from "../../assets/team/daniela-munoz.webp";
import justoImg    from "../../assets/team/justo-garcia.webp";

export default function AboutUs(){
  const [selected, setSelected] = useState(null);
  const cardsRef = useRef(null);

  // Datos del equipo (puedes mover esto a un JSON si prefieres)
  const team = [
    {
      id: "coni",
      name: "Constanza Vera",
      role: "Diseño & UI",
      img: constanzaImg,
      accent: "purple",
      leftWing: "amber",
      rightWing: "teal",
      bio:
        "Tengo 22 años, soy de Rancagua y me apasiona el diseño gráfico y las manualidades. " +
        "Creo que el aprendizaje no solo se trata de acumular conocimientos, sino de compartirlos. " +
        "Quiero aportar a Lumen porque estoy convencida de que formar comunidad y apoyarnos entre " +
        "estudiantes no solo mejora cómo estudiamos, sino también cómo nos sentimos. Para mí, " +
        "aprender juntos es una forma de cuidar nuestra salud mental.",
    },
    {
      id: "dani",
      name: "Daniela Muñoz",
      role: "Frontend",
      img: danielaImg,
      accent: "teal",
      leftWing: "purple",
      rightWing: "amber",
      bio:
        "Me enfoco en construir interfaces limpias y accesibles que hagan fácil aprender en conjunto. " +
        "Me motiva que Lumen reduzca fricción y haga más claro el camino de estudio.",
    },
    {
      id: "justo",
      name: "Justo García",
      role: "Full-stack",
      img: justoImg,
      accent: "amber",
      leftWing: "teal",
      rightWing: "purple",
      bio:
        "Aporto con soluciones robustas y usables para facilitar el estudio colaborativo. " +
        "Me interesa que la plataforma sea rápida, segura y fácil de mantener.",
    },
  ];

  // Scroll al detalle al seleccionarlo
  useEffect(() => {
    if (selected) {
      document.querySelector(".member-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selected]);

  return (
    <main className="about container">
      <section className="about-hero">
        <h1>¿Quiénes somos?</h1>
        <p>
          Somos estudiantes de la Pontificia Universidad Católica que creemos que el aprendizaje
          no debería ser una carrera solitaria. Creamos <strong>Lumen</strong> para compartir
          conocimiento, apoyarnos mutuamente y construir una comunidad donde estudiar sea más
          claro, más humano y más accesible.
        </p>
      </section>

      {/* Grid de tarjetas */}
      <section aria-label="Equipo Lumen" ref={cardsRef}>
        <div className="cards">
          {team.map((m) => (
            <TeamCard
              key={m.id}
              name={m.name}
              role={m.role}
              imgSrc={m.img}
              imgAlt={`Retrato de ${m.name}`}
              accent={m.accent}
              onSelect={() => setSelected(m)}  // <-- abre el detalle
            />
          ))}
        </div>
      </section>

      {/* Tarjeta de detalle (se renderiza si hay seleccionado) */}
      <MemberDetail member={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
