import React from 'react';
import './PostDetail.css';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';

const PostDetail = ({data}) => {
    return(
        <div className="post">
            <img src={data.img} alt="img" />
            <div className="postReact">
                <img src={data.liked?Heart:NotLike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>

            <span style={{ color: "rgba(36, 45, 73, 0.65)", fontSize: "12px" }}>{data.likes} likes</span>

            <div className="detail">
                <span><b>{data.name}</b></span>
                <span>{data.desc}</span>
            </div>
        </div>
    )
}

export default PostDetail;