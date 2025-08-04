import React from 'react';
import './OnboardingScreen.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function OnboardingScreen() {
    const percentage = 66;

    return (
        <>
            <div className="containerOnboardingScreen">
                <div className="OnboardingScreenLeft">
                    <p>Boa tarde,<br />Felipe!</p>
                    <button>FUMEI</button>
                </div>
                {/* Adicionamos a classe "progress-container" aqui */}
                <div className="OnboardingScreenRight progress-container"> 
                    <CircularProgressbar
                        value={percentage}
                        styles={buildStyles({
                            pathColor: `#2C2C2D`,
                            trailColor: '#BCAD00',
                        })}
                    />
                    <div className="progress-text">
                        <p className="progress-value">{percentage}</p>
                        <p className="progress-label">Cigarros</p>
                        <stroke className="progress-label">Hoje</stroke>
                    </div>
                </div>
            </div>
        </>
    );
}