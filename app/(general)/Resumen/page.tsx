'use client';
import React, { useEffect } from 'react';
import Nav from "@/Components/Navegacion/Nav";
import { useContextGastos } from '@/Context/ProviderGastos';

const Resumen = () => {
    const { gastos, presupuesto } = useContextGastos();

    const calcularTotalGastos = () => {
        return gastos.reduce((total, gasto) => total + gasto.monto, 0);
    };

    const agruparPorCategoria = () => {
        return gastos.reduce((acc, gasto) => {
            acc[gasto.categoria] = (acc[gasto.categoria] || 0) + gasto.monto;
            return acc;
        }, {} as Record<string, number>);
    };

    const totalGastos = calcularTotalGastos();
    const gastosPorCategoria = agruparPorCategoria();

    return (
        <div className="container d-flex flex-column align-items-center mt-5">
            <Nav />
            <h1 className="text-center mb-4">Resumen de Gastos</h1>
            <div className="card p-4" style={{ width: '400px' }}>
                <h2>Total Gastos: L.{totalGastos.toFixed(2)}</h2>
                <h3>Presupuesto Asignado: L.{presupuesto.toFixed(2)}</h3>
                <h3>Restante del Presupuesto: L.{(presupuesto - totalGastos).toFixed(2)}</h3>
            </div>

            <h2 className="mt-4">Gastos por Categoría</h2>
            <ul className="list-group mt-3 w-50">
                {Object.entries(gastosPorCategoria).map(([categoria, monto]) => (
                    <li key={categoria} className="list-group-item d-flex justify-content-between align-items-center">
                        {categoria}: L.{monto.toFixed(2)}
                    </li>
                ))}
            </ul>

            {totalGastos > presupuesto && (
                <div className="alert alert-danger mt-3">
                    Has superado el límite del presupuesto, debes ajustar gastos!
                </div>
            )}
        </div>
    );
};

export default Resumen;
