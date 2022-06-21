import React from "react";
import './InfoCard.css';
import {UilPen} from "@iconscout/react-unicons";


const InfoCard = () => {
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <UilPen/>
            </div>

            <div className="info">
                <span>
                    <b>Status in</b>
                </span>
                <span>Relationship</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives in</b>
                </span>
                <span>Multan</span>
            </div>

            <div className="info">
                <span>
                    <b>Works at</b>
                </span>
                <span>Duy Tan - Viet Nam</span>
            </div>

            <button className="button lg-button">Logout</button>
        </div>
    )
}

export default InfoCard;