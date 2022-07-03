const  initState = {
    posts: null,
    loading: false,
    error: false,
    uploading: false
}

const postReducer = (state = initState, action) => {
    switch (action.type){
        case "UPLOAD_REQUEST":
            return {
                ...state,
                error: false,
                uploading: true
            }
        case "UPLOAD_SUCCESS":
            return {
                ...state,
                posts: [action.data, ...state.posts],
                uploading: false,
                error: false
            }
        case "UPLOAD_FAILURE":
            return {
                ...state,
                uploading: false,
                error: true
            }
        default:
            return state
    }
}

export default postReducer;