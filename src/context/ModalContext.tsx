import {
    createContext,
    useContext,
    useState,
    useCallback,
} from 'react';

import type { FC, ReactNode } from 'react';

import { useEffect } from 'react';

type ModalContextType = {
    mostrarModal: (contenido: ReactNode) => void;
    cerrarModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [contenido, setContenido] = useState<ReactNode>(null);
    const [visible, setVisible] = useState<boolean>(false);

    /*Evitar el scroll cuando el modal esté activo*/ 
    useEffect(() => {
        if (visible) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.style.paddingRight = '';
            document.body.classList.remove('overflow-hidden');
        }

        // Limpieza por si el modal se desmonta inesperadamente
        return () => {
            document.body.style.paddingRight = '';
            document.body.classList.remove('overflow-hidden');
        };
    }, [visible]);

    const mostrarModal = useCallback((contenidoJSX: ReactNode) => {
        setContenido(contenidoJSX);
        setVisible(true);
    }, []);

    const cerrarModal = useCallback(() => {
        setVisible(false);
        setContenido(null);
    }, []);

    return (
        <ModalContext.Provider value={{ mostrarModal, cerrarModal }}>
            {children}

            {visible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full relative">
                        <button
                            onClick={cerrarModal}
                            className="absolute px-2 top-2 right-2 text-gray-500 hover:text-gray-700 hover:cursor-pointer text-2xl"
                            aria-label="Cerrar modal"
                        >
                            &times;
                        </button>
                        {contenido}
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    );
};

export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal debe usarse dentro de ModalProvider');
    }
    return context;
};