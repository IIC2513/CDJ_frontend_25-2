import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/cdj3.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  // Simulación de estado de sesión (puedes reemplazar luego por Auth real)
  const [user, setUser] = React.useState(null);

  const handleLogin = () => navigate("/");
  const handleSignUp = () => navigate("/");
  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* IZQUIERDA: logo + marca */}
        <div className="nav-left">
          <Link to="/" className="nav-brand">
            <img src={logo} alt="Lumen" className="nav-logo" />
          </Link>
        </div>

        {/* CENTRO: enlaces */}
        <div className="nav-links">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Conócenos
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Explora
          </NavLink>

          {/* Ejemplo de más items visibles solo si hay sesión */}
          {user && (
            <>
              <NavLink
                to="/stats"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Mis estadísticas
              </NavLink>
              <NavLink
                to="/files"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Mis archivos
              </NavLink>
              <NavLink
                to="/info"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Informaciones
              </NavLink>
            </>
          )}
        </div>

        {/* DERECHA: botones */}
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
