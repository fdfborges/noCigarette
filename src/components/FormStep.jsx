import React from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import Userform from './UserForm';
import ReviewForm from './ReviewForm';
import Thanks from './Thanks';
import useForm from '../hooks/useform';

function FormStep() {

  const formComponents = [<Userform />, <ReviewForm />, <Thanks />]

  const { currentSetp, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <div className="FormStep">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com sua compra. Avalie abaixo</p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form action="" onSubmit={(e) => changeStep(currentSetp + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type='button' onClick={() => changeStep(currentSetp - 1)}>
                <GrFormPrevious />
                Voltar
              </button>
            )}
            {!isLastStep ? (
              <button type='submit'>Avançar
                <GrFormNext />
              </button>
            ) : (
              <button type='button'>
                Enviar
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormStep