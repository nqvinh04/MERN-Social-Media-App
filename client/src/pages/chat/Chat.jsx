import React, {useEffect, useState} from "react";
import {userChats} from "../../api/ChatRequests";
import {useSelector} from "react-redux";
import './Chat.css';
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import Conversation from "../../components/Conversation/Conversation";
import NavIcons from "../../components/NavIcons/NavIcons";
import ChatBox from "../../components/ChatBox/ChatBox";

const Chat = () => {
    const {user} = useSelector((state) => state.auth.authData);
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);

    useEffect(() => {
        const getChats = async () => {
            try {
                const {data} = await userChats(user._id);
                setChats(data)
            } catch (error) {
                console.log(error);
            }
        }
        getChats();
    }, [user._id]);

    return (
        <div className="Chat">
            {/*Left Side*/}
            <div className="Left-side-chat">
                <LogoSearch/>
                <div className="Chat-container">
                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {
                            chats.map((chat) => (
                                <div onClick={()=>setCurrentChat(chat)}>
                                    <Conversation data={chat} currentUserId={user._id} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/*Right Side*/}
            <div className="Right-side-chat">
                <div style={{width:'20rem', alignSelf:'flex-end'}}>
                    <NavIcons />
                </div>
                <ChatBox chat={currentChat} currentUserId={user._id}/>
            </div>
        </div>
    )
};

export default Chat;
