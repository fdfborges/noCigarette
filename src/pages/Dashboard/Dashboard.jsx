import React from 'react'
import './Dashboard.scss'
import HeaderDashboardPerfil from '../../components/HeaderDashboardPerfil/HeaderDashboardPerfil.jsx';
import OnboardingScreen from '../../components/OnboardingScreen/OnboardingScreen.jsx';
import CardsDashboard from '../../components/CardsDashboard/CardsDashboard.jsx';
import { CiClock2, CiDollar } from "react-icons/ci";
import { PiCigaretteDuotone } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import RecordTimeWithoutSmokin from '../../components/RecordTimeWithoutSmoking/RecordTimeWithoutSmoking.jsx';





export default function Dashboard() {
    return (
        <div className="backgroundColorDashboard">
            <div className="containerDashboardPrincipal">
                <HeaderDashboardPerfil />
                <OnboardingScreen />
                <div className="containerCardsDashboardPrincipal">
                    <CardsDashboard
                        IconComponent={CiClock2}
                        iconBackgroundColor={'#5E5EA6'}
                    />
                    <CardsDashboard
                        IconComponent={CiDollar}
                        iconBackgroundColor={'#7ba65eff'}
                    />
                    <CardsDashboard
                        IconComponent={PiCigaretteDuotone}
                        iconBackgroundColor={'#9C5EA6'}
                        iconStyle={{ width: '70%', height: '70%' }}
                    />
                    <CardsDashboard
                        IconComponent={FaRegHeart}
                        iconBackgroundColor={'#a65e5eff'}
                        iconStyle={{ width: '65%', height: '65%' }}
                    />
                </div>
                <RecordTimeWithoutSmokin />
            </div>
        </div>
    );
}
