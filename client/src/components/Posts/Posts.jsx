import React, {useEffect,useState} from "react";
// import { PostsData } from '../../Data/PostsData';
import PostDetail from "../PostDetail/PostDetail";
import './Posts.css';
import {useDispatch,useSelector} from "react-redux";
import {getAll, getTimelinePosts} from "../../actions/postAction";

const Posts = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state)=> state.auth.authData);
    const {posts, loading} = useSelector((state)=> state.post);

    useEffect(() => {
        dispatch(getTimelinePosts(user._id))
    }, [])

    return (
        <div className="Posts">
            {loading
                ? "Fetching Posts..."
                : posts.data.map((post, id) => {
                    return <PostDetail data={post} id={id}/>
                })
            }
        </div>
    )
};

export default Posts;