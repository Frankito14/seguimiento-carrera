export default function Materia({ materia, materiasCorrelativas, sePuedeCursar, materiasSiguientesA, aprobarMateria }: any) {

    const cantidadCorrelativas = materiasCorrelativas.length

    return (
        <div key={materia.id} className={`w-full ${(materia.estaAprobado) ? 'bg-emerald-50' : sePuedeCursar ? 'bg-amber-50' : 'bg-gray-100'} rounded p-4 shadow-md text-neutral-700 border-1 border-neutral-300  transition` }>
            <div className="flex flex-nowrap justify-between gap-4 justify-items-center ">
                <h3 className="font-bold text-xl">{`${materia.id}. ${materia.nombre}`}</h3>
                <input className="h-auto w-8 accent-green-700" type="checkbox" checked={materia.estaAprobado} onChange={aprobarMateria} disabled={!sePuedeCursar} />
            </div>
            <p className="text-md pt-2">Es necesaria para cursar {materiasSiguientesA.length} materias</p>
            <p className="text-md pt-2">Cantidad de correlativas: {cantidadCorrelativas}</p>
            {
                cantidadCorrelativas === 0
                    ? <p className="relative opacity-70 py-2">No tiene materias correlativas</p>
                    : <details className={`relative py-2`}>
                        <summary className="cursor-pointer" >
                            Ver materias correlativas
                        </summary>
                        <ul className="p-2 space-y-2 list-disc">
                            {
                                materiasCorrelativas.map((materiaCorrelativa: any) =>
                                    <li key={`M${materia.id}C${materiaCorrelativa.id}`}className={`text-sm ml-3 mt-1 font-semibold ${(materiaCorrelativa.estaAprobado) ? 'text-emerald-800' : 'text-red-800'}`} >
                                        {`${materiaCorrelativa.nombre} - ${(materiaCorrelativa.estaAprobado) ? 'Aprobada' : 'Pendiente'}`}
                                    </li>
                                )
                            }
                        </ul>
                    </details>
            }
        </div>
    )
}