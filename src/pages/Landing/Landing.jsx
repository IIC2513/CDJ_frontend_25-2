import React from "react";
import "./Landing.css";
import logo from "../../../assets/cdj.png";
import students from "../../../assets/students.png";

const Landing = () => {
  return (
    <>
      {/* ====== HERO ====== */}
      <main id="home" className="hero">
        <section>
          <div className="brand-hero">
            <img className="wordmark" src={logo} alt="Lumen" />
          </div>

          <p className="lead">
            <strong>
              “Ilumina tu camino universitario con la fuerza del estudio
              colaborativo.”
            </strong>
          </p>

          <p className="lead alt">
            Lumen es una plataforma creada por y para estudiantes, donde
            compartir apuntes, organizar tus metas y aprender juntos se
            convierte en una experiencia más clara, más conectada…{" "}
            <em>¡más luminosa!</em>
          </p>

          <p className="points">Conecta 🤝 • Aprende 🎒 • Transforma 🌱</p>

          <div className="cta-row">
            <a className="btn primary" href="sign">
              ¡ÚNETE A LA COMUNIDAD!
            </a>
          </div>
        </section>

        <aside className="hero-media" aria-label="Imagen representativa">
          <div className="hero-card">
            <img
              className="students"
              src={students}
              alt="Dos estudiantes sonriendo con cuadernos y mochila"
            />
          </div>
        </aside>
      </main>

      {/* ====== FOOTER ====== */}
      <footer>
        <div className="foot">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 64 64"
              aria-hidden="true"
            >
              <path
                d="M32 6c-9.4 0-17 7.6-17 17 0 6.4 3.6 12 8.8 14.9V44c0 1.1.9 2 2 2h12.4c1.1 0 2-.9 2-2v-6.1C45.4 35 49 29.4 49 23c0-9.4-7.6-17-17-17z"
                fill="#FFC82B"
              />
            </svg>
            <strong>Lumen</strong>
          </div>
          <small>© 2025 Hecho con ❤️ por y para estudiantes — UC</small>
        </div>
      </footer>
    </>
  );
};

export default Landing;