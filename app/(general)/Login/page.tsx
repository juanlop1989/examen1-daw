'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (usuario === 'admin' && clave === 'admin123') {
            router.push('/Presupuesto');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card" style={{ width: '400px' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Iniciar Sesión</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="usuario" className="form-label">Usuario</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="usuario" 
                                value={usuario} 
                                onChange={(e) => setUsuario(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="clave" className="form-label">Contraseña</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="clave" 
                                value={clave} 
                                onChange={(e) => setClave(e.target.value)} 
                                required 
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
