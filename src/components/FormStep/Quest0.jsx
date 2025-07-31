import React, { useEffect, useState } from 'react'
import './FormStep.scss';
import { useAuth } from '../../hooks/useUserName';


export default function Quest1() {
  const { userData } = useAuth();


  return (
    <>
      <div className="containerPrincipalQuest0">
        <div className="ContainerText">
          <h1>Seja bem vindo <br />{userData.nome}!</h1>
          <p>Para te ajudarmos com seu vicio, primeiro precisamos te conhecer melhor.</p>
          <p>Separe poucos minutos para responder algumas perguntas. Vamos lá ?</p>
        </div>
      </div>
    </>
  )
}
