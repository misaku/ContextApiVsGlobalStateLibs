import create from 'zustand'

import {addCount, emptyEstadoExemplo, type EstadoExemplo} from "./EstadoExemplo";

type TesteContextProps = EstadoExemplo & Readonly<{ addCount():void }>;

export const useZustandStore = create<TesteContextProps>((set) => ({
    ...emptyEstadoExemplo,
    addCount: () => set(addCount),
}))
