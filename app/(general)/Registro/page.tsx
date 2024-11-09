'use client';
import React, { useEffect, useState } from 'react';
import Nav from "@/Components/Navegacion/Nav";
import { useContextGastos } from '@/Context/ProviderGastos';
import BotonGuardarGasto from '@/Components/Botones/BotonGuardarGasto';
import BotonActualizarGasto from '@/Components/Botones/BotonActualizarGasto';
import BotonEliminarGasto from '@/Components/Botones/BotonEliminarGasto'; 
import { Gastos } from '@/Modelos/Gastos';

const RegistroGastosPage = () => {
    const { gastos, setGastos } = useContextGastos();
    const [nuevoGasto, setNuevoGasto] = useState<Gastos>({ idgasto: 0, categoria: '', monto: 0, fecha: '' });
    const [isEditing, setIsEditing] = useState(false); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/gasto');
                const data = await response.json();
                setGastos(data);
            } catch (error) {
                console.error('Error fetching gastos:', error);
            }
        };

        fetchData();
    }, [setGastos]); 

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNuevoGasto(prev => ({ ...prev, [name]: value }));
    };

    const handleEditClick = (gasto: Gastos) => {
        setNuevoGasto(gasto); 
        setIsEditing(true); 
    };

    return (
        <div className="container d-flex flex-column align-items-center mt-5">
            <Nav />
            <h1 className="text-center mb-4">{isEditing ? "Actualizar Gasto" : "Registrar Nuevo Gasto"}</h1>
            <div className="card p-4" style={{ width: '400px' }}>
                <div className="mb-3">
                    <input 
                        type="text" 
                        name="categoria" 
                        placeholder="Categoría" 
                        value={nuevoGasto.categoria} 
                        onChange={handleInputChange} 
                        className="form-control" 
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="number" 
                        name="monto" 
                        placeholder="Monto" 
                        value={nuevoGasto.monto} 
                        onChange={handleInputChange} 
                        className="form-control" 
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="date" 
                        name="fecha" 
                        value={nuevoGasto.fecha} 
                        onChange={handleInputChange} 
                        className="form-control" 
                    />
                </div>
                
                {isEditing ? (
                    <BotonActualizarGasto gasto={nuevoGasto} />
                ) : (
                    <BotonGuardarGasto gasto={nuevoGasto} />
                )}
            </div>

            <h2 className="mt-4">Lista de Gastos</h2>
            <ul className="list-group mt-3 w-50">
                {gastos.map(gastro => (
                    <li key={gastro.idgasto} className="list-group-item d-flex justify-content-between align-items-center">
                        {gastro.categoria}: L.{gastro.monto} - {new Date(gastro.fecha).toLocaleDateString()}
                        <div>
                            <button onClick={() => handleEditClick(gastro)} className="btn btn-warning btn-sm me-2">Editar</button>
                            <BotonEliminarGasto idgasto={gastro.idgasto} /> 
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RegistroGastosPage;
