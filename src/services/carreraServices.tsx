import carreras from "@carreras/index";

export const obtenerCarrera = (id: number) => {
    const carrera = carreras.find(carrera => carrera.id == id)
    return carrera
}

export const obtenerCarreras = () => {
    return carreras
}