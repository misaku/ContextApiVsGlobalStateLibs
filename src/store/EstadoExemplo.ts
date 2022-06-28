export type EstadoExemplo = Readonly<{
    contagem: number;
    list: number[];
}>;

export const emptyEstadoExemplo: EstadoExemplo = { contagem: 0, list: [0] };

export const addCount = (prevState: EstadoExemplo): EstadoExemplo => {
    const value = prevState.contagem + 1
    return {
        contagem: value,
        list: [...prevState.list, value],
    };
};
