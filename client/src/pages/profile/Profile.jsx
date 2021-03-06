import React from "react";
import './Profile.css';
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";


const Profile = () => {
    return (
        <div className="Profile">
            <div/>
            <ProfileLeft/>
            <div className="Profile-center">
                <ProfileCard location="profilePage"/>
                <PostSide/>
            </div>
            <RightSide/>
            <div/>
        </div>
    )
}
export default Profile;