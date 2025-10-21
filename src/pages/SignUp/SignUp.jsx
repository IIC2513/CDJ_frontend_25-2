import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
    const [nombre, setNombre] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const ucEmailRegex = /^[a-zA-Z0-9._%+-]+@uc\.cl$/;



    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para crear cuenta
        
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        if (!ucEmailRegex.test(email)) {
            alert('El correo debe ser institucional y terminar en @uc.cl');
            return;
        }


        console.log('Registro:', { nombre, email, password, confirmPassword });
        
    };

    return (
        <div className="signup-container">
            <h2 className="signup-title">✨ Crea tu cuenta ✨</h2>
            <p className="signup-subtitle">Únete a la comunidad UC</p>
            <form onSubmit={handleSubmit} className="signup-form">
                <label>— Nombre completo —</label>
                <input
                    type="text"
                    placeholder="Nombres y apellidos"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />

                <label>— Usuario —</label>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                />
                {/* {usuario && (
                    <p className="error">ERROR: Nombre de usuario ya existe.</p>
                )} */}

                <label>— Email institucional —</label>
                <input
                    type="email"
                    placeholder="correo@uc.cl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {email && !ucEmailRegex.test(email) && (
                    <p className="error">ERROR: Correo inválido, debe terminar en @uc.cl.</p>
                )}

                <label>— Contraseña —</label>
                <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label>— Confirmar contraseña —</label>
                    <input
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                {confirmPassword && confirmPassword !== password && (
                    <p className="error">ERROR: Las contraseñas no coinciden</p>
                )}


                <button type="submit" className="signup-button">REGISTRARSE</button>
            </form>
            <p className="signup-footer">
                    ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
            </p>
        </div>
    );
};

export default SignUp;
