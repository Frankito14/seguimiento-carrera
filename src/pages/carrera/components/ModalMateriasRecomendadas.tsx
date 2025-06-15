type MateriaRecomendada = {
    nombre: string,
    cantidadSiguientes: number
}

type PropsModalMateriasRecomendadas = {
    materiasRecomendadas: MateriaRecomendada[]
}

export default function ModalMateriasRecomendadas({ materiasRecomendadas }: PropsModalMateriasRecomendadas) {
    return (
        <div className="text-neutral-700">
            <h1 className="text-xl font-bold mb-1 ">Materias recomendadas</h1>
            <hr className="border-emerald-600 border-2 border-spacing-y-2" />
            <p className="opacity-80 text-sm mt-3 mb-2">Aquellas que podés cursar y tienen mayor cantidad de materias siguientes.</p>
            <ul className="space-y-2 list-disc p-2">
                {
                    materiasRecomendadas.map((materia: MateriaRecomendada) => 
                    <li className="ml-4 text-neutral-700 text-sm">{materia.nombre} - <span className="font-semibold text-emerald-700">{materia.cantidadSiguientes}</span> materias siguientes.</li>
                )
                }
            </ul>
        </div>
    )
}