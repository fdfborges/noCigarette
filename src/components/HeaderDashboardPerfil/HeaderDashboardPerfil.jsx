import React from 'react'
import './HeaderDashboardPerfil.scss';
import { FaBell } from "react-icons/fa";

export default function HeaderDashboardPerfil() {
    return (
        <>
            <div className="containerheaderDashboardPerfil">
                <div className="containerAvatarAndText">
                    <div className="containerAvatar">
                        <img src="https://scontent.fcgh4-2.fna.fbcdn.net/v/t39.30808-6/517452744_1590228038560347_1945107026198124699_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGxCxoUMREtFtvHM88ob1bCVSrDv3EIEBZVKsO_cQgQFqAEApxJimRr3kEEoAps-9NsZfgfkYsLbtsYoU1I0vNm&_nc_ohc=Spn4nd4M288Q7kNvwHrVbki&_nc_oc=AdntvQ7rm8t7pe9NUZpdzr8hAtQQBsl_kNK4A_ViDUYxWZAyP5i5xvnJwXVZYKAegno&_nc_zt=23&_nc_ht=scontent.fcgh4-2.fna&_nc_gid=CAfGSnKAMycWfj8vtGyOGw&oh=00_AfUFT6kpSDQ2Q2eQXTeufVIl8LC-NDbR0P2d8m8KyOXUyw&oe=6896ACBA" alt="" />
                    </div>
                    <div className="containerWelcomeAndName">
                        <span>Bem vindo</span>
                        <strong>Felipe</strong>
                    </div>
                </div>
                <div className="containerBtnNotifications">
                    <FaBell style={{ width: '60%', height: '60%', color: 'white'}}/>
                </div>
            </div>
        </>
    )
}
