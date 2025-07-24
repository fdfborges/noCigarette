import React from 'react'
import './FormStep.scss';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import Quest0 from './Quest0';
import Quest1 from './Quest1';
import Quest2 from './Quest2';
import Quest3 from './Quest3';
import Quest4 from './Quest4';
import useForm from '../../hooks/useForm';

function FormStep() {

  const formComponents = [<Quest0 />, <Quest1 />, <Quest2 />, <Quest3 />, <Quest4 />] //Adicionar mais paginas ao formulário

  const { currentSetp, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <div className="FormStep">
      <div className="containerFormStepBackground">
        <div className="headerFormStep">
          <h2>Pergunta: 1/5</h2>
        </div>
        <div className="form-container">
          <form action="" onSubmit={(e) => changeStep(currentSetp + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (
                <button className='btnBack' type='button' onClick={() => changeStep(currentSetp - 1)}>
                  <GrFormPrevious />
                  Voltar
                </button>
              )}

              {!isLastStep ? (
                <button className='btnNext' type='submit'>Iniciar
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
    </div>
  )
}

export default FormStep