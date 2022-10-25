import axios from "axios";
import {fetchCurrentNews, fetchCurrentNewsError, fetchCurrentNewsSuccess} from "../reducers/newsReducer";

export const newsAction = (id) => {
    return async (dispatch) => {
        try {
            dispatch(fetchCurrentNews());

            const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);

            dispatch(fetchCurrentNewsSuccess(response.data));
        } catch (error) {
            dispatch(fetchCurrentNewsError('Ошибка в получении данных, попробуйте позже'));
        }
    }
}