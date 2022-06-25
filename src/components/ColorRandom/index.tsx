import React from 'react';

export const ColorRandom: React.FC<{ children: React.ReactNode }> = ({children}) =>{
  const colorRand = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  return(<span
    style={{
      backgroundColor: colorRand,
      padding: 5,
      borderRadius: 5,
      color: '#fff',
      marginLeft: 20
    }}
  >{children}</span>)
}
