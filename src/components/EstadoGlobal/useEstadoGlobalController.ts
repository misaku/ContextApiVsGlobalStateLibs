import {useState} from 'react';
import {useTesteContextApi} from '../../store/ContexApi';
import {useZustandStore} from '../../store/ZustandStore';
import {useStoreContextZustand} from '../../store/ContextZustandStore';

interface EstadoGlobalControllerProps {
  contagem: number;
  list: number[];
  addCountLocal():void;
  addCountContext():void;
  addCountZustand():void;
  addCountZustandContext():void;
}

export const useEstadoGlobalController:()=>EstadoGlobalControllerProps = ()=>{

  const [contagem,setContagem] = useState<number>(0);
  const [list,setList] = useState<number[]>([0]);

  const addCountLocal = ()=>{
    const item = contagem + 1;
    setList([...list, item])
    setContagem(item)

  }

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
