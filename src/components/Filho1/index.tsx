import React from 'react';
import {Filho2} from '../Filho2';
import {ColorRandom} from '../ColorRandom';

interface Filho1Props {
  contagem: number;
  list: number[];
  children?: React.ReactNode;
}
export const Filho1: React.FC<Filho1Props> = ({contagem,list}) => {
  return (
    <div className={'BoxContainer'}>
      <strong>Filho 1 <ColorRandom>{Date.now()}</ColorRandom></strong>
      <Filho2 contagem={contagem} list={list}/>
    </div>
  )
};
