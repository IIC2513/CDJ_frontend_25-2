import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; 
import logo from "../../../assets/cdj3.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); 

  const handleLogin = () => navigate("/login");
  const handleSignUp = () => navigate("/signup");
  const handleLogout = () => {
    logout();           
    navigate("/");
  };

  const cls = (isActive) => "nav-link" + (isActive ? " active" : "");

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* IZQUIERDA: logo */}
        <div className="nav-left">
          <Link to="/" className="nav-brand">
            <img src={logo} alt="Lumen" className="nav-logo" />
          </Link>
        </div>

        {/* CENTRO: enlaces públicos */}
        <div className="nav-links">
          <NavLink to="/about" className={({ isActive }) => cls(isActive)}>
            Conócenos
          </NavLink>

          <NavLink to="/explora" className={({ isActive }) => cls(isActive)}>
            Explora
          </NavLink>

          <NavLink to="/mipagina" className={({ isActive }) => cls(isActive)}>
            Mi página
          </NavLink>

          <NavLink to="/informaciones" className={({ isActive }) => cls(isActive)}>
            Informaciones
          </NavLink>

          <NavLink to="/instructions" className={({ isActive }) => cls(isActive)}>
            Instrucciones
          </NavLink>

          {/* Enlaces visibles sólo si hay sesión */}
          {user && (
            <>
              <NavLink to="/files" className={({ isActive }) => cls(isActive)}>
                Mis archivos
              </NavLink>
              <NavLink to="/stats" className={({ isActive }) => cls(isActive)}>
                Mis estadísticas
              </NavLink>
            </>
          )}
        </div>

        {/* DERECHA: acciones */}
        <div className="nav-right">
          {!user ? (
            <>
              <button className="link-signup" onClick={handleSignUp}>
                SIGN UP
              </button>
              <button className="outline-login" onClick={handleLogin}>
                LOGIN
              </button>
            </>
          ) : (
            <>
              <button
                className="icon-gear"
                aria-label="Configuración"
                title="Configuración"
                onClick={() => navigate("/settings")}
              >
                ⚙️
              </button>
              <button className="outline-login" onClick={handleLogout}>
                SIGN OUT
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
