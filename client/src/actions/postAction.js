import * as PostApi from '../api/PostRequest';
import {getAllPosts} from "../api/PostRequest";


export const getAll = () => {
    return async (dispatch) => {
        dispatch({type: "GET_ALL_POST_REQUEST"});
        try{
            const posts = await PostApi.getAllPosts();
            dispatch({type: "GET_ALL_POST_SUCCESS", data: posts});
        } catch (error) {
            dispatch({type: "GET_ALL_POST_FAILURE"});
            console.log(error)
        }
    }
}

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
}