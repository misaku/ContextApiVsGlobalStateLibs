import {useState} from 'react';
import {useTesteContextApi} from '../../store/ContexApi';
import {useZustandStore} from '../../store/ZustandStore';
import {useStoreContextZustand} from '../../store/ContextZustandStore';
import type {EstadoExemplo} from '../../store/EstadoExemplo';
import useEstadoExemplo from "../../hooks/useEstadoExemplo";

interface EstadoGlobalControllerProps extends EstadoExemplo {
  addCountLocal():void;
  addCountContext():void;
  addCountZustand():void;
  addCountZustandContext():void;
}

export const useEstadoGlobalController:()=>EstadoGlobalControllerProps = ()=>{
  const [{contagem, list}, addCountLocal] = useEstadoExemplo();

  const { addCount: addCountContext } = useTesteContextApi();
  const addCountZustand = useZustandStore(store => store.addCount);
  const addCountZustandContext = useStoreContextZustand(store => store.addCount);

  return {
    contagem,
    list,
    addCountLocal,
    addCountContext,
    addCountZustand,
    addCountZustandContext
  }
}
