
const  initState = {
    authData: null,
    loading: false,
    error: false,
    updateLoading: false
}

const authReducer = (state = initState, action) => {
    switch (action.type){
        case "AUTH_REQUEST":
            return {
                ...state,
                loading: true,
                error: false
            };
        case "AUTH_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({...action?.data}));
            return {
                ...state,
                authData: action.data,
                loading: false,
                error: false
            };
        case "AUTH_FAILURE":
            return {
                ...state,
                loading: false,
                error: true
            };
        case "UPDATE_REQUEST":
            return {
                ...state,
                updateLoading: true,
                error: false
            }
        case "UPDATE_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({...action?.data}));
            return {
                ...state,
                authData: action.data,
                updateLoading: false,
                error: false
            }
        case "UPDATE_FAIL":
            return {
                ...state,
                updateLoading: false,
                error: true
            }
        case "LOG_OUT":
            localStorage.clear();
            return {
                ...state,
                authData: null,
                loading: false,
                error: false,
                updateLoading: false
            }
        case "FOLLOW_USER":
            return {
                ...state,
                authData: {
                    ...state.authData,
                    user: {
                        ...state.authData.user,
                        followings: [...state.authData.user.followings, action.data]
                    }
                }
            }
        case "UNFOLLOW_USER":
            return {
                ...state,
                authData: {
                    ...state.authData,
                    user: {
                        ...state.authData.user,
                        followings: [...state.authData.user.followings.filter((personId)=>personId!==action.data)]
                    }
                }
            }
        default:
            return state;
    }
};

export default authReducer;