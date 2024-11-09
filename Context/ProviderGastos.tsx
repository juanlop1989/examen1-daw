'use client'
import { Gastos } from '@/Modelos/Gastos';
import React, { ReactNode, useContext, useState } from 'react';
import { ContextGasto } from './ContextGastos';

interface VistaGasto {
    children: ReactNode;
}

export default function ProviderGastos({ children }: VistaGasto) {

    //const [gastos, setGastos] = useState<Gastos[]>([]);
    const [login, setLogin] = useState(String);
    const [presupuesto, setPresupuesto] = useState(Number);
    const [registroGastos, setRegistroGastos] = useState<Gastos[]>([]);


}

export function useContextGastos() {
    return useContext(ContextGasto);
}
