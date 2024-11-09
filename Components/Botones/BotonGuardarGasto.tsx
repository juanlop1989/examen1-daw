
'use client';
import React from 'react';
import { useContextGastos } from '@/Context/ProviderGastos';
import { Gastos } from '@/Modelos/Gastos';



interface BotonGuardarGastoProps {
    gasto: Gastos; 
}

const BotonGuardarGasto: React.FC<BotonGuardarGastoProps> = ({ gasto }) => {
    const { setGastos } = useContextGastos();

    const handleSave = () => {
        fetch('http://localhost:5000/gasto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gasto),
        })
        .then(response => response.json())
        .then(data => {
            
            setGastos(prev => [...prev, data]); 
            alert('Gasto guardado con éxito!');
        })
        .catch(error => console.error('Error al guardar gasto:', error));
    };

    return (
        <button onClick={handleSave} className="btn btn-primary">
            Guardar Gasto
        </button>
    );
};

export default BotonGuardarGasto;
