import React, { useState } from 'react'
import './FormLogin.scss';
import { CiMail } from "react-icons/ci";
import { FaLock, FaRegEyeSlash } from "react-icons/fa";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig.js';
import PasswordInput from '../PasswordInput/PasswordInput.jsx';

export default function FormLogin() {



    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Endereço de e-mail inválido')
                .required('Campo Obrigatório'),
            password: Yup.string()
                .min(6, 'A senha deve ter no mínimo 6 caracteres')
                .required('Obrigatório'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            // Aqui você faria a lógica de autenticação, como enviar para uma API
        },
    });

    // **ESTADO DE VISIBILIDADE DA SENHA PARA O INPUT E O BOTÃO**
    const [showPassword, setShowPassword] = useState(false);

    // **FUNÇÃO PARA ALTERNAR A VISIBILIDADE**
    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <form className='FormLoginContainer' onSubmit={formik.handleSubmit}>
            <div className='ContainerInputELabel'>
                <div className="ContainerInputLabel">
                    <div className="ContainerInputLabel"></div>

                    <div className="containerLabel">
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="ContainerInputPlusIcon">
                        <div className="IconForInput">
                            <FaLock size={"1.3rem"} />
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder='seuemail@email.com'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}

                        />
                    </div>

                </div>
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
            </div>

            <div className='ContainerInputELabel'>
                <div className="ContainerInputLabel">
                    <div className="containerLabel">
                        <label htmlFor="password">Senha</label>
                    </div>
                    <div className="ContainerInputPlusIcon">
                        <div className="IconForInput">
                            <CiMail size={"1.6rem"} />
                        </div>
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder='*********'
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <PasswordInput
                            isPasswordVisible={showPassword}
                            onToggle={togglePasswordVisibility} />
                    </div>
                </div>
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
            </div>
            <div className="FooterForm">
                <div className='FooterFormEsquerda'>
                    <input id='inputLembrar' type="checkbox" />
                    <label htmlFor="inputLembrar">Lembrar Senha</label>
                </div>
                <div className='FooterFormDireita'>
                    <a>Esqueceu a senha ?</a>
                </div>
            </div>
            <button type="submit">Entrar</button>
        </form>
    )
}
