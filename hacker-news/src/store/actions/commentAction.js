import axios from "axios";
import {fetchComment, fetchCommentError, fetchCommentSuccess} from "../reducers/commentReducer";

export const commentAction = (idArray) => {
    return async (dispatch) => {
        try {
            dispatch(fetchComment());

            const response = idArray.map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));

            const res = await axios.all(response);

            dispatch(fetchCommentSuccess(res.map(data => data.data)));
        } catch (error) {
            dispatch(fetchCommentError('Ошибка в загрузке комментариев, попробуйте позже'));
        }
    }
}