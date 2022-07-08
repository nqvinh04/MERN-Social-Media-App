import * as UserApi from "../api/UseRequest";

export const updateUser = (id, formData) => {
    return async (dispatch) => {
        dispatch({type: "UPDATE_REQUEST"});
        try {
            const {data} = await UserApi.updateUser(id, formData);
            dispatch({type: "UPDATE_SUCCESS", data: data});
        } catch (error) {
            dispatch({type: "UPDATE_FAIL"})
            console.log(error);
        }
    }
};