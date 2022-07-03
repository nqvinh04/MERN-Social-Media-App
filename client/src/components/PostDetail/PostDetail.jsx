import React, {useState} from 'react';
import './PostDetail.css';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';
import {useSelector} from "react-redux";
import {likePost} from "../../api/PostRequest";

const PostDetail = ({data}) => {
    const {user} = useSelector((state) => state.auth.authData);
    const [liked, setLiked] = useState(data.likes.includes(user._id));
    const [likes, setLikes] = useState(data.likes.length)
    const serverPublic = 'http://localhost:5001/images/'

    const handleLike = () => {
        setLiked((prev)=>!prev)
        likePost(data._id, user._id)
        liked ? setLikes((prev)=>prev-1) : setLikes((prev)=>prev+1)
    }

    return(
        <div className="post">
            <div className="detail">
                <span><b>{data.name}</b></span>
                <span>{data.desc}</span>
            </div>
            <img src={data.image ? serverPublic + data.image : ""} alt="img" />
            <div className="postReact">
                <img src={liked ? Heart : NotLike}
                     alt=""
                     style={{cursor: 'pointer'}}
                     onClick={handleLike}
                />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>
            <span style={{ color: "rgba(36, 45, 73, 0.65)", fontSize: "12px" }}>{likes} likes</span>
        </div>
    )
}

export default PostDetail;