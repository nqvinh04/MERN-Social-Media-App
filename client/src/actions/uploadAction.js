import * as UploadApi from '../api/UploadRequest';


export const uploadAction = (data) => async(dispatch) => {
    try {
        await UploadApi.uploadImage(data)
    } catch (error) {
        console.log(error);
    }
}

export const uploadPost = (data) => async(dispatch) => {
    dispatch({type: "UPLOAD_REQUEST"})
    try {
        const newPost = await UploadApi.uploadPost(data);
        dispatch({type: "UPLOAD_SUCCESS", data: newPost.data})
    } catch (error) {
        console.log(1111, error)
        dispatch({type: "UPLOAD_FAILURE"})
    }
}