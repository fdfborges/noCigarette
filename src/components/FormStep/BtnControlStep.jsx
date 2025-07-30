import React from 'react'
import './FormStep.scss';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

export default function BtnControlStep({ BtnText, onClickFunction, classBtn }) {
    return (
        <>
            <button className={classBtn} type='submit' onClick={onClickFunction}>{BtnText}</button>
        </>
    )
}
