// Quest3.js

import React, { useState } from 'react'; // 1. Importar o useState
import './FormStep.scss';
import { FaUser } from "react-icons/fa"; // Você pode trocar por um ícone de dinheiro se preferir, como FaMoneyBillWave

export default function Quest3() {
  // 2. Criar o estado para controlar o valor do input
  const [valor, setValor] = useState('');

  // 3. Criar a função que será chamada toda vez que o input mudar
  const handleValorChange = (event) => {
    // Pega o valor digitado
    const rawValue = event.target.value;

    // Remove tudo que não for número
    const digitsOnly = rawValue.replace(/\D/g, '');

    // Se o campo estiver vazio após a limpeza, define o estado como vazio
    if (digitsOnly === '') {
      setValor('');
      return;
    }

    // Converte para número e divide por 100 para tratar os centavos
    const numberValue = parseFloat(digitsOnly) / 100;

    // Formata para o padrão de moeda brasileiro
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(numberValue);

    // Atualiza o estado com o valor formatado
    setValor(formattedValue);
  };

  return (
    <div className='containerPrincipalQuest3'>
      <h1>Qual o preço médio desse maço de cigarro?</h1>
      {/* 4. Conectar o input ao estado e à função de formatação */}
      <input
        id="preco-cigarro"      // É bom ter um id e name descritivos
        name="preco-cigarro"
        type="text"             // Importante manter como "text"
        placeholder='R$ 0,00'
        value={valor}           // O valor do input agora é o nosso estado
        onChange={handleValorChange} // A função é chamada a cada alteração
      />
    </div>
  )
}