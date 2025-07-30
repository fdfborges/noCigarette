import React from 'react'
import './FormStep.scss';
import ButtonPlusMinus from '../ButtonPlusMinus/ButtonPlusMinus';

export default function Quest1() {
  return (
    <div className='containerPrincipalQuest1'>
        <h1>Em média, quantos cigarros você fuma por dia?</h1>
        <ButtonPlusMinus />
    </div>
  )
}
