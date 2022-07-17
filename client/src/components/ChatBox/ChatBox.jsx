import React, {useEffect, useState} from "react";
import { addMessage, getMessage } from "../../api/MessageRequest";
import { getUser }  from "../../api/UseRequest";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
import "./ChatBox.css";


const ChatBox = ({chat, currentUserId, setSendMessage, receivedMessage}) => {

    const [userData, setUserData] = useState(null);
    const [messages, setMessage] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const serverPublic = 'http://localhost:5001/images/';

    useEffect(() => {
        if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
            setMessage([...messages, receivedMessage]);
        }
    }, [receivedMessage])

    // fetching data for header
    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentUserId);
        const getUserData = async () => {
            console.log('Vao ca day')
            try {
                const {data} = await getUser(userId);
                setUserData(data);
            } catch (error) {
                console.log('Chat Box error', error)
            }
        };
        if (chat !== null) {
            getUserData();
        }
    }, [chat, currentUserId]);

    
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                console.log('Chat', chat)
                const {data} = await getMessage(chat._id);
                console.log(123321, data)
                setMessage(data);
            } catch (error) {
                console.log('Message error', error)
            }
        };
        if (chat !== null) {
            fetchMessages();
        }
    }, [chat]);

    const handleChange = (newMessage) => {
        setNewMessage(newMessage);
    }

    const handleSend = async(e) => {
        e.preventDefault();
        const message = {
            senderId: currentUserId,
            text: newMessage,
            chatId: chat._id,
        }
        // const receiverId = chat.member.find((id) => id === currentUserId);
        // send message to database
        try {
            const {data} = await addMessage(message);
            setMessage([...messages, data]);
            setNewMessage("")
        } catch (err) {
            console.log(err);
        }

        // send message to socket server
        const receiverId = chat.members.find((id) => id !== currentUserId);
        setSendMessage({...messages, receiverId});

    }

    return (
        <>
            <div className="ChatBox-container">
                { chat ? (
                    <>
                        <div className="chat-header">
                            <div className="follower">
                                <div>
                                    {/*<div className="online-dot"/>*/}
                                    <img 
                                        src={userData?.profilePicture
                                            ? serverPublic + userData.profilePicture
                                            : serverPublic + "defaultProfile.png"}
                                        alt=""
                                        className='followerImage'
                                        style={{width: '50px', height: '50px'}}
                                    />
                                    <div className="name" style={{ fontSize: "0.9rem" }}>
                                        <span>
                                            {userData?.firstname} {userData?.lastname}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr
                                style={{
                                    width: "95%",
                                    border: "0.1px solid #ececec",
                                    marginTop: "20px",
                                }}
                            />
                        </div>
                        <div className="chat-body">
                            {messages.map((message) => (
                                <>
                                    <div className={message.senderId === currentUserId ? "message own" : "message"}>
                                        <span>{message.text}</span>{" "}
                                        <span>{format(message.createdAt)}</span>
                                    </div>
                                </>
                            ))}
                        </div>
                        {/* Chat-sender */}
                        <div className="chat-sender">
                            <div>+</div>
                            <InputEmoji 
                                value={newMessage}
                                onChange={handleChange}
                            />
                            <div className="send-button button" onClick={handleSend}>Send</div>
                        </div>
                    </>
                    ) : (
                        <span className="chatbox-empty-message">
                            Tap on a chat to start conversation...
                        </span>
                    )
                }
            </div>
        </>
    )
};

export default ChatBox;