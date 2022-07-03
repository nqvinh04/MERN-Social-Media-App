import React from 'react';
import './PostDetail.css';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';
import {useSelector} from "react-redux";

const PostDetail = ({data}) => {
    const {user} = useSelector((state) => state.auth.authData);
    console.log(123456, data)
    console.log(112233, process.env.REACT_APP_PUBLIC_FOLDER)
    return(
        <div className="post">
            <div className="detail">
                <span><b>{data.name}</b></span>
                <span>{data.desc}</span>
            </div>
            <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="img" />
            <div className="postReact">
                <img src={data.liked?Heart:NotLike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>
            <span style={{ color: "rgba(36, 45, 73, 0.65)", fontSize: "12px" }}>{data.likes} likes</span>
        </div>
    )
}

export default PostDetail;