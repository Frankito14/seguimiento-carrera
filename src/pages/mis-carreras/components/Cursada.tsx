//Types
import type { Cursada, MateriaCursada } from "@types"

//Hooks
import { useStorage } from "@context/StorageContext";
import { useNavigate } from "react-router";


export default function CursadaCard({ id, nombre, universidad, materias }: Cursada) {

    const { editarSesion } = useStorage()
    const navigate = useNavigate()

    const cantidadMaterias = materias.length
    const cantidadAprobadas = materias.filter((materia: MateriaCursada) => materia.estaAprobado).length
    const porcentajeAprobacion = Math.round((cantidadAprobadas * 100) / cantidadMaterias)

    const navegarACursada = (id: number) => {
        editarSesion({idCarrera: id, idCursada:id})
        navigate('/mi-cursada')
    }

    return (
        <div className={`w-full bg-gray-50   rounded p-4 shadow-md text-neutral-700 border-1 border-neutral-300  transition`}>
            <div className="flex flex-wrap justify-between gap-4 justify-items-center ">
                <h3 className="font-bold text-xl">{nombre}</h3>
                <button onClick={() => navegarACursada(id)} className='hover:cursor-pointer p-2 text-sm font-bold text-white uppercase transition-all duration-150 bg-emerald-600 rounded shadow outline-none active:bg-teal-600 hover:bg-teal-700 focus:outline-none ease'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 20 20"><path d="m16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96l-4.75-4.75z"/></svg>
                </button>
            </div>
            <p className="text-sm font-normal">{universidad}</p>
            <p className="text-sm pt-2 font-normal">Materias: <span className="text-green-700">{cantidadAprobadas}</span> / {cantidadMaterias}</p>
            <p className="text-sm pt-2 font-normal">Progreso: <span className="text-green-700 ">{porcentajeAprobacion}%</span></p>
        </div>
    )
}