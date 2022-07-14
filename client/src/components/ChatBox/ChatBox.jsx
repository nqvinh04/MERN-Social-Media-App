import React, {useEffect, useState} from "react";
import {getUser} from "../../api/UseRequest";
import "./ChatBox.css";


const ChatBox = ({chat, currentUserId}) => {

    const [userData, setUserData] = useState(null);
    const serverPublic = 'http://localhost:5001/images/';

    // fetching data for header
    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentUserId);
        const getUserData = async () => {
            try {
                const {data} = await getUser(userId);
                console.log(123321, data)
                setUserData(data);
            } catch (error) {
                console.log('Chat Box error', error)
            }
        };
        if (chat !== null) {
            getUserData();
        }
    }, [chat, currentUserId]);


    return (
        <>
            <div className="ChatBox-container">
                <>
                    <div className="chat-header">
                        <div className="follower">
                            <div>
                                {/*<div className="online-dot"/>*/}
                                <img src={userData?.profilePicture
                                    ? serverPublic + userData.profilePicture
                                    : serverPublic + "defaultProfile.png"}
                                     alt=""
                                     className='followerImage'
                                     style={{width: '50px', height: '50px'}}
                                />
                                <div className="name" style={{fontSize: "0.8rem"}}>
                                    {/*<span>{userData?.firstname} {userData?.lastname}</span>*/}
                                    {/*<span>Online</span>*/}
                                </div>
                            </div>
                        </div>
                        <hr style={{width: '85%', border: '0.1px solid #ececec'}}/>
                    </div>
                </>
            </div>
        </>
    )
};

export default ChatBox;