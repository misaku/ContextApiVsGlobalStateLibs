import create from 'zustand'

interface TesteContextProps {
    contagem: number;
    list: number[];
    addCount():void;
}

export const useZustandStore = create<TesteContextProps>((set, get) => ({
    contagem: 0,
    list: [0],
    addCount: () => set(state => {
        const value = state.contagem + 1
        return {
            list: [...state.list, value],
            contagem: value
        }
    }),

}))
