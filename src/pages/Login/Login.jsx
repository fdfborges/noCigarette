import React from 'react'
import './Login.scss';
import Logo from '../../components/logo/Logo';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormLogin from '../../components/FormLogin/FormLogin';

export default function Login() {

    return (
        <div className="containerLoginPrincipal">
            <div className="containerHeaderLogin">
                <Logo />
            </div>
            <div className="containerMeioLogin">
                <FormLogin />
            </div>
            <div className="containerFooterLogin"></div>
        </div>
    )
}
