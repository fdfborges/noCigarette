import React from 'react'
import './CardsDashboard.scss';
import { CiClock2 } from "react-icons/ci";




export default function CardsDashboard({ IconComponent, iconBackgroundColor, iconStyle = {} }) {
    const defaultIconStyle = {
        width: '80%',
        height: '80%',
        color: 'white'
    };

    const finalStyle = { ...defaultIconStyle, ...iconStyle };

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
                <div className="containerIconCardDashboard" style={{ backgroundColor: iconBackgroundColor }}>
                    {IconComponent && <IconComponent style={finalStyle} />}

                </div>
            </div>
        </>
    )
}
