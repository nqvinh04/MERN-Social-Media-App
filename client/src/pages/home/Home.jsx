import React from "react";
import './Home.css'
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";

const Home = () => {
    return (
        <div className="Home">
            <ProfileSide/>
            <PostSide/>
            <div className="rightSide">Right Side</div>
        </div>
    )
};

export default Home;