import create, {StoreApi} from 'zustand';
import createContext from 'zustand/context';

import React from 'react';

import {addCount, type EstadoExemplo} from "./EstadoExemplo";

type TesteContextProps = EstadoExemplo & Readonly<{ addCount(): void }>;

interface TesteContextProviderProps {
  initialNumber: number;
  children?: React.ReactNode
}


const {Provider, useStore} = createContext<StoreApi<TesteContextProps>>();
const createStore = (initialNumber: number) => ()=> create<TesteContextProps>(set => ({
  contagem: initialNumber,
  list: [initialNumber],
  addCount: () => set(addCount),
}))
export const ProviderContexZustand: React.FC<TesteContextProviderProps> = ({initialNumber, children}) => {
  return (
    <Provider createStore={createStore(initialNumber)}> {children} </Provider>
  );
};

export const useStoreContextZustand = useStore;

export default ProviderContexZustand;

