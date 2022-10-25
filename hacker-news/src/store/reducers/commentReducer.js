const FETCH_COMMENT = 'FETCH_COMMENT';
const FETCH_COMMENT_SUCCESS = 'FETCH_COMMENT_SUCCESS';
const FETCH_COMMENT_ERROR = 'FETCH_COMMENT_ERROR';

const defaultState = {
    loadingCom: false,
    errorCom: false,
    comment: [],
}

export const commentReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_COMMENT:
            return {...state, loadingCom: true}
        case FETCH_COMMENT_SUCCESS:
            return {...state, loadingCom: false, comment: [...action.payload]}
        case FETCH_COMMENT_ERROR:
            return {...state, loadingCom: false, errorCom: action.payload}
        default:
            return state;
    }
}

export const fetchComment = () => {
    return {
        type: FETCH_COMMENT
    }
}


export const fetchCommentSuccess = (payload) => {
    return {
        type: FETCH_COMMENT_SUCCESS,
        payload,
    }
}

export const fetchCommentError = (payload) => {
    return {
        type: FETCH_COMMENT_ERROR,
        payload,
    }
}