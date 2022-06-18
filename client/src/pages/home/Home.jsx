import React from "react";
import './Home.css'
import ProfileSide from "../../components/ProfileSide/ProfileSide";

const Home = () => {
    return (
        <div className="Home">
            <ProfileSide/>
            <div className="">Posts</div>
            <div className="rightSide">Right Side</div>
        </div>
    )
};

export default Home;