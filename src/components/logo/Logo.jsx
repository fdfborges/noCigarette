import React from 'react'
import './Logo.scss';
import LogoIMG from './assets/LogoIMG.png';

export default function Logo() {
  return (
    <div className="containerLogoPrincipal">
      <img src={LogoIMG} alt="" />
      <p className='LogonoCigarrete'>noCigarrete</p>
    </div>
  )
}
