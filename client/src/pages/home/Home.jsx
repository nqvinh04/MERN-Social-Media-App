import React from "react";
import './Home.css'
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";

const Home = () => {
    return (
        <div className="Home">
            <div/>
            <ProfileSide/>
            <PostSide/>
            <RightSide/>
            <div/>
        </div>
    )
};

export default Home;