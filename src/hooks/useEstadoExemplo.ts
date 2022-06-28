import {useCallback, useState} from "react";

import {addCount, emptyEstadoExemplo, type EstadoExemplo} from "../store/EstadoExemplo";

const useEstadoExemplo = (): [EstadoExemplo, () => void]=> {
    const [estado, setEstado] = useState<EstadoExemplo>(emptyEstadoExemplo);

    // useCallback é utilizado para manter addCountLocal estável durante a vida do componente,
    // ele não tem dependências que mudam (setEstado é sempre o mesmo), logo ela nunca muda,
    // essencial para React.memo(), useMemo(), useCallback() ou qualquer outra dependência.
    const addCountLocal = useCallback(() => {
      // sempre utilize o prevState se o próximo estado depende do anterior:
      // https://reactjs.org/docs/faq-state.html#why-is-setstate-giving-me-the-wrong-value
      // https://reactjs.org/docs/faq-state.html#how-do-i-update-state-with-values-that-depend-on-the-current-state
      // logo fica igual ao miolo em ProviderContexZustand
      setEstado(addCount);
    }, [setEstado]);

    return [estado, addCountLocal];
};

export default useEstadoExemplo;
