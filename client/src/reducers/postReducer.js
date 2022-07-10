const  initState = {
    posts: null,
    loading: false,
    error: false,
    uploading: false
}

const postReducer = (state = initState, action) => {
    switch (action.type){
        //Get All Post
        case "GET_ALL_POST":
            return {
                ...state,
                posts: action.data,
            }

        //Post Create Upload
        case "UPLOAD_REQUEST":
            return {
                ...state,
                error: false,
                uploading: true
            }
        case "UPLOAD_SUCCESS":
            return {
                ...state,
                posts: [action.data, ...state],
                uploading: false,
                error: false
            }
        case "UPLOAD_FAILURE":
            return {
                ...state,
                uploading: false,
                error: true
            }
        case "RETREIVING_REQUEST":
            return {
                ...state,
                loading: true,
                error: false
            }
        case "RETREIVING_SUCCESS":
            return {
                ...state,
                posts: action.data,
                loading: false,
                error: false
            }
        case "RETREIVING_FAILURE":
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
};

export default postReducer;