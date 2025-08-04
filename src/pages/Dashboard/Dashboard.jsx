import React from 'react'
import './Dashboard.scss'
import HeaderDashboardPerfil from '../../components/HeaderDashboardPerfil/HeaderDashboardPerfil.jsx';
import OnboardingScreen from '../../components/OnboardingScreen/OnboardingScreen.jsx';
import CardsDashboard from '../../components/CardsDashboard/CardsDashboard.jsx';

export default function Dashboard() {
    return (
        <div className="backgroundColorDashboard">
            <div className="containerDashboardPrincipal">
                <HeaderDashboardPerfil />
                <OnboardingScreen />
                <div className="containerCardsDashboardPrincipal">
                    <CardsDashboard />
                    <CardsDashboard />
                    <CardsDashboard />
                </div>
            </div>
        </div>
    );
}
