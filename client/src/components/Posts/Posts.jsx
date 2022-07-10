import React, {useEffect,useState} from "react";
// import { PostsData } from '../../Data/PostsData';
import PostDetail from "../PostDetail/PostDetail";
import './Posts.css';
import {useDispatch,useSelector} from "react-redux";
import {getAll, getTimelinePosts} from "../../actions/postAction";
import {useParams} from "react-router-dom";

const Posts = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state)=> state.auth.authData);
    let {posts, loading} = useSelector((state)=> state.post);
    const params = useParams()

    useEffect(() => {
        dispatch(getTimelinePosts(user._id));
    }, []);

    if(!posts) return "no posts";
    if(params.id) posts=posts.filter((post)=>post.userId === params.id)
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