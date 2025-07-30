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
import BtnControlStep from './BtnControlStep';

function FormStep() {

  const formComponents = [<Quest0 />, <Quest1 />, <Quest2 />, <Quest3 />, <Quest4 />] //Adicionar mais paginas ao formulário

  const { currentSetp, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <div className="FormStep">
      <div className="containerFormStepBackground">
        <div className="form-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">

              {isFirstStep ? (
                // ✅ CASO 1: Apenas o primeiro passo
                <BtnControlStep
                  classBtn={"btnNext"}
                  BtnText={"VAMOS LÁ!"}
                  onClickFunction={(e) => changeStep(currentSetp + 1)}
                />
              ) : isLastStep ? (
                // ✅ CASO 3: Apenas o último passo
                <>
                  <BtnControlStep
                    classBtn={"btnBack"}
                    BtnText={"VOLTAR"}
                    onClickFunction={(e) => changeStep(currentSetp - 1)}
                  />
                  <BtnControlStep
                    classBtn={"btnNext"}
                    BtnText={"FINALIZAR"}
                    onClickFunction={""}
                  />
                </>
              ) : (
                // ✅ CASO 2: Apenas os passos do meio
                <>
                  <BtnControlStep
                    classBtn={"btnBack"}
                    BtnText={"VOLTAR"}
                    onClickFunction={(e) => changeStep(currentSetp - 1)}
                  />
                  <BtnControlStep
                    classBtn={"btnNext"}
                    BtnText={"PRÓXIMO"}
                    onClickFunction={(e) => changeStep(currentSetp + 1)}
                  />
                </>
              )}

              {/*  ? (
                <button className='btnNext' type='submit'>Iniciar
                  <GrFormNext />
                </button>
              ) : (
                <button type='button'>
                  Enviar
                  <FiSend />
                </button>
              )} */}
            </div>
          </form>
        </div>
      </div >
    </div >
  )
}

export default FormStep