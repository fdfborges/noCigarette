import React from 'react';
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
import ColorLinearProgress from '../ProgressBarSteps/ColorLinearProgress';

function FormStep() {
  const formComponents = [<Quest0 />, <Quest1 />, <Quest2 />, <Quest3 />, <Quest4 />];

  const { currentSetp, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  // ✨ NOVO: Calculando o valor do progresso de forma dinâmica
  // Isso é mais limpo e escalável que um monte de if/else.
  // (currentSetp é 1-indexed, então usamos ele diretamente)
  const progressValue = (currentSetp / formComponents.length) * 100 + 20;

  return (
    <div className="FormStep">
      <div className="containerFormStepBackground">
        <div className="form-container">
          <form onSubmit={(e) => e.preventDefault()}>
            
            {/* 👇 ALTERAÇÃO APLICADA AQUI 👇 */}
            {/* A barra de progresso só é renderizada se NÃO for o primeiro passo */}
            {!isFirstStep && (
              <div className="ContainerProgressbar">
                {/* ✨ ALTERADO: Mostra o passo atual dinamicamente */}
                <span>{currentSetp} de {formComponents.length - 1}</span>
                
                {/* ✨ ALTERADO: Passa o valor calculado como prop */}
                <ColorLinearProgress value={progressValue} />
              </div>
            )}

            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {isFirstStep ? (
                // ✅ CASO 1: Apenas o primeiro passo
                <BtnControlStep
                  classBtn={"btnNext"}
                  BtnText={"VAMOS LÁ!"}
                  onClickFunction={() => changeStep(currentSetp + 1)}
                />
              ) : isLastStep ? (
                // ✅ CASO 3: Apenas o último passo
                <>
                  <BtnControlStep
                    classBtn={"btnBack"}
                    BtnText={"VOLTAR"}
                    onClickFunction={() => changeStep(currentSetp - 1)}
                  />
                  <BtnControlStep
                    classBtn={"btnNext"}
                    BtnText={"FINALIZAR"}
                    onClickFunction={() => { /* Sua função de finalizar aqui */ }}
                  />
                </>
              ) : (
                // ✅ CASO 2: Apenas os passos do meio
                <>
                  <BtnControlStep
                    classBtn={"btnBack"}
                    BtnText={"VOLTAR"}
                    onClickFunction={() => changeStep(currentSetp - 1)}
                  />
                  <BtnControlStep
                    classBtn={"btnNext"}
                    BtnText={"PRÓXIMO"}
                    onClickFunction={() => changeStep(currentSetp + 1)}
                  />
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormStep;