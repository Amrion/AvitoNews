const defaultState = {
    news: {},
    loading: false,
    error: '',
}

const FETCH_CURRENT_NEWS = 'FETCH_CURRENT_NEWS';
const FETCH_CURRENT_NEWS_SUCCESS = 'FETCH_CURRENT_NEWS_SUCCESS';
const FETCH_CURRENT_NEWS_ERROR = 'FETCH_CURRENT_NEWS_ERROR';

export const newsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_CURRENT_NEWS:
            return {...state, loading: true}
        case FETCH_CURRENT_NEWS_SUCCESS:
            return {...state, loading: false, news: action.payload}
        case FETCH_CURRENT_NEWS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export const fetchCurrentNews = () => {
    return {
        type: FETCH_CURRENT_NEWS,
    }
}

export const fetchCurrentNewsSuccess = (payload) => {
    return {
        type: FETCH_CURRENT_NEWS_SUCCESS,
        payload,
    }
}

export const fetchCurrentNewsError = (payload) => {
    return {
        type: FETCH_CURRENT_NEWS_ERROR,
        payload,
    }
}