import React, { useState } from 'react';
import './Login.css'; // Puedes personalizar estilos aquí

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (usuario !== usuarioEnLaBaseDeDatos || password !== passwordDelUsuario) {
    //     alert('Usuario o contraseña incorrectos.');
    //     return;
    // }
    console.log('Login:', { usuario, password });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">🌟 Bienvenid@ a Lumen 🌟</h2>
      <p className="login-subtitle">Conecta con tu comunidad estudiantil</p>

      <form onSubmit={handleSubmit} className="login-form">
        
        <label>— Usuario —</label>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />

        <label>— Contraseña —</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-button">INGRESAR</button>
      </form>
      <p className="login-footer">
        ¿No tienes cuenta? <a href="/signup">Regístrate aquí</a>
      </p>
    </div>
  );
};

export default Login;
