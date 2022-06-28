import {useState} from "react";

import {addCount, emptyEstadoExemplo, type EstadoExemplo} from "../store/EstadoExemplo";

const useEstadoExemplo = (): [EstadoExemplo, () => void]=> {
    const [estado, setEstado] = useState<EstadoExemplo>(emptyEstadoExemplo);

    const addCountLocal = () => {
      setEstado(addCount);
    };

    return [estado, addCountLocal];
};

export default useEstadoExemplo;
