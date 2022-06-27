import React from "react";


import {useTesteContextApi} from "../../store/ContexApi";
import {useZustandStore} from "../../store/ZustandStore";
import {useStoreContextZustand} from "../../store/ContextZustandStore";
import {ColorRandom} from '../ColorRandom';
interface FiIho4Props {
    contagem: number;
    list: number[];
    children?: React.ReactNode;
}
export const FiIho4: React.FC<FiIho4Props> = ({contagem:contagemLocal, list:listLocal})=>{

    const {contagem, list} = useTesteContextApi()
    const  contagemZ = useZustandStore(store => store.contagem)
    const  contagemZc = useStoreContextZustand(store => store.contagem)
    const  listZ = useZustandStore(store => store.list)
    const  listZc = useStoreContextZustand(store => store.list)


    return (
        <div className={'BoxContainer'}>
            <strong>Filho 4 <ColorRandom>{Date.now()}</ColorRandom></strong>
            <div className={'containerList'}>
                <div>
                    <strong>Local: {contagemLocal}</strong>
                    {listLocal.map(item=><span key={`it${item}`}>item {item}</span>)}
                </div>
                <div>
                    <strong>Context: {contagem}</strong>
                    {list.map(item=><span key={`it${item}`}>item {item}</span>)}
                </div>
                <div>
                    <strong>Zustand: {contagemZ}</strong>
                    {listZ.map(item=><span key={`it${item}`}>item {item}</span>)}
                </div>
                <div>
                    <strong>Zustand CTX: {contagemZc}</strong>
                    {listZc.map(item=><span key={`it${item}`}>item {item}</span>)}
                </div>
            </div>
        </div>
    )
}
