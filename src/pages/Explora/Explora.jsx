import React, { useMemo, useState } from "react";
import "./Explora.css";
import ApuntesCard from "../../components/ApuntesCard/ApuntesCard";

const DATOS_PRUEBA = [
  { id: "n1", curso: "Cálculo III - MAT1630", titulo: "Integrales dobles", autor: "Javiera Pérez", fecha: "04/09/2022", meGusta: 26, precio: 0 },
  { id: "n2", curso: "Cálculo III - MAT1630", titulo: "Resumen I1", autor: "Luis López", fecha: "03/08/2025", meGusta: 21, precio: 3500 },
  { id: "n3", curso: "Cálculo III - MAT1630", titulo: "Integrales dobles y…", autor: "Pedro Mera", fecha: "18/04/2021", meGusta: 14, precio: 0 },
  { id: "n4", curso: "Cálculo III - MAT1630", titulo: "Integrales simples", autor: "Javiera Pérez", fecha: "30/08/2022", meGusta: 13, precio: 0 },
  { id: "n5", curso: "Cálculo III - MAT1630", titulo: "Fórmulas I2", autor: "Cata Díaz", fecha: "06/10/2025", meGusta: 11, precio: 1500 },
  { id: "n6", curso: "Cálculo III - MAT1630", titulo: "Campos vectoriales", autor: "Pedro Mera", fecha: "14/07/2018", meGusta: 6, precio: 0 },
  { id: "n7", curso: "Álgebra Lineal - MAT1203", titulo: "Matrices", autor: "Equipo Lumen", fecha: "17/10/2025", meGusta: 8, precio: 0 },
  { id: "n9", curso: "Álgebra Lineal - MAT1203", titulo: "Bases y dimensiones", autor: "Carlos R.", fecha: "20/08/2022", meGusta: 5, precio: 0 },
  { id: "n10", curso: "Álgebra Lineal - MAT1203", titulo: "Vectores propios", autor: "María F.", fecha: "25/09/2022", meGusta: 0, precio: 0 },
];

/* Agrupar apuntes por curso*/
const agruparPorCurso = (apuntes) => {
  const mapa = new Map();
  apuntes.forEach((apunte) => {
    const arr = mapa.get(apunte.curso) ?? [];
    arr.push(apunte);
    mapa.set(apunte.curso, arr);
  });
  return Array.from(mapa.entries());
};

/* Botones de ordenamiento */
function ControlesDeOrdenamiento({ ordenarPor, setOrdenarPor }) {
  return (
    <div role="group" aria-label="Ordenar por">
      <button
        className="button"
        aria-pressed={ordenarPor === "precio"}
        onClick={() => setOrdenarPor("precio")}
      >
        Precio
      </button>{" "}
      <button
        className="button"
        aria-pressed={ordenarPor === "meGusta"}
        onClick={() => setOrdenarPor("meGusta")}
      >
        Me Gusta
      </button>
    </div>
  );
}

/* Componente principal */
export default function PaginaExplora() {
  const [entradaBusqueda, setEntradaBusqueda] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [ordenarPor, setOrdenarPor] = useState("meGusta");

  /* Filtrado + ordenamiento + agrupación */
  const apuntesFiltrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();

    const base = q
      ? DATOS_PRUEBA.filter((n) =>
          [n.titulo, n.autor, n.curso].some((f) =>
            f.toLowerCase().includes(q)
          )
        )
      : DATOS_PRUEBA;

    const comparador = (a, b) => {
      if (ordenarPor === "meGusta") return b.meGusta - a.meGusta;
      return a.precio - b.precio || b.meGusta - a.meGusta;
    };

    return agruparPorCurso(base).map(([curso, items]) => [
      curso,
      [...items].sort(comparador),
    ]);
  }, [busqueda, ordenarPor]);

  const manejarBusqueda = () => {
    setBusqueda(entradaBusqueda);
  };

  return (
    <div className="page">
        <div className="topbar-explora">
            <h1 className="h1-explora">Apuntes disponibles ✏️</h1>

            <div className="sort-wrap" aria-label="Ordenar">
            <span className="sort-label">Ordenar por</span>
            <div className = "selector">
            <ControlesDeOrdenamiento
                ordenarPor={ordenarPor}
                setOrdenarPor={setOrdenarPor}
            />
            </div>
            </div>
        </div>


      <div className="toolbar" aria-label="Herramientas de exploración">
        <div className="search" role="search">
          <input
            className="search-input"
            value={entradaBusqueda}
            onChange={(e) => setEntradaBusqueda(e.target.value)}
            placeholder="Busca ramos, contenidos o usuarios"
            aria-label="Buscar"
          />
          <button className="btn primary2" onClick={manejarBusqueda}>
            Buscar
          </button>
        </div>
        
      </div>

      {apuntesFiltrados.length === 0 && (
        <div className="empty">
          No encontramos resultados para “{busqueda}”. Prueba con otro término.
        </div>
      )}

      {apuntesFiltrados.map(([curso, items]) => (
        <section className="section" key={curso} aria-labelledby={curso}>
          <h2 className="section-title" id={curso}>
            {curso}
          </h2>
          <div className="grid">
            {items.map((apunte) => (
              <ApuntesCard key={apunte.id} apunte={apunte} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
