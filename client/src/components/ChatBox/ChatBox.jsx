import React, {useEffect, useState} from "react";
import {getUser} from "../../api/UseRequest";


const ChatBox = ({chat, currentUserId}) => {

    const [userData, setUserData] = useState(null);

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
        if(chat!==null){
            getUserData();
        }
    }, [chat, currentUserId]);
    

    return (
        <>
            <div className="ChatBox-container">
                Chat Box
            </div>
        </>
    )
};

export default ChatBox;