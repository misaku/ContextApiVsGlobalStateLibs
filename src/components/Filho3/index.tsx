import React from "react";
import {Filho4} from "../Filho4";
import {ColorRandom} from '../ColorRandom';

interface Filho3Props {
    contagem: number;
    list: number[];
    children?: React.ReactNode;
}
export const Filho3: React.FC<Filho3Props> = ({contagem,list})=>{
    return (
        <div  className={'BoxContainer'}>
            <strong>Filho 3 <ColorRandom>{Date.now()}</ColorRandom></strong>
            <Filho4 contagem={contagem} list={list}/>
        </div>
    )
}
