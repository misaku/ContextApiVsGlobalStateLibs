import React from 'react';
import {FiIho1} from '../FiIho1';
import logo from '../../logo.svg';
import {useEstadoGlobalController} from './useEstadoGlobalController';


export const EstadoGlobal: React.FC = () => {

  const {
    contagem,
    list,
    addCountLocal,
    addCountZustandContext,
    addCountZustand,
    addCountContext,
  } = useEstadoGlobalController();


  return (
    <>
      <div className={'appBox'}>
          <div className={'title'}>
            <h1><img src={logo} className="App-logo" alt="logo"/> RP JS</h1>
            <p>Teste de comportamento com context api vs lib dedicada de estado global</p>
          </div>
        <button onClick={addCountLocal}>Local Props</button>
        <button onClick={addCountContext}>Context API</button>
        <button onClick={addCountZustand}>Zustand</button>
        <button onClick={addCountZustandContext}>Zustand Context</button>
      </div>
      <FiIho1 contagem={contagem} list={list}/>
    </>
  )
}
