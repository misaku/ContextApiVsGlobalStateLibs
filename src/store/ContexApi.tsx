import React, {createContext, useContext, useMemo} from "react";

import useEstadoExemplo from "../hooks/useEstadoExemplo";

interface TesteContextProps {
    contagem: number;
    list: number[];
    addCount():void;
}

const TesteContext = createContext<TesteContextProps>({} as TesteContextProps)

interface TesteContextApiProps{
    children?: React.ReactNode
}

export const TesteContextApiProvider: React.FC<TesteContextApiProps> =({children})=>{
    const [{contagem, list}, addCount] = useEstadoExemplo();

    const value = {
        addCount,
        contagem,
        list,
    };

    return (
        <TesteContext.Provider value={value}>
            {children}
        </TesteContext.Provider>
    )
}

export const useTesteContextApi:()=>TesteContextProps = ()=>{
    return useContext<TesteContextProps>(TesteContext);
}
