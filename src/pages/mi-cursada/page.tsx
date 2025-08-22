//Components
import TablaCarrera from "./components/TablaCarrera"
import CursadaNotSelected from "./components/CursadaNotSelected";

//Hooks
import { useStorage } from "@context/StorageContext";


export default function PageCarrera() {

    const { obtenerSesion } = useStorage()

    const sesionData = obtenerSesion()

    return (
        <>
            <div className='w-full md:w-3/4 m-auto font-sans min-h-screen'>
                <div className="w-full p-2">
                    {
                        sesionData.idCarrera == 0
                        ? <CursadaNotSelected/>
                        : <TablaCarrera/>
                    }
                </div>
            </div>
        </>
    )
}