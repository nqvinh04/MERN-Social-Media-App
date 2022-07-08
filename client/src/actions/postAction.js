import * as PostApi from '../api/PostRequest';
import {getAllPosts} from "../api/PostRequest";


export const getAll = () => {
    return async (dispatch) => {
        const posts = await PostApi.getAllPosts();
        console.log(11111, posts)
        dispatch({type: "GET_ALL_POST", data: posts});
    }
};

export const getTimelinePosts = (id) => {
    return async (dispatch) => {
        dispatch({type: "RETREIVING_REQUEST"});
        try{
            const posts = await PostApi.getTimelinePosts(id);
            dispatch({type: "RETREIVING_SUCCESS", data: posts});
        } catch (error) {
            dispatch({type: "RETREIVING_FAILURE"});
            console.log(error)
        }
    }
};