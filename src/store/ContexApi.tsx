import React, {createContext, useContext, useState} from "react";

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
    const [contagem,setContagem] = useState<number>(0);
    const [list,setList] = useState<number[]>([0]);
    const addCount = ()=>{
        const item = contagem + 1;
        setList([...list, item])
        setContagem(item)
    }
    return (
        <TesteContext.Provider value={{contagem, addCount, list}}>
            {children}
        </TesteContext.Provider>
    )
}

export const useTesteContextApi:()=>TesteContextProps = ()=>{
    return useContext<TesteContextProps>(TesteContext);
}
