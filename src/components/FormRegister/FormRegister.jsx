import React, { useState } from "react"; // <-- MANTENHA O useState AQUI!
import './FormRegister.scss';
import { CiMail } from "react-icons/ci";
import { FaLock, FaUser, FaPhone } from "react-icons/fa";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, db } from '../../services/firebaseConfig.js';
import { doc, setDoc, Timestamp } from 'firebase/firestore';

// IMPORTE SEU COMPONENTE DO BOTÃO AQUI
import PasswordInput from '../PasswordInput/PasswordInput'; // Ajuste o caminho conforme sua estrutura de pastas

export default function FormRegister() {
    const navigate = useNavigate();

    // **ESTADO DE VISIBILIDADE DA SENHA PARA O INPUT E O BOTÃO**
    const [showPassword, setShowPassword] = useState(false);

    // **FUNÇÃO PARA ALTERNAR A VISIBILIDADE**
    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const formik = useFormik({
        initialValues: {
            nome: '',
            surname: '',
            dataNascimento: '',
            email: '',
            cellphone: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            nome: Yup.string().required('Nome é obrigatório'),
            surname: Yup.string().required('Sobrenome é obrigatório'),
            dataNascimento: Yup.string()
                .required('Data de Nascimento é obrigatória')
                .test(
                    'is-over-18',
                    'Você precisa ter pelo menos 18 anos.',
                    function (value) {
                        if (!value) return true;
                        const birthDate = new Date(value);
                        const cutoffDate = new Date();
                        cutoffDate.setFullYear(cutoffDate.getFullYear() - 18);
                        cutoffDate.setDate(cutoffDate.getDate() + 1);
                        return birthDate <= cutoffDate;
                    }
                ),
            email: Yup.string().email('Endereço de e-mail inválido').required('E-mail é obrigatório'),
            cellphone: Yup.string().required('Celular é obrigatório'),
            password: Yup.string()
                .min(6, 'A senha deve ter no mínimo 6 caracteres')
                .required('Senha é obrigatória'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
                .required('Confirmação de senha é obrigatória'),
        }),
        onSubmit: async (values) => {
            try {
                const userCredential = await createUserWithEmailAndPassword(values.email, values.password);

                if (userCredential) {
                    const createdUser = userCredential.user;
                    console.log("✅ Usuário criado na Autenticação:", createdUser.uid);

                    const userData = {
                        nome: values.nome,
                        sobrenome: values.surname,
                        email: values.email,
                        telefone: values.cellphone,
                        dataNascimento: Timestamp.fromDate(new Date(values.dataNascimento)),
                    };

                    await setDoc(doc(db, "users", createdUser.uid), userData);

                    console.log("✅ Dados adicionais salvos no Firestore!");
                    navigate('/sondagem');
                }
            } catch (e) {
                console.error("❌ Erro no processo de registro:", e);
                alert(`Ocorreu um erro: ${e.message}`);
            }
        },
    });

    if (loading) {
        return <p>Registrando, por favor aguarde...</p>;
    }

    const today = new Date();
    const eighteenYearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
    );
    const maxDate = eighteenYearsAgo.toISOString().split('T')[0];

    return (
        <form className='FormLoginContainer' onSubmit={formik.handleSubmit}>
            {/* ... Seus outros campos (nome, sobrenome, email, telefone, dataNascimento) ... */}

            {/* Campo Nome */}
            <div className='ContainerInputELabel'>
                <div className="ContainerInputLabel">
                    <div className="containerLabel"><label htmlFor="nome">Nome:</label></div>
                    <div className="ContainerInputPlusIcon">
                        <div className="IconForInput"><FaUser size={"1.3rem"} /></div>
                        <input id="nome" name="nome" type="text" placeholder='Nome'
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nome} />
                    </div>
                </div>
                {formik.touched.nome && formik.errors.nome ? (<div className="error-message">{formik.errors.nome}</div>) : null}
            </div>

            {/* Campo Sobrenome */}
            <div className='ContainerInputELabel'>
                <div className="ContainerInputLabel">
                    <div className="containerLabel"><label htmlFor="surname">Sobrenome:</label></div>
                    <div className="ContainerInputPlusIcon">
                        <div className="IconForInput"><FaUser size={"1.3rem"} /></div>
                        <input id="surname" name="surname" type="text" placeholder='Sobrenome'
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.surname} />
                    </div>
                </div>
                {formik.touched.surname && formik.errors.surname ? (<div className="error-message">{formik.errors.surname}</div>) : null}
            </div>

            {/* Campo E-mail */}
            <div className='ContainerInputELabel'>
                <div className="ContainerInputLabel">
                    <div className="containerLabel"><label htmlFor="email">E-mail:</label></div>
                    <div className="ContainerInputPlusIcon">
                        <div className="IconForInput"><CiMail size={"1.6rem"} /></div>
                        <input id="email" name="email" type="email" placeholder='seuemail@email.com'
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                    </div>
                </div>
                {formik.touched.email && formik.errors.email ? (<div className="error-message">{formik.errors.email}</div>) : null}
            </div>

            {/* Campo Telefone */}
            <div className='ContainerInputELabel'>
                <div className="ContainerInputLabel">
                    <div className="containerLabel"><label htmlFor="cellphone">Telefone</label></div>
                    <div className="ContainerInputPlusIcon">
                        <div className="IconForInput"><FaPhone size={"1.3rem"} /></div>
                        <input id="cellphone" name="cellphone" type="tel" placeholder='(xx) xxxxx-xxxx'
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cellphone} />
                    </div>
                </div>
                {formik.touched.cellphone && formik.errors.cellphone ? (<div className="error-message">{formik.errors.cellphone}</div>) : null}
            </div>

            {/* Campo Data de Nascimento */}
            <div className='ContainerInputELabel'>
                <div className="ContainerInputLabel">
                    <div className="containerLabel"><label htmlFor="dataNascimento">Data de Nascimento:</label></div>
                    <div className="ContainerInputPlusIcon date-picker-container">
                        <input
                            id="dataNascimento"
                            name="dataNascimento"
                            type="date"
                            max={maxDate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.dataNascimento}
                        />
                    </div>
                </div>
                {formik.touched.dataNascimento && formik.errors.dataNascimento ? (<div className="error-message">{formik.errors.dataNascimento}</div>) : null}
            </div>

            {/* CAMPO SENHA - ONDE A MÁGICA ACONTECE */}
            <div className='ContainerInputELabel'>
                <div className="ContainerInputLabel">
                    <div className="containerLabel"><label htmlFor="password">Senha:</label></div>
                    <div className="ContainerInputPlusIcon"> {/* Certifique-se que este div tem position: relative; no CSS */}
                        <div className="IconForInput"><FaLock size={"1.3rem"} /></div>
                        <input
                            id="password"
                            name="password"
                            // **AQUI O TIPO É CONTROLADO PELO ESTADO DO FormRegister**
                            type={showPassword ? 'text' : 'password'}
                            placeholder='*******'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        <PasswordInput
                            isPasswordVisible={showPassword}
                            onToggle={togglePasswordVisibility}
                        />
                    </div>
                </div>
                {formik.touched.password && formik.errors.password ? (<div className="error-message">{formik.errors.password}</div>) : null}
            </div>

            {/* CAMPO CONFIRMAR SENHA - Repita a mesma lógica se quiser o toggle aqui também */}
            <div className='ContainerInputELabel'>
                <div className="ContainerInputLabel">
                    <div className="containerLabel"><label htmlFor="confirmPassword">Confirmar Senha:</label></div>
                    <div className="ContainerInputPlusIcon">
                        <div className="IconForInput"><FaLock size={"1.3rem"} /></div>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            // Você pode usar o mesmo 'showPassword' ou criar um novo estado para 'confirmPassword'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='*******'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                        />
                        {/* USE O MESMO COMPONENTE DO BOTÃO AQUI */}
                    </div>
                </div>
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<div className="error-message">{formik.errors.confirmPassword}</div>) : null}
            </div>

            {/* Botão de submissão */}
            <button type="submit" disabled={loading}>
                {loading ? 'Registrando...' : 'Registrar'}
            </button>

            {error && <div className="error-message general-error">Erro: {error.message}</div>}
        </form>
    );
}