// ApuntesCard.jsx
import React, { useState, useCallback } from "react";
import "./ApuntesCard.css";
import iconoApunte from "../../assets/explora/apuntes.png";
import ApuntesCardModal from "../ApuntesCardModal/ApuntesCardModal";

export default function ApuntesCard({ apunte }) {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = useCallback(() => setMostrarModal(true), []);
  const cerrarModal = useCallback(() => setMostrarModal(false), []);

  /*  Accesibilidad -> abrir con Enter o Space */
  const onKeyOpen = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      abrirModal();
    }
  };

  const formatearPrecio = (clp) =>
    clp === 0
      ? "GRATIS"
      : clp.toLocaleString("es-CL", {
          style: "currency",
          currency: "CLP",
          maximumFractionDigits: 0,
        });

  return (
    <>
      <article
        className="card-explora"
        aria-label={`${apunte.titulo} por ${apunte.autor}`}
        role="button"
        tabIndex={0}
        onClick={abrirModal}
        onKeyDown={onKeyOpen}
      >
        {/* Badge de me gusta */}
        <span className="badge" aria-label={`Me gusta: ${apunte.meGusta}`}>
          {apunte.meGusta}
        </span>

        <div className="title">{apunte.titulo}</div>

        {/* imagen, ahora predeterminada */}
        <div className="paper" aria-hidden>
          <img
            src={iconoApunte}
            alt="Icono del apunte"
            className="apunte-img"
            draggable="false"
          />
        </div>

       {/* Datos del articulo */}
        <div className="meta">
          Publicado por <strong>{apunte.autor}</strong>
          <br />
          {apunte.fecha && ` ${apunte.fecha}`}
        </div>

        <div className={`price ${apunte.precio === 0 ? "free" : "paid"}`}>
          {formatearPrecio(apunte.precio)}
        </div>
      </article>

    {/* Habilitar que se pueda abrir el card modal*/}
      {mostrarModal && (
        <ApuntesCardModal apunte={apunte} onClose={cerrarModal} />
      )}
    </>
  );
}
