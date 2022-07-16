import React, {useState} from 'react';
import './RightSide.css';
import Home from '../../img/home.png';
import Noti from '../../img/noti.png';
import Comment from '../../img/comment.png';
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import {Link} from "react-router-dom";
import NavIcons from '../NavIcons/NavIcons';

const RightSide = () => {

    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div className="RightSide">
            <NavIcons />

            <TrendCard />

            <button className="button r-button" onClick={() => setModalOpened(true)}>
                <ShareModal
                    modalOpened={modalOpened}
                    setModalOpened={setModalOpened}
                />
                Share
            </button>
        </div>
    )
};

export default RightSide;