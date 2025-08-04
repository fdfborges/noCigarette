import React from 'react'
import './Dashboard.scss'
import HeaderDashboardPerfil from '../../components/HeaderDashboardPerfil/HeaderDashboardPerfil.jsx';

export default function Dashboard() {
    return (
        <div className="backgroundColorDashboard">
            <div className="containerDashboardPrincipal">
                <HeaderDashboardPerfil />
            </div>
        </div>
    );
}
