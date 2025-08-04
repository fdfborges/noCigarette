import React from 'react'
import './CardsDashboard.scss';
import { CiClock2 } from "react-icons/ci";




export default function CardsDashboard(BackgroundColorIcon) {
    return (
        <>
            <div className="containerCardDashboard">
                <div className="containerCardHours">
                    <p>7h</p>
                    <p>30m</p>
                </div>
                <div className="containerFooterCard">
                    <span>Tempo sem fumar</span>
                    <stroke>Parabéns!</stroke>
                </div>
                <div className="containerIconCardDashboard">
                    <CiClock2 style={{ width: '80%', height: '80%', color: 'white'}}/>

                </div>
            </div>
        </>
    )
}
