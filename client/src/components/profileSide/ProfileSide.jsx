import React from "react";
import LogoSearch from "../logoSearch/LogoSearch";
import ProfileCard from "../profileCard/profileCard";

const ProfileSide = () => {
    return (
        <div className="ProfileSide">
            <LogoSearch/>
            <ProfileCard/>
        </div>
    )
};

export default ProfileSide;