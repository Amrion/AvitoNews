const FETCH_NEWS = 'FETCH_NEWS';
const FETCH_PAGINATION = 'FETCH_PAGINATION';
const FETCH_PAGINATION_SUCCESS = 'FETCH_PAGINATION_SUCCESS';
const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
const FETCH_TOTAL = 'FETCH_TOTAL';
const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR';
const FETCH_PAGINATION_ERROR = 'FETCH_PAGINATION_ERROR';

const defaultState = {
    loading: false,
    loadingPag: false,
    error: false,
    errorPag: false,
    news: [],
    ids: [],
}

export const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_NEWS:
            return {...state, loading: true}
        case FETCH_PAGINATION:
            return {...state, loadingPag: true}
        case FETCH_PAGINATION_SUCCESS:
            return {...state, loadingPag: false, news: [...state.news, ...action.payload]}
        case FETCH_NEWS_SUCCESS:
            return {...state, loading: false, news: [...action.payload]}
        case FETCH_NEWS_ERROR:
            return {...state, loading: false, error: action.payload}
        case FETCH_PAGINATION_ERROR:
            return {...state, loadingPag: false, errorPag: action.payload}
        case FETCH_TOTAL:
            return {...state, ids: [...action.payload]}
        default:
            return state;
    }
}

export const fetchNews = () => {
    return {
        type: FETCH_NEWS,
    }
}

export const fetchPagination = () => {
    return {
        type: FETCH_PAGINATION,
    }
}

export const fetchTotal = (payload) => {
    return {
        type: FETCH_TOTAL,
        payload,
    }
}

export const fetchPaginationSuccess = (payload) => {
    return {
        type: FETCH_PAGINATION_SUCCESS,
        payload,
    }
}

export const fetchNewsSuccess = (payload) => {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload,
    }
}

export const fetchNewsError = (payload) => {
    return {
        type: FETCH_NEWS_ERROR,
        payload,
    }
}

export const fetchPaginationError = (payload) => {
    return {
        type: FETCH_PAGINATION_ERROR,
        payload,
    }
}