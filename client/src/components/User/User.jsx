import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {followUser, unFollowUser} from "../../actions/userAction";

const User = ({person}) => {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth.authData );
    const [following, setFollowing] = useState(person.followings.includes(user._id));
    const serverPublic = 'http://localhost:5001/images/';
    const handleFollow = () => {
        following ?
        dispatch(unFollowUser(person._id, user)) :
        dispatch(followUser(person._id, user))
        setFollowing((prev)=>!prev)
    }

    return (
        <div className="follower">
            <div>
                <img src={person.profilePicture
                    ? serverPublic + person.profilePicture
                    : serverPublic + "defaultProfile.png"} alt=""
                     className='followerImage' />
                <div className="name">
                    <span>{person.firstname} {person.lastname}</span>
                    <span>@{person.username}</span>
                </div>
            </div>
            <button className={following ? "button fc-button UnfollowButton" : "button fc-button"} onClick={handleFollow}>
                {following ? 'Unfollow' : 'Follow'}
            </button>
        </div>
    )
}

export default User;