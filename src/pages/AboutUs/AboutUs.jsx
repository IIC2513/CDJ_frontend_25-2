import TeamCard from "../../components/TeamCard/TeamCard";
import "./AboutUs.css";

import constanzaImg from "../../assets/team/constanza-vera.webp";
import danielaImg   from "../../assets/team/daniela-munoz.webp";
import justoImg     from "../../assets/team/justo-garcia.webp";

export default function AboutUs(){
  const team = [
    {
      id: "coni",
      name: "Constanza Vera",
      role: "Diseño & UI",
      img: constanzaImg,
      accent: "lilac",
      bio:
        "Me apasiona el diseño gráfico y las manualidades. " +
        "Creo que el aprendizaje no solo se trata de acumular conocimientos, sino de compartirlos. " 
    },
    {
      id: "dani",
      name: "Daniela Muñoz",
      role: "Frontend",
      img: danielaImg,
      accent: "teal",
      bio:
        "Me enfoco en construir interfaces limpias y accesibles que hagan fácil aprender en conjunto. " +
        "Me motiva que Lumen reduzca fricción y haga más claro el camino de estudio."
    },
    {
      id: "justo",
      name: "Justo García",
      role: "Full-stack",
      img: justoImg,
      accent: "amber",
      bio:
        "Aporto con soluciones robustas y usables para facilitar el estudio colaborativo. " +
        "Me interesa que la plataforma sea rápida, segura y fácil de mantener."
    }
  ];

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

      <section aria-label="Equipo Lumen">
        <div className="cards">
          {team.map((m) => (
            <TeamCard
              key={m.id}
              name={m.name}
              role={m.role}
              bio={m.bio}
              imgSrc={m.img}
              imgAlt={`Retrato de ${m.name}`}
              accent={m.accent}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
