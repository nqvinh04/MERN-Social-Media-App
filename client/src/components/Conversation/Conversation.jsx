import React, {useEffect, useState} from "react";
import {getUser} from "../../api/UseRequest";

const Conversation = ({data, currentUserId}) => {
    const [userData, setUserData] = useState(null);
    const serverPublic = 'http://localhost:5001/images/';
    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUserId);
        const getUserData = async () => {
            try {
                const {data} = await getUser(userId);
                setUserData(data);
            } catch (error) {
                console.log('error', error)
            }
        };
        getUserData();
    }, [])

    return (
        <>
            <div className="follower conversation">
                <div>
                    <div className="online-dot"/>
                    <img src={userData?.profilePicture
                        ? serverPublic + userData.profilePicture
                        : serverPublic + "defaultProfile.png"}
                         alt=""
                         className='followerImage'
                         style={{width:'50px', height:'50px'}}
                    />
                    <div className="name" style={{fontSize: "0.8rem"}}>
                        <span>{userData?.firstname} {userData?.lastname}</span>
                        <span>Online</span>
                    </div>
                </div>
            </div>
            <hr style={{width: '85%', border: '0.1px solid #ececec'}}/>
        </>
    )
}

export default Conversation;