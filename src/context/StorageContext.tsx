import {
    createContext,
    useContext,
    useState,
    useCallback,
} from 'react';

import type { FC, ReactNode } from 'react';

import type { Cursada } from '@types';

/*
type Usuario = {
    nombre: string,
}

type CursadaStorage = {
    id: number,
    idCarrera: number,
    cursada: Cursada
}

/*
type Storage = {
    usuario: Usuario,
    cursadas: CursadaStorage[]
}*/

type Sesion = {
    idCarrera: number,
    idCursada: number
}


type StorageContextType = {
    agregarCursada: (nuevaCursada: Cursada) => void;
    eliminarCursada: (idCursada: number) => void;
    editarCursada: (cursadaEditada: Cursada) => void;
    obtenerCursada: (idCursada: number) => Cursada | undefined;
    obtenerCursadas: () => Cursada[];
    obtenerUsuario: () => void;
    obtenerSesion: () => Sesion;
    editarSesion: ({idCarrera, idCursada}:Sesion) => void;
};

const StorageContext = createContext<StorageContextType | undefined>(undefined);

export const StorageProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [sesion, setSesion] = useState({
        idCursada: 2,
        idCarrera: 2,
    })

    const agregarCursada = useCallback((nuevaCursada: Cursada) => {
        const cursadas = localStorage.getItem('cursadas');
        const lista = (cursadas) ? JSON.parse(cursadas) as Cursada[] : [];
        lista.push(nuevaCursada)
        localStorage.setItem('cursadas', JSON.stringify(lista));
        console.log('Cursada agregada')
    }, []);

    const editarCursada = useCallback((cursadaEditada: Cursada) => {
        const cursadas = localStorage.getItem('cursadas');
        const lista = (cursadas) ? JSON.parse(cursadas) as Cursada[] : [];
        const listaActualizada = lista.map((cursada: Cursada) => cursada.id === cursadaEditada.id ? cursadaEditada : cursada);
        localStorage.setItem('cursadas', JSON.stringify(listaActualizada));
        console.log('Cursada editada')

    }, []);

    const eliminarCursada = useCallback((idCursada: number) => {
        const cursadas = localStorage.getItem('cursadas');
        const lista = (cursadas) ? JSON.parse(cursadas) as Cursada[] : [];
        const listaActualizada = lista.filter((cursada: Cursada) => cursada.id != idCursada);
        localStorage.setItem('cursadas', JSON.stringify(listaActualizada));
        console.log('Cursada borrada')
    }, []);

    const obtenerCursada = useCallback((idCursada: number): Cursada | undefined => {
        const cursadas = localStorage.getItem('cursadas');
        const lista = (cursadas) ? JSON.parse(cursadas) as Cursada[] : [];
        const cursada = lista.find((cursada: Cursada) => cursada.id == idCursada);
        console.log('Cursada obtenida')
        return cursada 
    }, []);

    const obtenerCursadas = useCallback(() => {
        const cursadas = localStorage.getItem('cursadas');
        const lista = (cursadas) ? JSON.parse(cursadas) as Cursada[] : [];
        console.log('Cursadas obtenida')
        return lista;
    }, []);

    const obtenerUsuario = useCallback(() => {
        console.log('Usuario obtenido')
        return {nombre: 'pepito'}
    }, []);

    const obtenerSesion = () => sesion


    const editarSesion = ({idCarrera, idCursada}: Sesion) => setSesion({idCarrera, idCursada})


    return (
        <StorageContext.Provider value={{ 
            agregarCursada, 
            eliminarCursada, 
            editarCursada, 
            obtenerCursada, 
            obtenerCursadas, 
            obtenerUsuario,
            obtenerSesion,
            editarSesion
        }}>
            {children}
        </StorageContext.Provider>
    );
};

export const useStorage = (): StorageContextType => {
    const context = useContext(StorageContext);
    if (!context) {
        throw new Error('useStorage debe usarse con StorageProvider');
    }
    return context;
};