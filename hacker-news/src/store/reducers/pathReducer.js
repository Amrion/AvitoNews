const defaultState = {
    path: '/',
}

const CHANGE_PATH = 'CHANGE_PATH';

export const pathReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_PATH:
            return {...state, path: action.payload}
        default:
            return state;
    }
}

export const changePath = (payload) => {
    return {
        type: CHANGE_PATH,
        payload,
    }
}