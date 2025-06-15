//Hooks
import { useState } from "react"
import { useModal } from "../../../context/ModalContext";

//Components
import Materia from "./Materia"
import ModalMateriasRecomendadas from "./ModalMateriasRecomendadas";

const carrera = {
    nombre: "Licenciatura en Informática",
    universidad: "Universidad Nacional de Hurlingham",
    duracion: 5,
    materias: [
        {
            id: 1,
            nombre: "Matemática I",
            idCorrelativas: [],
            cuatrimestre: 1,
        },
        {
            id: 2,
            nombre: "Introducción a la Programación",
            idCorrelativas: [],
            cuatrimestre: 1,
        },
        {
            id: 3,
            nombre: "Organización de Computadoras",
            idCorrelativas: [],
            cuatrimestre: 1,
        },
        {
            id: 4,
            nombre: "Nuevos Entornos y Lenguajes",
            idCorrelativas: [],
            cuatrimestre: 1,
        },
        {
            id: 5,
            nombre: "Estructuras de Datos",
            idCorrelativas: [2],
            cuatrimestre: 2,
        },
        {
            id: 6,
            nombre: "Programación con Objetos I",
            idCorrelativas: [2],
            cuatrimestre: 2,
        },
        {
            id: 7,
            nombre: "Bases de Datos",
            idCorrelativas: [1],
            cuatrimestre: 2,
        },
        {
            id: 8,
            nombre: "Inglés",
            idCorrelativas: [],
            cuatrimestre: 2,
        },
        {
            id: 9,
            nombre: "Matemática II",
            idCorrelativas: [1],
            cuatrimestre: 3,
        },
        {
            id: 10,
            nombre: "Programación con Objetos II",
            idCorrelativas: [6],
            cuatrimestre: 3,
        },
        {
            id: 11,
            nombre: "Redes de Computadoras",
            idCorrelativas: [3],
            cuatrimestre: 3,
        },
        {
            id: 12,
            nombre: "Sistemas Operativos",
            idCorrelativas: [2, 3],
            cuatrimestre: 3,
        },
        {
            id: 13,
            nombre: "Programación Funcional",
            idCorrelativas: [5],
            cuatrimestre: 4,
        },
        {
            id: 14,
            nombre: "Construcción de Interfaces de Usuario",
            idCorrelativas: [10],
            cuatrimestre: 4,
        },
        {
            id: 15,
            nombre: "Algoritmos",
            idCorrelativas: [13],
            cuatrimestre: 4,
        },
        {
            id: 16,
            nombre: "Estrategias de Persistencia",
            idCorrelativas: [7, 10],
            cuatrimestre: 4,
        },
        {
            id: 17,
            nombre: "Laboratorio de Sistemas Operativos y Redes",
            idCorrelativas: [11, 12],
            cuatrimestre: 5,
        },
        {
            id: 18,
            nombre: "Análisis Matemático",
            idCorrelativas: [9],
            cuatrimestre: 5,
        },
        {
            id: 19,
            nombre: "Lógica y Programación",
            idCorrelativas: [1, 2],
            cuatrimestre: 5,
        },
        {
            id: 20,
            nombre: "Elementos de Ingeniería de Software",
            idCorrelativas: [10],
            cuatrimestre: 5,
        },
        {
            id: 21,
            nombre: "Seguridad de la Información",
            idCorrelativas: [17],
            cuatrimestre: 6,
        },
        {
            id: 22,
            nombre: "Materia UNAHUR I",
            idCorrelativas: [],
            cuatrimestre: 6,
        },
        {
            id: 23,
            nombre: "Inglés II",
            idCorrelativas: [8],
            cuatrimestre: 6,
        },
        {
            id: 24,
            nombre: "Matemática III",
            idCorrelativas: [18],
            cuatrimestre: 7,
        },
        {
            id: 25,
            nombre: "Programación Concurrente",
            idCorrelativas: [5],
            cuatrimestre: 7,
        },
        {
            id: 26,
            nombre: "Ingeniería de Requerimientos",
            idCorrelativas: [20],
            cuatrimestre: 7,
        },
        {
            id: 27,
            nombre: "Desarrollo de Aplicaciones",
            idCorrelativas: [14, 16, 20],
            cuatrimestre: 7,
        },
        {
            id: 28,
            nombre: "Probabilidad y Estadística",
            idCorrelativas: [24],
            cuatrimestre: 8,
        },
        {
            id: 29,
            nombre: "Gestión de Proyectos de Desarrollo de Software",
            idCorrelativas: [26],
            cuatrimestre: 8,
        },
        {
            id: 30,
            nombre: "Lenguajes Formales y Autómatas",
            idCorrelativas: [19],
            cuatrimestre: 8,
        },
        {
            id: 31,
            nombre: "Programación con Objetos III",
            idCorrelativas: [10],
            cuatrimestre: 8,
        },
        {
            id: 32,
            nombre: "Materia UNAHUR II",
            idCorrelativas: [],
            cuatrimestre: 9,
        },
        {
            id: 33,
            nombre: "Práctica Profesional Supervisada",
            idCorrelativas: [13, 17, 25, 27],
            cuatrimestre: 9,
        },
        {
            id: 34,
            nombre: "Teoría de la Computación",
            idCorrelativas: [30],
            cuatrimestre: 9,
        },
        {
            id: 35,
            nombre: "Arquitectura de Software",
            idCorrelativas: [20, 25, 27, 29],
            cuatrimestre: 10,
        },
        {
            id: 36,
            nombre: "Sistemas Distribuidos y Tiempo Real",
            idCorrelativas: [17, 25],
            cuatrimestre: 10,
        },
        {
            id: 37,
            nombre: "Tesina de Licenciatura",
            idCorrelativas: [29, 30, 31],
            cuatrimestre: 10,
        },
        {
            id: 38,
            nombre: "Materia Optativa I",
            idCorrelativas: [7, 10, 20, 25],
            cuatrimestre: 10,
        },
        {
            id: 39,
            nombre: "Características de Lenguajes de Programación",
            idCorrelativas: [19],
            cuatrimestre: 10,
        },
        {
            id: 40,
            nombre: "Arquitectura de Software II",
            idCorrelativas: [35, 36],
            cuatrimestre: 11,
        },
        {
            id: 41,
            nombre: "Arquitectura de Computadoras",
            idCorrelativas: [17],
            cuatrimestre: 11,
        },
        {
            id: 42,
            nombre: "Materia Optativa II",
            idCorrelativas: [7, 10, 20, 25],
            cuatrimestre: 11,
        },
        {
            id: 43,
            nombre: "Parseo y generación de código",
            idCorrelativas: [30, 39],
            cuatrimestre: 11,
        },
        {
            id: 44,
            nombre: "Ejercicio profesional",
            idCorrelativas: [],
            cuatrimestre: 12,
        },
        {
            id: 45,
            nombre: "Tecnología y sociedad",
            idCorrelativas: [44],
            cuatrimestre: 12,
        }
    ]
}

type MateriaCarrera = {
    id: number,
    nombre: string,
    idCorrelativas: number[],
    cuatrimestre: number
}

type Carrera = {
    nombre: string,
    universidad: string,
    duracion: number,
    materias: MateriaCarrera[]
}

type MateriaCursada = MateriaCarrera & {
    estaAprobado: boolean,
    idCorrelativasAcumuladas: number[],
}

type Cursada = Omit<Carrera, 'materias'> & {
    materias: MateriaCursada[]
}

export default function TablaCarrera() {

    //Context

    const { mostrarModal } = useModal();

    const obtenerCorrelativasAcumuladas = (carrera: Carrera, idMateria: number):number[] => {
        const materia = carrera.materias[idMateria - 1]
        const idCorrelativas = materia.idCorrelativas.map((idMateria: number) => obtenerCorrelativasAcumuladas(carrera, idMateria))
        return materia.idCorrelativas.length == 0 ? [] : [...materia.idCorrelativas, ...idCorrelativas.flat()]
    }

    const generarCursada = (carrera: Carrera): Cursada => {
        const cursada = structuredClone(carrera) as Cursada;
        //Agregar campo estaAprobado
        cursada.materias.forEach((materia: any) => {
            materia.estaAprobado = false
            materia.idCorrelativasAcumuladas = obtenerCorrelativasAcumuladas(cursada, materia.id)
        });

        return cursada;
    }

    const [cursada, setCursada] = useState(generarCursada(carrera))

    const aprobarMateria = (idMateria: number) => {
        const cursadaAprobada = structuredClone(cursada)
        const materia = cursadaAprobada.materias[idMateria - 1]
        materia.estaAprobado = !materia.estaAprobado
        setCursada(cursadaAprobada)
    }


    const materiasCorrelativas = (cursada: Cursada, idMateria: number): MateriaCursada[] => {
        const materia = cursada.materias[idMateria - 1]
        const materiasCorrelativas = materia.idCorrelativasAcumuladas.map((id: number) => cursada.materias[id - 1])
        return materiasCorrelativas;
    }

    const materiasCorrelativasAMateria = (cursada: Cursada, idMateria: number): MateriaCursada[] => {
        const materiasCorrelativasAMateria = cursada.materias.filter((materia: MateriaCursada) => materia.idCorrelativasAcumuladas.includes(idMateria))
        return materiasCorrelativasAMateria;
    }

    const sePuedeCursar = (cursada: Cursada, idMateria: number) => {
        const materia = cursada.materias[idMateria - 1]
        const materiasCorrelativas = materia.idCorrelativasAcumuladas.map((id: number) => cursada.materias[id - 1])
        return materiasCorrelativas.every((materia: MateriaCursada) => materia.estaAprobado)
    }

    const mostrarMateriasRecomendadas = () => {
        /*
            Materias recomendadas son aquellas que:
                - Se pueden cursar.
                - Se ordenan segun la cantidad de materias siguientes que tienen.
        */
        const materiasDisponibles = cursada.materias.filter((materia: MateriaCursada) => !materia.estaAprobado && sePuedeCursar(cursada, materia.id))
        const materiasConSiguientes = materiasDisponibles.map((materia: MateriaCursada) => ({ ...materia, materiasSiguientes: materiasCorrelativasAMateria(cursada, materia.id) }))
        const materiasSiguientesFormateadas = materiasConSiguientes.map((materia: any) => ({ nombre: materia.nombre, cantidadSiguientes: materia.materiasSiguientes.length }))
        const materiasRecomendadas = materiasSiguientesFormateadas.sort((a: any, b: any) => b.cantidadSiguientes - a.cantidadSiguientes);
        mostrarModal(<ModalMateriasRecomendadas materiasRecomendadas={materiasRecomendadas} />)
    }

    const cantidadMaterias = cursada.materias.length
    const cantidadAprobadas = cursada.materias.filter((materia: MateriaCursada) => materia.estaAprobado).length
    const porcentajeAprobacion = Math.round((cantidadAprobadas * 100) / cantidadMaterias)


    return (
        <div className="w-full p-2">
            <div className="w-full p-4 bg-white rounded shadow-md text-neutral-600 border-1 border-neutral-300 relative">
                <div className="p-2 text-md space-y-2 mb-4 font-semibold sticky">
                    <h1 className="text-2xl font-bold ">{cursada.nombre}</h1>
                    <p>Duración: {cursada.duracion} años.</p>
                    <p>Cantidad de materias: {cantidadMaterias}</p>
                    <p>Materias Aprobadas: <span className="text-emerald-700">{`${cantidadAprobadas}`}</span>{` / ${cantidadMaterias}`}</p>
                    <p>Porcentaje de aprobación: <span className="text-emerald-700 font-bold">{porcentajeAprobacion}%</span></p>
                    <button id="inicio" className="mt-2 cursor-pointer px-4 py-2 text-sm font-bold text-white uppercase transition-all duration-150 bg-emerald-600 rounded shadow outline-none active:bg-teal-600 hover:bg-teal-700 focus:outline-none ease" onClick={() => mostrarMateriasRecomendadas()}>Materias Recomendadas</button>
                </div>
            </div>
            <div className="flex flex-wrap flex-col justify-center w-full gap-4 py-4">
                {
                    cursada.materias.map((materia: MateriaCursada) =>
                        <Materia
                            materia={materia}
                            materiasCorrelativas={materiasCorrelativas(cursada, materia.id)}
                            materiasCorrelativasAMateria={materiasCorrelativasAMateria(cursada, materia.id)}
                            sePuedeCursar={sePuedeCursar(cursada, materia.id)}
                            aprobarMateria={() => aprobarMateria(materia.id)}
                        />
                    )
                }
            </div>
            <span id="fin"></span>
            <div className="fixed z-10 bottom-4 right-4 flex flex-wrap flex-col gap-2">
                <a href="#inicio" className="cursor-pointer bg-emerald-600 opacity-70 text-white px-4 py-1 rounded shadow-md hover:bg-emerald-700 hover:opacity-100 transition block font-black text-2xl">↑</a>
                <a id="" href="#fin" className="cursor-pointer bg-emerald-600 opacity-70 text-white px-4 py-1 rounded shadow-md hover:bg-emerald-700 hover:opacity-100 transition block font-black text-2xl">↓</a>
            </div>
        </div>
    )
}