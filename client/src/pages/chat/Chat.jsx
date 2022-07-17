import React, {useEffect, useRef, useState} from "react";
import {userChats} from "../../api/ChatRequests";
import {useSelector} from "react-redux";
import './Chat.css';
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import Conversation from "../../components/Conversation/Conversation";
import NavIcons from "../../components/NavIcons/NavIcons";
import ChatBox from "../../components/ChatBox/ChatBox";
import {io} from "socket.io-client";

const Chat = () => {
    const socket = useRef();
    const {user} = useSelector((state) => state.auth.authData);
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [sendMessage, setSendMessage] = useState(null);
    const [receiveMessage, setReceiveMessage] = useState(null);

    console.log('test socket connection', socket);

    // sending message to socket server
    useEffect(() => {
        if (sendMessage !== null) {
            socket.current.emit('send-message', sendMessage);
        }
    }, [sendMessage]);

    //  receiving message from socket server
    useEffect(() => {
        socket.current.on('receive-message', (data) => {
            console.log(123, data)
            setReceiveMessage(data);
        });
    }, [])

    useEffect(() => {
        socket.current = io('ws://localhost:8800');
        socket.current.emit("new-user-add", user._id);
        socket.current.on('get-users', (users) => {
            setOnlineUsers(users);
            console.log(onlineUsers);
        })
    }, [user]);

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
                <ChatBox 
                    chat={currentChat} 
                    currentUserId={user._id} 
                    setSendMessage={setSendMessage}
                    receiveMessage={receiveMessage}
                />
            </div>
        </div>
    )
};

export default Chat;
