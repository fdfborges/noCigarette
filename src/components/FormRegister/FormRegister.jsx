import React, { useState } from "react";
import './FormRegister.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiMail } from "react-icons/ci";
import { FaLock, FaRegEyeSlash } from "react-icons/fa";
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function FormLogin() {
    const formik = useFormik({
        initialValues: {
            nome: '',
            surname: '',
            age: '',
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

    const Example = () => {
        const [startDate, setStartDate] = useState(new Date());
        return <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />;
    };

    return (
        <form className='FormLoginContainer' onSubmit={formik.handleSubmit}>
            <div className='ContainerInputELabel'>
                <div className="ContainerInputLabel">
                    <div className="ContainerInputLabel"></div>

                    <div className="containerLabel">
                        <label htmlFor="nome">Nome:</label>
                    </div>
                    <div className="ContainerInputPlusIcon">
                        <div className="IconForInput">
                            <FaLock size={"1.3rem"} />
                        </div>
                        <input
                            id="nome"
                            name="nome"
                            type="text"
                            placeholder='Nome'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.nome}
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
                        <label htmlFor="surname">Sobrenome:</label>
                    </div>
                    <div className="ContainerInputPlusIcon">
                        <div className="IconForInput">
                            <CiMail size={"1.6rem"} />
                        </div>
                        <input
                            id="surname"
                            name="surname"
                            type="text"
                            placeholder='Surname'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.surname}
                        />
                        <div className="IconForInput">
                            <FaRegEyeSlash size={"1.3rem"} />
                        </div>
                    </div>
                </div>
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
            </div>

            <div className='ContainerInputELabel'>
                <div className="ContainerInputLabel">
                    <div className="containerLabel">
                        <label htmlFor="email">Sobrenome:</label>
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
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
            </div>

            <div className='ContainerInputELabel'>
                <div className="ContainerInputLabel">
                    <div className="containerLabel">
                        <label htmlFor="age">Idade:</label>
                    </div>
                    <div className="ContainerInputPlusIcon">
                        <div className="IconForInput">
                            <CiMail size={"1.6rem"} />
                        </div>
                        <DatePicker
                            calendarClassName="Calendar"
                            selected={"01/01/0001"}
                            onSelect={"handleDateSelect"} //when day is clicked
                            onChange={"handleDateChange"} //only when value has changed
                            locale={"pt-br"}
                        />
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
