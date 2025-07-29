import React from 'react'; // Não precisa de useState aqui
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importa os ícones do olho
import './PasswordInput.scss'; // Certifique-se de ter um arquivo SCSS para ele

const PasswordInput = ({ isPasswordVisible, onToggle, isDisabled, display }) => {


    return (
        <button
            type='button'
            onClick={onToggle}
            className='password-toggle-button'
        >
    { isPasswordVisible?<FaEyeSlash size = { "1.3rem" } /> : <FaEye size={"1.3rem"} />}
        </button >
    );
};

export default PasswordInput;