import React, { useState } from 'react';
import './FormLogin.scss';
import { CiMail } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig.js';
import PasswordInput from '../PasswordInput/PasswordInput.jsx';

export default function FormLogin() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Endereço de e-mail inválido')
                .required('E-mail é obrigatório'),
            password: Yup.string()
                .min(6, 'A senha deve ter no mínimo 6 caracteres')
                .required('Senha é obrigatória'),
        }),
        onSubmit: async (values) => {
            try {
                const userCredential = await signInWithEmailAndPassword(values.email, values.password);
                if (userCredential) {
                    // console.log("✅ Login bem-sucedido:", userCredential.user.uid);
                    navigate('/sondagem');
                }
            } catch (e) {
                // console.error("❌ Erro no login:", e);
            }
        },
    });

    if (user) {

    }



    return (
        <form className='FormLoginContainer' onSubmit={formik.handleSubmit}>
            <div className='ContainerInputELabel'>
                <div className="ContainerInputLabel">
                    <div className="containerLabel">
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="ContainerInputPlusIcon">
                        <div className="IconForInput">
                            <CiMail size={"1.6rem"} />
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
                    <div className="error-message">{formik.errors.email}</div>
                ) : null}
            </div>
            <div className='ContainerInputELabel'>
                <div className="ContainerInputLabel">
                    <div className="containerLabel">
                        <label htmlFor="password">Senha</label>
                    </div>
                    <div className="ContainerInputPlusIcon">
                        <div className="IconForInput">
                            <FaLock size={"1.3rem"} />
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
                            onToggle={togglePasswordVisibility}
                        />
                    </div>
                </div>
                {formik.touched.password && formik.errors.password ? (
                    <div className="error-message">{formik.errors.password}</div>
                ) : null}
            </div>

            <div className="FooterForm">
                <div className='FooterFormEsquerda'>
                    <input id='inputLembrar' type="checkbox" />
                    <label htmlFor="inputLembrar">Lembrar Senha</label>
                </div>
                <div className='FooterFormDireita'>
                    <a>Esqueceu a senha?</a>
                </div>
            </div>

            <button type="submit" disabled={loading}>
                {loading ? 'Entrando...' : 'Entrar'}
            </button>

            {error && <div className="error-message general-error">Erro: Email ou senha inválidos.</div>}
        </form>
    );
}