import React, { useState } from 'react'
import './Login.scss';
import Logo from '../../components/logo/Logo';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import FormLogin from '../../components/FormLogin/FormLogin';


export default function Login() {


    const navigate = useNavigate();
    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className="containerLoginPrincipal">
            <div className="containerHeaderLogin">
                <Logo />
                <p className='LoginSubtitle'>A no noCigarrete é a aplicação que te fará parar com seu vicio, ter uma vida mais saudável, mais anos de vida. parar com seu vicio, ter uma vida mais saudável, mais anos de vida.</p>
            </div>
            <div className="containerMeioLogin">
                <FormLogin />
                <span>Não possui uma conta? <a onClick={handleRegisterClick}><strong>Clique Aqui</strong></a></span>
            </div>
            <div className="containerFooterLogin">
                <div className="FooterLineOr">
                    <hr />
                    <span>or</span>
                    <hr />
                </div>
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
            </div>
        </div>
    )
}
