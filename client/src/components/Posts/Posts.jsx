import React from "react";
import { PostsData } from '../../Data/PostsData';
import PostDetail from "../PostDetail/PostDetail";
import './Posts.css';
import {useDispatch,useSelector} from "react-redux";

const Posts = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state)=> state.auth.authData);
    const {posts, loading} = useSelector((state)=> state.post);


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