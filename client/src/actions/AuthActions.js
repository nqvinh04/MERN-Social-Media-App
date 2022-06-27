import * as AuthApi from '../api/AuthRequest';


export const logIn = (formData) => {
    return async (dispatch) => {
        dispatch({type: "AUTH_REQUEST"})
        try{
            const {data} = await AuthApi.logIn(formData)
            dispatch({type: "AUTH_SUCCESS", data: data})
        } catch (error){
            console.log(error);
            dispatch({type: "AUTH_FAILURE"})
        }
    }
}

export const signUp = (formData) => {
    return async (dispatch) => {
        dispatch({type: "AUTH_REQUEST"})
        try{
            const {data} = await AuthApi.signUp(formData)
            dispatch({type: "AUTH_SUCCESS", data: data})
        } catch (error){
            console.log(error);
            dispatch({type: "AUTH_FAILURE"})
        }
    }
}