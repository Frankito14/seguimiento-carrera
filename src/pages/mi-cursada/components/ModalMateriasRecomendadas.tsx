import type { MateriaRecomendada } from '@types'

type PropsModalMateriasRecomendadas = {
    materiasRecomendadas: MateriaRecomendada[]
}

export default function ModalMateriasRecomendadas({ materiasRecomendadas }: PropsModalMateriasRecomendadas) {
    return (
        <div className="text-neutral-700">
            <h1 className="text-xl font-bold mb-1 ">Materias recomendadas</h1>
            <p className="opacity-80 text-sm mt-2 mb-2">Aquellas que podés cursar y tienen mayor cantidad de materias siguientes.</p>
            <ul className="space-y-2 list-disc p-2">
                {
                    materiasRecomendadas.map((materia: MateriaRecomendada) => 
                    <li key={materia.nombre} className="ml-4 text-neutral-700 text-sm"><span className='font-semibold'>{materia.nombre}</span> - <span className="font-semibold text-emerald-800">{materia.cantidadSiguientes}</span> materias siguientes.</li>
                )
                }
            </ul>
        </div>
    )
}