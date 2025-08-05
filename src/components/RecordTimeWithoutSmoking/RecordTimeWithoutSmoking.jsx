import React from 'react';
import './RecordTimeWithoutSmoking.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function RecordTimeWithoutSmoking() {

    return (
        <>
            <div className="ContainerRecordTimeWithoutSmoking">
                <div className="RecordTimeWithoutSmokingLeft">
                    <div className="titleandSubtitleRecord">
                        <span>Selo de:</span>
                        <p>Resiliência</p>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Brazil.svg/512px-Coat_of_arms_of_Brazil.svg.png" alt="" />
                </div>
                <div class="linha-vertical"></div>
                <div className="RecordTimeWithoutSmokingRight">
                    <span>Record Sem Fumar</span>
                    <p>5h 30m 5s</p>
                    <span>Parabéns!</span>
                </div>
            </div>
        </>
    );
}