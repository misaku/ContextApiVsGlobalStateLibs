import React from "react";
import {FiIho4} from "../FiIho4";
import {ColorRandom} from '../ColorRandom';

interface FiIho3Props {
    contagem: number;
    list: number[];
    children?: React.ReactNode;
}
export const FiIho3: React.FC<FiIho3Props> = ({contagem,list})=>{
    return (
        <div  className={'BoxContainer'}>
            <strong>Filho 3 <ColorRandom>{Date.now()}</ColorRandom></strong>
            <FiIho4 contagem={contagem} list={list}/>
        </div>
    )
}
