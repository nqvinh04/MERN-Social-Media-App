import React, {useEffect, useState} from "react";
import {userChats} from "../../api/ChatRequests";
import {useSelector} from "react-redux";
import './Chat.css';
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import Conversation from "../../components/Conversation/Conversation";
import {Link} from "react-router-dom";
import Home from "../../img/home.png";
import {UilSetting} from "@iconscout/react-unicons";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
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
                <div style={{width: '20rem', alignSelf: 'flex-end'}}>
                    <div className="navIcons">
                        <Link to='../home'>
                            <img src={Home} alt="" />
                        </Link>
                        <UilSetting/>
                        <img src={Noti} alt=""/>
                        <img src={Comment} alt=""/>
                    </div>
                    <ChatBox chat={currentChat} currentUserId={user._id}/>
                </div>
            </div>
        </div>
    )
};

export default Chat;
