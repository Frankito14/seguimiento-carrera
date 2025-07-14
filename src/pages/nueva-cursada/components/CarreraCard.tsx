

export default function CarreraCard({ id, nombre, universidad, duracion, onClick }: any) {


    return (
        <div key={id} className={`w-full bg-gray-50 rounded p-4 shadow-md text-neutral-700 border-1 border-neutral-300  transition`}>
            <div className="flex flex-wrap justify-between gap-4 justify-items-center ">
                <h3 className="font-bold text-xl">{nombre}</h3>
                <button onClick={onClick} className="hover:cursor-pointer p-0.5 text-sm font-bold text-white uppercase transition-all duration-150 bg-emerald-600 rounded shadow outline-none active:bg-teal-600 hover:bg-teal-700 focus:outline-none ease">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" w-8 h-8 fill-white " viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" /></svg>
                </button>
            </div>
            <p className="text-md pt-2">{universidad}</p>
            <p className="text-md pt-2">Duración: {duracion} cuatrimestres</p>

        </div>
    )
}