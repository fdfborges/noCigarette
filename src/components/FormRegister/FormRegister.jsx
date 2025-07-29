import React from "react"; // O hook 'useState' foi removido pois não é mais necessário
import './FormRegister.scss';
import { CiMail } from "react-icons/ci";
import { FaLock, FaRegEyeSlash, FaUser, FaPhone } from "react-icons/fa";
import { useFormik } from 'formik';
import * as Yup from 'yup';
// O DayPicker foi removido
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, db } from '../../services/firebaseConfig.js';
import { doc, setDoc, Timestamp } from 'firebase/firestore';

export default function FormRegister() {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // O 'useState' para 'selectedDate' foi removido daqui.

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
            // VALIDAÇÃO DE IDADE ATIVADA E AJUSTADA
            dataNascimento: Yup.string()
                .required('Data de Nascimento é obrigatória')
                .test(
                    'is-over-18',
                    'Você precisa ter pelo menos 18 anos.',
                    function (value) {
                        if (!value) return true; // Deixa o 'required' cuidar disso
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
                        // CORRIGIDO: Usa o valor do formulário 'values'
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

    // Lógica para calcular a data máxima permitida (18 anos atrás)
    const today = new Date();
    const eighteenYearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
    );
    // Formata a data para o formato YYYY-MM-DD, que o atributo 'max' do input precisa
    const maxDate = eighteenYearsAgo.toISOString().split('T')[0];

    return (
        <form className='FormLoginContainer' onSubmit={formik.handleSubmit}>
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
                            max={maxDate} // Atributo 'max' para restringir o calendário
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.dataNascimento}
                        />
                    </div>
                </div>
                {formik.touched.dataNascimento && formik.errors.dataNascimento ? (<div className="error-message">{formik.errors.dataNascimento}</div>) : null}
            </div>

            {/* Campo Senha */}
            <div className='ContainerInputELabel'>
                <div className="ContainerInputLabel">
                    <div className="containerLabel"><label htmlFor="password">Senha:</label></div>
                    <div className="ContainerInputPlusIcon">
                        <div className="IconForInput"><FaLock size={"1.3rem"} /></div>
                        <input id="password" name="password" type="password" placeholder='*******'
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                        <div className="IconForInput"><FaRegEyeSlash size={"1.3rem"} /></div>
                    </div>
                </div>
                {formik.touched.password && formik.errors.password ? (<div className="error-message">{formik.errors.password}</div>) : null}
            </div>

            {/* Campo Confirmar Senha */}
            <div className='ContainerInputELabel'>
                <div className="ContainerInputLabel">
                    <div className="containerLabel"><label htmlFor="confirmPassword">Confirmar Senha:</label></div>
                    <div className="ContainerInputPlusIcon">
                        <div className="IconForInput"><FaLock size={"1.3rem"} /></div>
                        <input id="confirmPassword" name="confirmPassword" type="password" placeholder='*******'
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} />
                        <div className="IconForInput"><FaRegEyeSlash size={"1.3rem"} /></div>
                    </div>
                </div>
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<div className="error-message">{formik.errors.confirmPassword}</div>) : null}
            </div>

            {/* Botão de submissão */}
            <button type="submit" disabled={loading}>
                {loading ? 'Registrando...' : 'Registrar'}
            </button>

            {/* Exibe o erro geral do hook, se houver */}
            {error && <div className="error-message general-error">Erro: {error.message}</div>}
        </form>
    );
}