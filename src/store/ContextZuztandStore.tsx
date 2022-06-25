import create, {State, StoreApi} from 'zustand';
import createContext from 'zustand/context';

import React from 'react';

interface TesteContextProps {
  contagem: number;
  list: number[];
  addCount(): void;
}

interface TesteContextProviderProps {
  initialNumber: number;
  children?: React.ReactNode
}


const {Provider, useStore} = createContext<TesteContextProps & StoreApi<TesteContextProps>>();
const createStore = (initialNumber: number) => ()=> create<TesteContextProps>(set => ({
  contagem: initialNumber,
  list: [initialNumber],
  addCount: () => set(state => {
    const value = state.contagem + 1
    return {
      list: [...state.list, value],
      contagem: value
    }
  })
}))
export const ProviderContexZustend: React.FC<TesteContextProviderProps> = ({initialNumber, children}) => {
  return (
    <Provider createStore={createStore(initialNumber) as any}> {children} </Provider>
  );
};

export const useStoreContextZustand = useStore;

export default ProviderContexZustend;

