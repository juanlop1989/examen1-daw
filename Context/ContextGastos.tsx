'use client'

import { Gastos } from "@/Modelos/Gastos"
import { createContext } from "react"

export const ContextGasto = createContext({
    gastos: [] as Gastos[],
    setLogin: ([]) =>{},
    presupuesto: [] as Gastos[],
    setRegistroGastos: [] as Gastos[],
})