
const  initState = {
    authData: null,
    loading: false,
    error: false
}

const authReducer = (state = initState, action) => {
    switch (action.type){
        case "AUTH_REQUEST":
            return {
                ...state,
                loading: true,
                error: false
            }
        case "AUTH_SUCCESS":
            return {
                ...state,
                authData:
            }
    }
}