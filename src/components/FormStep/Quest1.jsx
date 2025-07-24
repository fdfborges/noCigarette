import React from 'react'
import './FormStep.scss';

export default function Quest1() {
  return (
    <div className='containerQuest1'>
        <h2>1. Há quantos anos você fuma?</h2>
        <input className='InputQuest1_number' type="number" placeholder='2'/>
    </div>
  )
}
