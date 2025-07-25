//Components
import { NavLink } from "react-router";

export default function CursadasEmpty() {
    return (
        <div className="text-gray-400 py-24 m-auto">
            <div className="p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 m-auto fill-gray-300" viewBox="0 0 320 512"><path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1a87.98 87.98 0 0 0-40.4 74v1.4c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7v-3.6c0-70.7-57.3-128-128-128h-32C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32m80 320a40 40 0 1 0 0-80a40 40 0 1 0 0 80" /></svg>
                <p className="text-md mt-8">Aún no hay cursadas cargadas...</p>
                <NavLink to='/nueva-cursada' className='text-sm font-semibold block text-center mt-4 text-emerald-700 opacity-70'>Registrar Cursada</NavLink>
            </div>
        </div>
    )
}