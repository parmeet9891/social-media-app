import * as type from './../constants/ActionTypes';

const initalState = {
    loading: false,
    data: [],
    currentUser: [],
    fetchUserError: '',
    fetchDataError: '',
    postError: '',
    postSuccess: '',
    userDetails: [],
    userDetailsError: '',
}

const user = (state=initalState, action) => {
    switch(action.type) {
        case type.IS_LOADING:
            return {
                ...state,
                loading: true
            }
        case type.FETCHING_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: [action.payload]
            }
        case type.FETCHING_USER_ERROR:
            return {
                ...state,
                loading: false,
                isLoggedin: false,
                currentUser: [],
                fetchUserError: action.error
            }
        case type.FETCHING_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case type.FETCHING_DATA_ERROR:
            return {
                ...state,
                loading: false,
                fetchDataError: action.error
            }
        case type.FETCH_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload],
                postSuccess: 'Feed posted Successfully!'
            }
        case type.FETCH_POST_ERROR:
            return {
                ...state,
                loading: false,
                postError: action.error
            }
        case type.FETCH_USER_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                userDetails: [action.payload],
                userDetailsError: ''
            }
        case type.FETCH_USER_BY_ID_ERROR:
            return {
                ...state,
                loading:false,
                userDetails: [],
                userDetailsError: action.error
            }
        case type.REMOVE_USER_SUCCESS:
            return {
                ...state,
                currentUser: []
            }
        default:
            return state
    }
}

export default user;