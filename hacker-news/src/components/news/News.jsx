import React from 'react';
import './news.scss'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changePath} from "../../store/reducers/pathReducer";

const News = ({id, by, score, title, date}) => {
    const dispatch = useDispatch();

    if (!id) {
        return (
            <div className='news'>
                <div className="news__title">{title}</div>
            </div>
        )
    }

    return (
        <Link onClick={() => dispatch(changePath(`/news/${id}`))} to={'/news/' + id} className='news'>
            <div className="news__title">{title}</div>
            <div className="news__name">Автор: <span className='news__by'>{by}</span></div>
            <div className="after-name">
                <div className="news__score">Рейтинг: {score}</div>
                <div className="news__data">{date}</div>
            </div>

        </Link>
    );
};

export default News;