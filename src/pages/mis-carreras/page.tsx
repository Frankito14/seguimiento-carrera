//Components
import CursadaCard from "./components/Cursada"
import CursadasEmpty from "./components/CursadasEmpty";

//Hooks
import { useStorage } from "@context/StorageContext";
import { useState } from "react";
import { useNavigate } from "react-router";

//Types
import type { Cursada } from "@types";


export default function PageInicio() {

    const { obtenerCursadas } = useStorage()
    const navigate = useNavigate()


    const [cursadas, setCursadas] = useState(obtenerCursadas())

    const navegarANuevaCursada = () => {
         navigate('/nueva-cursada')
    }

    return (
        <div className='w-full md:w-3/4 m-auto font-sans min-h-screen'>
            <div className="w-full p-2">
                <div className="flex flex-nowrap justify-center gap-4 justify-items-center ">
                    <h2 className="text-2xl text-center font-bold my-8 sm:my-4  text-neutral-600">Mis Cursadas</h2>
                    <svg onClick={() => navegarANuevaCursada()} xmlns="http://www.w3.org/2000/svg" className="rounded-full bg-emerald-600 hover:bg-teal-700 hover:cursor-pointer transition w-7 h-7 fill-white my-auto " viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" /></svg>
                </div>
                <div className="flex flex-wrap flex-col justify-center w-full gap-8 sm:gap-4 mb-8">
                    {
                        cursadas.length == 0 
                        ? <CursadasEmpty/>     
                        : cursadas.map((cursada: Cursada) =>
                            <CursadaCard
                                id={cursada.id}
                                nombre={cursada.nombre}
                                universidad={cursada.universidad}
                                materias={cursada.materias}
                                duracion={cursada.duracion}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )

}