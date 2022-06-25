import React from "react";
import {FiIho3} from "../FiIho3";
import {ColorRandom} from '../ColorRandom';

interface FiIho2Props {
    contagem: number;
    list: number[];
    children?: React.ReactNode;
}
export const FiIho2: React.FC<FiIho2Props> = ({contagem, list})=>{
    return (
        <div className={'BoxContainer'}>
            <strong>Filho 2 <ColorRandom>{Date.now()}</ColorRandom></strong>
            <FiIho3 contagem={contagem} list={list}/>
        </div>
    )
}
