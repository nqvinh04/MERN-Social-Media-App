
const  initState = {
    authData: null,
    loading: false,
    error: false,
    // updateLoading: false
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
        case "LOG_OUT":
            localStorage.clear();
            return {
                ...state,
                authData: null,
                loading: false,
                error: false,
                updateLoading: false
            }
        default:
            return state;
    }
};

export default authReducer;