const  initState = {
    posts: null,
    loading: false,
    error: false,
    uploading: false
}

const postReducer = (state = initState, action) => {
    console.log(123456, action)
    console.log(654321, state)
    switch (action.type){
        case "UPLOAD_REQUEST":
            return {
                ...state,
                error: false,
                uploading: true
            }
        case "UPLOAD_SUCCESS":
            console.log(222, ...state.posts)
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