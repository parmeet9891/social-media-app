import * as type from './../constants/ActionTypes';
import UserService from './../utils/UserService';

let user_service = new UserService();

export function isLoading() {
    return {
        type: type.IS_LOADING,
    }
}

export function fetchUserSuccess(data) {
    return {
        type: type.FETCHING_USER_SUCCESS,
        payload: data
    }
}

export function fetchUserError(err) {
    return {
        type: type.FETCHING_USER_ERROR,
        error: err
    }
}

export function fetchDataSuccess(data) {
    return {
        type: type.FETCHING_DATA_SUCCESS,
        payload: data
    }
}

export function fetchDataError(err) {
    return {
        type: type.FETCHING_DATA_ERROR,
        error: err
    }
}

export function fetchPostSuccess(postObj) {
    return {
        type: type.FETCH_POST_SUCCESS,
        payload: postObj
    }
}

export function fetchPostError(err) {
    return {
        type: type.FETCH_POST_ERROR,
        error: err
    }
}

export function fetchUserByIdSuccess(userObj) {
    return {
        type: type.FETCH_USER_BY_ID_SUCCESS,
        payload: userObj
    }
}

export function fetchUserByIdError(err) {
    return {
        type: type.FETCH_USER_BY_ID_ERROR,
        error: err
    }
}

export function updateUser(userData) {
    return {
        type: type.FETCHING_USER_SUCCESS,
        payload: userData
    }
}

export function removeUserSuccess() {
    return {
        type: type.REMOVE_USER_SUCCESS
    }
}

/*  FUNCTIONS STARTS */

export function fetchData() {
    return (dispatch) => {
        dispatch(isLoading());
        const URL = "./data/data.json";
        return fetch(URL)
        .then((response) => response.json())
        .then(data => {
            dispatch(fetchDataSuccess(data));
        })
        .catch(error => {
            dispatch(fetchDataError(error));
        })
    }
}

export function addPost(postObj) {
    return (dispatch) => {
        dispatch(isLoading);
        if(postObj) {
            dispatch(fetchPostSuccess(postObj));
        }
        else {
            dispatch(fetchPostError('Cannot Add Post'));
        }
    }
}

export function getUserById(id) {
    return (dispatch) => {
        dispatch(isLoading());
        let userCheck = user_service.getUser(id);
        if(userCheck.length > 0)
            dispatch(fetchUserByIdSuccess(userCheck[0]));
        else  
            dispatch(fetchUserByIdError('Cannot Find User'));
    }
}
