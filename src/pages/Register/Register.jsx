import React from 'react'
import './Register.scss';
import Logo from '../../components/logo/Logo';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormRegister from '../../components/FormRegister/FormRegister';
import { useNavigate } from 'react-router-dom';


export default function Register() {


    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login');
    };


    return (
        <div className="containerLoginPrincipal">
            <div className="containerHeaderLogin">
                <Logo />
                <p className='LoginSubtitle'>A no noCigarrete é a aplicação que te fará parar com seu vicio, ter uma vida mais saudável, mais anos de vida. parar com seu vicio, ter uma vida mais saudável, mais anos de vida.</p>
            </div>
            <div className="containerMeioLogin">
                <GoogleLogin className="btnGoogle"
                    type='standard'
                    size='large'
                    theme='filled_black'
                    text='sign_in_with'
                    shape='square'
                    logo_alignment='left'
                    width={""}
                    onSuccess={(credentialResponse) => {
                        console.log(credentialResponse)
                        console.log(jwtDecode(credentialResponse.credential));
                        navigate("/Sondagem");
                    }}
                    onError={() => console.log("Login Fail")} />
                <FormRegister />
                <span>Já possui uma conta? <a onClick={handleLoginClick}><strong>Clique Aqui</strong></a></span>
            </div>
            <div className="containerFooterLogin">
            </div>
        </div>
    )
}
