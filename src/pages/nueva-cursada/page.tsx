//Components
import { NavLink } from "react-router"
import CarreraCard from "./components/CarreraCard"
import CarrerasEmpty from "./components/CarrerasEmpty"

//Hooks
import { useStorage } from "@context/StorageContext"
import { obtenerCarreras } from "@services/carreraServices"
import { useNavigate } from "react-router";


export default function PageNuevaCursada() {

    const { obtenerCursadas, editarSesion } = useStorage()
    const navigate = useNavigate()

    const carreras = obtenerCarreras()

    const idsRegistrados = new Set(obtenerCursadas().map((cursada) => cursada.id));
    const carrerasSinRegistrar = carreras.filter((carrera) => !idsRegistrados.has(carrera.id));

    const registrarCarrera = (id: number) =>{
        editarSesion({idCarrera: id, idCursada:id})
        navigate('/mi-cursada')
    }

    return (
        <div className='w-full md:w-3/4 m-auto font-sans min-h-screen'>
            <div className="w-full p-2">
                <NavLink to='/inicio' className='text-md font-semibold my-4 p-2 text-emerald-800'>Volver</NavLink>
                <div className="flex flex-nowrap justify-center gap-4 justify-items-center" >
                    <h2 className="text-2xl text-center font-bold my-8 sm:my-4  text-neutral-600">Nueva cursada</h2>
                </div>
                <div className="flex flex-wrap flex-col justify-center w-full gap-4 mb-8">
                    {
                        carrerasSinRegistrar.length == 0 
                        ? <CarrerasEmpty/>
                        : carrerasSinRegistrar.map((carrera) =>
                            <CarreraCard
                                key={carrera.id}
                                nombre={carrera.nombre}
                                duracion={carrera.duracion}
                                id={carrera.id}
                                universidad={carrera.universidad}
                                onClick={() => registrarCarrera(carrera.id)}
                            />
                        )
                    }
                </div>
            </div>

        </div>
    )
}