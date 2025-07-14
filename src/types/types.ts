//Carrera

export type Carrera = {
    id: number,
    nombre: string,
    universidad: string,
    duracion: number,
    materias: MateriaCarrera[]
}

//Cursada

export type Cursada = Omit<Carrera, 'materias'> & {
    materias: MateriaCursada[]
}

//Materias
export type MateriaCarrera = {
    id: number,
    nombre: string,
    idCorrelativas: number[],
    cuatrimestre: number
}

export type MateriaCursada = MateriaCarrera & {
    estaAprobado: boolean,
    idCorrelativasAcumuladas: number[],
}

export type MateriaRecomendada = {
    id: number,
    nombre: string,
    cantidadSiguientes: number
}
