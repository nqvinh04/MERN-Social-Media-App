import React from "react";
import { PostsData } from '../../Data/PostsData';
import PostDetail from "../PostDetail/PostDetail";
import './Posts.css';

const Posts = () => {
    return (
        <div className="Posts">
            {
                PostsData.map((post, id) => {
                    return <PostDetail data={post} id={id}/>
                })
            }
        </div>
    )
}

export default Posts;