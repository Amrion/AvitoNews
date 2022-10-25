import {
    fetchNews,
    fetchNewsError,
    fetchNewsSuccess,
    fetchPagination, fetchPaginationError,
    fetchPaginationSuccess,
    fetchTotal
} from "../reducers/mainReducer";
import axios from "axios";

export const mainAction = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchNews());
            const response = await axios.get(`https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&limitToFirst=100&orderBy="$key"`);

            const newsArray = [];

            for (let i = 0; i < 20; i++) {
                newsArray.push(axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json`));
            }

            response.data.splice(0, 20);
            dispatch(fetchTotal(response.data));

            const res = await axios.all(newsArray);

            dispatch(fetchNewsSuccess(res.map(data => data.data)));
        } catch (error) {
            dispatch(fetchNewsError('Ошибка в получении данных, попробуйте позже'));
        }

    }
}

export const pagination = (ids) => {
    return async (dispatch) => {
        try {
            dispatch(fetchPagination());

            const newsArray = [];

            for (let i = 0; i < 20; i++) {
                newsArray.push(axios.get(`https://hacker-news.firebaseio.com/v0/item/${ids[i]}.json`));
            }

            ids.splice(0, 20);
            dispatch(fetchTotal(ids));

            const res = await axios.all(newsArray);

            dispatch(fetchPaginationSuccess(res.map(data => data.data)));
        } catch (e) {
            fetchPaginationError('Ошибка в получении данных, попробуйте позже');
        }
    }
}