import React from "react";
import {Filho3} from "../Filho3";
import {ColorRandom} from '../ColorRandom';

interface Filho2Props {
    contagem: number;
    list: number[];
    children?: React.ReactNode;
}
export const Filho2: React.FC<Filho2Props> = ({contagem, list})=>{
    return (
        <div className={'BoxContainer'}>
            <strong>Filho 2 <ColorRandom>{Date.now()}</ColorRandom></strong>
            <Filho3 contagem={contagem} list={list}/>
        </div>
    )
}
