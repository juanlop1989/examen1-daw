'use client';
import React from 'react';
import Nav from "@/Components/Navegacion/Nav";
import { useContextGastos } from '@/Context/ProviderGastos';

const PresupuestoPage = () => {
    const { presupuesto, setPresupuesto } = useContextGastos();

    const handlePresupuestoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPresupuesto(Number(e.target.value));
    };

    const handleGuardarPresupuesto = () => {
        alert(`Presupuesto establecido en: L.${presupuesto.toFixed(2)}`);
    };

    return (
        <div className="container d-flex flex-column align-items-center mt-5">
            <Nav />
            <h1 className="text-center mb-4">Establecer Presupuesto Mensual</h1>
            <div className="card p-4" style={{ width: '400px' }}>
                <div className="mb-3">
                    <input 
                        type="number" 
                        value={presupuesto} 
                        onChange={handlePresupuestoChange} 
                        placeholder="Establecer Presupuesto" 
                        className="form-control" 
                    />
                </div>
                <button onClick={handleGuardarPresupuesto} className="btn btn-primary w-100">
                    Guardar Presupuesto
                </button>
                <h2 className="mt-3 text-center">Presupuesto Asignado: ${presupuesto.toFixed(2)}</h2>
            </div>
        </div>
    );
};

export default PresupuestoPage;
