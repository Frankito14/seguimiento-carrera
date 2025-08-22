//Hooks
import { useEffect, useState } from "react"
import { useModal } from '@context/ModalContext';
import { useStorage } from "@context/StorageContext";


//Components
import Materia from "./Materia"
import ModalMateriasRecomendadas from "./ModalMateriasRecomendadas";

//Types
import type { Carrera, Cursada, MateriaCursada } from "@types";

//Services
import { obtenerCarrera } from "@services/carreraServices";
import { NavLink } from "react-router";


export default function TablaCarrera() {

    //Context
    const { mostrarModal } = useModal();
    const { agregarCursada, editarCursada, obtenerCursada, obtenerSesion } = useStorage()

    const idCarreraSeleccionada = obtenerSesion().idCarrera


    const obtenerCorrelativasAcumuladas = (carrera: Carrera, idMateria: number): Set<number> | number[] => {
        const materia = carrera.materias[idMateria - 1]
        const idCorrelativas = materia.idCorrelativas.map((idMateria: number) => {
            const resultado = obtenerCorrelativasAcumuladas(carrera, idMateria);
            return Array.isArray(resultado) ? resultado : Array.from(resultado); // Convertir Set a array si hace falta
        });

        const salida = [...materia.idCorrelativas, ...idCorrelativas.flat()];
        return Array.from(new Set(salida)); // Eliminar duplicados
    }

    const generarCursada = (): Cursada => {
        const carrera = obtenerCarrera(idCarreraSeleccionada);
        const cursada = structuredClone(carrera) as Cursada;
        //Agregar campo estaAprobado
        cursada.materias.forEach((materia: any) => {
            materia.estaAprobado = false
            materia.idCorrelativasAcumuladas = obtenerCorrelativasAcumuladas(cursada, materia.id)
        });

        return cursada;
    }

    const reiniciarCursada = () => {
        setCursada(generarCursada())
    }

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

    const materiasSiguientesA = (cursada: Cursada, idMateria: number): MateriaCursada[] => {
        const materiasSiguientesA = cursada.materias.filter((materia: MateriaCursada) => materia.idCorrelativasAcumuladas.includes(idMateria))
        return materiasSiguientesA;
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
        const materiasConSiguientes = materiasDisponibles.map((materia: MateriaCursada) => ({ ...materia, materiasSiguientes: materiasSiguientesA(cursada, materia.id) }))
        const materiasSiguientesFormateadas = materiasConSiguientes.map((materia: any) => ({ id: materia.id, nombre: materia.nombre, cantidadSiguientes: materia.materiasSiguientes.length }))
        const materiasRecomendadas = materiasSiguientesFormateadas.sort((a: any, b: any) => b.cantidadSiguientes - a.cantidadSiguientes);
        mostrarModal(<ModalMateriasRecomendadas materiasRecomendadas={materiasRecomendadas} />)
    }

    //Estado
    const [cursada, setCursada] = useState(generarCursada())
    const [requestStatus, setRequestStatus] = useState({
        cursadaCargada: false
    })


    //Cargar los datos de cursada al cargar la pagina
    useEffect(() => {
        const cursadaGuardada = obtenerCursada(idCarreraSeleccionada);
        if (cursadaGuardada != undefined)
            setCursada(cursadaGuardada)
        else {
            setCursada(generarCursada())
            agregarCursada(generarCursada())

        }
        setRequestStatus({ cursadaCargada: true })
    }, [])

    useEffect(() => {
        if (requestStatus.cursadaCargada)
            editarCursada(cursada)
    }, [cursada])

    const cantidadMaterias = cursada.materias.length
    const cantidadAprobadas = cursada.materias.filter((materia: MateriaCursada) => materia.estaAprobado).length
    const porcentajeAprobacion = Math.round((cantidadAprobadas * 100) / cantidadMaterias)


    return (
        <div className="w-full p-2">
            <NavLink to='/' className='text-md font-semibold my-4 p-2 text-emerald-800'>Volver</NavLink>
            <div className="mt-4 w-full p-4 bg-white rounded shadow-md text-neutral-600 border-1 border-neutral-300 relative">
                <div className="p-2 text-md space-y-2 mb-4 font-normal sticky">
                    <div className="block sm:flex justify-between gap-4 flex-wrap ">
                        <h1 className="text-2xl font-bold ">{cursada.nombre}</h1>
                        <div className="w-full pt-4 pb-2 sm:p-0 sm:w-auto flex flex-nowrap sm:flex-wrap justify-stretch gap-2 justify-items-center ">
                            <button onClick={() => mostrarMateriasRecomendadas()}
                                title="Materias recomendadas"
                                className="w-1/2 sm:w-auto px-3 py-3 hover:cursor-pointer text-xl font-bold text-white uppercase transition-all duration-150 border-2 sm:border-0 border-emerald-600 bg-white sm:bg-emerald-600 rounded shadow outline-none active:bg-teal-600 hover:bg-teal-700 focus:outline-none ease">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 m-auto fill-emerald-600 sm:fill-white" viewBox="0 0 24 24"><path d="m22 10l-.625-1.375L20 8l1.375-.625L22 6l.625 1.375L24 8l-1.375.625L22 10Zm-3-4l-.95-2.05L16 3l2.05-.95L19 0l.95 2.05L22 3l-2.05.95L19 6ZM9 22q-.825 0-1.413-.588T7 20h4q0 .825-.588 1.413T9 22Zm-4-3v-2h8v2H5Zm.25-3q-1.725-1.025-2.738-2.75T1.5 9.5q0-3.125 2.188-5.313T9 2q3.125 0 5.313 2.188T16.5 9.5q0 2.025-1.012 3.75T12.75 16h-7.5Zm.6-2h6.3q1.125-.8 1.738-1.975T14.5 9.5q0-2.3-1.6-3.9T9 4Q6.7 4 5.1 5.6T3.5 9.5q0 1.35.612 2.525T5.85 14ZM9 14Z" /></svg>
                            </button>
                            <button onClick={() => reiniciarCursada()}
                                title="Reiniciar cursada"
                                className="w-1/2 sm:w-auto px-3 py-3 hover:cursor-pointer text-xl font-bold text-white uppercase transition-all duration-150 border-2 sm:border-0 border-rose-300 bg-white sm:bg-rose-800 rounded shadow outline-none  hover:bg-rose-900 focus:outline-none ease">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 m-auto fill-rose-600 sm:fill-white" viewBox="0 0 24 24"><path d="M12 4c2.1 0 4.1.8 5.6 2.3c3.1 3.1 3.1 8.2 0 11.3c-1.8 1.9-4.3 2.6-6.7 2.3l.5-2c1.7.2 3.5-.4 4.8-1.7c2.3-2.3 2.3-6.1 0-8.5C15.1 6.6 13.5 6 12 6v4.6l-5-5l5-5zM6.3 17.6C3.7 15 3.3 11 5.1 7.9l1.5 1.5c-1.1 2.2-.7 5 1.2 6.8q.75.75 1.8 1.2l-.6 2q-1.5-.6-2.7-1.8" /></svg>
                            </button>
                        </div>
                    </div>
                    <p>Duración: {cursada.duracion} cuatrimestres</p>
                    <p>Cantidad de materias: {cantidadMaterias}</p>
                    <p>Materias Aprobadas: <span className="text-emerald-700">{`${cantidadAprobadas}`}</span>{` / ${cantidadMaterias}`}</p>
                    <p id="inicio">Porcentaje de aprobación: <span className="text-emerald-700">{porcentajeAprobacion}%</span></p>
                </div>
            </div>
            <div className="mt-4 flex flex-wrap flex-col justify-center w-full gap-4">
                {
                    cursada.materias.map((materia: MateriaCursada) =>
                        <Materia
                            key={materia.id}
                            materia={materia}
                            materiasCorrelativas={materiasCorrelativas(cursada, materia.id)}
                            materiasSiguientesA={materiasSiguientesA(cursada, materia.id)}
                            sePuedeCursar={sePuedeCursar(cursada, materia.id)}
                            aprobarMateria={() => aprobarMateria(materia.id)}
                        />
                    )
                }
            </div>
            <span id="fin"></span>
            <div className="fixed z-10 bottom-4 right-4 flex flex-wrap flex-col gap-2">
                <a href="#inicio" className="cursor-pointer bg-emerald-600  text-white px-4 py-1 rounded shadow-md hover:bg-emerald-700 hover:opacity-100 transition block font-black text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8" viewBox="0 0 24 24"><path fill="#ffffff" d="m7 14l5-5l5 5z"/></svg>
                </a>
                <a id="" href="#fin" className="cursor-pointer bg-emerald-600  text-white px-4 py-1 rounded shadow-md hover:bg-emerald-700 hover:opacity-100 transition block font-black text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8" viewBox="0 0 24 24"><path fill="#ffffff" d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7t-.275-.05t-.25-.175"/></svg>
                </a>
            </div>
        </div>
    )
}