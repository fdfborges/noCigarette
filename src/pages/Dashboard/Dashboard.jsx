import React from 'react'
import './Dashboard.scss'
import HeaderDashboardPerfil from '../../components/HeaderDashboardPerfil/HeaderDashboardPerfil.jsx';
import OnboardingScreen from '../../components/OnboardingScreen/OnboardingScreen.jsx';

export default function Dashboard() {
    return (
        <div className="backgroundColorDashboard">
            <div className="containerDashboardPrincipal">
                <HeaderDashboardPerfil />
                <OnboardingScreen />
            </div>
        </div>
    );
}
