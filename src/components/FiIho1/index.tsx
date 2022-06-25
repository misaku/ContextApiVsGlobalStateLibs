import React from 'react';
import {FiIho2} from '../FiIho2';
import {ColorRandom} from '../ColorRandom';

interface FiIho1Props {
  contagem: number;
  list: number[];
  children?: React.ReactNode;
}
export const FiIho1: React.FC<FiIho1Props> = ({contagem,list}) => {
  return (
    <div className={'BoxContainer'}>
      <strong>Filho 1 <ColorRandom>{Date.now()}</ColorRandom></strong>
      <FiIho2 contagem={contagem} list={list}/>
    </div>
  )
}
