import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg"
import "./ProfileCard.css"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileCard = ({location}) => {
    const {user} = useSelector((state)=>state.auth.authData);
    // const posts = useSelector((state)=>state.post.posts.data);
    const posts = useSelector((state)=>state.post);
    console.log(54321, posts)
    const serverPublic = 'http://localhost:5001/images/';

    const ProfilePage = false;

    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={
                    user.coverPicture
                    ? serverPublic + user.coverPicture
                    : serverPublic + "defaultCover.jpg"}
                     alt="CoverImage"/>
                <img src={
                    user.profilePicture
                    ? serverPublic + user.profilePicture
                    : serverPublic + "defaultProfile.png"}
                     alt="ProfileImage"/>
            </div>

            <div className="ProfileName">
                 <span>{user.filename} {user.lastname}</span>
                 <span>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
            </div>

            <div className="followStatus">
                <hr/>
                <div>
                    <div className="follow">
                        <span>{user.followings.length}</span>
                        <span>Followings</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>{user.followers.length}</span>
                        <span>Followers</span>
                    </div>
                    {location === 'profilePage' && (
                        <>
                            <div className="vl">
                            </div>
                            <div className="follow">
                                <span>
                                    {posts.filter((post)=>post.userId === user._id).length}
                                </span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr/>
            </div>
            {location === 'profilePage'
                ? ""
                : <span>
                    <Link style={{textDecoration:'none', color: 'inherit'}} to={`/profile/${user._id}`}>
                        My Profile
                    </Link>
                </span>}
        </div>
    )
};

export default ProfileCard;