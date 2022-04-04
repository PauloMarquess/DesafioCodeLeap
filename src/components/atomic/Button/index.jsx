import React from 'react';
import { ButtonStyle } from './style';

const Button =({title,type,background,color,onClick})=> {
  return (
    <>
      <ButtonStyle onClick={onClick}  background={background} color={color} type={type}>{title}</ButtonStyle>
    </>
  )
}

export default Button;