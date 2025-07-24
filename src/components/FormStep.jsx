import React from 'react'

function FormStep() {
  return (
    <div className="FormStep">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com sua compra. Avalie abaixo</p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form action="">
          <div className="actions">
            <button type='button'>Voltar</button>
            <button type='submit'>Avançar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormStep